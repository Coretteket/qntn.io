import type { JSX } from "solid-js/jsx-runtime";
import { createStore } from "solid-js/store";

import cx from "clsx";

import save from "@/icons/save.svg";
import remove from "@/icons/remove.svg";
import add from "@/icons/add.svg";
import check from "@/icons/check.svg";

function Input(
  props: JSX.InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    placeholder: string;
  },
) {
  return (
    <input
      type="text"
      required
      {...props}
      class={
        "w-full rounded border border-neutral-700 bg-neutral-950 px-3 py-2 focus:border-pink-400 focus:outline-0" +
        (props.class ? " " + props.class : "")
      }
    />
  );
}

export function AddSlug() {
  const [state, setState] = createStore({ slug: "", url: "" });

  return (
    <form method="post" action="/slugs/add" class="flex gap-3">
      <Input
        name="slug"
        placeholder="Slug"
        value={state.slug}
        onInput={(e) => setState({ slug: e.currentTarget.value })}
        class="flex-shrink-[4]"
      />
      <Input
        name="url"
        placeholder="URL"
        value={state.url}
        onInput={(e) => setState({ url: e.currentTarget.value })}
        class="flex-shrink-[3]"
      />
      <button
        type="submit"
        class="rounded border border-sky-600 bg-sky-900 px-1.5"
      >
        <img src={add.src} class="opacity-75 invert" />
      </button>
    </form>
  );
}

export function UpdateSlug(props: { slug: string; url: unknown }) {
  const [state, setState] = createStore({
    slug: props.slug,
    url: props.url,
    unconfirmed: false,
  });

  const removeable = () => state.slug === props.slug && state.url === props.url;

  const button = () =>
    !removeable() ? "save" : state.unconfirmed ? "check" : "remove";

  const onClick = (e: Event) => {
    if (button() === "remove") {
      e.preventDefault();
      setState({ unconfirmed: true });
    }
  };

  return (
    <form
      method="post"
      action={button() === "save" ? "/slugs/edit" : "/slugs/remove"}
      class="flex gap-3"
    >
      <Input
        name="slug"
        placeholder="Slug"
        value={state.slug}
        onInput={(e) =>
          setState({ slug: e.currentTarget.value, unconfirmed: false })
        }
        class="flex-shrink-[4]"
      />
      <Input
        name="url"
        placeholder="URL"
        value={state.url as string}
        onInput={(e) =>
          setState({ url: e.currentTarget.value, unconfirmed: false })
        }
        class="flex-shrink-[3]"
      />
      <button
        onClick={onClick}
        class={cx(
          "rounded border px-1.5 font-semibold",
          button() == "remove" && "border-red-600 bg-red-900",
          button() === "check" && "border-red-400 bg-red-700",
          button() === "save" && "border-pink-500 bg-pink-900",
        )}
      >
        <img
          src={
            button() === "remove"
              ? remove.src
              : button() === "check"
                ? check.src
                : save.src
          }
          class="opacity-75 invert"
        />
      </button>
    </form>
  );
}
