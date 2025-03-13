export const NAVBAR_DROPLISTS = [
    {
      header : "Gadgets",
      elements : ["Wallets", "Budgets", "Reports", "Calculators", "Coinage"],
      linkTitles : ["User Wallets", "User Budgets", "Reports", "Calculators", "Coinage"],
      linkTo : ["/user/wallets", "/user/budgets", "user/report/all", "user/tax/", "user/resources/currencies"],
    },
    {
      header : "Accounts",
      elements : ["Bank", "FinanSage", "Merchant"],
      linkTitles : ["Bank", "FinanSage", "Merchant"],
      linkTo : ["user/accounts/bank", "user/account/finanSage", "merchant/login"],
    },
    {
      header : "Transactions",
      elements : ["Send Money", "Make Payment", "Pay Bill", "Cash Out"],
      linkTitles : ["Send Money", "Make Payment", "Pay Bill", "Cash Out"],
      linkTo : ["user/transactions/send/money", "user/transactions/make/pay", "user/transactions/bill/pay", "user/transactions/cashout"],
    },
    {
      header : "Resource Hub",
      elements : ["Articles", "Insights"],
      linkTitles : ["Articles", "Insights"],
      linkTo : ["user/resources/articles", "user/resources/business"],
    },
    {
      header : "Connect",
      elements : ["FinanCom", "Market Trends", "News Portal"],
      linkTitles : ["FinanCom", "Market Trends", "News Portal"],
      linkTo : ["user/financom", "user/news", "user/news"],
    },
  ]