import styles from "./Button.module.css";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export function Button({children, loading = false, disabled, ...props}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={styles.button}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? "Cargando..." : children}
    </button>
  );
}