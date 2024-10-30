interface ListProps<T> {
  items: T[];
  eventHandler: (value: T) => void;
}

export const List = <
  T extends { id: number; [key: string]: any } | number | string
>({
  items,
  eventHandler,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return typeof item === "object" ? (
          <div key={item.id} onClick={() => eventHandler(item)}>
            {" "}
            {item.first}{" "}
          </div>
        ) : (
          <div key={index} onClick={() => eventHandler(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
