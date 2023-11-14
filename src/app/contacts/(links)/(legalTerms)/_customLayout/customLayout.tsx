import cl from "./customLayout.module.scss";

export const CustomLayout = ({ page }: { page: string }) => {
  return (
    <div className={cl.customLayout}>
      <div className={cl.links}></div>
    </div>
  );
};
