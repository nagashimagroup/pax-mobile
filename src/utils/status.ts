type Status =
  | "QUOTE"
  | "STOCK"
  | "ORDER"
  | "PACK"
  | "INVOICE"
  | string
  | null
  | undefined;

export function getStatusColor(status: Status) {
  switch (status) {
    case "QUOTE":
      return "#777";
    case "STOCK":
      return "#348255";
    case "ORDER":
      return "#3e6eb3";
    case "PACK":
      return "#d18643";
    case "INVOICE":
      return "#bd3993";
    default:
      return "#000";
  }
}

export function getStatusInitial(status: Status) {
  switch (status) {
    case "QUOTE":
      return "見";
    case "STOCK":
      return "入";
    case "ORDER":
      return "梱";
    case "PACK":
      return "出";
    case "INVOICE":
      return "請";
    default:
      return "?";
  }
}

export function getStatusText(status: Status) {
  switch (status) {
    case "QUOTE":
      return "見積";
    case "STOCK":
      return "入荷";
    case "ORDER":
      return "梱包";
    case "PACK":
      return "出荷";
    case "INVOICE":
      return "請求";
    default:
      return "?";
  }
}
