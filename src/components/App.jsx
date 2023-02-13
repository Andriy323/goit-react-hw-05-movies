import Menu from './MenuPage/Menu';
import css from './app.module.css'
import UseRoutes from './UseRoutes';
export const App = () => {
  return (
    <div>
      <Menu />
      <div className={css.container}>
      <UseRoutes />
      </div>
    </div>
  );
};
