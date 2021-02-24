import React,{useEffect,useState } from 'react';

export default function Home() {

  const roomNumber =[
    {no : 'B01', idx: '1' },
    {no : 'B02', idx: '2' },
    {no : '101', idx: '3' },
    {no : '102', idx: '4' },
    {no : '201', idx: '5' },
    {no : '202', idx: '6' },
    {no : '301', idx: '7' },
    {no : '302', idx: '8' },
    {no : '401', idx: '9' },
    {no : '402', idx: '10' },
  ]

  const [roomList, setRoomList] = useState(roomNumber);






  return (
    <>
    <div className="container mx-auto border-2 border-red-200">
      dd
    </div>
    <div className="container mx-auto">
      <div className="grid-flow-row">
        <div className="grid grid-cols-10">
          <div className="text-center">호수</div>
          <div className="text-center">전월사용량</div>
          <div className="text-center">당월사용량</div>
          <div className="text-center">사용량</div>
          <div className="text-center">수도요금</div>
          <div className="text-center">공용계단</div>
          <div className="text-center">관리비</div>
          <div className="text-center">총금액</div>
          <div className="text-center">공제</div>
          <div className="text-center">청구금액</div>
        </div>
        {(roomList || []).map((item,i)=>(
          <div className="grid grid-cols-10" key={item.idx}>
            <input type="text" className="border border-red-200 mx-1 text-center" value={item.no} disabled />
            <input type="number" className={`border border-red-200 mx-1 text-center ${'before_price' + item.idx}`}/>
            <input type="number" className={`border border-red-200 mx-1 text-center ${'after_price' + item.idx}`}/>
            <input type="number" className="border border-red-200 mx-1 text-center"/>
            <input type="number" className="border border-red-200 mx-1 text-center"/>
            <input type="number" className="border border-red-200 mx-1 text-center"/>
            <input type="number" className="border border-red-200 mx-1 text-center" value="20000" disabled/>
            <input type="number" className="border border-red-200 mx-1 text-center"/>
            <input type="number" className="border border-red-200 mx-1 text-center"/>
            <input type="number" className="border border-red-200 mx-1 text-center"/>
          </div>
        ))}
        
      </div>
    </div>
    </>
  )
}
