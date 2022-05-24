import React, { useMemo } from 'react'

const TypeRoomHotel = () => {
  const entities2= useMemo(()=> ["Tất cả", "Chọn nhiều nhất", "Thanh toán khi nhận phòng", "Biệt thự", "Căn hộ", "Nhà nghỉ", "Ưu đãi đặc biệt", "Khu nghỉ dưỡng"], [])
  return (
    <div className='fkkfdgrwketoepre'>
        <div style={{marginBottom: 8}}>Loại phòng nghỉ</div>    
        <div className='gkorkawrklsgr'>
            {
                entities2?.map((item, key)=> <C key={key} item={item} />)
            }
        </div>
    </div>
  )
}
const C= (props)=> {
    return (
        <div className='djfiejwaejwew'>
            <input type="radio" name='v' />
            <div className='opdrkoprkwopewe'>{props.item}</div>
        </div>
    )
}

export default TypeRoomHotel