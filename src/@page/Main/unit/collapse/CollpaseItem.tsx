import Text from '@/@components/@shared/Text';

import * as Styled from './CollapseItem.styles';

const CollapseItem = [
  <>
    <Styled.CustomPanel header='#1 희망과목담기 안내'>
      <Styled.Ul>
        <Styled.Li>
          <Styled.Sentence>
            <Text.StrongText content='희망과목담기 기간에 희망과목 및 자동신청 교과목을 선택할 수 있습니다.' />
          </Styled.Sentence>

          <Styled.Sentence>
            <Text
              content='- 희망과목담기 기간 종료 후 희망과목담기 인원이 교과목 제한인원보다 적은 경우
          자동신청 처리되며, 결과를 '
            />
            <Text.RedText content='부산대학교 스마트캡퍼스앱' />
            <Text content='으로 알려드립니다.' />
          </Styled.Sentence>

          <Styled.Sentence>
            <Text content='- 자동신청 결과는 ' />
            <Text.BlueBottomDashText
              content='학생지원시스템 – 수업 – 수강신청및확인 – 자동신청교과목확인및삭제'
              to='https://onestop.pusan.ac.kr/page?menuCD=000000000000340'
            />
            <Text content='메뉴에서 확인하실 수 있습니다.' />
          </Styled.Sentence>
        </Styled.Li>

        <Styled.Li>
          <Styled.Sentence>
            <Text.StrongText content='자동신청을 통해 수강신청된 교과목은 ' />
            <Text.BlueBottomDashText
              content='학생지원시스템 - 수업 - 수강신청및확인 – 수강확인'
              to='https://onestop.pusan.ac.kr/page?menuCD=000000000000355'
              css={Styled.StrongBlueBottomDashText}
            />
            <Text.StrongText content='메뉴에서 확인 가능합니다.' />
          </Styled.Sentence>
        </Styled.Li>
      </Styled.Ul>
    </Styled.CustomPanel>
  </>,
  <>
    <Styled.CustomPanel header='#2 수강신청 안내'>
      <Styled.Ul>
        <Styled.Li>
          <Styled.Sentence>
            <Text.RedText
              content=' 수강신청 전 반드시 학생지원시스템-수업-수강신청 안내 내용 및 수강편람의 내용을
                    숙지하여 수강신청하시고, 미숙지로 인해 발생한 불이익은 본인의 책임입니다.'
            />
          </Styled.Sentence>
        </Styled.Li>

        <Styled.Li>
          <Styled.Sentence>
            <Text content='교과목 정보 및 수강신청 증원 관련 문의는 ' />
            <Text.BlueBottomDashText content='과목개설학과' to='https://sugang.pusan.ac.kr/main#' />
            <Text content='로 해주시기 바랍니다.' />
          </Styled.Sentence>
        </Styled.Li>

        <Styled.Li>
          <Styled.Sentence>
            <Text content='수강신청에 관한 문의는 ' />
            <Text.BlueBottomDashText content='소속학과' to='https://sugang.pusan.ac.kr/main#' />
            <Text content='에서 수강지도를 받은 후 문의해주시기 바랍니다.' />
          </Styled.Sentence>
        </Styled.Li>

        <Styled.Li>
          <Styled.Sentence>
            <Text
              content='외국인 유학생 중 한국어가 불가한 학생이 수강신청 관련 문의가 있을 시 510-3352로
                    문의하시기 바랍니다.'
            />
          </Styled.Sentence>
        </Styled.Li>
      </Styled.Ul>
    </Styled.CustomPanel>
  </>,
  <>
    <Styled.CustomPanel isPaddingLeft={true} header='#3 대기순번제 안내'>
      <Styled.Ul>
        <Styled.Li>
          <Styled.Sentence>
            <Text.StrongText content='대기순번제란?' />
          </Styled.Sentence>

          <Styled.Sentence>
            <Text
              content='     - 수강신청 기간에 수강인원이 초과된 교과목을 신청하는 경우, 선착순으로
                    대기순번을 부여하여 수강취소자 발생 시, 순차적으로 수강신청이 실시간 자동신청
                    처리되는 제도입니다.'
            />
          </Styled.Sentence>

          <Styled.Sentence>
            <Text content='- 대기순번 신청기간은' />
            <Text.RedText content=' (1차) 수강신청기간 1일차 14:00 ~ 3일차 17:00' />
            <Text content='이며, ' />
            <Text.StrongText content='대기순번신청 및 자동신청 처리기간은 동일' />
            <Text content='하며 이후에는 신청 및 처리가 불가합니다.' />
          </Styled.Sentence>

          <Styled.Sentence>
            <Text content='-' />
            <Text.StrongText content=' 신청과목 : ' />
            <Text content='수강신청 가능학점 이내 ' />
            <Text.BlueText content='2과목' />
            <Text content='으로 제한됩니다.' />
          </Styled.Sentence>

          <Styled.Sentence>
            <Text content={"※ 학점 및 시간표 충돌 시 '교환과목' 설정이 필요합니다."} />
          </Styled.Sentence>

          <Styled.Sentence>
            <Text content='-' />
            <Text.StrongText content=' 제한인원 : ' />
            <Text content='수강인원의 ' />
            <Text.BlueText content='집단 구분별 30%' />
            <Text content='로 배정됩니다.' />
          </Styled.Sentence>

          <Styled.Sentence>
            <Text content='※ 주전공, 부ㆍ복수ㆍ교직, 일반선택, 타대생 수강인원의 30%(반올림 적용)' />
          </Styled.Sentence>
        </Styled.Li>
      </Styled.Ul>
    </Styled.CustomPanel>
  </>,
  <>
    <Styled.CustomPanel isPaddingLeft={false} isPadding={true} header='연락처'>
      <Styled.TableResponsive>
        <Styled.Table>
          <caption>연락처</caption>
          <Styled.TableHead>
            <tr>
              <th scope='col'>담당업무별 연락처</th>
              <th scope='col'>부서</th>
              <th scope='col'>담당자</th>
              <th scope='col'>전화번호</th>
            </tr>
          </Styled.TableHead>

          <Styled.TableBody>
            <tr>
              <th scope='row'>개설과목 및 수강문의</th>
              <td>
                <Text.BlueBottomDashText to='https://sugang.pusan.ac.kr/main#' content='개설학과' />
              </td>
              <td>
                <Text.BlueBottomDashText to='https://sugang.pusan.ac.kr/main#' content='학과조교' />
              </td>
              <td>
                <Text.BlueBottomDashText to='https://sugang.pusan.ac.kr/main#' content='전화번호찾기' />
              </td>
            </tr>
            <tr>
              <th scope='row'>교양선택과목</th>
              <td>
                <Text.BlueBottomDashText to='https://sugang.pusan.ac.kr/main#' content='개설학과' />
              </td>
              <td>
                <Text.BlueBottomDashText to='https://sugang.pusan.ac.kr/main#' content='학과조교' />
              </td>
              <td>
                <Text.BlueBottomDashText to='https://sugang.pusan.ac.kr/main#' content='전화번호찾기' />
              </td>
            </tr>
            <tr>
              <th scope='row'>정보기술활용, 컴퓨팅사고와인공지능, 기초컴퓨터프로그래밍</th>
              <td>교양교육원</td>
              <td>담당자</td>
              <td>051-510-3846</td>
            </tr>
            <tr>
              <th scope='row'>대학실용영어Ⅱ, 대학영어</th>
              <td>교양교육원</td>
              <td>담당자</td>
              <td>051-510-3844</td>
            </tr>
            <tr>
              <th scope='row'>열린사고와표현, 고전읽기와토론</th>
              <td>교양교육원</td>
              <td>담당자</td>
              <td>051-510-3845</td>
            </tr>
            <tr>
              <th scope='row'>정규학기 학부수강신청</th>
              <td>교육혁신과</td>
              <td>정혜리</td>
              <td>051-510-1221</td>
            </tr>
            <tr>
              <th scope='row'>계절수업 학부수강신청</th>
              <td>교육혁신과</td>
              <td>정혜리</td>
              <td>051-510-1221</td>
            </tr>
            <tr>
              <th scope='row'>시스템관리</th>
              <td>정보화본부</td>
              <td>이정환</td>
              <td>051-510-7467</td>
            </tr>
            <tr>
              <th scope='row'>서버 및 인터넷관리</th>
              <td>정보화본부</td>
              <td>최현규</td>
              <td>051-510-7479</td>
            </tr>
          </Styled.TableBody>
        </Styled.Table>
      </Styled.TableResponsive>
    </Styled.CustomPanel>
  </>,
];

export default CollapseItem;
