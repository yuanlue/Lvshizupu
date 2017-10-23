function postData(para,callback,parama,header){
  var url="https://wx2.kuaiyunma.com"
    $.ajax({
              type: "post",
              data:parama,
              url: url+para,
              dataType: "json",
              headers: header,

              success: function(data){
                        callback(data)
            },

            error:function(err){
              alert(JSON.stringify(err))
              api.toast({
                      msg: '服务器异常',
                      duration:2000,
                      location: 'bottom'
                  });
            }
          });


}
function getData(para,callback,parama,header){
  var url="https://wx2.kuaiyunma.com"
    $.ajax({
              type: "GET",
              data:parama,
              url: url+para,
              async:false,
               cache:false,
              dataType: "json",
              headers: header,
              data:parama,
              success: function(data){
                        callback(data)
            },
            error:function(err){
              api.toast({
                      msg: '服务器异常',
                      duration:2000,
                      location: 'bottom'
                  });
            }
          });


}
function deleteData(para,callback,parama,header){
  var url="https://wx2.kuaiyunma.com"
    $.ajax({
              type: "DELETE",
              data:parama,
              url: url+para,
              async:false,
               cache:false,
              dataType: "json",
              headers: header,
              success: function(data){
                        callback(data)
            },
            error:function(err){
              api.toast({
                      msg: '服务器异常',
                      duration:2000,
                      location: 'bottom'
                  });
            }
          });


}
function changeAvata(path,headers,callback,callbackerr){
  api.ajax({
      url: 'https://wx2.kuaiyunma.com/users/avatar',
      method: 'POST',
      headers:headers,
      data: {
          files: {
              path: path
          }
      }
  },function(data, err){
      if (data) {
      callback(data)
      } else {
      callbackerr(err)
      }
  });
}
function upload(path,file,callback,header,callbackerr){
  api.ajax({
      url: 'https://wx2.kuaiyunma.com/upyun/upload',
      method: 'POST',
      headers:header,
      data: {
          values: {
              path: path
          },
          files: {
              file: file
          }
      }
  },function(data, err){
      if (data) {
      callback(data)
      } else {
      callbackerr(err)
      }
  });
}
