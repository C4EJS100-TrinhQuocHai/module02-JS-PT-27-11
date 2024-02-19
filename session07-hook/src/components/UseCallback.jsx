import React, { memo } from 'react'

 function UseCallback() {
    console.log("use callback được gọi!");
    /* 
     memo: chức năng nó sẽ đi kiểm tra xem có prop nào thay đổi thì component mới
     re-render,còn không thì thôi
     */
  return (
    <>
        UseCallback

    </>
  )
}
export default memo(UseCallback);
