//預設登入帳號身份
const identities = [
  {
    //法國地頭蛇
    userId: 1,
    uid: 'vDJJ4XDu8BQnTSbpRueedfOKVWg2',
  },
  {
    //美食橘貓咩嚕
    userId: 16,
    uid: 'QTMKlCfcFndoHtjRDThP0hcAiCl1',
  },
]

export const getUserId = (uid) => {
  const LoginUser = identities.filter(user => user.uid === uid);
  return LoginUser[0].userId
}

export const checkFoodApplications = (applications, postId) => {
  const findApplicationsIndex = applications.findIndex(
    (application) => application.postId == postId
  );
  return findApplicationsIndex !== -1
}
