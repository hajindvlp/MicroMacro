const Block = (props) => {
  return (
    <div className="block">
      { props.children }
    </div>
  )
}

const Button = (props) => {
  return (
    <div className="button" onClick={props.onClick}>
      { props.children }
    </div>
  )
}

const Row = (props) => {
  return (
    <div className="row">
      { props.children }
    </div>
  )
}

const Col = (props) => {
  return (
    <div className="column">
      { props.children }
    </div>
  )
}

const Modal = (props) => {
  if(props.open) {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="close" onClick={props.toggle}> &times; </div>
          { props.children }
        </div>
      </div>
    );
  } else {
    return (
      <div hidden={true}></div>
    )
  }
}

export {
  Block, 
  Button, 
  Row, 
  Col, 
  Modal,
};