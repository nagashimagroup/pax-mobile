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
      return "#3e6eb3";
    case "SHIP":
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
      return "受";
    case "PACK":
      return "梱";
    case "SHIP":
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
      return "梱包";
    case "SHIP":
      return "出荷";
    case "INVOICE":
      return "請求";
    default:
      return "?";
  }
}

export function getStatusFromTabIndex(index: number) {
  switch (index) {
    case 1:
      return "STOCK";
    case 2:
      return "PACK";
    case 3:
      return "SHIP";
    default:
      return "DETAIL";
  }
}

export function getTabIndex(status: Status) {
  switch (status) {
    case "QUOTE":
      return 0;
    case "STOCK":
      return 1;
    case "ORDER":
      return 0;
    case "PACK":
      return 2;
    case "SHIP":
      return 3;
    case "INVOICE":
      return 0;
    default:
      return 0;
  }
}
