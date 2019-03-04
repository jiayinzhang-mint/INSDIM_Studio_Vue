import basicSerivce from "../BasicService";
import store from "../../store/store";
import message from "../../utils/Message";

class workService {
  static async createNews(newsDetail) {
    const rsp = await basicSerivce.postRequest("/inslens/post", newsDetail);
    if (rsp.msg == "success") {
      message.snackbar(rsp.msg);
    }
    return rsp;
  }

  static async getNewsList() {
    const rsp = await basicSerivce.getRequest("/inslens/post");
    store.dispatch("news/getNewsList", rsp.data.newsList);
    return rsp;
  }

  static async getNewsDetail(newsId) {
    const rsp = await basicSerivce.getRequest("/inslens/post", {
      newsId: newsId
    });
    return rsp;
  }

  static async updateNews(newsDetail) {
    const rsp = await basicSerivce.putRequest("/inslens/post", newsDetail);
    if (rsp.msg == "success") {
      message.snackbar(rsp.msg);
    }
    return rsp;
  }

  static async uploadPic(file) {
    const rsp = await basicSerivce.postRequest("/inslens/post/pic", file);
    if (rsp.msg == "success") {
      message.snackbar(rsp.msg);
    }
    return rsp;
  }

  static async deletePic(picInfo, newsId, type) {
    const rsp = await basicSerivce.deleteRequest("/inslens/post/pic", {
      picInfo: picInfo,
      newsId: newsId,
      type: type
    });
    return rsp;
  }

  static async deleteNews(newsId) {
    const rsp = await basicSerivce.deleteRequest("/inslens/post", {
      newsId: newsId
    });
    if (rsp.msg == "success") {
      message.snackbar(rsp.msg);
    }
    return rsp;
  }
}
export default workService;
