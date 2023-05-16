import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Regular",
    backgroundColor: "#FFFFFF",
    // alignItems: "center",
    // justifyContent: "center",
  },
  badge: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    marginBottom: 33,
    color: "#212121",
    textAlign: "center",
    lineHeight: 35,
    fontSize: 30,
    letterSpacing: 0.01,
    fontFamily: "Medium",
  },
  image: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    top: -152,
    alignSelf: "center",
  },
  iconButton: {
    position: "absolute",
    left: 108,
    top: 80,
    width: 25,
    height: 25,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FF6C00",
  },
  text: {
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
  },
  linkText: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
  },
  formContainer: {
    display: "flex",
    gap: 16,
    marginBottom: 43,
  },
  input: {
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  button: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Regular",
    textAlign: "center",
    backgroundColor: "#FF6C00",
    padding: 16,
    borderRadius: 100,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignSelf: "center",
  },
  linkText: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
  },
});
