type Horizontal = "left" | "centre" | "right";
type Vertical = "top" | "centre" | "bottom";
type ToastProps = {
  position: Exclude<`${Horizontal}-${Vertical}`, "centre-centre"> | "centre";
};

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast notifiaction position: {position}</div>;
};
