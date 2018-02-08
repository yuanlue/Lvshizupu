// window.baseurl="https://api.yiwenyiwen.com/"
window.baseurl="https://wx2.kuaiyunma.com"
window.shopimgUrl="https://shop.kuaiyunma.com/"
// window.shopimgUrl="https://shop.yiwenyiwen.com/"
function fetch(obj){
  return new Promise((resolve,reject)=>{
      $.ajax({
          type:obj.method,
          data:obj.params,
          url:baseurl+obj.url,
          dataType:"json",
          async:true,
          header:{
            'Authorization':$api.getStorage('token')
          },
          success:function(data){
            resolve(data)
          },
          error:function(err){
            reject(err)
          }
      })
  })
}
function postData(para,callback,parama,header){

    $.ajax({
              type: "post",
              data:parama,
              url: baseurl+para,
              dataType: "json",
              headers: header,
              async: true,
              success: function(data){
                        callback(data)
            },

            error:function(err){
              console.log(JSON.stringify(err))
              api.toast({
                      msg: '服务器异常',
                      duration:2000,
                      location: 'bottom'
                  });
            }
          });


}
function getData(para,callback,parama,header,isasync){

    $.ajax({
              type: "GET",
              data:parama,
              url: baseurl+para,
              async:isasync,
               cache:false,
              dataType: "json",
              headers: header,
              data:parama,
              success: function(data){
                        callback(data)
            },
            error:function(err){
              console.log(JSON.stringify(err))
              api.toast({
                      msg: '服务器异常',
                      duration:2000,
                      location: 'bottom'
                  });
            }
          });


}
function deleteData(para,callback,parama,header){

    $.ajax({
              type: "DELETE",
              data:parama,
              url: baseurl+para,
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
function putData(para,callback,parama,header){

    $.ajax({
              type: "put",
              data:parama,
              url: baseurl+para,
              async:false,
               cache:false,
              dataType: "json",
              headers: header,
              success: function(data){
                        callback(data)
            },
            error:function(err){
              console.log(JSON.stringify(err))
              api.toast({
                      msg: '服务器异常',
                      duration:2000,
                      location: 'bottom'
                  });
            }
          });


}
function upimg(para,callback,parama,header){

    $.ajax({
              type: "post",
              data:parama,
              url: baseurl+para,
              async:false,
              cache:false,
              processData:false,
              contentType : false,
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
function changeAvata(path,headers,callback,callbackerr){
  api.ajax({
      url: baseurl+'/users/avatar',
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
        api.hideProgress();

      callbackerr(err)
      }
  });
}
function upload(path,type,file,callback,header,callbackerr){
  api.ajax({
      url: 'https://wx2.kuaiyunma.com/upyun/upload',
      method: 'POST',
      headers:header,
      data: {
          values: {
              path: path,
              type:type
          },
          files: {
              file: file
          }
      }
  },function(data, err){
    api.hideProgress();

      if (data) {
      callback(data)
      } else {
      callbackerr(err)
      }
  });
}
