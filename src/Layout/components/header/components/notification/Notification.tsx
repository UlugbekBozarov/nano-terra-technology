import { Button } from "antd";

import { Notification as NotificationIcon } from "components/Icons";

import { NotificationContent } from "./Notification.style";

const Notification = () => {
  return (
    <NotificationContent>
      <Button type="text" icon={<NotificationIcon />} />
    </NotificationContent>
  );
};

export default Notification;
