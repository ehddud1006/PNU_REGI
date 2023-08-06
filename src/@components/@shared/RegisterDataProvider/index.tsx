import React, { createContext, useEffect, useState } from 'react';

type DataType = {
  no: number;
  application: boolean;
  subjectName: string;
  subjectNumber: string;
  bunban: string;
  class: string;
  gruopClassification: string;
  credits: string;
  professor: string;
  department: string;
  timetableSummary: React.ReactNode;
};

const data = {
  no: 1,
  application: false,
  subjectName: '인터넷과웹기초',
  subjectNumber: 'CB2600105',
  bunban: '060',
  class: '주전공',
  gruopClassification: '전공필수(학부)',
  credits: '3.0',
  professor: '염근혁',
  department: '정보컴퓨터공학부',
  timetableSummary: (
    <>
      <span>화 15:00(75) 201-6516</span>
      <span> 목 15:00(75) 201-6516</span>
    </>
  ),
};

const initialState: DataType[] = [1, 2, 3, 4, 5, 6, 7].map((el, index) => {
  return {
    ...data,
    no: index + 1,
  };
});

export const RegisterDataProviderContext = createContext<any>(initialState);

const RegisterDataProvider = ({ children }: any) => {
  const [registerData, setRegisterData] = useState(initialState);
  const [isSuccess, setIsSuccess] = useState({ init: false, value: '' });

  const handleData = (id: any) => {
    setRegisterData(prev => {
      return prev.map((el, index) => {
        if (el.no === id) {
          return {
            ...el,
            application: true,
          };
        }

        return el;
      });
    });
    setIsSuccess({ value: '추가', init: true });
  };

  const handleData2 = (id: any) => {
    setRegisterData(prev => {
      return prev.map((el, index) => {
        if (el.no === id) {
          return {
            ...el,
            application: false,
          };
        }

        return el;
      });
    });

    setIsSuccess({ value: '삭제', init: true });
  };

  const handleData3 = (id: any) => {
    setIsSuccess({ value: '마감', init: true });
  };

  return (
    <RegisterDataProviderContext.Provider value={{ registerData, handleData, handleData2, handleData3, isSuccess }}>
      {children}
    </RegisterDataProviderContext.Provider>
  );
};

export default RegisterDataProvider;
