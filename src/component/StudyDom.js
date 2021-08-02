import ReactDom from 'react-dom';

const StudyDom = ({children}) => {
  const el = document.getElementById('studyDom');
  return ReactDom.createPortal(children, el);
};

export default StudyDom;
