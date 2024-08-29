
import { Avatar as AvatarProps } from "../types/Avatar/Avatar";
import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, src }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatar : styles.comment}
      src={src}
      alt=""
    />
  );
}
