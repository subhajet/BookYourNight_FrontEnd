import { useAuth } from "../../context";
import { AuthLogin, AuthSignup } from "../index";
import "./AuthModal.css";

export const AuthModal = () => {
  const { authDispatch, SelectedTab } = useAuth();

  const handleLoginClick = () => {
    authDispatch({
      type: "SET_TO_LOGIN",
    });
  };
  const handleSingupClick = () => {
    authDispatch({
      type: "SET_TO_SIGNUP",
    });
  };
  const handleModalClick = () => {
    authDispatch({
      type: "SHOW_AUTH_MODAL",
    });
  };
  return (
    <div className="auth-modal-container fixed">
      <div className="auth-modal absolute shoadow right-0">
        <div className="d-flex align-center shadow">
          <button
          className={`button btn-auth grow-shrink-basis cursor-pointer ${SelectedTab === "login" ? 'btn-auth-selected' : ""}`}
            onClick={handleLoginClick}
          >
            Login
          </button>
          <button
          className={`button btn-auth grow-shrink-basis cursor-pointer ${SelectedTab === "signup" ? 'btn-auth-selected' : ""}`}
            onClick={handleSingupClick}
          >
            Signup
          </button>
          <button
            className="button btn-auth btn-close d-flex align-center justify-center cursor-pointer"
            onClick={handleModalClick}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div>
          {SelectedTab === "login" ? (
            <AuthLogin />
          ) : SelectedTab === "signup" ? (
            <AuthSignup />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
