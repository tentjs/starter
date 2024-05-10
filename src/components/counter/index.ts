import { tags, type Component } from "@tentjs/tent";
import * as styles from "./counter.module.css";
import { classes } from "../../utils";

const { button } = tags;

type State = {
  count: number;
};

export const Counter: Component<State> = {
  state: { count: 0 },
  view: ({ state }) =>
    button(`Clicked ${state.count} times`, {
      onclick: () => state.count++,
      class: classes(
        styles.button,
        state.count > 2 && styles.highCount,
        state.count > 5 && styles.superHighCount,
      ),
    }),
};
