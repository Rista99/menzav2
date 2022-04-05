function getTomorrow() {
  const now = new Date();
  now.setDate(now.getDate() + 1);
  now.setHours(23, 59, 59, 999);
  return now;
}

export default getTomorrow;
