let component = ReasonReact.statelessComponent("Greetings");

let make = (~message, _children) => {
  ...component,
  render: _self => {
    <p> {ReasonReact.string("Greetings from ReasonReact " ++ message)} </p>;
  },
};

[@bs.deriving abstract]
type jsProps = {
  message: string,
  children: array(ReasonReact.reactElement),
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~message=jsProps->messageGet, jsProps->childrenGet)
  );
