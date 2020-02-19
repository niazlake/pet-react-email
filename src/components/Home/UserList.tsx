import * as React from "react";
// ignore
interface IProps {
  users?: any;
}

export class UserList extends React.Component<IProps, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { users }: any = this.props;

    return (
      <div>
        <h2>Список кому можно отправлять сообщения</h2>

        {Object.keys(users).map(key => (
          <div key={key}>{users[key].username}</div>
        ))}
      </div>
    );
  }
}
