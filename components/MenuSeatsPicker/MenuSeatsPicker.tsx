import { Flex } from "@chakra-ui/react";
import React from "react";
type Props = {};
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNumberOfSeatsToPricing } from "../01-Reducers/resturantSlice";
import { seatsObjBool } from "../constants/constants";
export default function MenuSeatsPicker({}: Props) {
  let dispatch = useDispatch();
  let [seats, setSeats] = useState(seatsObjBool);

  function handleClickSeatColor() {
    setSeats({ ...seats });
    let arrOfseatsAtTable = Object.values(seats).map((obj, index) => {
      return Array(
        Object.values(obj).filter((bool) => {
          return bool;
        }).length
      ).fill(index);
    });
    dispatch(addNumberOfSeatsToPricing(arrOfseatsAtTable));
    // adds an array of seats based on their table eg [ [1,1,1,1] , [2,2,2,2] ]
  }

  return (
    <Flex flex={1} p={"10px"}>
      <svg
        width="100%"
        viewBox="0 0 678 526"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="MenuSeats" clip-path="url(#clip0_143_11949)">
          <rect id="Rectangle 995" width="678" height="526" fill="#353643" />
          <g id="TableAndSeats">
            <g id="table-1" onClick={() => handleClickSeatColor()}>
              <rect
                id="Table1"
                x="406"
                y="385"
                width="90"
                height="90"
                fill="url(#pattern0)"
              />
              <path
                id="Ellipse 246"
                d="M475.5 430C475.5 442.969 464.765 453.5 451.5 453.5C438.235 453.5 427.5 442.969 427.5 430C427.5 417.031 438.235 406.5 451.5 406.5C464.765 406.5 475.5 417.031 475.5 430Z"
                fill={
                  Object.values(seats.T5).includes(false) ? "#F3F4F1" : "lime"
                }
                stroke="#C1C1C1"
              />
              <path
                id="T5"
                d="M451.244 424.848V426.032H448.204V436H446.748V426.032H443.692V424.848H451.244ZM460.173 425.696H454.557V429.344C454.802 429.003 455.165 428.725 455.645 428.512C456.125 428.288 456.642 428.176 457.197 428.176C458.082 428.176 458.802 428.363 459.357 428.736C459.911 429.099 460.306 429.573 460.541 430.16C460.786 430.736 460.909 431.349 460.909 432C460.909 432.768 460.765 433.456 460.477 434.064C460.189 434.672 459.746 435.152 459.149 435.504C458.562 435.856 457.831 436.032 456.957 436.032C455.837 436.032 454.93 435.744 454.237 435.168C453.543 434.592 453.122 433.824 452.973 432.864H454.397C454.535 433.472 454.829 433.947 455.277 434.288C455.725 434.629 456.29 434.8 456.973 434.8C457.815 434.8 458.45 434.549 458.877 434.048C459.303 433.536 459.517 432.864 459.517 432.032C459.517 431.2 459.303 430.56 458.877 430.112C458.45 429.653 457.821 429.424 456.989 429.424C456.423 429.424 455.927 429.563 455.501 429.84C455.085 430.107 454.781 430.475 454.589 430.944H453.213V424.416H460.173V425.696Z"
                fill="black"
              />
            </g>
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T5.s1 = !seats.T5.s1;
                handleClickSeatColor();
              }}
              stroke={seats.T5.s1 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="435"
              y="354"
              width="31"
              height="31"
              fill="url(#pattern1)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T5.s2 = !seats.T5.s2;
                handleClickSeatColor();
              }}
              stroke={seats.T5.s2 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="482"
              y="378"
              width="31"
              height="31"
              fill="url(#pattern2)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T5.s3 = !seats.T5.s3;
                handleClickSeatColor();
              }}
              stroke={seats.T5.s3 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="497"
              y="415"
              width="31"
              height="31"
              fill="url(#pattern3)"
            />
            <rect
              onClick={() => {
                seats.T5.s4 = !seats.T5.s4;
                handleClickSeatColor();
              }}
              stroke={seats.T5.s4 ? "lime" : "none"}
              strokeWidth={"4px"}
              style={{ cursor: "pointer" }}
              x="482"
              y="452"
              width="31"
              height="31"
              fill="url(#pattern4)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T5.s5 = !seats.T5.s5;
                handleClickSeatColor();
              }}
              stroke={seats.T5.s5 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="435"
              y="475"
              width="31"
              height="31"
              fill="url(#pattern5)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T5.s6 = !seats.T5.s6;
                handleClickSeatColor();
              }}
              stroke={seats.T5.s6 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="387"
              y="458"
              width="31"
              height="31"
              fill="url(#pattern6)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T5.s7 = !seats.T5.s7;
                handleClickSeatColor();
              }}
              stroke={seats.T5.s7 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="372"
              y="415"
              width="31"
              height="31"
              fill="url(#pattern7)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T5.s8 = !seats.T5.s8;
                handleClickSeatColor();
              }}
              stroke={seats.T5.s8 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="387"
              y="372"
              width="31"
              height="31"
              fill="url(#pattern8)"
            />
          </g>
          <g id="TableAndSeats_2">
            <g id="table-1_2">
              <rect
                id="Table1_2"
                x="71"
                y="382"
                width="90"
                height="90"
                fill="url(#pattern9)"
              />
              <path
                id="Ellipse 246_2"
                d="M140.5 427C140.5 439.969 129.765 450.5 116.5 450.5C103.235 450.5 92.5 439.969 92.5 427C92.5 414.031 103.235 403.5 116.5 403.5C129.765 403.5 140.5 414.031 140.5 427Z"
                fill={
                  Object.values(seats.T4).includes(false) ? "#F3F4F1" : "lime"
                }
                stroke="#C1C1C1"
              />
              <path
                id="T4"
                d="M116.237 421.848V423.032H113.197V433H111.741V423.032H108.685V421.848H116.237ZM117.437 430.424V429.32L123.053 421.544H124.797V429.16H126.397V430.424H124.797V433H123.357V430.424H117.437ZM123.421 423.064L119.117 429.16H123.421V423.064Z"
                fill="black"
              />
            </g>
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T4.s1 = !seats.T4.s1;
                handleClickSeatColor();
              }}
              stroke={seats.T4.s1 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="100"
              y="351"
              width="31"
              height="31"
              fill="url(#pattern10)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T4.s2 = !seats.T4.s2;
                handleClickSeatColor();
              }}
              stroke={seats.T4.s2 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="147"
              y="375"
              width="31"
              height="31"
              fill="url(#pattern11)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T4.s3 = !seats.T4.s3;
                handleClickSeatColor();
              }}
              stroke={seats.T4.s3 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="162"
              y="412"
              width="31"
              height="31"
              fill="url(#pattern12)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T4.s4 = !seats.T4.s4;
                handleClickSeatColor();
              }}
              stroke={seats.T4.s4 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="147"
              y="449"
              width="31"
              height="31"
              fill="url(#pattern13)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T4.s5 = !seats.T4.s5;
                handleClickSeatColor();
              }}
              stroke={seats.T4.s5 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="100"
              y="472"
              width="31"
              height="31"
              fill="url(#pattern14)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T4.s6 = !seats.T4.s6;
                handleClickSeatColor();
              }}
              stroke={seats.T4.s6 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="52"
              y="455"
              width="31"
              height="31"
              fill="url(#pattern15)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T4.s7 = !seats.T4.s7;
                handleClickSeatColor();
              }}
              stroke={seats.T4.s7 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="37"
              y="412"
              width="31"
              height="31"
              fill="url(#pattern16)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T4.s8 = !seats.T4.s8;
                handleClickSeatColor();
              }}
              stroke={seats.T4.s8 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="52"
              y="369"
              width="31"
              height="31"
              fill="url(#pattern17)"
            />
          </g>
          <g id="TableAndSeats_3">
            <g id="table-1_3">
              <rect
                id="Table1_3"
                x="234"
                y="271"
                width="90"
                height="90"
                fill="url(#pattern18)"
              />
              <path
                id="Ellipse 246_3"
                d="M303.5 316C303.5 328.969 292.765 339.5 279.5 339.5C266.235 339.5 255.5 328.969 255.5 316C255.5 303.031 266.235 292.5 279.5 292.5C292.765 292.5 303.5 303.031 303.5 316Z"
                fill={
                  Object.values(seats.T3).includes(false) ? "#F3F4F1" : "lime"
                }
                stroke="#C1C1C1"
              />
              <path
                id="T3"
                d="M279.557 310.848V312.032H276.517V322H275.061V312.032H272.005V310.848H279.557ZM281.077 313.344C281.152 312.363 281.531 311.595 282.213 311.04C282.896 310.485 283.781 310.208 284.869 310.208C285.595 310.208 286.219 310.341 286.741 310.608C287.275 310.864 287.675 311.216 287.941 311.664C288.219 312.112 288.357 312.619 288.357 313.184C288.357 313.845 288.165 314.416 287.781 314.896C287.408 315.376 286.917 315.685 286.309 315.824V315.904C287.003 316.075 287.552 316.411 287.957 316.912C288.363 317.413 288.565 318.069 288.565 318.88C288.565 319.488 288.427 320.037 288.149 320.528C287.872 321.008 287.456 321.387 286.901 321.664C286.347 321.941 285.68 322.08 284.901 322.08C283.771 322.08 282.843 321.787 282.117 321.2C281.392 320.603 280.987 319.76 280.901 318.672H282.309C282.384 319.312 282.645 319.835 283.093 320.24C283.541 320.645 284.139 320.848 284.885 320.848C285.632 320.848 286.197 320.656 286.581 320.272C286.976 319.877 287.173 319.371 287.173 318.752C287.173 317.952 286.907 317.376 286.373 317.024C285.84 316.672 285.035 316.496 283.957 316.496H283.589V315.28H283.973C284.955 315.269 285.696 315.109 286.197 314.8C286.699 314.48 286.949 313.989 286.949 313.328C286.949 312.763 286.763 312.309 286.389 311.968C286.027 311.627 285.504 311.456 284.821 311.456C284.16 311.456 283.627 311.627 283.221 311.968C282.816 312.309 282.576 312.768 282.501 313.344H281.077Z"
                fill="black"
              />
            </g>
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T3.s1 = !seats.T3.s1;
                handleClickSeatColor();
              }}
              stroke={seats.T3.s1 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="263"
              y="240"
              width="31"
              height="31"
              fill="url(#pattern19)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T3.s2 = !seats.T3.s2;
                handleClickSeatColor();
              }}
              stroke={seats.T3.s2 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="310"
              y="264"
              width="31"
              height="31"
              fill="url(#pattern20)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T3.s3 = !seats.T3.s3;
                handleClickSeatColor();
              }}
              stroke={seats.T3.s3 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="325"
              y="301"
              width="31"
              height="31"
              fill="url(#pattern21)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T3.s4 = !seats.T3.s4;
                handleClickSeatColor();
              }}
              stroke={seats.T3.s4 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="310"
              y="338"
              width="31"
              height="31"
              fill="url(#pattern22)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T3.s5 = !seats.T3.s5;
                handleClickSeatColor();
              }}
              stroke={seats.T3.s5 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="263"
              y="361"
              width="31"
              height="31"
              fill="url(#pattern23)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T3.s6 = !seats.T3.s6;
                handleClickSeatColor();
              }}
              stroke={seats.T3.s6 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="215"
              y="344"
              width="31"
              height="31"
              fill="url(#pattern24)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T3.s7 = !seats.T3.s7;
                handleClickSeatColor();
              }}
              stroke={seats.T3.s7 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="200"
              y="301"
              width="31"
              height="31"
              fill="url(#pattern25)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T3.s8 = !seats.T3.s8;
                handleClickSeatColor();
              }}
              stroke={seats.T3.s8 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="215"
              y="258"
              width="31"
              height="31"
              fill="url(#pattern26)"
            />
          </g>
          <g id="TableAndSeats_4">
            <g id="table-1_4">
              <rect
                id="Table1_4"
                x="398"
                y="153"
                width="90"
                height="90"
                fill="url(#pattern27)"
              />
              <path
                id="Ellipse 246_4"
                d="M467.5 198C467.5 210.969 456.765 221.5 443.5 221.5C430.235 221.5 419.5 210.969 419.5 198C419.5 185.031 430.235 174.5 443.5 174.5C456.765 174.5 467.5 185.031 467.5 198Z"
                fill={
                  Object.values(seats.T2).includes(false) ? "#F3F4F1" : "lime"
                }
                stroke="#C1C1C1"
              />
              <path
                id="T2"
                d="M443.166 192.848V194.032H440.126V204H438.67V194.032H435.614V192.848H443.166ZM444.543 202.832C445.897 201.744 446.959 200.853 447.727 200.16C448.495 199.456 449.14 198.725 449.663 197.968C450.196 197.2 450.463 196.448 450.463 195.712C450.463 195.019 450.292 194.475 449.951 194.08C449.62 193.675 449.081 193.472 448.335 193.472C447.609 193.472 447.044 193.701 446.639 194.16C446.244 194.608 446.031 195.211 445.999 195.968H444.591C444.633 194.773 444.996 193.851 445.679 193.2C446.361 192.549 447.241 192.224 448.319 192.224C449.417 192.224 450.287 192.528 450.927 193.136C451.577 193.744 451.903 194.581 451.903 195.648C451.903 196.533 451.636 197.397 451.103 198.24C450.58 199.072 449.983 199.808 449.311 200.448C448.639 201.077 447.78 201.813 446.735 202.656H452.239V203.872H444.543V202.832Z"
                fill="black"
              />
            </g>
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T2.s1 = !seats.T2.s1;
                handleClickSeatColor();
              }}
              stroke={seats.T2.s1 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="427"
              y="122"
              width="31"
              height="31"
              fill="url(#pattern28)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T2.s2 = !seats.T2.s2;
                handleClickSeatColor();
              }}
              stroke={seats.T2.s2 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="474"
              y="146"
              width="31"
              height="31"
              fill="url(#pattern29)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T2.s3 = !seats.T2.s3;
                handleClickSeatColor();
              }}
              stroke={seats.T2.s3 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="489"
              y="183"
              width="31"
              height="31"
              fill="url(#pattern30)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T2.s4 = !seats.T2.s4;
                handleClickSeatColor();
              }}
              stroke={seats.T2.s4 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="474"
              y="220"
              width="31"
              height="31"
              fill="url(#pattern31)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T2.s5 = !seats.T2.s5;
                handleClickSeatColor();
              }}
              stroke={seats.T2.s5 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="427"
              y="243"
              width="31"
              height="31"
              fill="url(#pattern32)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T2.s6 = !seats.T2.s6;
                handleClickSeatColor();
              }}
              stroke={seats.T2.s6 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="379"
              y="226"
              width="31"
              height="31"
              fill="url(#pattern33)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T2.s7 = !seats.T2.s7;
                handleClickSeatColor();
              }}
              stroke={seats.T2.s7 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="364"
              y="183"
              width="31"
              height="31"
              fill="url(#pattern34)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T2.s8 = !seats.T2.s8;
                handleClickSeatColor();
              }}
              stroke={seats.T2.s8 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="379"
              y="140"
              width="31"
              height="31"
              fill="url(#pattern35)"
            />
          </g>
          <g id="TableAndSeats_5">
            <g id="table-1_5">
              <rect
                id="Table1_5"
                x="69"
                y="153"
                width="90"
                height="90"
                fill="url(#pattern36)"
              />
              <path
                id="Ellipse 246_5"
                d="M138.5 198C138.5 210.969 127.765 221.5 114.5 221.5C101.235 221.5 90.5 210.969 90.5 198C90.5 185.031 101.235 174.5 114.5 174.5C127.765 174.5 138.5 185.031 138.5 198Z"
                fill={
                  Object.values(seats.T1).includes(false) ? "#F3F4F1" : "lime"
                }
                stroke="#C1C1C1"
              />
              <path
                id="T1"
                d="M116.205 192.848V194.032H113.165V204H111.709V194.032H108.653V192.848H116.205ZM117.374 193.76V192.432H120.382V204H118.91V193.76H117.374Z"
                fill="black"
              />
            </g>
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T1.s1 = !seats.T1.s1;
                handleClickSeatColor();
              }}
              stroke={seats.T1.s1 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="98"
              y="122"
              width="31"
              height="31"
              fill="url(#pattern37)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T1.s2 = !seats.T1.s2;
                handleClickSeatColor();
              }}
              stroke={seats.T1.s2 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="145"
              y="146"
              width="31"
              height="31"
              fill="url(#pattern38)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T1.s3 = !seats.T1.s3;
                handleClickSeatColor();
              }}
              stroke={seats.T1.s3 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="160"
              y="183"
              width="31"
              height="31"
              fill="url(#pattern39)"
            />
            <rect
              className="table1-S4_5"
              onClick={() => {
                seats.T1.s4 = !seats.T1.s4;
                handleClickSeatColor();
              }}
              stroke={seats.T1.s4 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="145"
              y="220"
              width="31"
              height="31"
              fill="url(#pattern40)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T1.s5 = !seats.T1.s5;
                handleClickSeatColor();
              }}
              stroke={seats.T1.s5 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="98"
              y="243"
              width="31"
              height="31"
              fill="url(#pattern41)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T1.s6 = !seats.T1.s6;
                handleClickSeatColor();
              }}
              stroke={seats.T1.s6 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="50"
              y="226"
              width="31"
              height="31"
              fill="url(#pattern42)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T1.s7 = !seats.T1.s7;
                handleClickSeatColor();
              }}
              stroke={seats.T1.s7 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="35"
              y="183"
              width="31"
              height="31"
              fill="url(#pattern43)"
            />
            <rect
              style={{ cursor: "pointer" }}
              onClick={() => {
                seats.T1.s8 = !seats.T1.s8;
                handleClickSeatColor();
              }}
              stroke={seats.T1.s8 ? "lime" : "none"}
              strokeWidth={"4px"}
              x="50"
              y="140"
              width="31"
              height="31"
              fill="url(#pattern44)"
            />
          </g>
          <g id="Group 1173">
            <g id="Group 1049">
              <circle
                id="Ellipse 252"
                cx="554"
                cy="98"
                r="9.5"
                fill="#F3F4F1"
                stroke="#C1C1C1"
              />
              <rect
                id="Rectangle 1061"
                x="562"
                y="96"
                width="8"
                height="4"
                fill="#F3F3F3"
              />
              <path id="Vector 702" d="M563 95.5H570" stroke="#C1C1C1" />
              <path id="Vector 703" d="M563 100H570" stroke="#C1C1C1" />
            </g>
            <g id="Group 1050">
              <circle
                id="Ellipse 252_2"
                cx="554"
                cy="164"
                r="9.5"
                fill="#F3F4F1"
                stroke="#C1C1C1"
              />
              <rect
                id="Rectangle 1061_2"
                x="562"
                y="162"
                width="8"
                height="4"
                fill="#F3F3F3"
              />
              <path id="Vector 702_2" d="M563 161.5H570" stroke="#C1C1C1" />
              <path id="Vector 703_2" d="M563 166H570" stroke="#C1C1C1" />
            </g>
            <g id="Group 1051">
              <circle
                id="Ellipse 252_3"
                cx="554"
                cy="230"
                r="9.5"
                fill="#F3F4F1"
                stroke="#C1C1C1"
              />
              <rect
                id="Rectangle 1061_3"
                x="562"
                y="228"
                width="8"
                height="4"
                fill="#F3F3F3"
              />
              <path id="Vector 702_3" d="M563 227.5H570" stroke="#C1C1C1" />
              <path id="Vector 703_3" d="M563 232H570" stroke="#C1C1C1" />
            </g>
            <g id="Group 1052">
              <circle
                id="Ellipse 252_4"
                cx="554"
                cy="296"
                r="9.5"
                fill="#F3F4F1"
                stroke="#C1C1C1"
              />
              <rect
                id="Rectangle 1061_4"
                x="562"
                y="294"
                width="8"
                height="4"
                fill="#F3F3F3"
              />
              <path id="Vector 702_4" d="M563 293.5H570" stroke="#C1C1C1" />
              <path id="Vector 703_4" d="M563 298H570" stroke="#C1C1C1" />
            </g>
            <g id="Group 1053">
              <circle
                id="Ellipse 252_5"
                cx="554"
                cy="362"
                r="9.5"
                fill="#F3F4F1"
                stroke="#C1C1C1"
              />
              <rect
                id="Rectangle 1061_5"
                x="562"
                y="360"
                width="8"
                height="4"
                fill="#F3F3F3"
              />
              <path id="Vector 702_5" d="M563 359.5H570" stroke="#C1C1C1" />
              <path id="Vector 703_5" d="M563 364H570" stroke="#C1C1C1" />
            </g>
            <g id="Group 1054">
              <circle
                id="Ellipse 252_6"
                cx="554"
                cy="428"
                r="9.5"
                fill="#F3F4F1"
                stroke="#C1C1C1"
              />
              <rect
                id="Rectangle 1061_6"
                x="562"
                y="426"
                width="8"
                height="4"
                fill="#F3F3F3"
              />
              <path id="Vector 702_6" d="M563 425.5H570" stroke="#C1C1C1" />
              <path id="Vector 703_6" d="M563 430H570" stroke="#C1C1C1" />
            </g>
            <g id="Group 1055">
              <circle
                id="Ellipse 252_7"
                r="9.5"
                transform="matrix(-1 0 0 1 636 98)"
                fill="#F3F4F1"
                stroke="#C1C1C1"
              />
              <rect
                id="Rectangle 1061_7"
                width="8"
                height="4"
                transform="matrix(-1 0 0 1 628 96)"
                fill="#F3F3F3"
              />
              <path id="Vector 702_7" d="M627 95.5H620" stroke="#C1C1C1" />
              <path id="Vector 703_7" d="M627 100H620" stroke="#C1C1C1" />
            </g>
            <g id="Group 1056">
              <circle
                id="Ellipse 252_8"
                r="9.5"
                transform="matrix(-1 0 0 1 636 164)"
                fill="#F3F4F1"
                stroke="#C1C1C1"
              />
              <rect
                id="Rectangle 1061_8"
                width="8"
                height="4"
                transform="matrix(-1 0 0 1 628 162)"
                fill="#F3F3F3"
              />
              <path id="Vector 702_8" d="M627 161.5H620" stroke="#C1C1C1" />
              <path id="Vector 703_8" d="M627 166H620" stroke="#C1C1C1" />
            </g>
            <g id="Group 1057">
              <circle
                id="Ellipse 252_9"
                r="9.5"
                transform="matrix(-1 0 0 1 636 230)"
                fill="#F3F4F1"
                stroke="#C1C1C1"
              />
              <rect
                id="Rectangle 1061_9"
                width="8"
                height="4"
                transform="matrix(-1 0 0 1 628 228)"
                fill="#F3F3F3"
              />
              <path id="Vector 702_9" d="M627 227.5H620" stroke="#C1C1C1" />
              <path id="Vector 703_9" d="M627 232H620" stroke="#C1C1C1" />
            </g>
            <g id="Group 1058">
              <circle
                id="Ellipse 252_10"
                r="9.5"
                transform="matrix(-1 0 0 1 636 296)"
                fill="#F3F4F1"
                stroke="#C1C1C1"
              />
              <rect
                id="Rectangle 1061_10"
                width="8"
                height="4"
                transform="matrix(-1 0 0 1 628 294)"
                fill="#F3F3F3"
              />
              <path id="Vector 702_10" d="M627 293.5H620" stroke="#C1C1C1" />
              <path id="Vector 703_10" d="M627 298H620" stroke="#C1C1C1" />
            </g>
            <g id="Group 1059">
              <circle
                id="Ellipse 252_11"
                r="9.5"
                transform="matrix(-1 0 0 1 636 362)"
                fill="#F3F4F1"
                stroke="#C1C1C1"
              />
              <rect
                id="Rectangle 1061_11"
                width="8"
                height="4"
                transform="matrix(-1 0 0 1 628 360)"
                fill="#F3F3F3"
              />
              <path id="Vector 702_11" d="M627 359.5H620" stroke="#C1C1C1" />
              <path id="Vector 703_11" d="M627 364H620" stroke="#C1C1C1" />
            </g>
            <g id="Group 1060">
              <circle
                id="Ellipse 252_12"
                r="9.5"
                transform="matrix(-1 0 0 1 636 428)"
                fill="#F3F4F1"
                stroke="#C1C1C1"
              />
              <rect
                id="Rectangle 1061_12"
                width="8"
                height="4"
                transform="matrix(-1 0 0 1 628 426)"
                fill="#F3F3F3"
              />
              <path id="Vector 702_12" d="M627 425.5H620" stroke="#C1C1C1" />
              <path id="Vector 703_12" d="M627 430H620" stroke="#C1C1C1" />
            </g>
            <g id="Rectangle 1004">
              <mask id="path-105-inside-1_143_11949" fill="white">
                <rect x="570" y="48" width="50" height="438" rx="6" />
              </mask>
              <rect
                x="570"
                y="48"
                width="50"
                height="438"
                rx="6"
                fill="#D9D9D9"
                stroke="#F3F3F3"
                stroke-width="16"
                mask="url(#path-105-inside-1_143_11949)"
              />
            </g>
            <path
              id="Cocktail Bar"
              d="M598 151.884C600.747 151.884 603.2 152.498 605.36 153.724C607.547 154.978 609.24 156.671 610.44 158.804C611.667 160.964 612.28 163.378 612.28 166.044C612.28 169.164 611.48 171.898 609.88 174.244C608.28 176.591 606.067 178.231 603.24 179.164V172.724C604.573 172.084 605.573 171.178 606.24 170.004C606.907 168.858 607.24 167.524 607.24 166.004C607.24 164.378 606.853 162.924 606.08 161.644C605.333 160.391 604.267 159.404 602.88 158.684C601.493 157.991 599.867 157.644 598 157.644C596.16 157.644 594.533 157.991 593.12 158.684C591.733 159.404 590.653 160.391 589.88 161.644C589.133 162.924 588.76 164.378 588.76 166.004C588.76 167.524 589.093 168.858 589.76 170.004C590.453 171.178 591.467 172.084 592.8 172.724V179.164C589.947 178.231 587.72 176.591 586.12 174.244C584.547 171.924 583.76 169.191 583.76 166.044C583.76 163.378 584.36 160.964 585.56 158.804C586.787 156.671 588.48 154.978 590.64 153.724C592.8 152.498 595.253 151.884 598 151.884ZM583.64 193.788C583.64 191.654 584.107 189.734 585.04 188.028C586 186.321 587.347 184.974 589.08 183.988C590.813 183.028 592.813 182.548 595.08 182.548C597.347 182.548 599.347 183.041 601.08 184.028C602.813 185.041 604.147 186.414 605.08 188.148C606.04 189.881 606.52 191.814 606.52 193.948C606.52 196.081 606.04 198.014 605.08 199.748C604.147 201.481 602.813 202.841 601.08 203.828C599.347 204.841 597.347 205.348 595.08 205.348C592.813 205.348 590.813 204.828 589.08 203.787C587.347 202.774 586 201.388 585.04 199.628C584.107 197.894 583.64 195.948 583.64 193.788ZM588.52 193.788C588.52 194.801 588.76 195.748 589.24 196.628C589.747 197.534 590.493 198.254 591.48 198.788C592.467 199.321 593.667 199.588 595.08 199.588C597.187 199.588 598.8 199.028 599.92 197.908C601.067 196.814 601.64 195.468 601.64 193.868C601.64 192.268 601.067 190.921 599.92 189.828C598.8 188.761 597.187 188.228 595.08 188.228C592.973 188.228 591.347 188.748 590.2 189.788C589.08 190.854 588.52 192.188 588.52 193.788ZM595.08 208.015C597.373 208.015 599.373 208.482 601.08 209.415C602.813 210.349 604.147 211.642 605.08 213.295C606.04 214.949 606.52 216.842 606.52 218.975C606.52 221.722 605.827 223.989 604.44 225.775C603.08 227.589 601.16 228.802 598.68 229.415V223.375C599.64 223.055 600.387 222.509 600.92 221.735C601.48 220.989 601.76 220.055 601.76 218.935C601.76 217.335 601.173 216.069 600 215.135C598.853 214.202 597.213 213.735 595.08 213.735C592.973 213.735 591.333 214.202 590.16 215.135C589.013 216.069 588.44 217.335 588.44 218.935C588.44 221.202 589.453 222.682 591.48 223.375V229.415C589.08 228.802 587.173 227.589 585.76 225.775C584.347 223.962 583.64 221.695 583.64 218.975C583.64 216.842 584.107 214.949 585.04 213.295C586 211.642 587.333 210.349 589.04 209.415C590.773 208.482 592.787 208.015 595.08 208.015ZM584 246.638L593.44 239.118H584V233.518H613.6V239.118H596.76L606.16 246.558V253.838L595.04 244.078L584 253.918V246.638ZM601.56 263.397H590.84C590.093 263.397 589.547 263.571 589.2 263.917C588.88 264.291 588.72 264.904 588.72 265.757V268.357H584V264.837C584 260.117 586.293 257.757 590.88 257.757H601.56V255.117H606.16V257.757H611.64V263.397H606.16V268.357H601.56V263.397ZM595.16 270.945C597.4 270.945 599.387 271.385 601.12 272.265C602.853 273.172 604.187 274.385 605.12 275.905C606.053 277.452 606.52 279.172 606.52 281.065C606.52 282.718 606.187 284.158 605.52 285.385C604.853 286.638 604.013 287.638 603 288.385H606.16V294.025H584V288.385H587.24C586.2 287.665 585.333 286.665 584.64 285.385C583.973 284.132 583.64 282.678 583.64 281.025C583.64 279.158 584.12 277.452 585.08 275.905C586.04 274.385 587.387 273.172 589.12 272.265C590.88 271.385 592.893 270.945 595.16 270.945ZM595.08 288.385C596.44 288.385 597.6 288.118 598.56 287.585C599.547 287.052 600.293 286.332 600.8 285.425C601.333 284.518 601.6 283.545 601.6 282.505C601.6 281.465 601.347 280.505 600.84 279.625C600.333 278.745 599.587 278.025 598.6 277.465C597.64 276.932 596.493 276.665 595.16 276.665C593.827 276.665 592.653 276.932 591.64 277.465C590.653 278.025 589.893 278.745 589.36 279.625C588.827 280.532 588.56 281.492 588.56 282.505C588.56 283.545 588.813 284.518 589.32 285.425C589.853 286.332 590.6 287.052 591.56 287.585C592.547 288.118 593.72 288.385 595.08 288.385ZM608.8 302.334C608.8 301.348 609.107 300.521 609.72 299.854C610.36 299.214 611.147 298.894 612.08 298.894C613.013 298.894 613.787 299.214 614.4 299.854C615.04 300.521 615.36 301.348 615.36 302.334C615.36 303.321 615.04 304.134 614.4 304.774C613.787 305.441 613.013 305.774 612.08 305.774C611.147 305.774 610.36 305.441 609.72 304.774C609.107 304.134 608.8 303.321 608.8 302.334ZM606.16 305.094H584V299.494H606.16V305.094ZM613.6 316.227H584V310.627H613.6V316.227ZM598.32 347.131C598.027 348.705 597.24 349.998 595.96 351.011C594.68 352.025 593.213 352.531 591.56 352.531C590.067 352.531 588.747 352.158 587.6 351.411C586.48 350.691 585.6 349.638 584.96 348.251C584.32 346.865 584 345.225 584 343.331V331.291H611.92V342.811C611.92 344.705 611.613 346.331 611 347.691C610.387 349.078 609.533 350.118 608.44 350.811C607.347 351.531 606.107 351.891 604.72 351.891C603.093 351.891 601.733 351.451 600.64 350.571C599.547 349.718 598.773 348.571 598.32 347.131ZM600.4 336.891V342.011C600.4 343.345 600.693 344.371 601.28 345.091C601.893 345.811 602.76 346.171 603.88 346.171C605 346.171 605.867 345.811 606.48 345.091C607.093 344.371 607.4 343.345 607.4 342.011V336.891H600.4ZM588.56 342.531C588.56 343.891 588.88 344.945 589.52 345.691C590.16 346.465 591.067 346.851 592.24 346.851C593.44 346.851 594.373 346.451 595.04 345.651C595.733 344.851 596.08 343.771 596.08 342.411V336.891H588.56V342.531ZM595.16 355.554C597.4 355.554 599.387 355.994 601.12 356.874C602.853 357.781 604.187 358.994 605.12 360.514C606.053 362.061 606.52 363.781 606.52 365.674C606.52 367.328 606.187 368.768 605.52 369.994C604.853 371.248 604.013 372.248 603 372.994H606.16V378.634H584V372.994H587.24C586.2 372.274 585.333 371.274 584.64 369.994C583.973 368.741 583.64 367.288 583.64 365.634C583.64 363.768 584.12 362.061 585.08 360.514C586.04 358.994 587.387 357.781 589.12 356.874C590.88 355.994 592.893 355.554 595.16 355.554ZM595.08 372.994C596.44 372.994 597.6 372.728 598.56 372.194C599.547 371.661 600.293 370.941 600.8 370.034C601.333 369.128 601.6 368.154 601.6 367.114C601.6 366.074 601.347 365.114 600.84 364.234C600.333 363.354 599.587 362.634 598.6 362.074C597.64 361.541 596.493 361.274 595.16 361.274C593.827 361.274 592.653 361.541 591.64 362.074C590.653 362.634 589.893 363.354 589.36 364.234C588.827 365.141 588.56 366.101 588.56 367.114C588.56 368.154 588.813 369.128 589.32 370.034C589.853 370.941 590.6 371.661 591.56 372.194C592.547 372.728 593.72 372.994 595.08 372.994ZM602.72 389.704C603.893 390.424 604.813 391.357 605.48 392.504C606.147 393.677 606.48 395.01 606.48 396.504H600.6V395.024C600.6 393.264 600.187 391.93 599.36 391.024C598.533 390.144 597.093 389.704 595.04 389.704H584V384.104H606.16V389.704H602.72Z"
              fill="#F3F4F1"
            />
          </g>
          <g id="Group 1174" onClick={() => ""}>
            <path
              id="Vector 697"
              d="M463.5 11H124V22.4014C124 39.0305 132.267 54.5715 146.057 63.8647L203.333 102.463C211.589 108.028 221.319 111 231.275 111H347.937C357.134 111 366.153 108.463 374.001 103.669L439.564 63.621C454.432 54.5393 463.5 38.3736 463.5 20.9517V11Z"
              fill="#F3F4F1"
              stroke="#F3F3F3"
              stroke-width="6"
            />
            <path
              id="Front Stage"
              d="M202.418 32.08V36.6H190.778V43.76H199.698V48.2H190.778V60H185.178V32.08H202.418ZM211.989 41.28C212.709 40.1067 213.642 39.1867 214.789 38.52C215.962 37.8533 217.296 37.52 218.789 37.52V43.4H217.309C215.549 43.4 214.216 43.8133 213.309 44.64C212.429 45.4667 211.989 46.9067 211.989 48.96V60H206.389V37.84H211.989V41.28ZM232.401 60.36C230.267 60.36 228.347 59.8933 226.641 58.96C224.934 58 223.587 56.6533 222.601 54.92C221.641 53.1867 221.161 51.1867 221.161 48.92C221.161 46.6533 221.654 44.6533 222.641 42.92C223.654 41.1867 225.027 39.8533 226.761 38.92C228.494 37.96 230.427 37.48 232.561 37.48C234.694 37.48 236.627 37.96 238.361 38.92C240.094 39.8533 241.454 41.1867 242.441 42.92C243.454 44.6533 243.961 46.6533 243.961 48.92C243.961 51.1867 243.441 53.1867 242.401 54.92C241.387 56.6533 240.001 58 238.241 58.96C236.507 59.8933 234.561 60.36 232.401 60.36ZM232.401 55.48C233.414 55.48 234.361 55.24 235.241 54.76C236.147 54.2533 236.867 53.5067 237.401 52.52C237.934 51.5333 238.201 50.3333 238.201 48.92C238.201 46.8133 237.641 45.2 236.521 44.08C235.427 42.9333 234.081 42.36 232.481 42.36C230.881 42.36 229.534 42.9333 228.441 44.08C227.374 45.2 226.841 46.8133 226.841 48.92C226.841 51.0267 227.361 52.6533 228.401 53.8C229.467 54.92 230.801 55.48 232.401 55.48ZM260.349 37.52C262.989 37.52 265.122 38.36 266.749 40.04C268.375 41.6933 269.189 44.0133 269.189 47V60H263.589V47.76C263.589 46 263.149 44.6533 262.269 43.72C261.389 42.76 260.189 42.28 258.669 42.28C257.122 42.28 255.895 42.76 254.989 43.72C254.109 44.6533 253.669 46 253.669 47.76V60H248.069V37.84H253.669V40.6C254.415 39.64 255.362 38.8933 256.509 38.36C257.682 37.8 258.962 37.52 260.349 37.52ZM281.034 42.44V53.16C281.034 53.9067 281.207 54.4533 281.554 54.8C281.927 55.12 282.541 55.28 283.394 55.28H285.994V60H282.474C277.754 60 275.394 57.7067 275.394 53.12V42.44H272.754V37.84H275.394V32.36H281.034V37.84H285.994V42.44H281.034ZM309.193 60.28C307.246 60.28 305.486 59.9467 303.913 59.28C302.366 58.6133 301.14 57.6533 300.233 56.4C299.326 55.1467 298.86 53.6667 298.833 51.96H304.833C304.913 53.1067 305.313 54.0133 306.033 54.68C306.78 55.3467 307.793 55.68 309.073 55.68C310.38 55.68 311.406 55.3733 312.153 54.76C312.9 54.12 313.273 53.2933 313.273 52.28C313.273 51.4533 313.02 50.7733 312.513 50.24C312.006 49.7067 311.366 49.2933 310.593 49C309.846 48.68 308.806 48.3333 307.473 47.96C305.66 47.4267 304.18 46.9067 303.033 46.4C301.913 45.8667 300.94 45.08 300.113 44.04C299.313 42.9733 298.913 41.56 298.913 39.8C298.913 38.1467 299.326 36.7067 300.153 35.48C300.98 34.2533 302.14 33.32 303.633 32.68C305.126 32.0133 306.833 31.68 308.753 31.68C311.633 31.68 313.966 32.3867 315.753 33.8C317.566 35.1867 318.566 37.1333 318.753 39.64H312.593C312.54 38.68 312.126 37.8933 311.353 37.28C310.606 36.64 309.606 36.32 308.353 36.32C307.26 36.32 306.38 36.6 305.713 37.16C305.073 37.72 304.753 38.5333 304.753 39.6C304.753 40.3467 304.993 40.9733 305.473 41.48C305.98 41.96 306.593 42.36 307.313 42.68C308.06 42.9733 309.1 43.32 310.433 43.72C312.246 44.2533 313.726 44.7867 314.873 45.32C316.02 45.8533 317.006 46.6533 317.833 47.72C318.66 48.7867 319.073 50.1867 319.073 51.92C319.073 53.4133 318.686 54.8 317.913 56.08C317.14 57.36 316.006 58.3867 314.513 59.16C313.02 59.9067 311.246 60.28 309.193 60.28ZM330.448 42.44V53.16C330.448 53.9067 330.621 54.4533 330.968 54.8C331.341 55.12 331.955 55.28 332.808 55.28H335.408V60H331.888C327.168 60 324.808 57.7067 324.808 53.12V42.44H322.168V37.84H324.808V32.36H330.448V37.84H335.408V42.44H330.448ZM337.996 48.84C337.996 46.6 338.436 44.6133 339.316 42.88C340.222 41.1467 341.436 39.8133 342.956 38.88C344.502 37.9467 346.222 37.48 348.116 37.48C349.769 37.48 351.209 37.8133 352.436 38.48C353.689 39.1467 354.689 39.9867 355.436 41V37.84H361.076V60H355.436V56.76C354.716 57.8 353.716 58.6667 352.436 59.36C351.182 60.0267 349.729 60.36 348.076 60.36C346.209 60.36 344.502 59.88 342.956 58.92C341.436 57.96 340.222 56.6133 339.316 54.88C338.436 53.12 337.996 51.1067 337.996 48.84ZM355.436 48.92C355.436 47.56 355.169 46.4 354.636 45.44C354.102 44.4533 353.382 43.7067 352.476 43.2C351.569 42.6667 350.596 42.4 349.556 42.4C348.516 42.4 347.556 42.6533 346.676 43.16C345.796 43.6667 345.076 44.4133 344.516 45.4C343.982 46.36 343.716 47.5067 343.716 48.84C343.716 50.1733 343.982 51.3467 344.516 52.36C345.076 53.3467 345.796 54.1067 346.676 54.64C347.582 55.1733 348.542 55.44 349.556 55.44C350.596 55.44 351.569 55.1867 352.476 54.68C353.382 54.1467 354.102 53.4 354.636 52.44C355.169 51.4533 355.436 50.28 355.436 48.92ZM375.225 37.48C376.878 37.48 378.332 37.8133 379.585 38.48C380.838 39.12 381.825 39.96 382.545 41V37.84H388.185V60.16C388.185 62.2133 387.772 64.04 386.945 65.64C386.118 67.2667 384.878 68.5467 383.225 69.48C381.572 70.44 379.572 70.92 377.225 70.92C374.078 70.92 371.492 70.1867 369.465 68.72C367.465 67.2533 366.332 65.2533 366.065 62.72H371.625C371.918 63.7333 372.545 64.5333 373.505 65.12C374.492 65.7333 375.678 66.04 377.065 66.04C378.692 66.04 380.012 65.5467 381.025 64.56C382.038 63.6 382.545 62.1333 382.545 60.16V56.72C381.825 57.76 380.825 58.6267 379.545 59.32C378.292 60.0133 376.852 60.36 375.225 60.36C373.358 60.36 371.652 59.88 370.105 58.92C368.558 57.96 367.332 56.6133 366.425 54.88C365.545 53.12 365.105 51.1067 365.105 48.84C365.105 46.6 365.545 44.6133 366.425 42.88C367.332 41.1467 368.545 39.8133 370.065 38.88C371.612 37.9467 373.332 37.48 375.225 37.48ZM382.545 48.92C382.545 47.56 382.278 46.4 381.745 45.44C381.212 44.4533 380.492 43.7067 379.585 43.2C378.678 42.6667 377.705 42.4 376.665 42.4C375.625 42.4 374.665 42.6533 373.785 43.16C372.905 43.6667 372.185 44.4133 371.625 45.4C371.092 46.36 370.825 47.5067 370.825 48.84C370.825 50.1733 371.092 51.3467 371.625 52.36C372.185 53.3467 372.905 54.1067 373.785 54.64C374.692 55.1733 375.652 55.44 376.665 55.44C377.705 55.44 378.678 55.1867 379.585 54.68C380.492 54.1467 381.212 53.4 381.745 52.44C382.278 51.4533 382.545 50.28 382.545 48.92ZM414.255 48.44C414.255 49.24 414.201 49.96 414.095 50.6H397.895C398.028 52.2 398.588 53.4533 399.575 54.36C400.561 55.2667 401.775 55.72 403.215 55.72C405.295 55.72 406.775 54.8267 407.655 53.04H413.695C413.055 55.1733 411.828 56.9333 410.015 58.32C408.201 59.68 405.975 60.36 403.335 60.36C401.201 60.36 399.281 59.8933 397.575 58.96C395.895 58 394.575 56.6533 393.615 54.92C392.681 53.1867 392.215 51.1867 392.215 48.92C392.215 46.6267 392.681 44.6133 393.615 42.88C394.548 41.1467 395.855 39.8133 397.535 38.88C399.215 37.9467 401.148 37.48 403.335 37.48C405.441 37.48 407.321 37.9333 408.975 38.84C410.655 39.7467 411.948 41.04 412.855 42.72C413.788 44.3733 414.255 46.28 414.255 48.44ZM408.455 46.84C408.428 45.4 407.908 44.2533 406.895 43.4C405.881 42.52 404.641 42.08 403.175 42.08C401.788 42.08 400.615 42.5067 399.655 43.36C398.721 44.1867 398.148 45.3467 397.935 46.84H408.455Z"
              fill="#363643"
            />
          </g>
        </g>
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern1"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern3"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern4"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern5"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern6"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern7"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern8"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern9"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern10"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern11"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern12"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern13"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern14"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern15"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern16"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern17"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern18"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern19"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern20"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern21"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern22"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern23"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern24"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern25"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern26"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern27"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern28"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern29"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern30"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern31"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern32"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern33"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern34"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern35"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern36"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern37"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern38"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern39"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern40"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern41"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern42"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern43"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <pattern
            id="pattern44"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image1_143_11949" transform="scale(0.0111111)" />
          </pattern>
          <clipPath id="clip0_143_11949">
            <rect width="678" height="526" fill="white" />
          </clipPath>
          <image
            id="image0_143_11949"
            width="90"
            height="90"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAFVElEQVR4nO2dTW/cVBSG3+NpZkrGnuzLDwDSSA0LCKFSkdi0QtmUpiyC1Agh6Ar+CxIrVklFg0SlthIgISHx0U2SFUFAyx9A7MfXKUlmfFiMR4rCfJzr8T1jZ+6zTK597n3kcew5554AHo/H4/F4PB6Px1NSaBpBmblhjLlLRBsAlpj5GMBfALbCMNwiouMCzv8BgE0ALxFRHcAfzHw/DMMviOho8lXYoS768PDwxW63+x2AK4N+T0T7RHSz2Wz+k/f8nU7nERG9NmTIQa1WW5ufn/87z/nzEmgGY+bGKMnZmJU0TR8ycz3H+etpmj4cIRkAlrvd7rfM3LA9/ySoXtFxHH8K4DPNmCP4JIqiz7WCqV7RRPS+ZrwxqM5F+9axqBlvDEuawVRFA0iV441CdS5qotvt9ioA6z9wDqlnc1JBRXS73V4lou8BXNSIJ+RiEAQ/xHF8TSOY86eOU5Jb0mOIaL/ZbF6zfXFh5jljzE8ArlrESpj5nSiKntjEssXpFZ1HMoA9IrqZ5+2QiE6CIHgPwJ70GGZuAvjG9W3E2RUtkNxh5gMiWgRwBOApM29HUbRdwCt4PY7jTSLaBLAIoAvgGYBVABeGTZmZb7Rard1JYg/DiWiB5C4R3QnDcMdF/GHEcXwLwFcA5gb93uVtpHDRZZXcZ1qyCxVddsl9piG7MNFVkdxHW3YhoqsmuY+m7IlFV1VyHy3ZVqLPZkaynwUAXhhySAfARhRFDyaZpGviOL4NYAfDH/2eA+gQUYCcmRqx6HGZkQFUQnIfgeyzWGVqRG+GkszIGSolGQCyuW6gN3cJVpkakWhjzF2cY8l98sg2xnwkGSgSbZkZ2a2i5D7Z3H+zOETkRnrrsMmMvGwxtqy8YjH2smSQ9Ns76UcJAGoWY8uKzZdaJ5JBUtHPLAI/tRhbVgpfr1T0tjQqM29Jx5aYwtcreo7OMhc/A3hz5MlyZkbKhov1Sp86ToIguE1E+yOG7ebNjJQNF+u1fQWvG2MGvnaGYdg4D5JPU+R6rXKGo0583iQDxa5Xu4BmZvGilfCilfCilfCilfCilfCilfCilfCilfCilfCilbASPWrvX559gWWnyPWKRSdJcilJkqHVOkmSPEmS5JJN8DJT9Hqlydm5NE0fMPPKiDErzPxIe0eqC1ysV1rX8SHGZBuy4K8bYzYl5ywzLtYrvXXcEY4Deh0Fqk7h65WKtqlzsBlbVgpfr1S0tPAPWW+MSkNEA0t4hyByI03Oims10jS1qYkoJWma2tSm/CkZJH3q+FIalYiWsxLYShLH8ToRvWpxyH3JIGldR8MYswdgWRi8khWlcRyvo1f9L66RDsNwpci6jqNarbYG4EA4gQsAdqp0ZeeRXKvV1lzWdXyMXqnqEgDOJlb1rRXjJD9Hb/ctAPwOYCfbWiEuOfCbhcZsFgLQTtP0+sLCgnh/+SAm/vau1WrtMvMNAO0hQ2rMfM8YszFprKI5dSU7lQzM9obOdfQ2BzmXDMzuFmVVycBsbrpXlwzMXhuJqUgGpt8Y5VciuoxeYxRnvUkBNNDbLnEF56kxSp+8/ZQc9yYdhFPJgOPkrODR739kmYvHOXuTznW73a9tJadpet2lZECpN2nOJlYaOLsnn0WtCWwm+0eUp/fdv8z8tusruY92t90YQKgZcwRxFEVqn7BZLqBhzWDabY3LtKtWdS7abY3FmRoFRJmRolC9R1tkavbCMHwrR2/SujHmFwBvjBkqzowUhfatQ5Kp2QuC4N2cvUmPgyC4hdG9Sa0yI0UxrX8PcjZTcwK3vUnnkDMz4vF4PB6Px+PxeDznnv8AgiYksqroi3wAAAAASUVORK5CYII="
          />
          <image
            id="image1_143_11949"
            width="90"
            height="90"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAADoElEQVR4nO3av2sUQRQH8O+7FTwve4EUCYJBgloEEf03/IU/sBOtBO0ULCwVLW1EFLSxUssQI+rfoKWVlRI02qRQMrO3W+zsszkUjj3dy8w87873gTSXnTc73zw2s7sHKKWUUkoppZRSSk0PilU4z/O9ZVmeBnACwBIRLTLzTKz5toOIMmbeALAO4FWSJGudTudLlLlCF+z1enucczcBXAKQhK4fWQVgpSzLG3Nzc+shCwcNemtr6wwRPQWQhqz7DxhmvjA7O/syVMFWqELW2mtEtILJDxkAukS0aoy5GqpgkI7ud/IKAv7hxkTFzGdDdLZ30L1eb9E59wHT0cl1TKvVWp6ZmfnmU8S7A6uquoPpDRkAulVV3fYt4tXR/S3cJ0ze7mJULkmSpU6ns7HdAl4dXZblGUx/yACQOOdO+xTwCpqZj/mMnyTMfNxnvFfQRHTAZ/wkIaL9PuN9/xnu9hw/Sfb4DPYNepp3G4O81jptNxhjS4MWokEL0aCFaNBCNGghGrQQDVqIV9BZlqXMvExERwE8BBDlxeY/8hnAAyI6yszLWZZ53bAEfWfIzC1r7TkiusvMSyFrC/oK4E6apk+IyIUqGuXrBpubm912u/0MwKkY9SN6kef5xYWFBRu6cLTvdfS7+x6AYC84I7ufpul1IqpiFI8WNPAr7FWMf2e/SNP0XKyQgci7DiKqiqK4AMDrxWZkG3meX4wZMjBi0MzcttZes9a+s7+9NcZcZeaddWPm5+cNM98Kc7rhMfOtYdfk7ax3mMaXjv7XCl4DODzkkPdJkpyse4HJzIm1dh3A4ignJ+Bzmqb76nYXPuut06ijmbn9l0kB4Ihz7lXdX7q/kLUmcwlbqwvZd711GgWdZdmVv0z6a3Jr7eXaiVqtN03mkkREtecUYr2Dml6jzzc8buixzrmPI9QQUVXVpyG/8l7voKaXjoMjTHyo7sOiKL6OUENEURS1u6EQ6x3UtKNHuc+vPTbG3ZavP5yT93oH6dM7IRq0EA1aiAYtRIMWskNysm63G/Vp4TjTjhaiQQvRoIVo0EI0aCFRdh3GGI5Rd5JpRwvRoIVo0EI0aCEatBANWogGLUSDFqJBC9GghWjQQjRoIRq0EA1aiNdj0v/tZavP41/taCEatJCmQf+o+ex7yBOZENvOoWnQz2s+e9Zw7DSJmwMz7zLGPDbGZP2fR8y8K9gEE0IsB2YmZv6vdhp1NAellFJKKaWUUmps/QTIuYkhln17TgAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
    </Flex>
  );
}
