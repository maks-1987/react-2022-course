const apiRequest = async (url: string, optionsObj: object, errMsg?: string) => {
  try {
    const request = await fetch(url, optionsObj!);
    if (!request.ok) throw Error('Please reboot the app!');
  } catch (err: any) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
};

export default apiRequest;

export interface apiRequest {
  url: string;
  optionsObj: object;
  errMsg?: string;
}
