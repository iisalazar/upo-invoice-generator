import React, { ReactElement } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

import sampleData from "./sample-data";
import { colors, text } from "../styles";

const table = StyleSheet.create({
  header: {
    backgroundColor: colors.brand,
    justifyContent: "center",
    alignItems: "center",
    color: colors.white,
    height: 20,
  },
  cell: {
    border: 0.5,
    borderColor: colors.black,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  table: {
    marginHorizontal: 50,
    marginTop: 15,
  },
  row: {
    flexDirection: "row",
  },
  col5: {
    flex: 5,
  },
  col1: {
    flex: 1,
  },
  col2: {
    flex: 2,
  },
});

export default function Table(): ReactElement | null {
  return (
    <View style={table.table}>
      <View style={table.row}>
        <View style={[table.header, table.col1]}>
          <Text style={text.subtitle}>Qty</Text>
        </View>
        <View style={[table.header, table.col5]}>
          <Text style={text.subtitle}>Item Description</Text>
        </View>
        <View style={[table.header, table.col2]}>
          <Text style={text.subtitle}>Price</Text>
        </View>
        <View style={[table.header, table.col2]}>
          <Text style={text.subtitle}>Total</Text>
        </View>
      </View>
      {/* random data */}
      {sampleData.map((data) => (
        <View style={table.row}>
          <View style={[table.cell, table.col1]}>
            <Text style={text.paragraph}>{data.quantity}</Text>
          </View>
          <View style={[table.cell, table.col5]}>
            <Text style={text.paragraph}>{data.itemDescription}</Text>
          </View>
          <View style={[table.cell, table.col2]}>
            <Text style={text.paragraph}>{data.price}</Text>
          </View>
          <View style={[table.cell, table.col2]}>
            <Text style={text.paragraph}>{data.amount}</Text>
          </View>
        </View>
      ))}
      {/* Tabl footer */}
      <View style={table.row}>
        <View style={table.col1} />
        <View style={table.col5} />
        <View style={[table.col2, table.header]}>
          <Text style={text.subtitle}>TOTAL</Text>
        </View>
        <View style={[table.col2, table.cell]}>
          <Text style={text.paragraph}>50</Text>
        </View>
      </View>
    </View>
  );
}
