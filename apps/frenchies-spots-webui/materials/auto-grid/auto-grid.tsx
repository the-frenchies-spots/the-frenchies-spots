import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

interface AutoGrid<TData> {
  data: TData[];
  column: number;
  onRender: (data: TData) => ReactNode;
  colStyle?: Record<string, string | number>;
  rowStyle?: Record<string, string | number>;
  colSize?: number;
  rowSize?: number;
}

function gridRender<TData>(
  data: TData[],
  column: number = 3,
  onRender: (data: TData) => ReactNode,
  colStyle?: Record<string, string | number>,
  rowStyle?: Record<string, string | number>,
  colSize?: number,
  rowSize?: number
) {
  let reformatData: TData[][] = [];
  let valueData: TData[] = [];

  data.forEach((value, index) => {
    valueData.push(value);
    let id = index + 1;
    if (id % column === 0) {
      reformatData.push(valueData);
      valueData = [];
    }
  });

  return reformatData.map((row, rowIndex) => {
    return (
      <Row key={rowIndex} style={rowStyle} size={rowSize}>
        {row.map((column, columnIndex) => {
          return (
            <Col key={columnIndex} style={colStyle} size={colSize}>
              {onRender(column)}
            </Col>
          );
        })}
      </Row>
    );
  });
}

export function AutoGrid<TData>(props: AutoGrid<TData>) {
  const { data, column, onRender, colStyle, rowStyle, colSize, rowSize } =
    props;
  return (
    <Grid>
      {gridRender(data, column, onRender, colStyle, rowStyle, colSize, rowSize)}
    </Grid>
  );
}
