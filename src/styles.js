import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  badge: {
    flex: 1,
    padding: "32 16",
    backgroundColor: "#FFFFFF",
    borderRadius: "25 25 0 0",
  },
  title: {
    marginBottom: 33,
    color: "#212121",
    textAlign: "center",
    lineHeight: 35,
    fontSize: 30,
    fontWeight: "500",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  text: {
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
  },
  linkText: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
  },
  input: {
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    textAlign: "center",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    placeholder: "#BDBDBD",
    //   :active {
    // borderColor: "#FF6C00",
    //   backgroundColor: "#F6F6F6",
    //   }
  },
  button: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    textAlign: "center",
    backgroundColor: "#FF6C00",
    padding: "16 32",
    borderRadius: 100,
    marginBottom: 16,
  },
  iconButton: {
    width: 25,
    height: 25,
    borderRadius: 12,
    border: "1px solid #FF6C00",
  },
});
