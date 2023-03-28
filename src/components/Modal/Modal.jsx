import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

// * Рефакторінг в Хуки
export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', presEsc);

    return () => {
      window.removeEventListener('keydown', presEsc);
    };
  }, []); // ? чому воно хоче додати залежність від presEsc?

  // componentDidMount() {
  //   // Для закриття модалки по ESC:
  //   window.addEventListener('keydown', this.presEsc);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.presEsc);
  // }

  // Функція закриття модалки по ESC
  const presEsc = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  // Закриття модалки по кліку на бекдропі
  const backdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={backdropClick}>
      <div className="Modal">{children}</div>
      {/* <img src="http" alt="велике зображення" />  - переніс у this.props.children */}
    </div>,
    modalRoot
  );
};

// export class Modal extends Component {
//   componentDidMount() {
//     // Для закриття модалки по ESC:
//     window.addEventListener('keydown', this.presEsc);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.presEsc);
//   }

//   // Функція закриття модалки по ESC
//   presEsc = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   // Закриття модалки по кліку на бекдропі
//   backdropClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className="Overlay" onClick={this.backdropClick}>
//         <div className="Modal">{this.props.children}</div>
//         {/* <img src="http" alt="велике зображення" />  - переніс у this.props.children */}
//       </div>,
//       modalRoot
//     );
//   }
// }

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
