import { HTMLAttributes } from "react";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import Loading from "@/components/loading";

interface ListProps<Item> extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  render: (item: Item) => React.ReactNode;
  list?: Item[];
  loading?: boolean;
  listClassname?: ClassValue;
  itemClassname?: ClassValue;
}

const List = <Item,>({ list, render, loading, className, listClassname, itemClassname }: ListProps<Item>) => {
  return (
    <div className={cn("flex h-full w-full items-center justify-center", className)}>
      {loading && !list && <Loading size="sm" />}
      {!loading && list && (
        <ul className={cn(listClassname)}>
          {list.map((value, index) => (
            <li key={index} className={cn(itemClassname)}>
              {render(value)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
