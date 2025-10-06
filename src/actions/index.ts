import { defineAction, ActionError } from "astro:actions";
import { z } from "astro:schema";
import { kv } from "@/lib/kv";
import { comparePassword, getToken, verifyToken } from "@/lib/server";

export const server = {
  login: defineAction({
    accept: "form",
    input: z.object({ password: z.string() }),
    handler: async ({ password }, context) => {
      const success = await comparePassword(password);

      if (!success) {
        throw new ActionError({
          code: "UNAUTHORIZED",
          message: "Incorrect password.",
        });
      }

      context.cookies.set("token", getToken(), {
        path: "/",
        maxAge: 2592000,
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      });

      return { success: true };
    },
  }),

  logout: defineAction({
    accept: "form",
    handler: async (_, context) => {
      context.cookies.delete("token", { path: "/" });
      return { success: true };
    },
  }),

  addLink: defineAction({
    accept: "form",
    input: z.object({
      link: z.string().min(1, "Link cannot be empty"),
      url: z.string().url("Invalid URL format"),
    }),
    handler: async ({ link, url }, context) => {
      const authed = verifyToken(context.cookies.get("token")?.value);

      if (!authed) {
        throw new ActionError({
          code: "UNAUTHORIZED",
          message: "You need to be authenticated to add links.",
        });
      }

      try {
        await kv.hSet("url_map", { [link]: url });
      } catch (e) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: `Something went wrong with adding '${link}'.`,
        });
      }

      return { success: true, link };
    },
  }),

  editLink: defineAction({
    accept: "form",
    input: z.object({
      link: z.string().min(1, "Link cannot be empty"),
      url: z.string().url("Invalid URL format"),
    }),
    handler: async ({ link, url }, context) => {
      const authed = verifyToken(context.cookies.get("token")?.value);

      if (!authed) {
        throw new ActionError({
          code: "UNAUTHORIZED",
          message: "You need to be authenticated to edit links.",
        });
      }

      try {
        await kv.hSet("url_map", { [link]: url });
      } catch (e) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: `Something went wrong with updating '${link}'.`,
        });
      }

      return { success: true };
    },
  }),

  removeLink: defineAction({
    accept: "form",
    input: z.object({
      link: z.string().min(1, "Link cannot be empty"),
    }),
    handler: async ({ link }, context) => {
      const authed = verifyToken(context.cookies.get("token")?.value);

      if (!authed) {
        throw new ActionError({
          code: "UNAUTHORIZED",
          message: "You need to be authenticated to remove links.",
        });
      }

      try {
        await kv.hDel("url_map", link);
      } catch (e) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: `Something went wrong with removing '${link}'.`,
        });
      }

      return { success: true };
    },
  }),
};
