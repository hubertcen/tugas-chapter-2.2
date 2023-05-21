import "./Header.module.css";
import SearchIcon from "../../assets/search-icon.svg";
import MessageIcon from "../../assets/message-icon.svg";
import WarningIcon from "../../assets/warning-icon.svg";

function Header() {
  const icons = [
    { icon: SearchIcon },
    { icon: MessageIcon },
    { icon: WarningIcon },
  ];
  return (
    <div class="container">
      {icons.map((icon, idx) => {
        if (icon.icon == MessageIcon) {
          return (
            <div key={idx}>
              <img src={icon.icon} alt={icon.icon} />
            </div>
          );
        }
        return (
          <div key={idx}>
            <img src={icon.icon} alt={icon.icon} />
          </div>
        );
      })}
    </div>
  );
}

export default Header;
