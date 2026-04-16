const Notification = ({ notificationDetails }) => {
  console.log("notiftest",notificationDetails)
  let message = notificationDetails.message
  let type =notificationDetails.type
  if (message === null) {
    return null;
  }
  return (<div className={type}>
    {message}
  </div>
  );
};
export default Notification

