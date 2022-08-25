/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type InviteAdminInput = {
  tenantId: string,
  firstName: string,
  lastName: string,
  email: string,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  firstName: string,
  lastName: string,
  email: string,
  showTutorial: boolean,
  invited: boolean,
  verified: boolean,
  fontSize?: number | null,
  language?: string | null,
  receiveEmailNotification: boolean,
  theme?: string | null,
  useMfa: boolean,
  customId?: string | null,
  configuration?: Configuration | null,
  tenantId: string,
  isAdmin: boolean,
  createdAt: string,
  updatedAt: string,
  tenant?: Tenant | null,
  accessLogs?: ModelAccessLogConnection | null,
  groups?: ModelUsersGroupsConnection | null,
};

export type Configuration = {
  __typename: "Configuration",
  projectFilter?: ProjectFilter | null,
};

export type ProjectFilter = {
  __typename: "ProjectFilter",
  name?: string | null,
  duration?: string | null,
  sort?: string | null,
  showProcesses?: Array< string | null > | null,
  showUnits?: Array< string | null > | null,
  showPhases?: Array< string | null > | null,
};

export type Tenant = {
  __typename: "Tenant",
  id: string,
  name: string,
  logoUrl?: string | null,
  address?: string | null,
  phone?: string | null,
  syncSFObject?: boolean | null,
  sfLoginUrl?: string | null,
  sfUsername?: string | null,
  sfPassword?: string | null,
  sfSecretToken?: string | null,
  projectFilters?:  Array<ProjectFilter | null > | null,
  createdAt: string,
  updatedAt: string,
  accounts?: ModelAccountConnection | null,
  contacts?: ModelContactConnection | null,
  users?: ModelUserConnection | null,
  groups?: ModelGroupConnection | null,
  sfObjects?: ModelSFObjectConnection | null,
};

export type ModelAccountConnection = {
  __typename: "ModelAccountConnection",
  items:  Array<Account | null >,
  nextToken?: string | null,
};

export type Account = {
  __typename: "Account",
  id: string,
  tenantId: string,
  name: string,
  abbreviation?: string | null,
  site?: string | null,
  billingAddress?: string | null,
  billingStreet?: string | null,
  billingCity?: string | null,
  billingState?: string | null,
  billingPostalCode?: string | null,
  billingCountry?: string | null,
  billingType?: string | null,
  fax?: string | null,
  customeCode?: string | null,
  cutoffDateText?: string | null,
  cutoffDateNumber?: number | null,
  paymentMonthText?: string | null,
  paymentMonthNumber?: number | null,
  paymentDateText?: string | null,
  paymentDateNumber?: number | null,
  invoiceUnit?: string | null,
  invoiceMethod?: string | null,
  createdAt: string,
  updatedAt: string,
  contacts?: ModelContactConnection | null,
};

export type ModelContactConnection = {
  __typename: "ModelContactConnection",
  items:  Array<Contact | null >,
  nextToken?: string | null,
};

export type Contact = {
  __typename: "Contact",
  id: string,
  accountId: string,
  tenantId: string,
  name?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  suffix?: string | null,
  email?: string | null,
  phone?: string | null,
  mobilePhone?: string | null,
  title?: string | null,
  retired?: boolean | null,
  customeCode?: string | null,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
  account?: Account | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelGroupConnection = {
  __typename: "ModelGroupConnection",
  items:  Array<Group | null >,
  nextToken?: string | null,
};

export type Group = {
  __typename: "Group",
  id: string,
  name: string,
  phone?: string | null,
  fax?: string | null,
  email?: string | null,
  logoUrl?: string | null,
  groupAddress?: Address | null,
  quoteInfo?: QuoteData | null,
  bank?: Bank | null,
  taxRate?: number | null,
  maxInventoryM3?: number | null,
  heatTreatmentRequestCode?: string | null,
  packingMaterialProducerRegistrationNumber?: string | null,
  tenantId: string,
  createdAt: string,
  updatedAt: string,
  tenant?: Tenant | null,
  users?: ModelUsersGroupsConnection | null,
};

export type Address = {
  __typename: "Address",
  address?: string | null,
  street?: string | null,
  city?: string | null,
  state?: string | null,
  postalCode?: string | null,
  country?: string | null,
};

export type QuoteData = {
  __typename: "QuoteData",
  greeting?: string | null,
  paymentMethod?: string | null,
  destination?: string | null,
  dueDate?: string | null,
  expiryDate?: string | null,
  description?: string | null,
};

export type Bank = {
  __typename: "Bank",
  name?: string | null,
  branchName?: string | null,
  branchNumber?: string | null,
  type?: string | null,
  accountNumber?: string | null,
  swiftCode?: string | null,
};

export type ModelUsersGroupsConnection = {
  __typename: "ModelUsersGroupsConnection",
  items:  Array<UsersGroups | null >,
  nextToken?: string | null,
};

export type UsersGroups = {
  __typename: "UsersGroups",
  id: string,
  userId: string,
  groupId: string,
  role?: string | null,
  createdAt: string,
  updatedAt: string,
  user?: User | null,
  group?: Group | null,
};

export type ModelSFObjectConnection = {
  __typename: "ModelSFObjectConnection",
  items:  Array<SFObject | null >,
  nextToken?: string | null,
};

export type SFObject = {
  __typename: "SFObject",
  id: string,
  name: string,
  tenantId: string,
  label?: string | null,
  sfObjectName?: string | null,
  editable: boolean,
  condition?: string | null,
  fields?:  Array<SFField | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type SFField = {
  __typename: "SFField",
  name: string,
  label?: string | null,
  apiName?: string | null,
  type?: string | null,
  required?: boolean | null,
};

export type ModelAccessLogConnection = {
  __typename: "ModelAccessLogConnection",
  items:  Array<AccessLog | null >,
  nextToken?: string | null,
};

export type AccessLog = {
  __typename: "AccessLog",
  id: string,
  device?: string | null,
  ipAddress?: string | null,
  description?: string | null,
  userId: string,
  createdAt: string,
  updatedAt: string,
  user?: User | null,
};

export type InviteUserInput = {
  tenantId: string,
  firstName: string,
  lastName: string,
  email: string,
  isAdmin: boolean,
};

export type RemoveUserInput = {
  id: string,
};

export type SyncTenantInput = {
  tenantId: string,
};

export type SyncObjectInput = {
  sfObjectId: string,
};

export type CreateMetaTableInput = {
  id?: string | null,
  name: string,
  label?: string | null,
  fields?: Array< MetaTableFieldInput | null > | null,
};

export type MetaTableFieldInput = {
  name: string,
  label?: string | null,
  type?: string | null,
  required?: boolean | null,
};

export type ModelMetaTableConditionInput = {
  name?: ModelStringInput | null,
  label?: ModelStringInput | null,
  and?: Array< ModelMetaTableConditionInput | null > | null,
  or?: Array< ModelMetaTableConditionInput | null > | null,
  not?: ModelMetaTableConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type MetaTable = {
  __typename: "MetaTable",
  id: string,
  name: string,
  label?: string | null,
  fields?:  Array<MetaTableField | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type MetaTableField = {
  __typename: "MetaTableField",
  name: string,
  label?: string | null,
  type?: string | null,
  required?: boolean | null,
};

export type UpdateMetaTableInput = {
  id: string,
  name?: string | null,
  label?: string | null,
  fields?: Array< MetaTableFieldInput | null > | null,
};

export type DeleteMetaTableInput = {
  id: string,
};

export type CreateTenantInput = {
  id?: string | null,
  name: string,
  logoUrl?: string | null,
  address?: string | null,
  phone?: string | null,
  syncSFObject?: boolean | null,
  sfLoginUrl?: string | null,
  sfUsername?: string | null,
  sfPassword?: string | null,
  sfSecretToken?: string | null,
  projectFilters?: Array< ProjectFilterInput | null > | null,
};

export type ProjectFilterInput = {
  name?: string | null,
  duration?: string | null,
  sort?: string | null,
  showProcesses?: Array< string | null > | null,
  showUnits?: Array< string | null > | null,
  showPhases?: Array< string | null > | null,
};

export type ModelTenantConditionInput = {
  name?: ModelStringInput | null,
  logoUrl?: ModelStringInput | null,
  address?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  syncSFObject?: ModelBooleanInput | null,
  sfLoginUrl?: ModelStringInput | null,
  sfUsername?: ModelStringInput | null,
  sfPassword?: ModelStringInput | null,
  sfSecretToken?: ModelStringInput | null,
  and?: Array< ModelTenantConditionInput | null > | null,
  or?: Array< ModelTenantConditionInput | null > | null,
  not?: ModelTenantConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateTenantInput = {
  id: string,
  name?: string | null,
  logoUrl?: string | null,
  address?: string | null,
  phone?: string | null,
  syncSFObject?: boolean | null,
  sfLoginUrl?: string | null,
  sfUsername?: string | null,
  sfPassword?: string | null,
  sfSecretToken?: string | null,
  projectFilters?: Array< ProjectFilterInput | null > | null,
};

export type DeleteTenantInput = {
  id: string,
};

export type CreateAccountInput = {
  id?: string | null,
  tenantId: string,
  name: string,
  abbreviation?: string | null,
  site?: string | null,
  billingAddress?: string | null,
  billingStreet?: string | null,
  billingCity?: string | null,
  billingState?: string | null,
  billingPostalCode?: string | null,
  billingCountry?: string | null,
  billingType?: string | null,
  fax?: string | null,
  customeCode?: string | null,
  cutoffDateText?: string | null,
  cutoffDateNumber?: number | null,
  paymentMonthText?: string | null,
  paymentMonthNumber?: number | null,
  paymentDateText?: string | null,
  paymentDateNumber?: number | null,
  invoiceUnit?: string | null,
  invoiceMethod?: string | null,
};

export type ModelAccountConditionInput = {
  tenantId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  abbreviation?: ModelStringInput | null,
  site?: ModelStringInput | null,
  billingAddress?: ModelStringInput | null,
  billingStreet?: ModelStringInput | null,
  billingCity?: ModelStringInput | null,
  billingState?: ModelStringInput | null,
  billingPostalCode?: ModelStringInput | null,
  billingCountry?: ModelStringInput | null,
  billingType?: ModelStringInput | null,
  fax?: ModelStringInput | null,
  customeCode?: ModelStringInput | null,
  cutoffDateText?: ModelStringInput | null,
  cutoffDateNumber?: ModelIntInput | null,
  paymentMonthText?: ModelStringInput | null,
  paymentMonthNumber?: ModelIntInput | null,
  paymentDateText?: ModelStringInput | null,
  paymentDateNumber?: ModelIntInput | null,
  invoiceUnit?: ModelStringInput | null,
  invoiceMethod?: ModelStringInput | null,
  and?: Array< ModelAccountConditionInput | null > | null,
  or?: Array< ModelAccountConditionInput | null > | null,
  not?: ModelAccountConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateAccountInput = {
  id: string,
  tenantId?: string | null,
  name?: string | null,
  abbreviation?: string | null,
  site?: string | null,
  billingAddress?: string | null,
  billingStreet?: string | null,
  billingCity?: string | null,
  billingState?: string | null,
  billingPostalCode?: string | null,
  billingCountry?: string | null,
  billingType?: string | null,
  fax?: string | null,
  customeCode?: string | null,
  cutoffDateText?: string | null,
  cutoffDateNumber?: number | null,
  paymentMonthText?: string | null,
  paymentMonthNumber?: number | null,
  paymentDateText?: string | null,
  paymentDateNumber?: number | null,
  invoiceUnit?: string | null,
  invoiceMethod?: string | null,
};

export type DeleteAccountInput = {
  id: string,
};

export type CreateClientInput = {
  id?: string | null,
  accountId: string,
  name: string,
  abbreviation?: string | null,
  site?: string | null,
  billingAddress?: string | null,
  billingStreet?: string | null,
  billingCity?: string | null,
  billingState?: string | null,
  billingPostalCode?: string | null,
  billingCountry?: string | null,
  billingType?: string | null,
  phone?: string | null,
  fax?: string | null,
  customeCode?: string | null,
};

export type ModelClientConditionInput = {
  accountId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  abbreviation?: ModelStringInput | null,
  site?: ModelStringInput | null,
  billingAddress?: ModelStringInput | null,
  billingStreet?: ModelStringInput | null,
  billingCity?: ModelStringInput | null,
  billingState?: ModelStringInput | null,
  billingPostalCode?: ModelStringInput | null,
  billingCountry?: ModelStringInput | null,
  billingType?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  fax?: ModelStringInput | null,
  customeCode?: ModelStringInput | null,
  and?: Array< ModelClientConditionInput | null > | null,
  or?: Array< ModelClientConditionInput | null > | null,
  not?: ModelClientConditionInput | null,
};

export type Client = {
  __typename: "Client",
  id: string,
  accountId: string,
  name: string,
  abbreviation?: string | null,
  site?: string | null,
  billingAddress?: string | null,
  billingStreet?: string | null,
  billingCity?: string | null,
  billingState?: string | null,
  billingPostalCode?: string | null,
  billingCountry?: string | null,
  billingType?: string | null,
  phone?: string | null,
  fax?: string | null,
  customeCode?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateClientInput = {
  id: string,
  accountId?: string | null,
  name?: string | null,
  abbreviation?: string | null,
  site?: string | null,
  billingAddress?: string | null,
  billingStreet?: string | null,
  billingCity?: string | null,
  billingState?: string | null,
  billingPostalCode?: string | null,
  billingCountry?: string | null,
  billingType?: string | null,
  phone?: string | null,
  fax?: string | null,
  customeCode?: string | null,
};

export type DeleteClientInput = {
  id: string,
};

export type CreateContactInput = {
  id?: string | null,
  accountId: string,
  tenantId: string,
  name?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  suffix?: string | null,
  email?: string | null,
  phone?: string | null,
  mobilePhone?: string | null,
  title?: string | null,
  retired?: boolean | null,
  customeCode?: string | null,
  description?: string | null,
};

export type ModelContactConditionInput = {
  accountId?: ModelIDInput | null,
  tenantId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  suffix?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  mobilePhone?: ModelStringInput | null,
  title?: ModelStringInput | null,
  retired?: ModelBooleanInput | null,
  customeCode?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelContactConditionInput | null > | null,
  or?: Array< ModelContactConditionInput | null > | null,
  not?: ModelContactConditionInput | null,
};

export type UpdateContactInput = {
  id: string,
  accountId?: string | null,
  tenantId?: string | null,
  name?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  suffix?: string | null,
  email?: string | null,
  phone?: string | null,
  mobilePhone?: string | null,
  title?: string | null,
  retired?: boolean | null,
  customeCode?: string | null,
  description?: string | null,
};

export type DeleteContactInput = {
  id: string,
};

export type CreateUnitInput = {
  id?: string | null,
  name: string,
  tenantId: string,
};

export type ModelUnitConditionInput = {
  name?: ModelStringInput | null,
  tenantId?: ModelIDInput | null,
  and?: Array< ModelUnitConditionInput | null > | null,
  or?: Array< ModelUnitConditionInput | null > | null,
  not?: ModelUnitConditionInput | null,
};

export type Unit = {
  __typename: "Unit",
  id: string,
  name: string,
  tenantId: string,
  createdAt: string,
  updatedAt: string,
  tenant?: Tenant | null,
};

export type UpdateUnitInput = {
  id: string,
  name?: string | null,
  tenantId?: string | null,
};

export type DeleteUnitInput = {
  id: string,
};

export type CreateAccessLogInput = {
  id?: string | null,
  device?: string | null,
  ipAddress?: string | null,
  description?: string | null,
  userId: string,
};

export type ModelAccessLogConditionInput = {
  device?: ModelStringInput | null,
  ipAddress?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelAccessLogConditionInput | null > | null,
  or?: Array< ModelAccessLogConditionInput | null > | null,
  not?: ModelAccessLogConditionInput | null,
};

export type UpdateAccessLogInput = {
  id: string,
  device?: string | null,
  ipAddress?: string | null,
  description?: string | null,
  userId?: string | null,
};

export type DeleteAccessLogInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  firstName: string,
  lastName: string,
  email: string,
  showTutorial: boolean,
  invited: boolean,
  verified: boolean,
  fontSize?: number | null,
  language?: string | null,
  receiveEmailNotification: boolean,
  theme?: string | null,
  useMfa: boolean,
  customId?: string | null,
  configuration?: ConfigurationInput | null,
  tenantId: string,
  isAdmin: boolean,
  createdAt?: string | null,
};

export type ConfigurationInput = {
  projectFilter?: ProjectFilterInput | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  showTutorial?: ModelBooleanInput | null,
  invited?: ModelBooleanInput | null,
  verified?: ModelBooleanInput | null,
  fontSize?: ModelIntInput | null,
  language?: ModelStringInput | null,
  receiveEmailNotification?: ModelBooleanInput | null,
  theme?: ModelStringInput | null,
  useMfa?: ModelBooleanInput | null,
  customId?: ModelStringInput | null,
  tenantId?: ModelIDInput | null,
  isAdmin?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  showTutorial?: boolean | null,
  invited?: boolean | null,
  verified?: boolean | null,
  fontSize?: number | null,
  language?: string | null,
  receiveEmailNotification?: boolean | null,
  theme?: string | null,
  useMfa?: boolean | null,
  customId?: string | null,
  configuration?: ConfigurationInput | null,
  tenantId?: string | null,
  isAdmin?: boolean | null,
  createdAt?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateGroupInput = {
  id?: string | null,
  name: string,
  phone?: string | null,
  fax?: string | null,
  email?: string | null,
  logoUrl?: string | null,
  groupAddress?: AddressInput | null,
  quoteInfo?: QuoteDataInput | null,
  bank?: BankInput | null,
  taxRate?: number | null,
  maxInventoryM3?: number | null,
  heatTreatmentRequestCode?: string | null,
  packingMaterialProducerRegistrationNumber?: string | null,
  tenantId: string,
};

export type AddressInput = {
  address?: string | null,
  street?: string | null,
  city?: string | null,
  state?: string | null,
  postalCode?: string | null,
  country?: string | null,
};

export type QuoteDataInput = {
  greeting?: string | null,
  paymentMethod?: string | null,
  destination?: string | null,
  dueDate?: string | null,
  expiryDate?: string | null,
  description?: string | null,
};

export type BankInput = {
  name?: string | null,
  branchName?: string | null,
  branchNumber?: string | null,
  type?: string | null,
  accountNumber?: string | null,
  swiftCode?: string | null,
};

export type ModelGroupConditionInput = {
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  fax?: ModelStringInput | null,
  email?: ModelStringInput | null,
  logoUrl?: ModelStringInput | null,
  taxRate?: ModelFloatInput | null,
  maxInventoryM3?: ModelFloatInput | null,
  heatTreatmentRequestCode?: ModelStringInput | null,
  packingMaterialProducerRegistrationNumber?: ModelStringInput | null,
  tenantId?: ModelIDInput | null,
  and?: Array< ModelGroupConditionInput | null > | null,
  or?: Array< ModelGroupConditionInput | null > | null,
  not?: ModelGroupConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateGroupInput = {
  id: string,
  name?: string | null,
  phone?: string | null,
  fax?: string | null,
  email?: string | null,
  logoUrl?: string | null,
  groupAddress?: AddressInput | null,
  quoteInfo?: QuoteDataInput | null,
  bank?: BankInput | null,
  taxRate?: number | null,
  maxInventoryM3?: number | null,
  heatTreatmentRequestCode?: string | null,
  packingMaterialProducerRegistrationNumber?: string | null,
  tenantId?: string | null,
};

export type DeleteGroupInput = {
  id: string,
};

export type CreateUsersGroupsInput = {
  id?: string | null,
  userId: string,
  groupId: string,
  role?: string | null,
};

export type ModelUsersGroupsConditionInput = {
  userId?: ModelIDInput | null,
  groupId?: ModelIDInput | null,
  role?: ModelStringInput | null,
  and?: Array< ModelUsersGroupsConditionInput | null > | null,
  or?: Array< ModelUsersGroupsConditionInput | null > | null,
  not?: ModelUsersGroupsConditionInput | null,
};

export type UpdateUsersGroupsInput = {
  id: string,
  userId?: string | null,
  groupId?: string | null,
  role?: string | null,
};

export type DeleteUsersGroupsInput = {
  id: string,
};

export type CreateSFObjectInput = {
  id?: string | null,
  name: string,
  tenantId: string,
  label?: string | null,
  sfObjectName?: string | null,
  editable: boolean,
  condition?: string | null,
  fields?: Array< SFFieldInput | null > | null,
};

export type SFFieldInput = {
  name: string,
  label?: string | null,
  apiName?: string | null,
  type?: string | null,
  required?: boolean | null,
};

export type ModelSFObjectConditionInput = {
  name?: ModelStringInput | null,
  tenantId?: ModelIDInput | null,
  label?: ModelStringInput | null,
  sfObjectName?: ModelStringInput | null,
  editable?: ModelBooleanInput | null,
  condition?: ModelStringInput | null,
  and?: Array< ModelSFObjectConditionInput | null > | null,
  or?: Array< ModelSFObjectConditionInput | null > | null,
  not?: ModelSFObjectConditionInput | null,
};

export type UpdateSFObjectInput = {
  id: string,
  name?: string | null,
  tenantId?: string | null,
  label?: string | null,
  sfObjectName?: string | null,
  editable?: boolean | null,
  condition?: string | null,
  fields?: Array< SFFieldInput | null > | null,
};

export type DeleteSFObjectInput = {
  id: string,
};

export type CreateVendorInput = {
  id?: string | null,
  name: string,
  tenantId: string,
  abbreviation?: string | null,
  site?: string | null,
  disinfectantCertificationCode?: string | null,
  billingAddress?: string | null,
  billingPostalCode?: string | null,
  billingCountry?: string | null,
  billingState?: string | null,
  billingStreet?: string | null,
  billingType?: string | null,
  phone?: string | null,
  fax?: string | null,
  customCode?: string | null,
};

export type ModelVendorConditionInput = {
  name?: ModelStringInput | null,
  tenantId?: ModelIDInput | null,
  abbreviation?: ModelStringInput | null,
  site?: ModelStringInput | null,
  disinfectantCertificationCode?: ModelStringInput | null,
  billingAddress?: ModelStringInput | null,
  billingPostalCode?: ModelStringInput | null,
  billingCountry?: ModelStringInput | null,
  billingState?: ModelStringInput | null,
  billingStreet?: ModelStringInput | null,
  billingType?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  fax?: ModelStringInput | null,
  customCode?: ModelStringInput | null,
  and?: Array< ModelVendorConditionInput | null > | null,
  or?: Array< ModelVendorConditionInput | null > | null,
  not?: ModelVendorConditionInput | null,
};

export type Vendor = {
  __typename: "Vendor",
  id: string,
  name: string,
  tenantId: string,
  abbreviation?: string | null,
  site?: string | null,
  disinfectantCertificationCode?: string | null,
  billingAddress?: string | null,
  billingPostalCode?: string | null,
  billingCountry?: string | null,
  billingState?: string | null,
  billingStreet?: string | null,
  billingType?: string | null,
  phone?: string | null,
  fax?: string | null,
  customCode?: string | null,
  createdAt: string,
  updatedAt: string,
  materials?: ModelVendorsMaterialsConnection | null,
  purchasings?: ModelPurchasingConnection | null,
};

export type ModelVendorsMaterialsConnection = {
  __typename: "ModelVendorsMaterialsConnection",
  items:  Array<VendorsMaterials | null >,
  nextToken?: string | null,
};

export type VendorsMaterials = {
  __typename: "VendorsMaterials",
  id: string,
  vendorId: string,
  materialId: string,
  createdAt: string,
  updatedAt: string,
  vendor?: Vendor | null,
  material?: Material | null,
};

export type Material = {
  __typename: "Material",
  id: string,
  groupId: string,
  materialTypeId: string,
  name: string,
  purchaseUnit?: string | null,
  lossRate?: number | null,
  weight?: number | null,
  costCalculation?: string | null,
  defaultUnitCost?: number | null,
  unit?: string | null,
  length?: number | null,
  lengthApplicable?: boolean | null,
  lengthLocked?: boolean | null,
  lengthNominal?: number | null,
  width?: number | null,
  widthApplicable?: boolean | null,
  widthLocked?: boolean | null,
  widthNominal?: number | null,
  height?: number | null,
  heightApplicable?: boolean | null,
  heightLocked?: boolean | null,
  heightNominal?: number | null,
  createdAt: string,
  updatedAt: string,
  vendors?: ModelVendorsMaterialsConnection | null,
  materialType?: MaterialType | null,
  purchasings?: ModelPurchasingConnection | null,
};

export type MaterialType = {
  __typename: "MaterialType",
  id: string,
  groupId: string,
  name: string,
  description?: string | null,
  type?: string | null,
  customFields?:  Array<CustomField | null > | null,
  createdAt: string,
  updatedAt: string,
  materials?: ModelMaterialConnection | null,
};

export type CustomField = {
  __typename: "CustomField",
  name?: string | null,
  type?: string | null,
  required?: boolean | null,
};

export type ModelMaterialConnection = {
  __typename: "ModelMaterialConnection",
  items:  Array<Material | null >,
  nextToken?: string | null,
};

export type ModelPurchasingConnection = {
  __typename: "ModelPurchasingConnection",
  items:  Array<Purchasing | null >,
  nextToken?: string | null,
};

export type Purchasing = {
  __typename: "Purchasing",
  id: string,
  groupId: string,
  vendorId: string,
  materialId: string,
  purchasingDate?: string | null,
  startDate?: string | null,
  unitPurchasingCost?: number | null,
  purchaseUnit?: string | null,
  quantity?: number | null,
  totalCost?: number | null,
  unitCost?: number | null,
  costUnit?: string | null,
  customFields?:  Array<Field | null > | null,
  note?: string | null,
  createdAt: string,
  updatedAt: string,
  vendor?: Vendor | null,
  material?: Material | null,
};

export type Field = {
  __typename: "Field",
  label?: string | null,
  value?: string | null,
};

export type UpdateVendorInput = {
  id: string,
  name?: string | null,
  tenantId?: string | null,
  abbreviation?: string | null,
  site?: string | null,
  disinfectantCertificationCode?: string | null,
  billingAddress?: string | null,
  billingPostalCode?: string | null,
  billingCountry?: string | null,
  billingState?: string | null,
  billingStreet?: string | null,
  billingType?: string | null,
  phone?: string | null,
  fax?: string | null,
  customCode?: string | null,
};

export type DeleteVendorInput = {
  id: string,
};

export type CreateVendorsMaterialsInput = {
  id?: string | null,
  vendorId: string,
  materialId: string,
};

export type ModelVendorsMaterialsConditionInput = {
  vendorId?: ModelIDInput | null,
  materialId?: ModelIDInput | null,
  and?: Array< ModelVendorsMaterialsConditionInput | null > | null,
  or?: Array< ModelVendorsMaterialsConditionInput | null > | null,
  not?: ModelVendorsMaterialsConditionInput | null,
};

export type UpdateVendorsMaterialsInput = {
  id: string,
  vendorId?: string | null,
  materialId?: string | null,
};

export type DeleteVendorsMaterialsInput = {
  id: string,
};

export type CreateMaterialInput = {
  id?: string | null,
  groupId: string,
  materialTypeId: string,
  name: string,
  purchaseUnit?: string | null,
  lossRate?: number | null,
  weight?: number | null,
  costCalculation?: string | null,
  defaultUnitCost?: number | null,
  unit?: string | null,
  length?: number | null,
  lengthApplicable?: boolean | null,
  lengthLocked?: boolean | null,
  lengthNominal?: number | null,
  width?: number | null,
  widthApplicable?: boolean | null,
  widthLocked?: boolean | null,
  widthNominal?: number | null,
  height?: number | null,
  heightApplicable?: boolean | null,
  heightLocked?: boolean | null,
  heightNominal?: number | null,
};

export type ModelMaterialConditionInput = {
  groupId?: ModelIDInput | null,
  materialTypeId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  purchaseUnit?: ModelStringInput | null,
  lossRate?: ModelFloatInput | null,
  weight?: ModelFloatInput | null,
  costCalculation?: ModelStringInput | null,
  defaultUnitCost?: ModelFloatInput | null,
  unit?: ModelStringInput | null,
  length?: ModelFloatInput | null,
  lengthApplicable?: ModelBooleanInput | null,
  lengthLocked?: ModelBooleanInput | null,
  lengthNominal?: ModelFloatInput | null,
  width?: ModelFloatInput | null,
  widthApplicable?: ModelBooleanInput | null,
  widthLocked?: ModelBooleanInput | null,
  widthNominal?: ModelFloatInput | null,
  height?: ModelFloatInput | null,
  heightApplicable?: ModelBooleanInput | null,
  heightLocked?: ModelBooleanInput | null,
  heightNominal?: ModelFloatInput | null,
  and?: Array< ModelMaterialConditionInput | null > | null,
  or?: Array< ModelMaterialConditionInput | null > | null,
  not?: ModelMaterialConditionInput | null,
};

export type UpdateMaterialInput = {
  id: string,
  groupId?: string | null,
  materialTypeId?: string | null,
  name?: string | null,
  purchaseUnit?: string | null,
  lossRate?: number | null,
  weight?: number | null,
  costCalculation?: string | null,
  defaultUnitCost?: number | null,
  unit?: string | null,
  length?: number | null,
  lengthApplicable?: boolean | null,
  lengthLocked?: boolean | null,
  lengthNominal?: number | null,
  width?: number | null,
  widthApplicable?: boolean | null,
  widthLocked?: boolean | null,
  widthNominal?: number | null,
  height?: number | null,
  heightApplicable?: boolean | null,
  heightLocked?: boolean | null,
  heightNominal?: number | null,
};

export type DeleteMaterialInput = {
  id: string,
};

export type CreateMaterialTypeInput = {
  id?: string | null,
  groupId: string,
  name: string,
  description?: string | null,
  type?: string | null,
  customFields?: Array< CustomFieldInput | null > | null,
};

export type CustomFieldInput = {
  name?: string | null,
  type?: string | null,
  required?: boolean | null,
};

export type ModelMaterialTypeConditionInput = {
  groupId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelMaterialTypeConditionInput | null > | null,
  or?: Array< ModelMaterialTypeConditionInput | null > | null,
  not?: ModelMaterialTypeConditionInput | null,
};

export type UpdateMaterialTypeInput = {
  id: string,
  groupId?: string | null,
  name?: string | null,
  description?: string | null,
  type?: string | null,
  customFields?: Array< CustomFieldInput | null > | null,
};

export type DeleteMaterialTypeInput = {
  id: string,
};

export type CreatePurchasingInput = {
  id?: string | null,
  groupId: string,
  vendorId: string,
  materialId: string,
  purchasingDate?: string | null,
  startDate?: string | null,
  unitPurchasingCost?: number | null,
  purchaseUnit?: string | null,
  quantity?: number | null,
  totalCost?: number | null,
  unitCost?: number | null,
  costUnit?: string | null,
  customFields?: Array< FieldInput | null > | null,
  note?: string | null,
};

export type FieldInput = {
  label?: string | null,
  value?: string | null,
};

export type ModelPurchasingConditionInput = {
  groupId?: ModelIDInput | null,
  vendorId?: ModelIDInput | null,
  materialId?: ModelIDInput | null,
  purchasingDate?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  unitPurchasingCost?: ModelFloatInput | null,
  purchaseUnit?: ModelStringInput | null,
  quantity?: ModelFloatInput | null,
  totalCost?: ModelFloatInput | null,
  unitCost?: ModelFloatInput | null,
  costUnit?: ModelStringInput | null,
  note?: ModelStringInput | null,
  and?: Array< ModelPurchasingConditionInput | null > | null,
  or?: Array< ModelPurchasingConditionInput | null > | null,
  not?: ModelPurchasingConditionInput | null,
};

export type UpdatePurchasingInput = {
  id: string,
  groupId?: string | null,
  vendorId?: string | null,
  materialId?: string | null,
  purchasingDate?: string | null,
  startDate?: string | null,
  unitPurchasingCost?: number | null,
  purchaseUnit?: string | null,
  quantity?: number | null,
  totalCost?: number | null,
  unitCost?: number | null,
  costUnit?: string | null,
  customFields?: Array< FieldInput | null > | null,
  note?: string | null,
};

export type DeletePurchasingInput = {
  id: string,
};

export type CreatePriceTypeInput = {
  id?: string | null,
  groupId: string,
  name?: string | null,
  description?: string | null,
};

export type ModelPriceTypeConditionInput = {
  groupId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPriceTypeConditionInput | null > | null,
  or?: Array< ModelPriceTypeConditionInput | null > | null,
  not?: ModelPriceTypeConditionInput | null,
};

export type PriceType = {
  __typename: "PriceType",
  id: string,
  groupId: string,
  name?: string | null,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
  pricings?: ModelPricingConnection | null,
};

export type ModelPricingConnection = {
  __typename: "ModelPricingConnection",
  items:  Array<Pricing | null >,
  nextToken?: string | null,
};

export type Pricing = {
  __typename: "Pricing",
  id: string,
  groupId: string,
  priceTypeId: string,
  packageTypeId?: string | null,
  isDefault: boolean,
  name: string,
  packageTypeName?: string | null,
  unitPrice?: number | null,
  unit?: string | null,
  autoCalculate?: boolean | null,
  minimumAmount?: number | null,
  taxType?: string | null,
  sizeDependent: boolean,
  pricesBySize?:  Array<PriceBySize | null > | null,
  accountSpecific: boolean,
  accounts?:  Array<Selection | null > | null,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
  priceType?: PriceType | null,
};

export type PriceBySize = {
  __typename: "PriceBySize",
  minSize?: number | null,
  maxSize?: number | null,
  unitPrice?: number | null,
};

export type Selection = {
  __typename: "Selection",
  key?: string | null,
  label?: string | null,
};

export type UpdatePriceTypeInput = {
  id: string,
  groupId?: string | null,
  name?: string | null,
  description?: string | null,
};

export type DeletePriceTypeInput = {
  id: string,
};

export type CreatePricingInput = {
  id?: string | null,
  groupId: string,
  priceTypeId: string,
  packageTypeId?: string | null,
  isDefault: boolean,
  name: string,
  packageTypeName?: string | null,
  unitPrice?: number | null,
  unit?: string | null,
  autoCalculate?: boolean | null,
  minimumAmount?: number | null,
  taxType?: string | null,
  sizeDependent: boolean,
  pricesBySize?: Array< PriceBySizeInput | null > | null,
  accountSpecific: boolean,
  accounts?: Array< SelectionInput | null > | null,
  description?: string | null,
};

export type PriceBySizeInput = {
  minSize?: number | null,
  maxSize?: number | null,
  unitPrice?: number | null,
};

export type SelectionInput = {
  key?: string | null,
  label?: string | null,
};

export type ModelPricingConditionInput = {
  groupId?: ModelIDInput | null,
  priceTypeId?: ModelIDInput | null,
  packageTypeId?: ModelIDInput | null,
  isDefault?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  packageTypeName?: ModelStringInput | null,
  unitPrice?: ModelFloatInput | null,
  unit?: ModelStringInput | null,
  autoCalculate?: ModelBooleanInput | null,
  minimumAmount?: ModelFloatInput | null,
  taxType?: ModelStringInput | null,
  sizeDependent?: ModelBooleanInput | null,
  accountSpecific?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPricingConditionInput | null > | null,
  or?: Array< ModelPricingConditionInput | null > | null,
  not?: ModelPricingConditionInput | null,
};

export type UpdatePricingInput = {
  id: string,
  groupId?: string | null,
  priceTypeId?: string | null,
  packageTypeId?: string | null,
  isDefault?: boolean | null,
  name?: string | null,
  packageTypeName?: string | null,
  unitPrice?: number | null,
  unit?: string | null,
  autoCalculate?: boolean | null,
  minimumAmount?: number | null,
  taxType?: string | null,
  sizeDependent?: boolean | null,
  pricesBySize?: Array< PriceBySizeInput | null > | null,
  accountSpecific?: boolean | null,
  accounts?: Array< SelectionInput | null > | null,
  description?: string | null,
};

export type DeletePricingInput = {
  id: string,
};

export type CreatePackageTypeInput = {
  id?: string | null,
  groupId: string,
  pricingId?: string | null,
  name: string,
  description?: string | null,
  publish: boolean,
  elements?: Array< ElementInput | null > | null,
};

export type ElementInput = {
  type?: string | null,
  name: string,
  slug: string,
  value?: string | null,
  expr?: string | null,
  description?: string | null,
  overwriteValue?: string | null,
  cutting?: Array< number | null > | null,
};

export type ModelPackageTypeConditionInput = {
  groupId?: ModelIDInput | null,
  pricingId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  publish?: ModelBooleanInput | null,
  and?: Array< ModelPackageTypeConditionInput | null > | null,
  or?: Array< ModelPackageTypeConditionInput | null > | null,
  not?: ModelPackageTypeConditionInput | null,
};

export type PackageType = {
  __typename: "PackageType",
  id: string,
  groupId: string,
  pricingId?: string | null,
  name: string,
  description?: string | null,
  publish: boolean,
  elements?:  Array<Element | null > | null,
  createdAt: string,
  updatedAt: string,
  areas?: ModelBaseAreaConnection | null,
  decorations?: ModelBaseDecorationComponentConnection | null,
};

export type Element = {
  __typename: "Element",
  type?: string | null,
  name: string,
  slug: string,
  value?: string | null,
  expr?: string | null,
  description?: string | null,
  overwriteValue?: string | null,
  cutting?: Array< number | null > | null,
};

export type ModelBaseAreaConnection = {
  __typename: "ModelBaseAreaConnection",
  items:  Array<BaseArea | null >,
  nextToken?: string | null,
};

export type BaseArea = {
  __typename: "BaseArea",
  id: string,
  packageTypeId: string,
  name: string,
  areaType: string,
  order?: number | null,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
  components?: ModelBaseComponentConnection | null,
};

export type ModelBaseComponentConnection = {
  __typename: "ModelBaseComponentConnection",
  items:  Array<BaseComponent | null >,
  nextToken?: string | null,
};

export type BaseComponent = {
  __typename: "BaseComponent",
  id: string,
  baseAreaId: string,
  name: string,
  slug: string,
  order?: number | null,
  elements?:  Array<Element | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBaseDecorationComponentConnection = {
  __typename: "ModelBaseDecorationComponentConnection",
  items:  Array<BaseDecorationComponent | null >,
  nextToken?: string | null,
};

export type BaseDecorationComponent = {
  __typename: "BaseDecorationComponent",
  id: string,
  packageTypeId: string,
  type?: string | null,
  name: string,
  slug: string,
  order?: number | null,
  unit?: string | null,
  elements?:  Array<Element | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePackageTypeInput = {
  id: string,
  groupId?: string | null,
  pricingId?: string | null,
  name?: string | null,
  description?: string | null,
  publish?: boolean | null,
  elements?: Array< ElementInput | null > | null,
};

export type DeletePackageTypeInput = {
  id: string,
};

export type CreateBaseAreaInput = {
  id?: string | null,
  packageTypeId: string,
  name: string,
  areaType: string,
  order?: number | null,
  description?: string | null,
};

export type ModelBaseAreaConditionInput = {
  packageTypeId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  areaType?: ModelStringInput | null,
  order?: ModelIntInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBaseAreaConditionInput | null > | null,
  or?: Array< ModelBaseAreaConditionInput | null > | null,
  not?: ModelBaseAreaConditionInput | null,
};

export type UpdateBaseAreaInput = {
  id: string,
  packageTypeId?: string | null,
  name?: string | null,
  areaType?: string | null,
  order?: number | null,
  description?: string | null,
};

export type DeleteBaseAreaInput = {
  id: string,
};

export type CreateBaseComponentInput = {
  id?: string | null,
  baseAreaId: string,
  name: string,
  slug: string,
  order?: number | null,
  elements?: Array< ElementInput | null > | null,
};

export type ModelBaseComponentConditionInput = {
  baseAreaId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelBaseComponentConditionInput | null > | null,
  or?: Array< ModelBaseComponentConditionInput | null > | null,
  not?: ModelBaseComponentConditionInput | null,
};

export type UpdateBaseComponentInput = {
  id: string,
  baseAreaId?: string | null,
  name?: string | null,
  slug?: string | null,
  order?: number | null,
  elements?: Array< ElementInput | null > | null,
};

export type DeleteBaseComponentInput = {
  id: string,
};

export type CreateBaseDecorationComponentInput = {
  id?: string | null,
  packageTypeId: string,
  type?: string | null,
  name: string,
  slug: string,
  order?: number | null,
  unit?: string | null,
  elements?: Array< ElementInput | null > | null,
};

export type ModelBaseDecorationComponentConditionInput = {
  packageTypeId?: ModelIDInput | null,
  type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  order?: ModelIntInput | null,
  unit?: ModelStringInput | null,
  and?: Array< ModelBaseDecorationComponentConditionInput | null > | null,
  or?: Array< ModelBaseDecorationComponentConditionInput | null > | null,
  not?: ModelBaseDecorationComponentConditionInput | null,
};

export type UpdateBaseDecorationComponentInput = {
  id: string,
  packageTypeId?: string | null,
  type?: string | null,
  name?: string | null,
  slug?: string | null,
  order?: number | null,
  unit?: string | null,
  elements?: Array< ElementInput | null > | null,
};

export type DeleteBaseDecorationComponentInput = {
  id: string,
};

export type CreateProjectInput = {
  id?: string | null,
  groupId: string,
  quoteId?: string | null,
  userId: string,
  accountId: string,
  accountName?: string | null,
  contactId: string,
  contactName?: string | null,
  keyDates?: Array< KeyDateInput | null > | null,
  name: string,
  status?: string | null,
  inquiryDate?: string | null,
  quotationDate?: string | null,
  destinationName?: string | null,
  destination?: LocationInput | null,
  confidence?: string | null,
  description?: string | null,
  alert?: string | null,
  cancelled: boolean,
  cancelReason?: string | null,
};

export type KeyDateInput = {
  name?: string | null,
  m3?: number | null,
  case?: number | null,
  shipType?: string | null,
  stockingDate?: string | null,
  packagingDate?: string | null,
  shippingDate?: string | null,
  cutDate?: string | null,
};

export type LocationInput = {
  lat?: string | null,
  lng?: string | null,
};

export type ModelProjectConditionInput = {
  groupId?: ModelIDInput | null,
  quoteId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  accountId?: ModelIDInput | null,
  accountName?: ModelStringInput | null,
  contactId?: ModelIDInput | null,
  contactName?: ModelStringInput | null,
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  inquiryDate?: ModelStringInput | null,
  quotationDate?: ModelStringInput | null,
  destinationName?: ModelStringInput | null,
  confidence?: ModelStringInput | null,
  description?: ModelStringInput | null,
  alert?: ModelStringInput | null,
  cancelled?: ModelBooleanInput | null,
  cancelReason?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  groupId: string,
  quoteId?: string | null,
  userId: string,
  accountId: string,
  accountName?: string | null,
  contactId: string,
  contactName?: string | null,
  keyDates?:  Array<KeyDate | null > | null,
  name: string,
  status?: string | null,
  inquiryDate?: string | null,
  quotationDate?: string | null,
  destinationName?: string | null,
  destination?: Location | null,
  confidence?: string | null,
  description?: string | null,
  alert?: string | null,
  cancelled: boolean,
  cancelReason?: string | null,
  createdAt: string,
  updatedAt: string,
  account?: Account | null,
  contact?: Contact | null,
  user?: User | null,
  group?: Group | null,
};

export type KeyDate = {
  __typename: "KeyDate",
  name?: string | null,
  m3?: number | null,
  case?: number | null,
  shipType?: string | null,
  stockingDate?: string | null,
  packagingDate?: string | null,
  shippingDate?: string | null,
  cutDate?: string | null,
};

export type Location = {
  __typename: "Location",
  lat?: string | null,
  lng?: string | null,
};

export type UpdateProjectInput = {
  id: string,
  groupId?: string | null,
  quoteId?: string | null,
  userId?: string | null,
  accountId?: string | null,
  accountName?: string | null,
  contactId?: string | null,
  contactName?: string | null,
  keyDates?: Array< KeyDateInput | null > | null,
  name?: string | null,
  status?: string | null,
  inquiryDate?: string | null,
  quotationDate?: string | null,
  destinationName?: string | null,
  destination?: LocationInput | null,
  confidence?: string | null,
  description?: string | null,
  alert?: string | null,
  cancelled?: boolean | null,
  cancelReason?: string | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type CreateQuoteInput = {
  id?: string | null,
  projectId: string,
  name: string,
  quoteNumber?: string | null,
  linkProduct?: boolean | null,
  order: number,
  orderPlaced?: boolean | null,
  revenue?: number | null,
  estimatedCost?: number | null,
  estimatedProfit?: number | null,
  greeting?: string | null,
  paymentMethod?: string | null,
  destination?: string | null,
  dueDate?: string | null,
  expiryDate?: string | null,
  description?: string | null,
  groupName?: string | null,
  logoUrl?: string | null,
  groupAddress?: AddressInput | null,
  phone?: string | null,
  fax?: string | null,
};

export type ModelQuoteConditionInput = {
  projectId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  quoteNumber?: ModelStringInput | null,
  linkProduct?: ModelBooleanInput | null,
  order?: ModelIntInput | null,
  orderPlaced?: ModelBooleanInput | null,
  revenue?: ModelFloatInput | null,
  estimatedCost?: ModelFloatInput | null,
  estimatedProfit?: ModelFloatInput | null,
  greeting?: ModelStringInput | null,
  paymentMethod?: ModelStringInput | null,
  destination?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  expiryDate?: ModelStringInput | null,
  description?: ModelStringInput | null,
  groupName?: ModelStringInput | null,
  logoUrl?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  fax?: ModelStringInput | null,
  and?: Array< ModelQuoteConditionInput | null > | null,
  or?: Array< ModelQuoteConditionInput | null > | null,
  not?: ModelQuoteConditionInput | null,
};

export type Quote = {
  __typename: "Quote",
  id: string,
  projectId: string,
  name: string,
  quoteNumber?: string | null,
  linkProduct?: boolean | null,
  order: number,
  orderPlaced?: boolean | null,
  revenue?: number | null,
  estimatedCost?: number | null,
  estimatedProfit?: number | null,
  greeting?: string | null,
  paymentMethod?: string | null,
  destination?: string | null,
  dueDate?: string | null,
  expiryDate?: string | null,
  description?: string | null,
  groupName?: string | null,
  logoUrl?: string | null,
  groupAddress?: Address | null,
  phone?: string | null,
  fax?: string | null,
  createdAt: string,
  updatedAt: string,
  quoteLines?: ModelQuoteLineConnection | null,
};

export type ModelQuoteLineConnection = {
  __typename: "ModelQuoteLineConnection",
  items:  Array<QuoteLine | null >,
  nextToken?: string | null,
};

export type QuoteLine = {
  __typename: "QuoteLine",
  id: string,
  quoteId: string,
  pricingId?: string | null,
  packageTypeId?: string | null,
  pricingName?: string | null,
  packageTypeName?: string | null,
  name?: string | null,
  index?: string | null,
  notes?: string | null,
  quantity?: number | null,
  amount?: number | null,
  minimumAmount?: number | null,
  actualAmount?: number | null,
  order: number,
  unitNW?: number | null,
  NW?: number | null,
  productLength?: number | null,
  productWidth?: number | null,
  productHeight?: number | null,
  outerLength?: number | null,
  outerWidth?: number | null,
  outerHeight?: number | null,
  estimatedUnitM3?: number | null,
  estimatedM3?: number | null,
  estimatedUnitGrossWeight?: number | null,
  estimatedGrossWeight?: number | null,
  estimatedUnitCost?: number | null,
  estimatedCost?: number | null,
  estimatedProfit?: number | null,
  unitPrice?: number | null,
  subtotal?: number | null,
  total?: number | null,
  unit?: string | null,
  taxType?: string | null,
  taxRate?: number | null,
  costDetail?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateQuoteInput = {
  id: string,
  projectId?: string | null,
  name?: string | null,
  quoteNumber?: string | null,
  linkProduct?: boolean | null,
  order?: number | null,
  orderPlaced?: boolean | null,
  revenue?: number | null,
  estimatedCost?: number | null,
  estimatedProfit?: number | null,
  greeting?: string | null,
  paymentMethod?: string | null,
  destination?: string | null,
  dueDate?: string | null,
  expiryDate?: string | null,
  description?: string | null,
  groupName?: string | null,
  logoUrl?: string | null,
  groupAddress?: AddressInput | null,
  phone?: string | null,
  fax?: string | null,
};

export type DeleteQuoteInput = {
  id: string,
};

export type CreateQuoteLineInput = {
  id?: string | null,
  quoteId: string,
  pricingId?: string | null,
  packageTypeId?: string | null,
  pricingName?: string | null,
  packageTypeName?: string | null,
  name?: string | null,
  index?: string | null,
  notes?: string | null,
  quantity?: number | null,
  amount?: number | null,
  minimumAmount?: number | null,
  actualAmount?: number | null,
  order: number,
  unitNW?: number | null,
  NW?: number | null,
  productLength?: number | null,
  productWidth?: number | null,
  productHeight?: number | null,
  outerLength?: number | null,
  outerWidth?: number | null,
  outerHeight?: number | null,
  estimatedUnitM3?: number | null,
  estimatedM3?: number | null,
  estimatedUnitGrossWeight?: number | null,
  estimatedGrossWeight?: number | null,
  estimatedUnitCost?: number | null,
  estimatedCost?: number | null,
  estimatedProfit?: number | null,
  unitPrice?: number | null,
  subtotal?: number | null,
  total?: number | null,
  unit?: string | null,
  taxType?: string | null,
  taxRate?: number | null,
  costDetail?: string | null,
};

export type ModelQuoteLineConditionInput = {
  quoteId?: ModelIDInput | null,
  pricingId?: ModelIDInput | null,
  packageTypeId?: ModelIDInput | null,
  pricingName?: ModelStringInput | null,
  packageTypeName?: ModelStringInput | null,
  name?: ModelStringInput | null,
  index?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  quantity?: ModelFloatInput | null,
  amount?: ModelFloatInput | null,
  minimumAmount?: ModelFloatInput | null,
  actualAmount?: ModelFloatInput | null,
  order?: ModelIntInput | null,
  unitNW?: ModelFloatInput | null,
  NW?: ModelFloatInput | null,
  productLength?: ModelFloatInput | null,
  productWidth?: ModelFloatInput | null,
  productHeight?: ModelFloatInput | null,
  outerLength?: ModelFloatInput | null,
  outerWidth?: ModelFloatInput | null,
  outerHeight?: ModelFloatInput | null,
  estimatedUnitM3?: ModelFloatInput | null,
  estimatedM3?: ModelFloatInput | null,
  estimatedUnitGrossWeight?: ModelFloatInput | null,
  estimatedGrossWeight?: ModelFloatInput | null,
  estimatedUnitCost?: ModelFloatInput | null,
  estimatedCost?: ModelFloatInput | null,
  estimatedProfit?: ModelFloatInput | null,
  unitPrice?: ModelFloatInput | null,
  subtotal?: ModelFloatInput | null,
  total?: ModelFloatInput | null,
  unit?: ModelStringInput | null,
  taxType?: ModelStringInput | null,
  taxRate?: ModelFloatInput | null,
  costDetail?: ModelStringInput | null,
  and?: Array< ModelQuoteLineConditionInput | null > | null,
  or?: Array< ModelQuoteLineConditionInput | null > | null,
  not?: ModelQuoteLineConditionInput | null,
};

export type UpdateQuoteLineInput = {
  id: string,
  quoteId?: string | null,
  pricingId?: string | null,
  packageTypeId?: string | null,
  pricingName?: string | null,
  packageTypeName?: string | null,
  name?: string | null,
  index?: string | null,
  notes?: string | null,
  quantity?: number | null,
  amount?: number | null,
  minimumAmount?: number | null,
  actualAmount?: number | null,
  order?: number | null,
  unitNW?: number | null,
  NW?: number | null,
  productLength?: number | null,
  productWidth?: number | null,
  productHeight?: number | null,
  outerLength?: number | null,
  outerWidth?: number | null,
  outerHeight?: number | null,
  estimatedUnitM3?: number | null,
  estimatedM3?: number | null,
  estimatedUnitGrossWeight?: number | null,
  estimatedGrossWeight?: number | null,
  estimatedUnitCost?: number | null,
  estimatedCost?: number | null,
  estimatedProfit?: number | null,
  unitPrice?: number | null,
  subtotal?: number | null,
  total?: number | null,
  unit?: string | null,
  taxType?: string | null,
  taxRate?: number | null,
  costDetail?: string | null,
};

export type DeleteQuoteLineInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  projectId: string,
  packageTypeId: string,
  pricingId?: string | null,
  packageTypeName: string,
  quoteLineId?: string | null,
  name: string,
  order: number,
  productNumber?: string | null,
  quantity?: number | null,
  material?: string | null,
  tareWeight?: number | null,
  stamp?: string | null,
  destination?: string | null,
  packagingStart?: string | null,
  packagingEnd?: string | null,
  packageMethod?: string | null,
  description?: string | null,
  elements?: Array< ElementInput | null > | null,
};

export type ModelProductConditionInput = {
  projectId?: ModelIDInput | null,
  packageTypeId?: ModelIDInput | null,
  pricingId?: ModelIDInput | null,
  packageTypeName?: ModelStringInput | null,
  quoteLineId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  order?: ModelIntInput | null,
  productNumber?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  material?: ModelStringInput | null,
  tareWeight?: ModelFloatInput | null,
  stamp?: ModelStringInput | null,
  destination?: ModelStringInput | null,
  packagingStart?: ModelStringInput | null,
  packagingEnd?: ModelStringInput | null,
  packageMethod?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  projectId: string,
  packageTypeId: string,
  pricingId?: string | null,
  packageTypeName: string,
  quoteLineId?: string | null,
  name: string,
  order: number,
  productNumber?: string | null,
  quantity?: number | null,
  material?: string | null,
  tareWeight?: number | null,
  stamp?: string | null,
  destination?: string | null,
  packagingStart?: string | null,
  packagingEnd?: string | null,
  packageMethod?: string | null,
  description?: string | null,
  elements?:  Array<Element | null > | null,
  createdAt: string,
  updatedAt: string,
  areas?: ModelAreaConnection | null,
  decorations?: ModelDecorationComponentConnection | null,
};

export type ModelAreaConnection = {
  __typename: "ModelAreaConnection",
  items:  Array<Area | null >,
  nextToken?: string | null,
};

export type Area = {
  __typename: "Area",
  id: string,
  productId: string,
  name: string,
  areaType?: string | null,
  order?: number | null,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
  components?: ModelComponentConnection | null,
};

export type ModelComponentConnection = {
  __typename: "ModelComponentConnection",
  items:  Array<Component | null >,
  nextToken?: string | null,
};

export type Component = {
  __typename: "Component",
  id: string,
  areaId: string,
  name: string,
  slug: string,
  order?: number | null,
  elements?:  Array<Element | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelDecorationComponentConnection = {
  __typename: "ModelDecorationComponentConnection",
  items:  Array<DecorationComponent | null >,
  nextToken?: string | null,
};

export type DecorationComponent = {
  __typename: "DecorationComponent",
  id: string,
  productId: string,
  type?: string | null,
  name: string,
  slug: string,
  order?: number | null,
  unit?: string | null,
  elements?:  Array<Element | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProductInput = {
  id: string,
  projectId?: string | null,
  packageTypeId?: string | null,
  pricingId?: string | null,
  packageTypeName?: string | null,
  quoteLineId?: string | null,
  name?: string | null,
  order?: number | null,
  productNumber?: string | null,
  quantity?: number | null,
  material?: string | null,
  tareWeight?: number | null,
  stamp?: string | null,
  destination?: string | null,
  packagingStart?: string | null,
  packagingEnd?: string | null,
  packageMethod?: string | null,
  description?: string | null,
  elements?: Array< ElementInput | null > | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateAreaInput = {
  id?: string | null,
  productId: string,
  name: string,
  areaType?: string | null,
  order?: number | null,
  description?: string | null,
};

export type ModelAreaConditionInput = {
  productId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  areaType?: ModelStringInput | null,
  order?: ModelIntInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelAreaConditionInput | null > | null,
  or?: Array< ModelAreaConditionInput | null > | null,
  not?: ModelAreaConditionInput | null,
};

export type UpdateAreaInput = {
  id: string,
  productId?: string | null,
  name?: string | null,
  areaType?: string | null,
  order?: number | null,
  description?: string | null,
};

export type DeleteAreaInput = {
  id: string,
};

export type CreateComponentInput = {
  id?: string | null,
  areaId: string,
  name: string,
  slug: string,
  order?: number | null,
  elements?: Array< ElementInput | null > | null,
};

export type ModelComponentConditionInput = {
  areaId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelComponentConditionInput | null > | null,
  or?: Array< ModelComponentConditionInput | null > | null,
  not?: ModelComponentConditionInput | null,
};

export type UpdateComponentInput = {
  id: string,
  areaId?: string | null,
  name?: string | null,
  slug?: string | null,
  order?: number | null,
  elements?: Array< ElementInput | null > | null,
};

export type DeleteComponentInput = {
  id: string,
};

export type CreateDecorationComponentInput = {
  id?: string | null,
  productId: string,
  type?: string | null,
  name: string,
  slug: string,
  order?: number | null,
  unit?: string | null,
  elements?: Array< ElementInput | null > | null,
};

export type ModelDecorationComponentConditionInput = {
  productId?: ModelIDInput | null,
  type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  order?: ModelIntInput | null,
  unit?: ModelStringInput | null,
  and?: Array< ModelDecorationComponentConditionInput | null > | null,
  or?: Array< ModelDecorationComponentConditionInput | null > | null,
  not?: ModelDecorationComponentConditionInput | null,
};

export type UpdateDecorationComponentInput = {
  id: string,
  productId?: string | null,
  type?: string | null,
  name?: string | null,
  slug?: string | null,
  order?: number | null,
  unit?: string | null,
  elements?: Array< ElementInput | null > | null,
};

export type DeleteDecorationComponentInput = {
  id: string,
};

export type CreateSummaryInput = {
  id?: string | null,
  projectId: string,
  pricingId?: string | null,
  pricingName?: string | null,
  productId?: string | null,
  quoteLineId?: string | null,
  name: string,
  order: number,
  quantity?: number | null,
  tareWeight?: number | null,
  productLength?: number | null,
  productWidth?: number | null,
  productHeight?: number | null,
  outerLength?: number | null,
  outerWidth?: number | null,
  outerHeight?: number | null,
  unitM3?: number | null,
  unitNW?: number | null,
  unitGrossWeight?: number | null,
  NW?: number | null,
  grossWeight?: number | null,
  m3?: number | null,
  unitPrice?: number | null,
  unit?: string | null,
  autoCalculate?: boolean | null,
  taxType?: string | null,
  overwritten?: boolean | null,
};

export type ModelSummaryConditionInput = {
  projectId?: ModelIDInput | null,
  pricingId?: ModelIDInput | null,
  pricingName?: ModelStringInput | null,
  productId?: ModelIDInput | null,
  quoteLineId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  order?: ModelIntInput | null,
  quantity?: ModelIntInput | null,
  tareWeight?: ModelFloatInput | null,
  productLength?: ModelFloatInput | null,
  productWidth?: ModelFloatInput | null,
  productHeight?: ModelFloatInput | null,
  outerLength?: ModelFloatInput | null,
  outerWidth?: ModelFloatInput | null,
  outerHeight?: ModelFloatInput | null,
  unitM3?: ModelFloatInput | null,
  unitNW?: ModelFloatInput | null,
  unitGrossWeight?: ModelFloatInput | null,
  NW?: ModelFloatInput | null,
  grossWeight?: ModelFloatInput | null,
  m3?: ModelFloatInput | null,
  unitPrice?: ModelFloatInput | null,
  unit?: ModelStringInput | null,
  autoCalculate?: ModelBooleanInput | null,
  taxType?: ModelStringInput | null,
  overwritten?: ModelBooleanInput | null,
  and?: Array< ModelSummaryConditionInput | null > | null,
  or?: Array< ModelSummaryConditionInput | null > | null,
  not?: ModelSummaryConditionInput | null,
};

export type Summary = {
  __typename: "Summary",
  id: string,
  projectId: string,
  pricingId?: string | null,
  pricingName?: string | null,
  productId?: string | null,
  quoteLineId?: string | null,
  name: string,
  order: number,
  quantity?: number | null,
  tareWeight?: number | null,
  productLength?: number | null,
  productWidth?: number | null,
  productHeight?: number | null,
  outerLength?: number | null,
  outerWidth?: number | null,
  outerHeight?: number | null,
  unitM3?: number | null,
  unitNW?: number | null,
  unitGrossWeight?: number | null,
  NW?: number | null,
  grossWeight?: number | null,
  m3?: number | null,
  unitPrice?: number | null,
  unit?: string | null,
  autoCalculate?: boolean | null,
  taxType?: string | null,
  overwritten?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSummaryInput = {
  id: string,
  projectId?: string | null,
  pricingId?: string | null,
  pricingName?: string | null,
  productId?: string | null,
  quoteLineId?: string | null,
  name?: string | null,
  order?: number | null,
  quantity?: number | null,
  tareWeight?: number | null,
  productLength?: number | null,
  productWidth?: number | null,
  productHeight?: number | null,
  outerLength?: number | null,
  outerWidth?: number | null,
  outerHeight?: number | null,
  unitM3?: number | null,
  unitNW?: number | null,
  unitGrossWeight?: number | null,
  NW?: number | null,
  grossWeight?: number | null,
  m3?: number | null,
  unitPrice?: number | null,
  unit?: string | null,
  autoCalculate?: boolean | null,
  taxType?: string | null,
  overwritten?: boolean | null,
};

export type DeleteSummaryInput = {
  id: string,
};

export type CreateInvoiceInput = {
  id?: string | null,
  projectId: string,
  accountId: string,
  contactId?: string | null,
  userId: string,
  groupId: string,
  name: string,
  invoiceNo?: string | null,
  issueDate?: string | null,
  billed: boolean,
  billingDate?: string | null,
  taxTotal?: number | null,
  subtotal?: number | null,
  total?: number | null,
  url?: string | null,
  description?: string | null,
  accountName?: string | null,
  billingType?: string | null,
  accountAddress?: AddressInput | null,
  contactName?: string | null,
  contactTitle?: string | null,
  groupName?: string | null,
  logoUrl?: string | null,
  groupBank?: BankInput | null,
  groupAddress?: AddressInput | null,
  phone?: string | null,
  fax?: string | null,
};

export type ModelInvoiceConditionInput = {
  projectId?: ModelIDInput | null,
  accountId?: ModelIDInput | null,
  contactId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  groupId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  invoiceNo?: ModelStringInput | null,
  issueDate?: ModelStringInput | null,
  billed?: ModelBooleanInput | null,
  billingDate?: ModelStringInput | null,
  taxTotal?: ModelFloatInput | null,
  subtotal?: ModelFloatInput | null,
  total?: ModelFloatInput | null,
  url?: ModelStringInput | null,
  description?: ModelStringInput | null,
  accountName?: ModelStringInput | null,
  billingType?: ModelStringInput | null,
  contactName?: ModelStringInput | null,
  contactTitle?: ModelStringInput | null,
  groupName?: ModelStringInput | null,
  logoUrl?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  fax?: ModelStringInput | null,
  and?: Array< ModelInvoiceConditionInput | null > | null,
  or?: Array< ModelInvoiceConditionInput | null > | null,
  not?: ModelInvoiceConditionInput | null,
};

export type Invoice = {
  __typename: "Invoice",
  id: string,
  projectId: string,
  accountId: string,
  contactId?: string | null,
  userId: string,
  groupId: string,
  name: string,
  invoiceNo?: string | null,
  issueDate?: string | null,
  billed: boolean,
  billingDate?: string | null,
  taxTotal?: number | null,
  subtotal?: number | null,
  total?: number | null,
  url?: string | null,
  description?: string | null,
  accountName?: string | null,
  billingType?: string | null,
  accountAddress?: Address | null,
  contactName?: string | null,
  contactTitle?: string | null,
  groupName?: string | null,
  logoUrl?: string | null,
  groupBank?: Bank | null,
  groupAddress?: Address | null,
  phone?: string | null,
  fax?: string | null,
  createdAt: string,
  updatedAt: string,
  invoiceLines?: ModelInvoiceLineConnection | null,
};

export type ModelInvoiceLineConnection = {
  __typename: "ModelInvoiceLineConnection",
  items:  Array<InvoiceLine | null >,
  nextToken?: string | null,
};

export type InvoiceLine = {
  __typename: "InvoiceLine",
  id: string,
  invoiceId: string,
  pricingId?: string | null,
  pricingName?: string | null,
  quoteLineId?: string | null,
  name: string,
  shippingDate?: string | null,
  salesType?: string | null,
  order: number,
  m3?: number | null,
  grossWeight?: number | null,
  quantity?: number | null,
  amount?: number | null,
  minimumAmount?: number | null,
  actualAmount?: number | null,
  unit?: string | null,
  unitPrice?: number | null,
  taxRate?: number | null,
  taxTotal?: number | null,
  subtotal?: number | null,
  total?: number | null,
  taxType?: string | null,
  synced?: boolean | null,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateInvoiceInput = {
  id: string,
  projectId?: string | null,
  accountId?: string | null,
  contactId?: string | null,
  userId?: string | null,
  groupId?: string | null,
  name?: string | null,
  invoiceNo?: string | null,
  issueDate?: string | null,
  billed?: boolean | null,
  billingDate?: string | null,
  taxTotal?: number | null,
  subtotal?: number | null,
  total?: number | null,
  url?: string | null,
  description?: string | null,
  accountName?: string | null,
  billingType?: string | null,
  accountAddress?: AddressInput | null,
  contactName?: string | null,
  contactTitle?: string | null,
  groupName?: string | null,
  logoUrl?: string | null,
  groupBank?: BankInput | null,
  groupAddress?: AddressInput | null,
  phone?: string | null,
  fax?: string | null,
};

export type DeleteInvoiceInput = {
  id: string,
};

export type CreateInvoiceLineInput = {
  id?: string | null,
  invoiceId: string,
  pricingId?: string | null,
  pricingName?: string | null,
  quoteLineId?: string | null,
  name: string,
  shippingDate?: string | null,
  salesType?: string | null,
  order: number,
  m3?: number | null,
  grossWeight?: number | null,
  quantity?: number | null,
  amount?: number | null,
  minimumAmount?: number | null,
  actualAmount?: number | null,
  unit?: string | null,
  unitPrice?: number | null,
  taxRate?: number | null,
  taxTotal?: number | null,
  subtotal?: number | null,
  total?: number | null,
  taxType?: string | null,
  synced?: boolean | null,
  description?: string | null,
};

export type ModelInvoiceLineConditionInput = {
  invoiceId?: ModelIDInput | null,
  pricingId?: ModelIDInput | null,
  pricingName?: ModelStringInput | null,
  quoteLineId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  shippingDate?: ModelStringInput | null,
  salesType?: ModelStringInput | null,
  order?: ModelIntInput | null,
  m3?: ModelFloatInput | null,
  grossWeight?: ModelFloatInput | null,
  quantity?: ModelFloatInput | null,
  amount?: ModelFloatInput | null,
  minimumAmount?: ModelFloatInput | null,
  actualAmount?: ModelFloatInput | null,
  unit?: ModelStringInput | null,
  unitPrice?: ModelFloatInput | null,
  taxRate?: ModelFloatInput | null,
  taxTotal?: ModelFloatInput | null,
  subtotal?: ModelFloatInput | null,
  total?: ModelFloatInput | null,
  taxType?: ModelStringInput | null,
  synced?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelInvoiceLineConditionInput | null > | null,
  or?: Array< ModelInvoiceLineConditionInput | null > | null,
  not?: ModelInvoiceLineConditionInput | null,
};

export type UpdateInvoiceLineInput = {
  id: string,
  invoiceId?: string | null,
  pricingId?: string | null,
  pricingName?: string | null,
  quoteLineId?: string | null,
  name?: string | null,
  shippingDate?: string | null,
  salesType?: string | null,
  order?: number | null,
  m3?: number | null,
  grossWeight?: number | null,
  quantity?: number | null,
  amount?: number | null,
  minimumAmount?: number | null,
  actualAmount?: number | null,
  unit?: string | null,
  unitPrice?: number | null,
  taxRate?: number | null,
  taxTotal?: number | null,
  subtotal?: number | null,
  total?: number | null,
  taxType?: string | null,
  synced?: boolean | null,
  description?: string | null,
};

export type DeleteInvoiceLineInput = {
  id: string,
};

export type CreateSyncLogInput = {
  id?: string | null,
  status: string,
  numberOfNewRecords?: number | null,
  numberOfDeletedRecords?: number | null,
  numberOfUpdatedRecords?: number | null,
  message?: string | null,
  sFObjectId: string,
};

export type ModelSyncLogConditionInput = {
  status?: ModelStringInput | null,
  numberOfNewRecords?: ModelIntInput | null,
  numberOfDeletedRecords?: ModelIntInput | null,
  numberOfUpdatedRecords?: ModelIntInput | null,
  message?: ModelStringInput | null,
  sFObjectId?: ModelIDInput | null,
  and?: Array< ModelSyncLogConditionInput | null > | null,
  or?: Array< ModelSyncLogConditionInput | null > | null,
  not?: ModelSyncLogConditionInput | null,
};

export type SyncLog = {
  __typename: "SyncLog",
  id: string,
  status: string,
  numberOfNewRecords?: number | null,
  numberOfDeletedRecords?: number | null,
  numberOfUpdatedRecords?: number | null,
  message?: string | null,
  sFObjectId: string,
  createdAt: string,
  updatedAt: string,
  sFObject?: SFObject | null,
};

export type UpdateSyncLogInput = {
  id: string,
  status?: string | null,
  numberOfNewRecords?: number | null,
  numberOfDeletedRecords?: number | null,
  numberOfUpdatedRecords?: number | null,
  message?: string | null,
  sFObjectId?: string | null,
};

export type DeleteSyncLogInput = {
  id: string,
};

export type SalesForceInput = {
  sfLoginUrl: string,
  sfUsername: string,
  sfPassword: string,
  sfSecretToken: string,
};

export type ListSFObjectNamesInput = {
  tenantId: string,
};

export type SFObjectNameOutput = {
  __typename: "SFObjectNameOutput",
  sfObjectName?: string | null,
  sfObjectLabel?: string | null,
};

export type ListSFFieldsBySFObjectInput = {
  tenantId: string,
  sfObjectName: string,
};

export type SFFieldOutput = {
  __typename: "SFFieldOutput",
  sfFieldName?: string | null,
  sfFieldLabel?: string | null,
  sfFieldType?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUsersGroupsFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  groupId?: ModelIDInput | null,
  role?: ModelStringInput | null,
  and?: Array< ModelUsersGroupsFilterInput | null > | null,
  or?: Array< ModelUsersGroupsFilterInput | null > | null,
  not?: ModelUsersGroupsFilterInput | null,
};

export type ModelVendorsMaterialsFilterInput = {
  id?: ModelIDInput | null,
  vendorId?: ModelIDInput | null,
  materialId?: ModelIDInput | null,
  and?: Array< ModelVendorsMaterialsFilterInput | null > | null,
  or?: Array< ModelVendorsMaterialsFilterInput | null > | null,
  not?: ModelVendorsMaterialsFilterInput | null,
};

export type ModelMetaTableFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  label?: ModelStringInput | null,
  and?: Array< ModelMetaTableFilterInput | null > | null,
  or?: Array< ModelMetaTableFilterInput | null > | null,
  not?: ModelMetaTableFilterInput | null,
};

export type ModelMetaTableConnection = {
  __typename: "ModelMetaTableConnection",
  items:  Array<MetaTable | null >,
  nextToken?: string | null,
};

export type ModelTenantFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  logoUrl?: ModelStringInput | null,
  address?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  syncSFObject?: ModelBooleanInput | null,
  sfLoginUrl?: ModelStringInput | null,
  sfUsername?: ModelStringInput | null,
  sfPassword?: ModelStringInput | null,
  sfSecretToken?: ModelStringInput | null,
  and?: Array< ModelTenantFilterInput | null > | null,
  or?: Array< ModelTenantFilterInput | null > | null,
  not?: ModelTenantFilterInput | null,
};

export type ModelTenantConnection = {
  __typename: "ModelTenantConnection",
  items:  Array<Tenant | null >,
  nextToken?: string | null,
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null,
  tenantId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  abbreviation?: ModelStringInput | null,
  site?: ModelStringInput | null,
  billingAddress?: ModelStringInput | null,
  billingStreet?: ModelStringInput | null,
  billingCity?: ModelStringInput | null,
  billingState?: ModelStringInput | null,
  billingPostalCode?: ModelStringInput | null,
  billingCountry?: ModelStringInput | null,
  billingType?: ModelStringInput | null,
  fax?: ModelStringInput | null,
  customeCode?: ModelStringInput | null,
  cutoffDateText?: ModelStringInput | null,
  cutoffDateNumber?: ModelIntInput | null,
  paymentMonthText?: ModelStringInput | null,
  paymentMonthNumber?: ModelIntInput | null,
  paymentDateText?: ModelStringInput | null,
  paymentDateNumber?: ModelIntInput | null,
  invoiceUnit?: ModelStringInput | null,
  invoiceMethod?: ModelStringInput | null,
  and?: Array< ModelAccountFilterInput | null > | null,
  or?: Array< ModelAccountFilterInput | null > | null,
  not?: ModelAccountFilterInput | null,
};

export type ModelClientFilterInput = {
  id?: ModelIDInput | null,
  accountId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  abbreviation?: ModelStringInput | null,
  site?: ModelStringInput | null,
  billingAddress?: ModelStringInput | null,
  billingStreet?: ModelStringInput | null,
  billingCity?: ModelStringInput | null,
  billingState?: ModelStringInput | null,
  billingPostalCode?: ModelStringInput | null,
  billingCountry?: ModelStringInput | null,
  billingType?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  fax?: ModelStringInput | null,
  customeCode?: ModelStringInput | null,
  and?: Array< ModelClientFilterInput | null > | null,
  or?: Array< ModelClientFilterInput | null > | null,
  not?: ModelClientFilterInput | null,
};

export type ModelClientConnection = {
  __typename: "ModelClientConnection",
  items:  Array<Client | null >,
  nextToken?: string | null,
};

export type ModelContactFilterInput = {
  id?: ModelIDInput | null,
  accountId?: ModelIDInput | null,
  tenantId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  suffix?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  mobilePhone?: ModelStringInput | null,
  title?: ModelStringInput | null,
  retired?: ModelBooleanInput | null,
  customeCode?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelContactFilterInput | null > | null,
  or?: Array< ModelContactFilterInput | null > | null,
  not?: ModelContactFilterInput | null,
};

export type ModelUnitFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  tenantId?: ModelIDInput | null,
  and?: Array< ModelUnitFilterInput | null > | null,
  or?: Array< ModelUnitFilterInput | null > | null,
  not?: ModelUnitFilterInput | null,
};

export type ModelUnitConnection = {
  __typename: "ModelUnitConnection",
  items:  Array<Unit | null >,
  nextToken?: string | null,
};

export type ModelAccessLogFilterInput = {
  id?: ModelIDInput | null,
  device?: ModelStringInput | null,
  ipAddress?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelAccessLogFilterInput | null > | null,
  or?: Array< ModelAccessLogFilterInput | null > | null,
  not?: ModelAccessLogFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  showTutorial?: ModelBooleanInput | null,
  invited?: ModelBooleanInput | null,
  verified?: ModelBooleanInput | null,
  fontSize?: ModelIntInput | null,
  language?: ModelStringInput | null,
  receiveEmailNotification?: ModelBooleanInput | null,
  theme?: ModelStringInput | null,
  useMfa?: ModelBooleanInput | null,
  customId?: ModelStringInput | null,
  tenantId?: ModelIDInput | null,
  isAdmin?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  fax?: ModelStringInput | null,
  email?: ModelStringInput | null,
  logoUrl?: ModelStringInput | null,
  taxRate?: ModelFloatInput | null,
  maxInventoryM3?: ModelFloatInput | null,
  heatTreatmentRequestCode?: ModelStringInput | null,
  packingMaterialProducerRegistrationNumber?: ModelStringInput | null,
  tenantId?: ModelIDInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelSFObjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  tenantId?: ModelIDInput | null,
  label?: ModelStringInput | null,
  sfObjectName?: ModelStringInput | null,
  editable?: ModelBooleanInput | null,
  condition?: ModelStringInput | null,
  and?: Array< ModelSFObjectFilterInput | null > | null,
  or?: Array< ModelSFObjectFilterInput | null > | null,
  not?: ModelSFObjectFilterInput | null,
};

export type ModelVendorFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  tenantId?: ModelIDInput | null,
  abbreviation?: ModelStringInput | null,
  site?: ModelStringInput | null,
  disinfectantCertificationCode?: ModelStringInput | null,
  billingAddress?: ModelStringInput | null,
  billingPostalCode?: ModelStringInput | null,
  billingCountry?: ModelStringInput | null,
  billingState?: ModelStringInput | null,
  billingStreet?: ModelStringInput | null,
  billingType?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  fax?: ModelStringInput | null,
  customCode?: ModelStringInput | null,
  and?: Array< ModelVendorFilterInput | null > | null,
  or?: Array< ModelVendorFilterInput | null > | null,
  not?: ModelVendorFilterInput | null,
};

export type ModelVendorConnection = {
  __typename: "ModelVendorConnection",
  items:  Array<Vendor | null >,
  nextToken?: string | null,
};

export type ModelMaterialFilterInput = {
  id?: ModelIDInput | null,
  groupId?: ModelIDInput | null,
  materialTypeId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  purchaseUnit?: ModelStringInput | null,
  lossRate?: ModelFloatInput | null,
  weight?: ModelFloatInput | null,
  costCalculation?: ModelStringInput | null,
  defaultUnitCost?: ModelFloatInput | null,
  unit?: ModelStringInput | null,
  length?: ModelFloatInput | null,
  lengthApplicable?: ModelBooleanInput | null,
  lengthLocked?: ModelBooleanInput | null,
  lengthNominal?: ModelFloatInput | null,
  width?: ModelFloatInput | null,
  widthApplicable?: ModelBooleanInput | null,
  widthLocked?: ModelBooleanInput | null,
  widthNominal?: ModelFloatInput | null,
  height?: ModelFloatInput | null,
  heightApplicable?: ModelBooleanInput | null,
  heightLocked?: ModelBooleanInput | null,
  heightNominal?: ModelFloatInput | null,
  and?: Array< ModelMaterialFilterInput | null > | null,
  or?: Array< ModelMaterialFilterInput | null > | null,
  not?: ModelMaterialFilterInput | null,
};

export type ModelMaterialTypeFilterInput = {
  id?: ModelIDInput | null,
  groupId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelMaterialTypeFilterInput | null > | null,
  or?: Array< ModelMaterialTypeFilterInput | null > | null,
  not?: ModelMaterialTypeFilterInput | null,
};

export type ModelMaterialTypeConnection = {
  __typename: "ModelMaterialTypeConnection",
  items:  Array<MaterialType | null >,
  nextToken?: string | null,
};

export type ModelPurchasingFilterInput = {
  id?: ModelIDInput | null,
  groupId?: ModelIDInput | null,
  vendorId?: ModelIDInput | null,
  materialId?: ModelIDInput | null,
  purchasingDate?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  unitPurchasingCost?: ModelFloatInput | null,
  purchaseUnit?: ModelStringInput | null,
  quantity?: ModelFloatInput | null,
  totalCost?: ModelFloatInput | null,
  unitCost?: ModelFloatInput | null,
  costUnit?: ModelStringInput | null,
  note?: ModelStringInput | null,
  and?: Array< ModelPurchasingFilterInput | null > | null,
  or?: Array< ModelPurchasingFilterInput | null > | null,
  not?: ModelPurchasingFilterInput | null,
};

export type ModelPriceTypeFilterInput = {
  id?: ModelIDInput | null,
  groupId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPriceTypeFilterInput | null > | null,
  or?: Array< ModelPriceTypeFilterInput | null > | null,
  not?: ModelPriceTypeFilterInput | null,
};

export type ModelPriceTypeConnection = {
  __typename: "ModelPriceTypeConnection",
  items:  Array<PriceType | null >,
  nextToken?: string | null,
};

export type ModelPricingFilterInput = {
  id?: ModelIDInput | null,
  groupId?: ModelIDInput | null,
  priceTypeId?: ModelIDInput | null,
  packageTypeId?: ModelIDInput | null,
  isDefault?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  packageTypeName?: ModelStringInput | null,
  unitPrice?: ModelFloatInput | null,
  unit?: ModelStringInput | null,
  autoCalculate?: ModelBooleanInput | null,
  minimumAmount?: ModelFloatInput | null,
  taxType?: ModelStringInput | null,
  sizeDependent?: ModelBooleanInput | null,
  accountSpecific?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPricingFilterInput | null > | null,
  or?: Array< ModelPricingFilterInput | null > | null,
  not?: ModelPricingFilterInput | null,
};

export type ModelPackageTypeFilterInput = {
  id?: ModelIDInput | null,
  groupId?: ModelIDInput | null,
  pricingId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  publish?: ModelBooleanInput | null,
  and?: Array< ModelPackageTypeFilterInput | null > | null,
  or?: Array< ModelPackageTypeFilterInput | null > | null,
  not?: ModelPackageTypeFilterInput | null,
};

export type ModelPackageTypeConnection = {
  __typename: "ModelPackageTypeConnection",
  items:  Array<PackageType | null >,
  nextToken?: string | null,
};

export type ModelBaseAreaFilterInput = {
  id?: ModelIDInput | null,
  packageTypeId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  areaType?: ModelStringInput | null,
  order?: ModelIntInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBaseAreaFilterInput | null > | null,
  or?: Array< ModelBaseAreaFilterInput | null > | null,
  not?: ModelBaseAreaFilterInput | null,
};

export type ModelBaseComponentFilterInput = {
  id?: ModelIDInput | null,
  baseAreaId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelBaseComponentFilterInput | null > | null,
  or?: Array< ModelBaseComponentFilterInput | null > | null,
  not?: ModelBaseComponentFilterInput | null,
};

export type ModelBaseDecorationComponentFilterInput = {
  id?: ModelIDInput | null,
  packageTypeId?: ModelIDInput | null,
  type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  order?: ModelIntInput | null,
  unit?: ModelStringInput | null,
  and?: Array< ModelBaseDecorationComponentFilterInput | null > | null,
  or?: Array< ModelBaseDecorationComponentFilterInput | null > | null,
  not?: ModelBaseDecorationComponentFilterInput | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  groupId?: ModelIDInput | null,
  quoteId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  accountId?: ModelIDInput | null,
  accountName?: ModelStringInput | null,
  contactId?: ModelIDInput | null,
  contactName?: ModelStringInput | null,
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  inquiryDate?: ModelStringInput | null,
  quotationDate?: ModelStringInput | null,
  destinationName?: ModelStringInput | null,
  confidence?: ModelStringInput | null,
  description?: ModelStringInput | null,
  alert?: ModelStringInput | null,
  cancelled?: ModelBooleanInput | null,
  cancelReason?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type ModelQuoteFilterInput = {
  id?: ModelIDInput | null,
  projectId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  quoteNumber?: ModelStringInput | null,
  linkProduct?: ModelBooleanInput | null,
  order?: ModelIntInput | null,
  orderPlaced?: ModelBooleanInput | null,
  revenue?: ModelFloatInput | null,
  estimatedCost?: ModelFloatInput | null,
  estimatedProfit?: ModelFloatInput | null,
  greeting?: ModelStringInput | null,
  paymentMethod?: ModelStringInput | null,
  destination?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  expiryDate?: ModelStringInput | null,
  description?: ModelStringInput | null,
  groupName?: ModelStringInput | null,
  logoUrl?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  fax?: ModelStringInput | null,
  and?: Array< ModelQuoteFilterInput | null > | null,
  or?: Array< ModelQuoteFilterInput | null > | null,
  not?: ModelQuoteFilterInput | null,
};

export type ModelQuoteConnection = {
  __typename: "ModelQuoteConnection",
  items:  Array<Quote | null >,
  nextToken?: string | null,
};

export type ModelQuoteLineFilterInput = {
  id?: ModelIDInput | null,
  quoteId?: ModelIDInput | null,
  pricingId?: ModelIDInput | null,
  packageTypeId?: ModelIDInput | null,
  pricingName?: ModelStringInput | null,
  packageTypeName?: ModelStringInput | null,
  name?: ModelStringInput | null,
  index?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  quantity?: ModelFloatInput | null,
  amount?: ModelFloatInput | null,
  minimumAmount?: ModelFloatInput | null,
  actualAmount?: ModelFloatInput | null,
  order?: ModelIntInput | null,
  unitNW?: ModelFloatInput | null,
  NW?: ModelFloatInput | null,
  productLength?: ModelFloatInput | null,
  productWidth?: ModelFloatInput | null,
  productHeight?: ModelFloatInput | null,
  outerLength?: ModelFloatInput | null,
  outerWidth?: ModelFloatInput | null,
  outerHeight?: ModelFloatInput | null,
  estimatedUnitM3?: ModelFloatInput | null,
  estimatedM3?: ModelFloatInput | null,
  estimatedUnitGrossWeight?: ModelFloatInput | null,
  estimatedGrossWeight?: ModelFloatInput | null,
  estimatedUnitCost?: ModelFloatInput | null,
  estimatedCost?: ModelFloatInput | null,
  estimatedProfit?: ModelFloatInput | null,
  unitPrice?: ModelFloatInput | null,
  subtotal?: ModelFloatInput | null,
  total?: ModelFloatInput | null,
  unit?: ModelStringInput | null,
  taxType?: ModelStringInput | null,
  taxRate?: ModelFloatInput | null,
  costDetail?: ModelStringInput | null,
  and?: Array< ModelQuoteLineFilterInput | null > | null,
  or?: Array< ModelQuoteLineFilterInput | null > | null,
  not?: ModelQuoteLineFilterInput | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  projectId?: ModelIDInput | null,
  packageTypeId?: ModelIDInput | null,
  pricingId?: ModelIDInput | null,
  packageTypeName?: ModelStringInput | null,
  quoteLineId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  order?: ModelIntInput | null,
  productNumber?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  material?: ModelStringInput | null,
  tareWeight?: ModelFloatInput | null,
  stamp?: ModelStringInput | null,
  destination?: ModelStringInput | null,
  packagingStart?: ModelStringInput | null,
  packagingEnd?: ModelStringInput | null,
  packageMethod?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type ModelAreaFilterInput = {
  id?: ModelIDInput | null,
  productId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  areaType?: ModelStringInput | null,
  order?: ModelIntInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelAreaFilterInput | null > | null,
  or?: Array< ModelAreaFilterInput | null > | null,
  not?: ModelAreaFilterInput | null,
};

export type ModelComponentFilterInput = {
  id?: ModelIDInput | null,
  areaId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelComponentFilterInput | null > | null,
  or?: Array< ModelComponentFilterInput | null > | null,
  not?: ModelComponentFilterInput | null,
};

export type ModelDecorationComponentFilterInput = {
  id?: ModelIDInput | null,
  productId?: ModelIDInput | null,
  type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  order?: ModelIntInput | null,
  unit?: ModelStringInput | null,
  and?: Array< ModelDecorationComponentFilterInput | null > | null,
  or?: Array< ModelDecorationComponentFilterInput | null > | null,
  not?: ModelDecorationComponentFilterInput | null,
};

export type ModelSummaryFilterInput = {
  id?: ModelIDInput | null,
  projectId?: ModelIDInput | null,
  pricingId?: ModelIDInput | null,
  pricingName?: ModelStringInput | null,
  productId?: ModelIDInput | null,
  quoteLineId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  order?: ModelIntInput | null,
  quantity?: ModelIntInput | null,
  tareWeight?: ModelFloatInput | null,
  productLength?: ModelFloatInput | null,
  productWidth?: ModelFloatInput | null,
  productHeight?: ModelFloatInput | null,
  outerLength?: ModelFloatInput | null,
  outerWidth?: ModelFloatInput | null,
  outerHeight?: ModelFloatInput | null,
  unitM3?: ModelFloatInput | null,
  unitNW?: ModelFloatInput | null,
  unitGrossWeight?: ModelFloatInput | null,
  NW?: ModelFloatInput | null,
  grossWeight?: ModelFloatInput | null,
  m3?: ModelFloatInput | null,
  unitPrice?: ModelFloatInput | null,
  unit?: ModelStringInput | null,
  autoCalculate?: ModelBooleanInput | null,
  taxType?: ModelStringInput | null,
  overwritten?: ModelBooleanInput | null,
  and?: Array< ModelSummaryFilterInput | null > | null,
  or?: Array< ModelSummaryFilterInput | null > | null,
  not?: ModelSummaryFilterInput | null,
};

export type ModelSummaryConnection = {
  __typename: "ModelSummaryConnection",
  items:  Array<Summary | null >,
  nextToken?: string | null,
};

export type ModelInvoiceFilterInput = {
  id?: ModelIDInput | null,
  projectId?: ModelIDInput | null,
  accountId?: ModelIDInput | null,
  contactId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  groupId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  invoiceNo?: ModelStringInput | null,
  issueDate?: ModelStringInput | null,
  billed?: ModelBooleanInput | null,
  billingDate?: ModelStringInput | null,
  taxTotal?: ModelFloatInput | null,
  subtotal?: ModelFloatInput | null,
  total?: ModelFloatInput | null,
  url?: ModelStringInput | null,
  description?: ModelStringInput | null,
  accountName?: ModelStringInput | null,
  billingType?: ModelStringInput | null,
  contactName?: ModelStringInput | null,
  contactTitle?: ModelStringInput | null,
  groupName?: ModelStringInput | null,
  logoUrl?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  fax?: ModelStringInput | null,
  and?: Array< ModelInvoiceFilterInput | null > | null,
  or?: Array< ModelInvoiceFilterInput | null > | null,
  not?: ModelInvoiceFilterInput | null,
};

export type ModelInvoiceConnection = {
  __typename: "ModelInvoiceConnection",
  items:  Array<Invoice | null >,
  nextToken?: string | null,
};

export type ModelInvoiceLineFilterInput = {
  id?: ModelIDInput | null,
  invoiceId?: ModelIDInput | null,
  pricingId?: ModelIDInput | null,
  pricingName?: ModelStringInput | null,
  quoteLineId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  shippingDate?: ModelStringInput | null,
  salesType?: ModelStringInput | null,
  order?: ModelIntInput | null,
  m3?: ModelFloatInput | null,
  grossWeight?: ModelFloatInput | null,
  quantity?: ModelFloatInput | null,
  amount?: ModelFloatInput | null,
  minimumAmount?: ModelFloatInput | null,
  actualAmount?: ModelFloatInput | null,
  unit?: ModelStringInput | null,
  unitPrice?: ModelFloatInput | null,
  taxRate?: ModelFloatInput | null,
  taxTotal?: ModelFloatInput | null,
  subtotal?: ModelFloatInput | null,
  total?: ModelFloatInput | null,
  taxType?: ModelStringInput | null,
  synced?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelInvoiceLineFilterInput | null > | null,
  or?: Array< ModelInvoiceLineFilterInput | null > | null,
  not?: ModelInvoiceLineFilterInput | null,
};

export type ModelSyncLogFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelStringInput | null,
  numberOfNewRecords?: ModelIntInput | null,
  numberOfDeletedRecords?: ModelIntInput | null,
  numberOfUpdatedRecords?: ModelIntInput | null,
  message?: ModelStringInput | null,
  sFObjectId?: ModelIDInput | null,
  and?: Array< ModelSyncLogFilterInput | null > | null,
  or?: Array< ModelSyncLogFilterInput | null > | null,
  not?: ModelSyncLogFilterInput | null,
};

export type ModelSyncLogConnection = {
  __typename: "ModelSyncLogConnection",
  items:  Array<SyncLog | null >,
  nextToken?: string | null,
};

export type InviteAdminMutationVariables = {
  input: InviteAdminInput,
};

export type InviteAdminMutation = {
  inviteAdmin?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    firstName: string,
    lastName: string,
    email: string,
    showTutorial: boolean,
    invited: boolean,
    verified: boolean,
    fontSize?: number | null,
    language?: string | null,
    receiveEmailNotification: boolean,
    theme?: string | null,
    useMfa: boolean,
    customId?: string | null,
    tenantId: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    accessLogs?:  {
      __typename: "ModelAccessLogConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelUsersGroupsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type InviteUserMutationVariables = {
  input: InviteUserInput,
};

export type InviteUserMutation = {
  inviteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    firstName: string,
    lastName: string,
    email: string,
    showTutorial: boolean,
    invited: boolean,
    verified: boolean,
    fontSize?: number | null,
    language?: string | null,
    receiveEmailNotification: boolean,
    theme?: string | null,
    useMfa: boolean,
    customId?: string | null,
    tenantId: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    accessLogs?:  {
      __typename: "ModelAccessLogConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelUsersGroupsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type RemoveUserMutationVariables = {
  input: RemoveUserInput,
};

export type RemoveUserMutation = {
  removeUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    firstName: string,
    lastName: string,
    email: string,
    showTutorial: boolean,
    invited: boolean,
    verified: boolean,
    fontSize?: number | null,
    language?: string | null,
    receiveEmailNotification: boolean,
    theme?: string | null,
    useMfa: boolean,
    customId?: string | null,
    tenantId: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    accessLogs?:  {
      __typename: "ModelAccessLogConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelUsersGroupsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type SyncAllMutation = {
  syncAll?: string | null,
};

export type SyncTenantMutationVariables = {
  input: SyncTenantInput,
};

export type SyncTenantMutation = {
  syncTenant?: string | null,
};

export type SyncObjectMutationVariables = {
  input: SyncObjectInput,
};

export type SyncObjectMutation = {
  syncObject?: string | null,
};

export type CreateMetaTableMutationVariables = {
  input: CreateMetaTableInput,
  condition?: ModelMetaTableConditionInput | null,
};

export type CreateMetaTableMutation = {
  createMetaTable?:  {
    __typename: "MetaTable",
    id: string,
    name: string,
    label?: string | null,
    fields?:  Array< {
      __typename: "MetaTableField",
      name: string,
      label?: string | null,
      type?: string | null,
      required?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMetaTableMutationVariables = {
  input: UpdateMetaTableInput,
  condition?: ModelMetaTableConditionInput | null,
};

export type UpdateMetaTableMutation = {
  updateMetaTable?:  {
    __typename: "MetaTable",
    id: string,
    name: string,
    label?: string | null,
    fields?:  Array< {
      __typename: "MetaTableField",
      name: string,
      label?: string | null,
      type?: string | null,
      required?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMetaTableMutationVariables = {
  input: DeleteMetaTableInput,
  condition?: ModelMetaTableConditionInput | null,
};

export type DeleteMetaTableMutation = {
  deleteMetaTable?:  {
    __typename: "MetaTable",
    id: string,
    name: string,
    label?: string | null,
    fields?:  Array< {
      __typename: "MetaTableField",
      name: string,
      label?: string | null,
      type?: string | null,
      required?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTenantMutationVariables = {
  input: CreateTenantInput,
  condition?: ModelTenantConditionInput | null,
};

export type CreateTenantMutation = {
  createTenant?:  {
    __typename: "Tenant",
    id: string,
    name: string,
    logoUrl?: string | null,
    address?: string | null,
    phone?: string | null,
    syncSFObject?: boolean | null,
    sfLoginUrl?: string | null,
    sfUsername?: string | null,
    sfPassword?: string | null,
    sfSecretToken?: string | null,
    projectFilters?:  Array< {
      __typename: "ProjectFilter",
      name?: string | null,
      duration?: string | null,
      sort?: string | null,
      showProcesses?: Array< string | null > | null,
      showUnits?: Array< string | null > | null,
      showPhases?: Array< string | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    accounts?:  {
      __typename: "ModelAccountConnection",
      nextToken?: string | null,
    } | null,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelGroupConnection",
      nextToken?: string | null,
    } | null,
    sfObjects?:  {
      __typename: "ModelSFObjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateTenantMutationVariables = {
  input: UpdateTenantInput,
  condition?: ModelTenantConditionInput | null,
};

export type UpdateTenantMutation = {
  updateTenant?:  {
    __typename: "Tenant",
    id: string,
    name: string,
    logoUrl?: string | null,
    address?: string | null,
    phone?: string | null,
    syncSFObject?: boolean | null,
    sfLoginUrl?: string | null,
    sfUsername?: string | null,
    sfPassword?: string | null,
    sfSecretToken?: string | null,
    projectFilters?:  Array< {
      __typename: "ProjectFilter",
      name?: string | null,
      duration?: string | null,
      sort?: string | null,
      showProcesses?: Array< string | null > | null,
      showUnits?: Array< string | null > | null,
      showPhases?: Array< string | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    accounts?:  {
      __typename: "ModelAccountConnection",
      nextToken?: string | null,
    } | null,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelGroupConnection",
      nextToken?: string | null,
    } | null,
    sfObjects?:  {
      __typename: "ModelSFObjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteTenantMutationVariables = {
  input: DeleteTenantInput,
  condition?: ModelTenantConditionInput | null,
};

export type DeleteTenantMutation = {
  deleteTenant?:  {
    __typename: "Tenant",
    id: string,
    name: string,
    logoUrl?: string | null,
    address?: string | null,
    phone?: string | null,
    syncSFObject?: boolean | null,
    sfLoginUrl?: string | null,
    sfUsername?: string | null,
    sfPassword?: string | null,
    sfSecretToken?: string | null,
    projectFilters?:  Array< {
      __typename: "ProjectFilter",
      name?: string | null,
      duration?: string | null,
      sort?: string | null,
      showProcesses?: Array< string | null > | null,
      showUnits?: Array< string | null > | null,
      showPhases?: Array< string | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    accounts?:  {
      __typename: "ModelAccountConnection",
      nextToken?: string | null,
    } | null,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelGroupConnection",
      nextToken?: string | null,
    } | null,
    sfObjects?:  {
      __typename: "ModelSFObjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateAccountMutationVariables = {
  input: CreateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type CreateAccountMutation = {
  createAccount?:  {
    __typename: "Account",
    id: string,
    tenantId: string,
    name: string,
    abbreviation?: string | null,
    site?: string | null,
    billingAddress?: string | null,
    billingStreet?: string | null,
    billingCity?: string | null,
    billingState?: string | null,
    billingPostalCode?: string | null,
    billingCountry?: string | null,
    billingType?: string | null,
    fax?: string | null,
    customeCode?: string | null,
    cutoffDateText?: string | null,
    cutoffDateNumber?: number | null,
    paymentMonthText?: string | null,
    paymentMonthNumber?: number | null,
    paymentDateText?: string | null,
    paymentDateNumber?: number | null,
    invoiceUnit?: string | null,
    invoiceMethod?: string | null,
    createdAt: string,
    updatedAt: string,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateAccountMutationVariables = {
  input: UpdateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type UpdateAccountMutation = {
  updateAccount?:  {
    __typename: "Account",
    id: string,
    tenantId: string,
    name: string,
    abbreviation?: string | null,
    site?: string | null,
    billingAddress?: string | null,
    billingStreet?: string | null,
    billingCity?: string | null,
    billingState?: string | null,
    billingPostalCode?: string | null,
    billingCountry?: string | null,
    billingType?: string | null,
    fax?: string | null,
    customeCode?: string | null,
    cutoffDateText?: string | null,
    cutoffDateNumber?: number | null,
    paymentMonthText?: string | null,
    paymentMonthNumber?: number | null,
    paymentDateText?: string | null,
    paymentDateNumber?: number | null,
    invoiceUnit?: string | null,
    invoiceMethod?: string | null,
    createdAt: string,
    updatedAt: string,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteAccountMutationVariables = {
  input: DeleteAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type DeleteAccountMutation = {
  deleteAccount?:  {
    __typename: "Account",
    id: string,
    tenantId: string,
    name: string,
    abbreviation?: string | null,
    site?: string | null,
    billingAddress?: string | null,
    billingStreet?: string | null,
    billingCity?: string | null,
    billingState?: string | null,
    billingPostalCode?: string | null,
    billingCountry?: string | null,
    billingType?: string | null,
    fax?: string | null,
    customeCode?: string | null,
    cutoffDateText?: string | null,
    cutoffDateNumber?: number | null,
    paymentMonthText?: string | null,
    paymentMonthNumber?: number | null,
    paymentDateText?: string | null,
    paymentDateNumber?: number | null,
    invoiceUnit?: string | null,
    invoiceMethod?: string | null,
    createdAt: string,
    updatedAt: string,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateClientMutationVariables = {
  input: CreateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type CreateClientMutation = {
  createClient?:  {
    __typename: "Client",
    id: string,
    accountId: string,
    name: string,
    abbreviation?: string | null,
    site?: string | null,
    billingAddress?: string | null,
    billingStreet?: string | null,
    billingCity?: string | null,
    billingState?: string | null,
    billingPostalCode?: string | null,
    billingCountry?: string | null,
    billingType?: string | null,
    phone?: string | null,
    fax?: string | null,
    customeCode?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateClientMutationVariables = {
  input: UpdateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type UpdateClientMutation = {
  updateClient?:  {
    __typename: "Client",
    id: string,
    accountId: string,
    name: string,
    abbreviation?: string | null,
    site?: string | null,
    billingAddress?: string | null,
    billingStreet?: string | null,
    billingCity?: string | null,
    billingState?: string | null,
    billingPostalCode?: string | null,
    billingCountry?: string | null,
    billingType?: string | null,
    phone?: string | null,
    fax?: string | null,
    customeCode?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteClientMutationVariables = {
  input: DeleteClientInput,
  condition?: ModelClientConditionInput | null,
};

export type DeleteClientMutation = {
  deleteClient?:  {
    __typename: "Client",
    id: string,
    accountId: string,
    name: string,
    abbreviation?: string | null,
    site?: string | null,
    billingAddress?: string | null,
    billingStreet?: string | null,
    billingCity?: string | null,
    billingState?: string | null,
    billingPostalCode?: string | null,
    billingCountry?: string | null,
    billingType?: string | null,
    phone?: string | null,
    fax?: string | null,
    customeCode?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContactMutationVariables = {
  input: CreateContactInput,
  condition?: ModelContactConditionInput | null,
};

export type CreateContactMutation = {
  createContact?:  {
    __typename: "Contact",
    id: string,
    accountId: string,
    tenantId: string,
    name?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    suffix?: string | null,
    email?: string | null,
    phone?: string | null,
    mobilePhone?: string | null,
    title?: string | null,
    retired?: boolean | null,
    customeCode?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      tenantId: string,
      name: string,
      abbreviation?: string | null,
      site?: string | null,
      billingAddress?: string | null,
      billingStreet?: string | null,
      billingCity?: string | null,
      billingState?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingType?: string | null,
      fax?: string | null,
      customeCode?: string | null,
      cutoffDateText?: string | null,
      cutoffDateNumber?: number | null,
      paymentMonthText?: string | null,
      paymentMonthNumber?: number | null,
      paymentDateText?: string | null,
      paymentDateNumber?: number | null,
      invoiceUnit?: string | null,
      invoiceMethod?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateContactMutationVariables = {
  input: UpdateContactInput,
  condition?: ModelContactConditionInput | null,
};

export type UpdateContactMutation = {
  updateContact?:  {
    __typename: "Contact",
    id: string,
    accountId: string,
    tenantId: string,
    name?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    suffix?: string | null,
    email?: string | null,
    phone?: string | null,
    mobilePhone?: string | null,
    title?: string | null,
    retired?: boolean | null,
    customeCode?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      tenantId: string,
      name: string,
      abbreviation?: string | null,
      site?: string | null,
      billingAddress?: string | null,
      billingStreet?: string | null,
      billingCity?: string | null,
      billingState?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingType?: string | null,
      fax?: string | null,
      customeCode?: string | null,
      cutoffDateText?: string | null,
      cutoffDateNumber?: number | null,
      paymentMonthText?: string | null,
      paymentMonthNumber?: number | null,
      paymentDateText?: string | null,
      paymentDateNumber?: number | null,
      invoiceUnit?: string | null,
      invoiceMethod?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteContactMutationVariables = {
  input: DeleteContactInput,
  condition?: ModelContactConditionInput | null,
};

export type DeleteContactMutation = {
  deleteContact?:  {
    __typename: "Contact",
    id: string,
    accountId: string,
    tenantId: string,
    name?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    suffix?: string | null,
    email?: string | null,
    phone?: string | null,
    mobilePhone?: string | null,
    title?: string | null,
    retired?: boolean | null,
    customeCode?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      tenantId: string,
      name: string,
      abbreviation?: string | null,
      site?: string | null,
      billingAddress?: string | null,
      billingStreet?: string | null,
      billingCity?: string | null,
      billingState?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingType?: string | null,
      fax?: string | null,
      customeCode?: string | null,
      cutoffDateText?: string | null,
      cutoffDateNumber?: number | null,
      paymentMonthText?: string | null,
      paymentMonthNumber?: number | null,
      paymentDateText?: string | null,
      paymentDateNumber?: number | null,
      invoiceUnit?: string | null,
      invoiceMethod?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateUnitMutationVariables = {
  input: CreateUnitInput,
  condition?: ModelUnitConditionInput | null,
};

export type CreateUnitMutation = {
  createUnit?:  {
    __typename: "Unit",
    id: string,
    name: string,
    tenantId: string,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateUnitMutationVariables = {
  input: UpdateUnitInput,
  condition?: ModelUnitConditionInput | null,
};

export type UpdateUnitMutation = {
  updateUnit?:  {
    __typename: "Unit",
    id: string,
    name: string,
    tenantId: string,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteUnitMutationVariables = {
  input: DeleteUnitInput,
  condition?: ModelUnitConditionInput | null,
};

export type DeleteUnitMutation = {
  deleteUnit?:  {
    __typename: "Unit",
    id: string,
    name: string,
    tenantId: string,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateAccessLogMutationVariables = {
  input: CreateAccessLogInput,
  condition?: ModelAccessLogConditionInput | null,
};

export type CreateAccessLogMutation = {
  createAccessLog?:  {
    __typename: "AccessLog",
    id: string,
    device?: string | null,
    ipAddress?: string | null,
    description?: string | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateAccessLogMutationVariables = {
  input: UpdateAccessLogInput,
  condition?: ModelAccessLogConditionInput | null,
};

export type UpdateAccessLogMutation = {
  updateAccessLog?:  {
    __typename: "AccessLog",
    id: string,
    device?: string | null,
    ipAddress?: string | null,
    description?: string | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteAccessLogMutationVariables = {
  input: DeleteAccessLogInput,
  condition?: ModelAccessLogConditionInput | null,
};

export type DeleteAccessLogMutation = {
  deleteAccessLog?:  {
    __typename: "AccessLog",
    id: string,
    device?: string | null,
    ipAddress?: string | null,
    description?: string | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    firstName: string,
    lastName: string,
    email: string,
    showTutorial: boolean,
    invited: boolean,
    verified: boolean,
    fontSize?: number | null,
    language?: string | null,
    receiveEmailNotification: boolean,
    theme?: string | null,
    useMfa: boolean,
    customId?: string | null,
    tenantId: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    accessLogs?:  {
      __typename: "ModelAccessLogConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelUsersGroupsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    firstName: string,
    lastName: string,
    email: string,
    showTutorial: boolean,
    invited: boolean,
    verified: boolean,
    fontSize?: number | null,
    language?: string | null,
    receiveEmailNotification: boolean,
    theme?: string | null,
    useMfa: boolean,
    customId?: string | null,
    tenantId: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    accessLogs?:  {
      __typename: "ModelAccessLogConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelUsersGroupsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    firstName: string,
    lastName: string,
    email: string,
    showTutorial: boolean,
    invited: boolean,
    verified: boolean,
    fontSize?: number | null,
    language?: string | null,
    receiveEmailNotification: boolean,
    theme?: string | null,
    useMfa: boolean,
    customId?: string | null,
    tenantId: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    accessLogs?:  {
      __typename: "ModelAccessLogConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelUsersGroupsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type CreateGroupMutation = {
  createGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    phone?: string | null,
    fax?: string | null,
    email?: string | null,
    logoUrl?: string | null,
    groupAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    quoteInfo?:  {
      __typename: "QuoteData",
      greeting?: string | null,
      paymentMethod?: string | null,
      destination?: string | null,
      dueDate?: string | null,
      expiryDate?: string | null,
      description?: string | null,
    } | null,
    bank?:  {
      __typename: "Bank",
      name?: string | null,
      branchName?: string | null,
      branchNumber?: string | null,
      type?: string | null,
      accountNumber?: string | null,
      swiftCode?: string | null,
    } | null,
    taxRate?: number | null,
    maxInventoryM3?: number | null,
    heatTreatmentRequestCode?: string | null,
    packingMaterialProducerRegistrationNumber?: string | null,
    tenantId: string,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    users?:  {
      __typename: "ModelUsersGroupsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type UpdateGroupMutation = {
  updateGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    phone?: string | null,
    fax?: string | null,
    email?: string | null,
    logoUrl?: string | null,
    groupAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    quoteInfo?:  {
      __typename: "QuoteData",
      greeting?: string | null,
      paymentMethod?: string | null,
      destination?: string | null,
      dueDate?: string | null,
      expiryDate?: string | null,
      description?: string | null,
    } | null,
    bank?:  {
      __typename: "Bank",
      name?: string | null,
      branchName?: string | null,
      branchNumber?: string | null,
      type?: string | null,
      accountNumber?: string | null,
      swiftCode?: string | null,
    } | null,
    taxRate?: number | null,
    maxInventoryM3?: number | null,
    heatTreatmentRequestCode?: string | null,
    packingMaterialProducerRegistrationNumber?: string | null,
    tenantId: string,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    users?:  {
      __typename: "ModelUsersGroupsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type DeleteGroupMutation = {
  deleteGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    phone?: string | null,
    fax?: string | null,
    email?: string | null,
    logoUrl?: string | null,
    groupAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    quoteInfo?:  {
      __typename: "QuoteData",
      greeting?: string | null,
      paymentMethod?: string | null,
      destination?: string | null,
      dueDate?: string | null,
      expiryDate?: string | null,
      description?: string | null,
    } | null,
    bank?:  {
      __typename: "Bank",
      name?: string | null,
      branchName?: string | null,
      branchNumber?: string | null,
      type?: string | null,
      accountNumber?: string | null,
      swiftCode?: string | null,
    } | null,
    taxRate?: number | null,
    maxInventoryM3?: number | null,
    heatTreatmentRequestCode?: string | null,
    packingMaterialProducerRegistrationNumber?: string | null,
    tenantId: string,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    users?:  {
      __typename: "ModelUsersGroupsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateUsersGroupsMutationVariables = {
  input: CreateUsersGroupsInput,
  condition?: ModelUsersGroupsConditionInput | null,
};

export type CreateUsersGroupsMutation = {
  createUsersGroups?:  {
    __typename: "UsersGroups",
    id: string,
    userId: string,
    groupId: string,
    role?: string | null,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    group?:  {
      __typename: "Group",
      id: string,
      name: string,
      phone?: string | null,
      fax?: string | null,
      email?: string | null,
      logoUrl?: string | null,
      taxRate?: number | null,
      maxInventoryM3?: number | null,
      heatTreatmentRequestCode?: string | null,
      packingMaterialProducerRegistrationNumber?: string | null,
      tenantId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateUsersGroupsMutationVariables = {
  input: UpdateUsersGroupsInput,
  condition?: ModelUsersGroupsConditionInput | null,
};

export type UpdateUsersGroupsMutation = {
  updateUsersGroups?:  {
    __typename: "UsersGroups",
    id: string,
    userId: string,
    groupId: string,
    role?: string | null,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    group?:  {
      __typename: "Group",
      id: string,
      name: string,
      phone?: string | null,
      fax?: string | null,
      email?: string | null,
      logoUrl?: string | null,
      taxRate?: number | null,
      maxInventoryM3?: number | null,
      heatTreatmentRequestCode?: string | null,
      packingMaterialProducerRegistrationNumber?: string | null,
      tenantId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteUsersGroupsMutationVariables = {
  input: DeleteUsersGroupsInput,
  condition?: ModelUsersGroupsConditionInput | null,
};

export type DeleteUsersGroupsMutation = {
  deleteUsersGroups?:  {
    __typename: "UsersGroups",
    id: string,
    userId: string,
    groupId: string,
    role?: string | null,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    group?:  {
      __typename: "Group",
      id: string,
      name: string,
      phone?: string | null,
      fax?: string | null,
      email?: string | null,
      logoUrl?: string | null,
      taxRate?: number | null,
      maxInventoryM3?: number | null,
      heatTreatmentRequestCode?: string | null,
      packingMaterialProducerRegistrationNumber?: string | null,
      tenantId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateSFObjectMutationVariables = {
  input: CreateSFObjectInput,
  condition?: ModelSFObjectConditionInput | null,
};

export type CreateSFObjectMutation = {
  createSFObject?:  {
    __typename: "SFObject",
    id: string,
    name: string,
    tenantId: string,
    label?: string | null,
    sfObjectName?: string | null,
    editable: boolean,
    condition?: string | null,
    fields?:  Array< {
      __typename: "SFField",
      name: string,
      label?: string | null,
      apiName?: string | null,
      type?: string | null,
      required?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSFObjectMutationVariables = {
  input: UpdateSFObjectInput,
  condition?: ModelSFObjectConditionInput | null,
};

export type UpdateSFObjectMutation = {
  updateSFObject?:  {
    __typename: "SFObject",
    id: string,
    name: string,
    tenantId: string,
    label?: string | null,
    sfObjectName?: string | null,
    editable: boolean,
    condition?: string | null,
    fields?:  Array< {
      __typename: "SFField",
      name: string,
      label?: string | null,
      apiName?: string | null,
      type?: string | null,
      required?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSFObjectMutationVariables = {
  input: DeleteSFObjectInput,
  condition?: ModelSFObjectConditionInput | null,
};

export type DeleteSFObjectMutation = {
  deleteSFObject?:  {
    __typename: "SFObject",
    id: string,
    name: string,
    tenantId: string,
    label?: string | null,
    sfObjectName?: string | null,
    editable: boolean,
    condition?: string | null,
    fields?:  Array< {
      __typename: "SFField",
      name: string,
      label?: string | null,
      apiName?: string | null,
      type?: string | null,
      required?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateVendorMutationVariables = {
  input: CreateVendorInput,
  condition?: ModelVendorConditionInput | null,
};

export type CreateVendorMutation = {
  createVendor?:  {
    __typename: "Vendor",
    id: string,
    name: string,
    tenantId: string,
    abbreviation?: string | null,
    site?: string | null,
    disinfectantCertificationCode?: string | null,
    billingAddress?: string | null,
    billingPostalCode?: string | null,
    billingCountry?: string | null,
    billingState?: string | null,
    billingStreet?: string | null,
    billingType?: string | null,
    phone?: string | null,
    fax?: string | null,
    customCode?: string | null,
    createdAt: string,
    updatedAt: string,
    materials?:  {
      __typename: "ModelVendorsMaterialsConnection",
      nextToken?: string | null,
    } | null,
    purchasings?:  {
      __typename: "ModelPurchasingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateVendorMutationVariables = {
  input: UpdateVendorInput,
  condition?: ModelVendorConditionInput | null,
};

export type UpdateVendorMutation = {
  updateVendor?:  {
    __typename: "Vendor",
    id: string,
    name: string,
    tenantId: string,
    abbreviation?: string | null,
    site?: string | null,
    disinfectantCertificationCode?: string | null,
    billingAddress?: string | null,
    billingPostalCode?: string | null,
    billingCountry?: string | null,
    billingState?: string | null,
    billingStreet?: string | null,
    billingType?: string | null,
    phone?: string | null,
    fax?: string | null,
    customCode?: string | null,
    createdAt: string,
    updatedAt: string,
    materials?:  {
      __typename: "ModelVendorsMaterialsConnection",
      nextToken?: string | null,
    } | null,
    purchasings?:  {
      __typename: "ModelPurchasingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteVendorMutationVariables = {
  input: DeleteVendorInput,
  condition?: ModelVendorConditionInput | null,
};

export type DeleteVendorMutation = {
  deleteVendor?:  {
    __typename: "Vendor",
    id: string,
    name: string,
    tenantId: string,
    abbreviation?: string | null,
    site?: string | null,
    disinfectantCertificationCode?: string | null,
    billingAddress?: string | null,
    billingPostalCode?: string | null,
    billingCountry?: string | null,
    billingState?: string | null,
    billingStreet?: string | null,
    billingType?: string | null,
    phone?: string | null,
    fax?: string | null,
    customCode?: string | null,
    createdAt: string,
    updatedAt: string,
    materials?:  {
      __typename: "ModelVendorsMaterialsConnection",
      nextToken?: string | null,
    } | null,
    purchasings?:  {
      __typename: "ModelPurchasingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateVendorsMaterialsMutationVariables = {
  input: CreateVendorsMaterialsInput,
  condition?: ModelVendorsMaterialsConditionInput | null,
};

export type CreateVendorsMaterialsMutation = {
  createVendorsMaterials?:  {
    __typename: "VendorsMaterials",
    id: string,
    vendorId: string,
    materialId: string,
    createdAt: string,
    updatedAt: string,
    vendor?:  {
      __typename: "Vendor",
      id: string,
      name: string,
      tenantId: string,
      abbreviation?: string | null,
      site?: string | null,
      disinfectantCertificationCode?: string | null,
      billingAddress?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingState?: string | null,
      billingStreet?: string | null,
      billingType?: string | null,
      phone?: string | null,
      fax?: string | null,
      customCode?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    material?:  {
      __typename: "Material",
      id: string,
      groupId: string,
      materialTypeId: string,
      name: string,
      purchaseUnit?: string | null,
      lossRate?: number | null,
      weight?: number | null,
      costCalculation?: string | null,
      defaultUnitCost?: number | null,
      unit?: string | null,
      length?: number | null,
      lengthApplicable?: boolean | null,
      lengthLocked?: boolean | null,
      lengthNominal?: number | null,
      width?: number | null,
      widthApplicable?: boolean | null,
      widthLocked?: boolean | null,
      widthNominal?: number | null,
      height?: number | null,
      heightApplicable?: boolean | null,
      heightLocked?: boolean | null,
      heightNominal?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateVendorsMaterialsMutationVariables = {
  input: UpdateVendorsMaterialsInput,
  condition?: ModelVendorsMaterialsConditionInput | null,
};

export type UpdateVendorsMaterialsMutation = {
  updateVendorsMaterials?:  {
    __typename: "VendorsMaterials",
    id: string,
    vendorId: string,
    materialId: string,
    createdAt: string,
    updatedAt: string,
    vendor?:  {
      __typename: "Vendor",
      id: string,
      name: string,
      tenantId: string,
      abbreviation?: string | null,
      site?: string | null,
      disinfectantCertificationCode?: string | null,
      billingAddress?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingState?: string | null,
      billingStreet?: string | null,
      billingType?: string | null,
      phone?: string | null,
      fax?: string | null,
      customCode?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    material?:  {
      __typename: "Material",
      id: string,
      groupId: string,
      materialTypeId: string,
      name: string,
      purchaseUnit?: string | null,
      lossRate?: number | null,
      weight?: number | null,
      costCalculation?: string | null,
      defaultUnitCost?: number | null,
      unit?: string | null,
      length?: number | null,
      lengthApplicable?: boolean | null,
      lengthLocked?: boolean | null,
      lengthNominal?: number | null,
      width?: number | null,
      widthApplicable?: boolean | null,
      widthLocked?: boolean | null,
      widthNominal?: number | null,
      height?: number | null,
      heightApplicable?: boolean | null,
      heightLocked?: boolean | null,
      heightNominal?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteVendorsMaterialsMutationVariables = {
  input: DeleteVendorsMaterialsInput,
  condition?: ModelVendorsMaterialsConditionInput | null,
};

export type DeleteVendorsMaterialsMutation = {
  deleteVendorsMaterials?:  {
    __typename: "VendorsMaterials",
    id: string,
    vendorId: string,
    materialId: string,
    createdAt: string,
    updatedAt: string,
    vendor?:  {
      __typename: "Vendor",
      id: string,
      name: string,
      tenantId: string,
      abbreviation?: string | null,
      site?: string | null,
      disinfectantCertificationCode?: string | null,
      billingAddress?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingState?: string | null,
      billingStreet?: string | null,
      billingType?: string | null,
      phone?: string | null,
      fax?: string | null,
      customCode?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    material?:  {
      __typename: "Material",
      id: string,
      groupId: string,
      materialTypeId: string,
      name: string,
      purchaseUnit?: string | null,
      lossRate?: number | null,
      weight?: number | null,
      costCalculation?: string | null,
      defaultUnitCost?: number | null,
      unit?: string | null,
      length?: number | null,
      lengthApplicable?: boolean | null,
      lengthLocked?: boolean | null,
      lengthNominal?: number | null,
      width?: number | null,
      widthApplicable?: boolean | null,
      widthLocked?: boolean | null,
      widthNominal?: number | null,
      height?: number | null,
      heightApplicable?: boolean | null,
      heightLocked?: boolean | null,
      heightNominal?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateMaterialMutationVariables = {
  input: CreateMaterialInput,
  condition?: ModelMaterialConditionInput | null,
};

export type CreateMaterialMutation = {
  createMaterial?:  {
    __typename: "Material",
    id: string,
    groupId: string,
    materialTypeId: string,
    name: string,
    purchaseUnit?: string | null,
    lossRate?: number | null,
    weight?: number | null,
    costCalculation?: string | null,
    defaultUnitCost?: number | null,
    unit?: string | null,
    length?: number | null,
    lengthApplicable?: boolean | null,
    lengthLocked?: boolean | null,
    lengthNominal?: number | null,
    width?: number | null,
    widthApplicable?: boolean | null,
    widthLocked?: boolean | null,
    widthNominal?: number | null,
    height?: number | null,
    heightApplicable?: boolean | null,
    heightLocked?: boolean | null,
    heightNominal?: number | null,
    createdAt: string,
    updatedAt: string,
    vendors?:  {
      __typename: "ModelVendorsMaterialsConnection",
      nextToken?: string | null,
    } | null,
    materialType?:  {
      __typename: "MaterialType",
      id: string,
      groupId: string,
      name: string,
      description?: string | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    purchasings?:  {
      __typename: "ModelPurchasingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateMaterialMutationVariables = {
  input: UpdateMaterialInput,
  condition?: ModelMaterialConditionInput | null,
};

export type UpdateMaterialMutation = {
  updateMaterial?:  {
    __typename: "Material",
    id: string,
    groupId: string,
    materialTypeId: string,
    name: string,
    purchaseUnit?: string | null,
    lossRate?: number | null,
    weight?: number | null,
    costCalculation?: string | null,
    defaultUnitCost?: number | null,
    unit?: string | null,
    length?: number | null,
    lengthApplicable?: boolean | null,
    lengthLocked?: boolean | null,
    lengthNominal?: number | null,
    width?: number | null,
    widthApplicable?: boolean | null,
    widthLocked?: boolean | null,
    widthNominal?: number | null,
    height?: number | null,
    heightApplicable?: boolean | null,
    heightLocked?: boolean | null,
    heightNominal?: number | null,
    createdAt: string,
    updatedAt: string,
    vendors?:  {
      __typename: "ModelVendorsMaterialsConnection",
      nextToken?: string | null,
    } | null,
    materialType?:  {
      __typename: "MaterialType",
      id: string,
      groupId: string,
      name: string,
      description?: string | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    purchasings?:  {
      __typename: "ModelPurchasingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteMaterialMutationVariables = {
  input: DeleteMaterialInput,
  condition?: ModelMaterialConditionInput | null,
};

export type DeleteMaterialMutation = {
  deleteMaterial?:  {
    __typename: "Material",
    id: string,
    groupId: string,
    materialTypeId: string,
    name: string,
    purchaseUnit?: string | null,
    lossRate?: number | null,
    weight?: number | null,
    costCalculation?: string | null,
    defaultUnitCost?: number | null,
    unit?: string | null,
    length?: number | null,
    lengthApplicable?: boolean | null,
    lengthLocked?: boolean | null,
    lengthNominal?: number | null,
    width?: number | null,
    widthApplicable?: boolean | null,
    widthLocked?: boolean | null,
    widthNominal?: number | null,
    height?: number | null,
    heightApplicable?: boolean | null,
    heightLocked?: boolean | null,
    heightNominal?: number | null,
    createdAt: string,
    updatedAt: string,
    vendors?:  {
      __typename: "ModelVendorsMaterialsConnection",
      nextToken?: string | null,
    } | null,
    materialType?:  {
      __typename: "MaterialType",
      id: string,
      groupId: string,
      name: string,
      description?: string | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    purchasings?:  {
      __typename: "ModelPurchasingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateMaterialTypeMutationVariables = {
  input: CreateMaterialTypeInput,
  condition?: ModelMaterialTypeConditionInput | null,
};

export type CreateMaterialTypeMutation = {
  createMaterialType?:  {
    __typename: "MaterialType",
    id: string,
    groupId: string,
    name: string,
    description?: string | null,
    type?: string | null,
    customFields?:  Array< {
      __typename: "CustomField",
      name?: string | null,
      type?: string | null,
      required?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    materials?:  {
      __typename: "ModelMaterialConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateMaterialTypeMutationVariables = {
  input: UpdateMaterialTypeInput,
  condition?: ModelMaterialTypeConditionInput | null,
};

export type UpdateMaterialTypeMutation = {
  updateMaterialType?:  {
    __typename: "MaterialType",
    id: string,
    groupId: string,
    name: string,
    description?: string | null,
    type?: string | null,
    customFields?:  Array< {
      __typename: "CustomField",
      name?: string | null,
      type?: string | null,
      required?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    materials?:  {
      __typename: "ModelMaterialConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteMaterialTypeMutationVariables = {
  input: DeleteMaterialTypeInput,
  condition?: ModelMaterialTypeConditionInput | null,
};

export type DeleteMaterialTypeMutation = {
  deleteMaterialType?:  {
    __typename: "MaterialType",
    id: string,
    groupId: string,
    name: string,
    description?: string | null,
    type?: string | null,
    customFields?:  Array< {
      __typename: "CustomField",
      name?: string | null,
      type?: string | null,
      required?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    materials?:  {
      __typename: "ModelMaterialConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreatePurchasingMutationVariables = {
  input: CreatePurchasingInput,
  condition?: ModelPurchasingConditionInput | null,
};

export type CreatePurchasingMutation = {
  createPurchasing?:  {
    __typename: "Purchasing",
    id: string,
    groupId: string,
    vendorId: string,
    materialId: string,
    purchasingDate?: string | null,
    startDate?: string | null,
    unitPurchasingCost?: number | null,
    purchaseUnit?: string | null,
    quantity?: number | null,
    totalCost?: number | null,
    unitCost?: number | null,
    costUnit?: string | null,
    customFields?:  Array< {
      __typename: "Field",
      label?: string | null,
      value?: string | null,
    } | null > | null,
    note?: string | null,
    createdAt: string,
    updatedAt: string,
    vendor?:  {
      __typename: "Vendor",
      id: string,
      name: string,
      tenantId: string,
      abbreviation?: string | null,
      site?: string | null,
      disinfectantCertificationCode?: string | null,
      billingAddress?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingState?: string | null,
      billingStreet?: string | null,
      billingType?: string | null,
      phone?: string | null,
      fax?: string | null,
      customCode?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    material?:  {
      __typename: "Material",
      id: string,
      groupId: string,
      materialTypeId: string,
      name: string,
      purchaseUnit?: string | null,
      lossRate?: number | null,
      weight?: number | null,
      costCalculation?: string | null,
      defaultUnitCost?: number | null,
      unit?: string | null,
      length?: number | null,
      lengthApplicable?: boolean | null,
      lengthLocked?: boolean | null,
      lengthNominal?: number | null,
      width?: number | null,
      widthApplicable?: boolean | null,
      widthLocked?: boolean | null,
      widthNominal?: number | null,
      height?: number | null,
      heightApplicable?: boolean | null,
      heightLocked?: boolean | null,
      heightNominal?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdatePurchasingMutationVariables = {
  input: UpdatePurchasingInput,
  condition?: ModelPurchasingConditionInput | null,
};

export type UpdatePurchasingMutation = {
  updatePurchasing?:  {
    __typename: "Purchasing",
    id: string,
    groupId: string,
    vendorId: string,
    materialId: string,
    purchasingDate?: string | null,
    startDate?: string | null,
    unitPurchasingCost?: number | null,
    purchaseUnit?: string | null,
    quantity?: number | null,
    totalCost?: number | null,
    unitCost?: number | null,
    costUnit?: string | null,
    customFields?:  Array< {
      __typename: "Field",
      label?: string | null,
      value?: string | null,
    } | null > | null,
    note?: string | null,
    createdAt: string,
    updatedAt: string,
    vendor?:  {
      __typename: "Vendor",
      id: string,
      name: string,
      tenantId: string,
      abbreviation?: string | null,
      site?: string | null,
      disinfectantCertificationCode?: string | null,
      billingAddress?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingState?: string | null,
      billingStreet?: string | null,
      billingType?: string | null,
      phone?: string | null,
      fax?: string | null,
      customCode?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    material?:  {
      __typename: "Material",
      id: string,
      groupId: string,
      materialTypeId: string,
      name: string,
      purchaseUnit?: string | null,
      lossRate?: number | null,
      weight?: number | null,
      costCalculation?: string | null,
      defaultUnitCost?: number | null,
      unit?: string | null,
      length?: number | null,
      lengthApplicable?: boolean | null,
      lengthLocked?: boolean | null,
      lengthNominal?: number | null,
      width?: number | null,
      widthApplicable?: boolean | null,
      widthLocked?: boolean | null,
      widthNominal?: number | null,
      height?: number | null,
      heightApplicable?: boolean | null,
      heightLocked?: boolean | null,
      heightNominal?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeletePurchasingMutationVariables = {
  input: DeletePurchasingInput,
  condition?: ModelPurchasingConditionInput | null,
};

export type DeletePurchasingMutation = {
  deletePurchasing?:  {
    __typename: "Purchasing",
    id: string,
    groupId: string,
    vendorId: string,
    materialId: string,
    purchasingDate?: string | null,
    startDate?: string | null,
    unitPurchasingCost?: number | null,
    purchaseUnit?: string | null,
    quantity?: number | null,
    totalCost?: number | null,
    unitCost?: number | null,
    costUnit?: string | null,
    customFields?:  Array< {
      __typename: "Field",
      label?: string | null,
      value?: string | null,
    } | null > | null,
    note?: string | null,
    createdAt: string,
    updatedAt: string,
    vendor?:  {
      __typename: "Vendor",
      id: string,
      name: string,
      tenantId: string,
      abbreviation?: string | null,
      site?: string | null,
      disinfectantCertificationCode?: string | null,
      billingAddress?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingState?: string | null,
      billingStreet?: string | null,
      billingType?: string | null,
      phone?: string | null,
      fax?: string | null,
      customCode?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    material?:  {
      __typename: "Material",
      id: string,
      groupId: string,
      materialTypeId: string,
      name: string,
      purchaseUnit?: string | null,
      lossRate?: number | null,
      weight?: number | null,
      costCalculation?: string | null,
      defaultUnitCost?: number | null,
      unit?: string | null,
      length?: number | null,
      lengthApplicable?: boolean | null,
      lengthLocked?: boolean | null,
      lengthNominal?: number | null,
      width?: number | null,
      widthApplicable?: boolean | null,
      widthLocked?: boolean | null,
      widthNominal?: number | null,
      height?: number | null,
      heightApplicable?: boolean | null,
      heightLocked?: boolean | null,
      heightNominal?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreatePriceTypeMutationVariables = {
  input: CreatePriceTypeInput,
  condition?: ModelPriceTypeConditionInput | null,
};

export type CreatePriceTypeMutation = {
  createPriceType?:  {
    __typename: "PriceType",
    id: string,
    groupId: string,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    pricings?:  {
      __typename: "ModelPricingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdatePriceTypeMutationVariables = {
  input: UpdatePriceTypeInput,
  condition?: ModelPriceTypeConditionInput | null,
};

export type UpdatePriceTypeMutation = {
  updatePriceType?:  {
    __typename: "PriceType",
    id: string,
    groupId: string,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    pricings?:  {
      __typename: "ModelPricingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeletePriceTypeMutationVariables = {
  input: DeletePriceTypeInput,
  condition?: ModelPriceTypeConditionInput | null,
};

export type DeletePriceTypeMutation = {
  deletePriceType?:  {
    __typename: "PriceType",
    id: string,
    groupId: string,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    pricings?:  {
      __typename: "ModelPricingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreatePricingMutationVariables = {
  input: CreatePricingInput,
  condition?: ModelPricingConditionInput | null,
};

export type CreatePricingMutation = {
  createPricing?:  {
    __typename: "Pricing",
    id: string,
    groupId: string,
    priceTypeId: string,
    packageTypeId?: string | null,
    isDefault: boolean,
    name: string,
    packageTypeName?: string | null,
    unitPrice?: number | null,
    unit?: string | null,
    autoCalculate?: boolean | null,
    minimumAmount?: number | null,
    taxType?: string | null,
    sizeDependent: boolean,
    pricesBySize?:  Array< {
      __typename: "PriceBySize",
      minSize?: number | null,
      maxSize?: number | null,
      unitPrice?: number | null,
    } | null > | null,
    accountSpecific: boolean,
    accounts?:  Array< {
      __typename: "Selection",
      key?: string | null,
      label?: string | null,
    } | null > | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    priceType?:  {
      __typename: "PriceType",
      id: string,
      groupId: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdatePricingMutationVariables = {
  input: UpdatePricingInput,
  condition?: ModelPricingConditionInput | null,
};

export type UpdatePricingMutation = {
  updatePricing?:  {
    __typename: "Pricing",
    id: string,
    groupId: string,
    priceTypeId: string,
    packageTypeId?: string | null,
    isDefault: boolean,
    name: string,
    packageTypeName?: string | null,
    unitPrice?: number | null,
    unit?: string | null,
    autoCalculate?: boolean | null,
    minimumAmount?: number | null,
    taxType?: string | null,
    sizeDependent: boolean,
    pricesBySize?:  Array< {
      __typename: "PriceBySize",
      minSize?: number | null,
      maxSize?: number | null,
      unitPrice?: number | null,
    } | null > | null,
    accountSpecific: boolean,
    accounts?:  Array< {
      __typename: "Selection",
      key?: string | null,
      label?: string | null,
    } | null > | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    priceType?:  {
      __typename: "PriceType",
      id: string,
      groupId: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeletePricingMutationVariables = {
  input: DeletePricingInput,
  condition?: ModelPricingConditionInput | null,
};

export type DeletePricingMutation = {
  deletePricing?:  {
    __typename: "Pricing",
    id: string,
    groupId: string,
    priceTypeId: string,
    packageTypeId?: string | null,
    isDefault: boolean,
    name: string,
    packageTypeName?: string | null,
    unitPrice?: number | null,
    unit?: string | null,
    autoCalculate?: boolean | null,
    minimumAmount?: number | null,
    taxType?: string | null,
    sizeDependent: boolean,
    pricesBySize?:  Array< {
      __typename: "PriceBySize",
      minSize?: number | null,
      maxSize?: number | null,
      unitPrice?: number | null,
    } | null > | null,
    accountSpecific: boolean,
    accounts?:  Array< {
      __typename: "Selection",
      key?: string | null,
      label?: string | null,
    } | null > | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    priceType?:  {
      __typename: "PriceType",
      id: string,
      groupId: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreatePackageTypeMutationVariables = {
  input: CreatePackageTypeInput,
  condition?: ModelPackageTypeConditionInput | null,
};

export type CreatePackageTypeMutation = {
  createPackageType?:  {
    __typename: "PackageType",
    id: string,
    groupId: string,
    pricingId?: string | null,
    name: string,
    description?: string | null,
    publish: boolean,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    areas?:  {
      __typename: "ModelBaseAreaConnection",
      nextToken?: string | null,
    } | null,
    decorations?:  {
      __typename: "ModelBaseDecorationComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdatePackageTypeMutationVariables = {
  input: UpdatePackageTypeInput,
  condition?: ModelPackageTypeConditionInput | null,
};

export type UpdatePackageTypeMutation = {
  updatePackageType?:  {
    __typename: "PackageType",
    id: string,
    groupId: string,
    pricingId?: string | null,
    name: string,
    description?: string | null,
    publish: boolean,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    areas?:  {
      __typename: "ModelBaseAreaConnection",
      nextToken?: string | null,
    } | null,
    decorations?:  {
      __typename: "ModelBaseDecorationComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeletePackageTypeMutationVariables = {
  input: DeletePackageTypeInput,
  condition?: ModelPackageTypeConditionInput | null,
};

export type DeletePackageTypeMutation = {
  deletePackageType?:  {
    __typename: "PackageType",
    id: string,
    groupId: string,
    pricingId?: string | null,
    name: string,
    description?: string | null,
    publish: boolean,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    areas?:  {
      __typename: "ModelBaseAreaConnection",
      nextToken?: string | null,
    } | null,
    decorations?:  {
      __typename: "ModelBaseDecorationComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateBaseAreaMutationVariables = {
  input: CreateBaseAreaInput,
  condition?: ModelBaseAreaConditionInput | null,
};

export type CreateBaseAreaMutation = {
  createBaseArea?:  {
    __typename: "BaseArea",
    id: string,
    packageTypeId: string,
    name: string,
    areaType: string,
    order?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    components?:  {
      __typename: "ModelBaseComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateBaseAreaMutationVariables = {
  input: UpdateBaseAreaInput,
  condition?: ModelBaseAreaConditionInput | null,
};

export type UpdateBaseAreaMutation = {
  updateBaseArea?:  {
    __typename: "BaseArea",
    id: string,
    packageTypeId: string,
    name: string,
    areaType: string,
    order?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    components?:  {
      __typename: "ModelBaseComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteBaseAreaMutationVariables = {
  input: DeleteBaseAreaInput,
  condition?: ModelBaseAreaConditionInput | null,
};

export type DeleteBaseAreaMutation = {
  deleteBaseArea?:  {
    __typename: "BaseArea",
    id: string,
    packageTypeId: string,
    name: string,
    areaType: string,
    order?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    components?:  {
      __typename: "ModelBaseComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateBaseComponentMutationVariables = {
  input: CreateBaseComponentInput,
  condition?: ModelBaseComponentConditionInput | null,
};

export type CreateBaseComponentMutation = {
  createBaseComponent?:  {
    __typename: "BaseComponent",
    id: string,
    baseAreaId: string,
    name: string,
    slug: string,
    order?: number | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBaseComponentMutationVariables = {
  input: UpdateBaseComponentInput,
  condition?: ModelBaseComponentConditionInput | null,
};

export type UpdateBaseComponentMutation = {
  updateBaseComponent?:  {
    __typename: "BaseComponent",
    id: string,
    baseAreaId: string,
    name: string,
    slug: string,
    order?: number | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBaseComponentMutationVariables = {
  input: DeleteBaseComponentInput,
  condition?: ModelBaseComponentConditionInput | null,
};

export type DeleteBaseComponentMutation = {
  deleteBaseComponent?:  {
    __typename: "BaseComponent",
    id: string,
    baseAreaId: string,
    name: string,
    slug: string,
    order?: number | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBaseDecorationComponentMutationVariables = {
  input: CreateBaseDecorationComponentInput,
  condition?: ModelBaseDecorationComponentConditionInput | null,
};

export type CreateBaseDecorationComponentMutation = {
  createBaseDecorationComponent?:  {
    __typename: "BaseDecorationComponent",
    id: string,
    packageTypeId: string,
    type?: string | null,
    name: string,
    slug: string,
    order?: number | null,
    unit?: string | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBaseDecorationComponentMutationVariables = {
  input: UpdateBaseDecorationComponentInput,
  condition?: ModelBaseDecorationComponentConditionInput | null,
};

export type UpdateBaseDecorationComponentMutation = {
  updateBaseDecorationComponent?:  {
    __typename: "BaseDecorationComponent",
    id: string,
    packageTypeId: string,
    type?: string | null,
    name: string,
    slug: string,
    order?: number | null,
    unit?: string | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBaseDecorationComponentMutationVariables = {
  input: DeleteBaseDecorationComponentInput,
  condition?: ModelBaseDecorationComponentConditionInput | null,
};

export type DeleteBaseDecorationComponentMutation = {
  deleteBaseDecorationComponent?:  {
    __typename: "BaseDecorationComponent",
    id: string,
    packageTypeId: string,
    type?: string | null,
    name: string,
    slug: string,
    order?: number | null,
    unit?: string | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    groupId: string,
    quoteId?: string | null,
    userId: string,
    accountId: string,
    accountName?: string | null,
    contactId: string,
    contactName?: string | null,
    keyDates?:  Array< {
      __typename: "KeyDate",
      name?: string | null,
      m3?: number | null,
      case?: number | null,
      shipType?: string | null,
      stockingDate?: string | null,
      packagingDate?: string | null,
      shippingDate?: string | null,
      cutDate?: string | null,
    } | null > | null,
    name: string,
    status?: string | null,
    inquiryDate?: string | null,
    quotationDate?: string | null,
    destinationName?: string | null,
    destination?:  {
      __typename: "Location",
      lat?: string | null,
      lng?: string | null,
    } | null,
    confidence?: string | null,
    description?: string | null,
    alert?: string | null,
    cancelled: boolean,
    cancelReason?: string | null,
    createdAt: string,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      tenantId: string,
      name: string,
      abbreviation?: string | null,
      site?: string | null,
      billingAddress?: string | null,
      billingStreet?: string | null,
      billingCity?: string | null,
      billingState?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingType?: string | null,
      fax?: string | null,
      customeCode?: string | null,
      cutoffDateText?: string | null,
      cutoffDateNumber?: number | null,
      paymentMonthText?: string | null,
      paymentMonthNumber?: number | null,
      paymentDateText?: string | null,
      paymentDateNumber?: number | null,
      invoiceUnit?: string | null,
      invoiceMethod?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contact?:  {
      __typename: "Contact",
      id: string,
      accountId: string,
      tenantId: string,
      name?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      suffix?: string | null,
      email?: string | null,
      phone?: string | null,
      mobilePhone?: string | null,
      title?: string | null,
      retired?: boolean | null,
      customeCode?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    group?:  {
      __typename: "Group",
      id: string,
      name: string,
      phone?: string | null,
      fax?: string | null,
      email?: string | null,
      logoUrl?: string | null,
      taxRate?: number | null,
      maxInventoryM3?: number | null,
      heatTreatmentRequestCode?: string | null,
      packingMaterialProducerRegistrationNumber?: string | null,
      tenantId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    groupId: string,
    quoteId?: string | null,
    userId: string,
    accountId: string,
    accountName?: string | null,
    contactId: string,
    contactName?: string | null,
    keyDates?:  Array< {
      __typename: "KeyDate",
      name?: string | null,
      m3?: number | null,
      case?: number | null,
      shipType?: string | null,
      stockingDate?: string | null,
      packagingDate?: string | null,
      shippingDate?: string | null,
      cutDate?: string | null,
    } | null > | null,
    name: string,
    status?: string | null,
    inquiryDate?: string | null,
    quotationDate?: string | null,
    destinationName?: string | null,
    destination?:  {
      __typename: "Location",
      lat?: string | null,
      lng?: string | null,
    } | null,
    confidence?: string | null,
    description?: string | null,
    alert?: string | null,
    cancelled: boolean,
    cancelReason?: string | null,
    createdAt: string,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      tenantId: string,
      name: string,
      abbreviation?: string | null,
      site?: string | null,
      billingAddress?: string | null,
      billingStreet?: string | null,
      billingCity?: string | null,
      billingState?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingType?: string | null,
      fax?: string | null,
      customeCode?: string | null,
      cutoffDateText?: string | null,
      cutoffDateNumber?: number | null,
      paymentMonthText?: string | null,
      paymentMonthNumber?: number | null,
      paymentDateText?: string | null,
      paymentDateNumber?: number | null,
      invoiceUnit?: string | null,
      invoiceMethod?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contact?:  {
      __typename: "Contact",
      id: string,
      accountId: string,
      tenantId: string,
      name?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      suffix?: string | null,
      email?: string | null,
      phone?: string | null,
      mobilePhone?: string | null,
      title?: string | null,
      retired?: boolean | null,
      customeCode?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    group?:  {
      __typename: "Group",
      id: string,
      name: string,
      phone?: string | null,
      fax?: string | null,
      email?: string | null,
      logoUrl?: string | null,
      taxRate?: number | null,
      maxInventoryM3?: number | null,
      heatTreatmentRequestCode?: string | null,
      packingMaterialProducerRegistrationNumber?: string | null,
      tenantId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    groupId: string,
    quoteId?: string | null,
    userId: string,
    accountId: string,
    accountName?: string | null,
    contactId: string,
    contactName?: string | null,
    keyDates?:  Array< {
      __typename: "KeyDate",
      name?: string | null,
      m3?: number | null,
      case?: number | null,
      shipType?: string | null,
      stockingDate?: string | null,
      packagingDate?: string | null,
      shippingDate?: string | null,
      cutDate?: string | null,
    } | null > | null,
    name: string,
    status?: string | null,
    inquiryDate?: string | null,
    quotationDate?: string | null,
    destinationName?: string | null,
    destination?:  {
      __typename: "Location",
      lat?: string | null,
      lng?: string | null,
    } | null,
    confidence?: string | null,
    description?: string | null,
    alert?: string | null,
    cancelled: boolean,
    cancelReason?: string | null,
    createdAt: string,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      tenantId: string,
      name: string,
      abbreviation?: string | null,
      site?: string | null,
      billingAddress?: string | null,
      billingStreet?: string | null,
      billingCity?: string | null,
      billingState?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingType?: string | null,
      fax?: string | null,
      customeCode?: string | null,
      cutoffDateText?: string | null,
      cutoffDateNumber?: number | null,
      paymentMonthText?: string | null,
      paymentMonthNumber?: number | null,
      paymentDateText?: string | null,
      paymentDateNumber?: number | null,
      invoiceUnit?: string | null,
      invoiceMethod?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contact?:  {
      __typename: "Contact",
      id: string,
      accountId: string,
      tenantId: string,
      name?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      suffix?: string | null,
      email?: string | null,
      phone?: string | null,
      mobilePhone?: string | null,
      title?: string | null,
      retired?: boolean | null,
      customeCode?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    group?:  {
      __typename: "Group",
      id: string,
      name: string,
      phone?: string | null,
      fax?: string | null,
      email?: string | null,
      logoUrl?: string | null,
      taxRate?: number | null,
      maxInventoryM3?: number | null,
      heatTreatmentRequestCode?: string | null,
      packingMaterialProducerRegistrationNumber?: string | null,
      tenantId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateQuoteMutationVariables = {
  input: CreateQuoteInput,
  condition?: ModelQuoteConditionInput | null,
};

export type CreateQuoteMutation = {
  createQuote?:  {
    __typename: "Quote",
    id: string,
    projectId: string,
    name: string,
    quoteNumber?: string | null,
    linkProduct?: boolean | null,
    order: number,
    orderPlaced?: boolean | null,
    revenue?: number | null,
    estimatedCost?: number | null,
    estimatedProfit?: number | null,
    greeting?: string | null,
    paymentMethod?: string | null,
    destination?: string | null,
    dueDate?: string | null,
    expiryDate?: string | null,
    description?: string | null,
    groupName?: string | null,
    logoUrl?: string | null,
    groupAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    phone?: string | null,
    fax?: string | null,
    createdAt: string,
    updatedAt: string,
    quoteLines?:  {
      __typename: "ModelQuoteLineConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateQuoteMutationVariables = {
  input: UpdateQuoteInput,
  condition?: ModelQuoteConditionInput | null,
};

export type UpdateQuoteMutation = {
  updateQuote?:  {
    __typename: "Quote",
    id: string,
    projectId: string,
    name: string,
    quoteNumber?: string | null,
    linkProduct?: boolean | null,
    order: number,
    orderPlaced?: boolean | null,
    revenue?: number | null,
    estimatedCost?: number | null,
    estimatedProfit?: number | null,
    greeting?: string | null,
    paymentMethod?: string | null,
    destination?: string | null,
    dueDate?: string | null,
    expiryDate?: string | null,
    description?: string | null,
    groupName?: string | null,
    logoUrl?: string | null,
    groupAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    phone?: string | null,
    fax?: string | null,
    createdAt: string,
    updatedAt: string,
    quoteLines?:  {
      __typename: "ModelQuoteLineConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteQuoteMutationVariables = {
  input: DeleteQuoteInput,
  condition?: ModelQuoteConditionInput | null,
};

export type DeleteQuoteMutation = {
  deleteQuote?:  {
    __typename: "Quote",
    id: string,
    projectId: string,
    name: string,
    quoteNumber?: string | null,
    linkProduct?: boolean | null,
    order: number,
    orderPlaced?: boolean | null,
    revenue?: number | null,
    estimatedCost?: number | null,
    estimatedProfit?: number | null,
    greeting?: string | null,
    paymentMethod?: string | null,
    destination?: string | null,
    dueDate?: string | null,
    expiryDate?: string | null,
    description?: string | null,
    groupName?: string | null,
    logoUrl?: string | null,
    groupAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    phone?: string | null,
    fax?: string | null,
    createdAt: string,
    updatedAt: string,
    quoteLines?:  {
      __typename: "ModelQuoteLineConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateQuoteLineMutationVariables = {
  input: CreateQuoteLineInput,
  condition?: ModelQuoteLineConditionInput | null,
};

export type CreateQuoteLineMutation = {
  createQuoteLine?:  {
    __typename: "QuoteLine",
    id: string,
    quoteId: string,
    pricingId?: string | null,
    packageTypeId?: string | null,
    pricingName?: string | null,
    packageTypeName?: string | null,
    name?: string | null,
    index?: string | null,
    notes?: string | null,
    quantity?: number | null,
    amount?: number | null,
    minimumAmount?: number | null,
    actualAmount?: number | null,
    order: number,
    unitNW?: number | null,
    NW?: number | null,
    productLength?: number | null,
    productWidth?: number | null,
    productHeight?: number | null,
    outerLength?: number | null,
    outerWidth?: number | null,
    outerHeight?: number | null,
    estimatedUnitM3?: number | null,
    estimatedM3?: number | null,
    estimatedUnitGrossWeight?: number | null,
    estimatedGrossWeight?: number | null,
    estimatedUnitCost?: number | null,
    estimatedCost?: number | null,
    estimatedProfit?: number | null,
    unitPrice?: number | null,
    subtotal?: number | null,
    total?: number | null,
    unit?: string | null,
    taxType?: string | null,
    taxRate?: number | null,
    costDetail?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuoteLineMutationVariables = {
  input: UpdateQuoteLineInput,
  condition?: ModelQuoteLineConditionInput | null,
};

export type UpdateQuoteLineMutation = {
  updateQuoteLine?:  {
    __typename: "QuoteLine",
    id: string,
    quoteId: string,
    pricingId?: string | null,
    packageTypeId?: string | null,
    pricingName?: string | null,
    packageTypeName?: string | null,
    name?: string | null,
    index?: string | null,
    notes?: string | null,
    quantity?: number | null,
    amount?: number | null,
    minimumAmount?: number | null,
    actualAmount?: number | null,
    order: number,
    unitNW?: number | null,
    NW?: number | null,
    productLength?: number | null,
    productWidth?: number | null,
    productHeight?: number | null,
    outerLength?: number | null,
    outerWidth?: number | null,
    outerHeight?: number | null,
    estimatedUnitM3?: number | null,
    estimatedM3?: number | null,
    estimatedUnitGrossWeight?: number | null,
    estimatedGrossWeight?: number | null,
    estimatedUnitCost?: number | null,
    estimatedCost?: number | null,
    estimatedProfit?: number | null,
    unitPrice?: number | null,
    subtotal?: number | null,
    total?: number | null,
    unit?: string | null,
    taxType?: string | null,
    taxRate?: number | null,
    costDetail?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuoteLineMutationVariables = {
  input: DeleteQuoteLineInput,
  condition?: ModelQuoteLineConditionInput | null,
};

export type DeleteQuoteLineMutation = {
  deleteQuoteLine?:  {
    __typename: "QuoteLine",
    id: string,
    quoteId: string,
    pricingId?: string | null,
    packageTypeId?: string | null,
    pricingName?: string | null,
    packageTypeName?: string | null,
    name?: string | null,
    index?: string | null,
    notes?: string | null,
    quantity?: number | null,
    amount?: number | null,
    minimumAmount?: number | null,
    actualAmount?: number | null,
    order: number,
    unitNW?: number | null,
    NW?: number | null,
    productLength?: number | null,
    productWidth?: number | null,
    productHeight?: number | null,
    outerLength?: number | null,
    outerWidth?: number | null,
    outerHeight?: number | null,
    estimatedUnitM3?: number | null,
    estimatedM3?: number | null,
    estimatedUnitGrossWeight?: number | null,
    estimatedGrossWeight?: number | null,
    estimatedUnitCost?: number | null,
    estimatedCost?: number | null,
    estimatedProfit?: number | null,
    unitPrice?: number | null,
    subtotal?: number | null,
    total?: number | null,
    unit?: string | null,
    taxType?: string | null,
    taxRate?: number | null,
    costDetail?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    projectId: string,
    packageTypeId: string,
    pricingId?: string | null,
    packageTypeName: string,
    quoteLineId?: string | null,
    name: string,
    order: number,
    productNumber?: string | null,
    quantity?: number | null,
    material?: string | null,
    tareWeight?: number | null,
    stamp?: string | null,
    destination?: string | null,
    packagingStart?: string | null,
    packagingEnd?: string | null,
    packageMethod?: string | null,
    description?: string | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    areas?:  {
      __typename: "ModelAreaConnection",
      nextToken?: string | null,
    } | null,
    decorations?:  {
      __typename: "ModelDecorationComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    projectId: string,
    packageTypeId: string,
    pricingId?: string | null,
    packageTypeName: string,
    quoteLineId?: string | null,
    name: string,
    order: number,
    productNumber?: string | null,
    quantity?: number | null,
    material?: string | null,
    tareWeight?: number | null,
    stamp?: string | null,
    destination?: string | null,
    packagingStart?: string | null,
    packagingEnd?: string | null,
    packageMethod?: string | null,
    description?: string | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    areas?:  {
      __typename: "ModelAreaConnection",
      nextToken?: string | null,
    } | null,
    decorations?:  {
      __typename: "ModelDecorationComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    projectId: string,
    packageTypeId: string,
    pricingId?: string | null,
    packageTypeName: string,
    quoteLineId?: string | null,
    name: string,
    order: number,
    productNumber?: string | null,
    quantity?: number | null,
    material?: string | null,
    tareWeight?: number | null,
    stamp?: string | null,
    destination?: string | null,
    packagingStart?: string | null,
    packagingEnd?: string | null,
    packageMethod?: string | null,
    description?: string | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    areas?:  {
      __typename: "ModelAreaConnection",
      nextToken?: string | null,
    } | null,
    decorations?:  {
      __typename: "ModelDecorationComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateAreaMutationVariables = {
  input: CreateAreaInput,
  condition?: ModelAreaConditionInput | null,
};

export type CreateAreaMutation = {
  createArea?:  {
    __typename: "Area",
    id: string,
    productId: string,
    name: string,
    areaType?: string | null,
    order?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    components?:  {
      __typename: "ModelComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateAreaMutationVariables = {
  input: UpdateAreaInput,
  condition?: ModelAreaConditionInput | null,
};

export type UpdateAreaMutation = {
  updateArea?:  {
    __typename: "Area",
    id: string,
    productId: string,
    name: string,
    areaType?: string | null,
    order?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    components?:  {
      __typename: "ModelComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteAreaMutationVariables = {
  input: DeleteAreaInput,
  condition?: ModelAreaConditionInput | null,
};

export type DeleteAreaMutation = {
  deleteArea?:  {
    __typename: "Area",
    id: string,
    productId: string,
    name: string,
    areaType?: string | null,
    order?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    components?:  {
      __typename: "ModelComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateComponentMutationVariables = {
  input: CreateComponentInput,
  condition?: ModelComponentConditionInput | null,
};

export type CreateComponentMutation = {
  createComponent?:  {
    __typename: "Component",
    id: string,
    areaId: string,
    name: string,
    slug: string,
    order?: number | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateComponentMutationVariables = {
  input: UpdateComponentInput,
  condition?: ModelComponentConditionInput | null,
};

export type UpdateComponentMutation = {
  updateComponent?:  {
    __typename: "Component",
    id: string,
    areaId: string,
    name: string,
    slug: string,
    order?: number | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteComponentMutationVariables = {
  input: DeleteComponentInput,
  condition?: ModelComponentConditionInput | null,
};

export type DeleteComponentMutation = {
  deleteComponent?:  {
    __typename: "Component",
    id: string,
    areaId: string,
    name: string,
    slug: string,
    order?: number | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDecorationComponentMutationVariables = {
  input: CreateDecorationComponentInput,
  condition?: ModelDecorationComponentConditionInput | null,
};

export type CreateDecorationComponentMutation = {
  createDecorationComponent?:  {
    __typename: "DecorationComponent",
    id: string,
    productId: string,
    type?: string | null,
    name: string,
    slug: string,
    order?: number | null,
    unit?: string | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDecorationComponentMutationVariables = {
  input: UpdateDecorationComponentInput,
  condition?: ModelDecorationComponentConditionInput | null,
};

export type UpdateDecorationComponentMutation = {
  updateDecorationComponent?:  {
    __typename: "DecorationComponent",
    id: string,
    productId: string,
    type?: string | null,
    name: string,
    slug: string,
    order?: number | null,
    unit?: string | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDecorationComponentMutationVariables = {
  input: DeleteDecorationComponentInput,
  condition?: ModelDecorationComponentConditionInput | null,
};

export type DeleteDecorationComponentMutation = {
  deleteDecorationComponent?:  {
    __typename: "DecorationComponent",
    id: string,
    productId: string,
    type?: string | null,
    name: string,
    slug: string,
    order?: number | null,
    unit?: string | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSummaryMutationVariables = {
  input: CreateSummaryInput,
  condition?: ModelSummaryConditionInput | null,
};

export type CreateSummaryMutation = {
  createSummary?:  {
    __typename: "Summary",
    id: string,
    projectId: string,
    pricingId?: string | null,
    pricingName?: string | null,
    productId?: string | null,
    quoteLineId?: string | null,
    name: string,
    order: number,
    quantity?: number | null,
    tareWeight?: number | null,
    productLength?: number | null,
    productWidth?: number | null,
    productHeight?: number | null,
    outerLength?: number | null,
    outerWidth?: number | null,
    outerHeight?: number | null,
    unitM3?: number | null,
    unitNW?: number | null,
    unitGrossWeight?: number | null,
    NW?: number | null,
    grossWeight?: number | null,
    m3?: number | null,
    unitPrice?: number | null,
    unit?: string | null,
    autoCalculate?: boolean | null,
    taxType?: string | null,
    overwritten?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSummaryMutationVariables = {
  input: UpdateSummaryInput,
  condition?: ModelSummaryConditionInput | null,
};

export type UpdateSummaryMutation = {
  updateSummary?:  {
    __typename: "Summary",
    id: string,
    projectId: string,
    pricingId?: string | null,
    pricingName?: string | null,
    productId?: string | null,
    quoteLineId?: string | null,
    name: string,
    order: number,
    quantity?: number | null,
    tareWeight?: number | null,
    productLength?: number | null,
    productWidth?: number | null,
    productHeight?: number | null,
    outerLength?: number | null,
    outerWidth?: number | null,
    outerHeight?: number | null,
    unitM3?: number | null,
    unitNW?: number | null,
    unitGrossWeight?: number | null,
    NW?: number | null,
    grossWeight?: number | null,
    m3?: number | null,
    unitPrice?: number | null,
    unit?: string | null,
    autoCalculate?: boolean | null,
    taxType?: string | null,
    overwritten?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSummaryMutationVariables = {
  input: DeleteSummaryInput,
  condition?: ModelSummaryConditionInput | null,
};

export type DeleteSummaryMutation = {
  deleteSummary?:  {
    __typename: "Summary",
    id: string,
    projectId: string,
    pricingId?: string | null,
    pricingName?: string | null,
    productId?: string | null,
    quoteLineId?: string | null,
    name: string,
    order: number,
    quantity?: number | null,
    tareWeight?: number | null,
    productLength?: number | null,
    productWidth?: number | null,
    productHeight?: number | null,
    outerLength?: number | null,
    outerWidth?: number | null,
    outerHeight?: number | null,
    unitM3?: number | null,
    unitNW?: number | null,
    unitGrossWeight?: number | null,
    NW?: number | null,
    grossWeight?: number | null,
    m3?: number | null,
    unitPrice?: number | null,
    unit?: string | null,
    autoCalculate?: boolean | null,
    taxType?: string | null,
    overwritten?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateInvoiceMutationVariables = {
  input: CreateInvoiceInput,
  condition?: ModelInvoiceConditionInput | null,
};

export type CreateInvoiceMutation = {
  createInvoice?:  {
    __typename: "Invoice",
    id: string,
    projectId: string,
    accountId: string,
    contactId?: string | null,
    userId: string,
    groupId: string,
    name: string,
    invoiceNo?: string | null,
    issueDate?: string | null,
    billed: boolean,
    billingDate?: string | null,
    taxTotal?: number | null,
    subtotal?: number | null,
    total?: number | null,
    url?: string | null,
    description?: string | null,
    accountName?: string | null,
    billingType?: string | null,
    accountAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    contactName?: string | null,
    contactTitle?: string | null,
    groupName?: string | null,
    logoUrl?: string | null,
    groupBank?:  {
      __typename: "Bank",
      name?: string | null,
      branchName?: string | null,
      branchNumber?: string | null,
      type?: string | null,
      accountNumber?: string | null,
      swiftCode?: string | null,
    } | null,
    groupAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    phone?: string | null,
    fax?: string | null,
    createdAt: string,
    updatedAt: string,
    invoiceLines?:  {
      __typename: "ModelInvoiceLineConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateInvoiceMutationVariables = {
  input: UpdateInvoiceInput,
  condition?: ModelInvoiceConditionInput | null,
};

export type UpdateInvoiceMutation = {
  updateInvoice?:  {
    __typename: "Invoice",
    id: string,
    projectId: string,
    accountId: string,
    contactId?: string | null,
    userId: string,
    groupId: string,
    name: string,
    invoiceNo?: string | null,
    issueDate?: string | null,
    billed: boolean,
    billingDate?: string | null,
    taxTotal?: number | null,
    subtotal?: number | null,
    total?: number | null,
    url?: string | null,
    description?: string | null,
    accountName?: string | null,
    billingType?: string | null,
    accountAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    contactName?: string | null,
    contactTitle?: string | null,
    groupName?: string | null,
    logoUrl?: string | null,
    groupBank?:  {
      __typename: "Bank",
      name?: string | null,
      branchName?: string | null,
      branchNumber?: string | null,
      type?: string | null,
      accountNumber?: string | null,
      swiftCode?: string | null,
    } | null,
    groupAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    phone?: string | null,
    fax?: string | null,
    createdAt: string,
    updatedAt: string,
    invoiceLines?:  {
      __typename: "ModelInvoiceLineConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteInvoiceMutationVariables = {
  input: DeleteInvoiceInput,
  condition?: ModelInvoiceConditionInput | null,
};

export type DeleteInvoiceMutation = {
  deleteInvoice?:  {
    __typename: "Invoice",
    id: string,
    projectId: string,
    accountId: string,
    contactId?: string | null,
    userId: string,
    groupId: string,
    name: string,
    invoiceNo?: string | null,
    issueDate?: string | null,
    billed: boolean,
    billingDate?: string | null,
    taxTotal?: number | null,
    subtotal?: number | null,
    total?: number | null,
    url?: string | null,
    description?: string | null,
    accountName?: string | null,
    billingType?: string | null,
    accountAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    contactName?: string | null,
    contactTitle?: string | null,
    groupName?: string | null,
    logoUrl?: string | null,
    groupBank?:  {
      __typename: "Bank",
      name?: string | null,
      branchName?: string | null,
      branchNumber?: string | null,
      type?: string | null,
      accountNumber?: string | null,
      swiftCode?: string | null,
    } | null,
    groupAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    phone?: string | null,
    fax?: string | null,
    createdAt: string,
    updatedAt: string,
    invoiceLines?:  {
      __typename: "ModelInvoiceLineConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateInvoiceLineMutationVariables = {
  input: CreateInvoiceLineInput,
  condition?: ModelInvoiceLineConditionInput | null,
};

export type CreateInvoiceLineMutation = {
  createInvoiceLine?:  {
    __typename: "InvoiceLine",
    id: string,
    invoiceId: string,
    pricingId?: string | null,
    pricingName?: string | null,
    quoteLineId?: string | null,
    name: string,
    shippingDate?: string | null,
    salesType?: string | null,
    order: number,
    m3?: number | null,
    grossWeight?: number | null,
    quantity?: number | null,
    amount?: number | null,
    minimumAmount?: number | null,
    actualAmount?: number | null,
    unit?: string | null,
    unitPrice?: number | null,
    taxRate?: number | null,
    taxTotal?: number | null,
    subtotal?: number | null,
    total?: number | null,
    taxType?: string | null,
    synced?: boolean | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInvoiceLineMutationVariables = {
  input: UpdateInvoiceLineInput,
  condition?: ModelInvoiceLineConditionInput | null,
};

export type UpdateInvoiceLineMutation = {
  updateInvoiceLine?:  {
    __typename: "InvoiceLine",
    id: string,
    invoiceId: string,
    pricingId?: string | null,
    pricingName?: string | null,
    quoteLineId?: string | null,
    name: string,
    shippingDate?: string | null,
    salesType?: string | null,
    order: number,
    m3?: number | null,
    grossWeight?: number | null,
    quantity?: number | null,
    amount?: number | null,
    minimumAmount?: number | null,
    actualAmount?: number | null,
    unit?: string | null,
    unitPrice?: number | null,
    taxRate?: number | null,
    taxTotal?: number | null,
    subtotal?: number | null,
    total?: number | null,
    taxType?: string | null,
    synced?: boolean | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInvoiceLineMutationVariables = {
  input: DeleteInvoiceLineInput,
  condition?: ModelInvoiceLineConditionInput | null,
};

export type DeleteInvoiceLineMutation = {
  deleteInvoiceLine?:  {
    __typename: "InvoiceLine",
    id: string,
    invoiceId: string,
    pricingId?: string | null,
    pricingName?: string | null,
    quoteLineId?: string | null,
    name: string,
    shippingDate?: string | null,
    salesType?: string | null,
    order: number,
    m3?: number | null,
    grossWeight?: number | null,
    quantity?: number | null,
    amount?: number | null,
    minimumAmount?: number | null,
    actualAmount?: number | null,
    unit?: string | null,
    unitPrice?: number | null,
    taxRate?: number | null,
    taxTotal?: number | null,
    subtotal?: number | null,
    total?: number | null,
    taxType?: string | null,
    synced?: boolean | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSyncLogMutationVariables = {
  input: CreateSyncLogInput,
  condition?: ModelSyncLogConditionInput | null,
};

export type CreateSyncLogMutation = {
  createSyncLog?:  {
    __typename: "SyncLog",
    id: string,
    status: string,
    numberOfNewRecords?: number | null,
    numberOfDeletedRecords?: number | null,
    numberOfUpdatedRecords?: number | null,
    message?: string | null,
    sFObjectId: string,
    createdAt: string,
    updatedAt: string,
    sFObject?:  {
      __typename: "SFObject",
      id: string,
      name: string,
      tenantId: string,
      label?: string | null,
      sfObjectName?: string | null,
      editable: boolean,
      condition?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateSyncLogMutationVariables = {
  input: UpdateSyncLogInput,
  condition?: ModelSyncLogConditionInput | null,
};

export type UpdateSyncLogMutation = {
  updateSyncLog?:  {
    __typename: "SyncLog",
    id: string,
    status: string,
    numberOfNewRecords?: number | null,
    numberOfDeletedRecords?: number | null,
    numberOfUpdatedRecords?: number | null,
    message?: string | null,
    sFObjectId: string,
    createdAt: string,
    updatedAt: string,
    sFObject?:  {
      __typename: "SFObject",
      id: string,
      name: string,
      tenantId: string,
      label?: string | null,
      sfObjectName?: string | null,
      editable: boolean,
      condition?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteSyncLogMutationVariables = {
  input: DeleteSyncLogInput,
  condition?: ModelSyncLogConditionInput | null,
};

export type DeleteSyncLogMutation = {
  deleteSyncLog?:  {
    __typename: "SyncLog",
    id: string,
    status: string,
    numberOfNewRecords?: number | null,
    numberOfDeletedRecords?: number | null,
    numberOfUpdatedRecords?: number | null,
    message?: string | null,
    sFObjectId: string,
    createdAt: string,
    updatedAt: string,
    sFObject?:  {
      __typename: "SFObject",
      id: string,
      name: string,
      tenantId: string,
      label?: string | null,
      sfObjectName?: string | null,
      editable: boolean,
      condition?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type TestSyncQueryVariables = {
  input: SalesForceInput,
};

export type TestSyncQuery = {
  testSync?: boolean | null,
};

export type ListSFObjectNamesQueryVariables = {
  input: ListSFObjectNamesInput,
};

export type ListSFObjectNamesQuery = {
  listSFObjectNames?:  Array< {
    __typename: "SFObjectNameOutput",
    sfObjectName?: string | null,
    sfObjectLabel?: string | null,
  } | null > | null,
};

export type ListSFFieldsBySFObjectQueryVariables = {
  input: ListSFFieldsBySFObjectInput,
};

export type ListSFFieldsBySFObjectQuery = {
  listSFFieldsBySFObject?:  Array< {
    __typename: "SFFieldOutput",
    sfFieldName?: string | null,
    sfFieldLabel?: string | null,
    sfFieldType?: string | null,
  } | null > | null,
};

export type GroupsByUserIdQueryVariables = {
  userId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUsersGroupsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GroupsByUserIdQuery = {
  groupsByUserId?:  {
    __typename: "ModelUsersGroupsConnection",
    items:  Array< {
      __typename: "UsersGroups",
      id: string,
      userId: string,
      groupId: string,
      role?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersByGroupIdQueryVariables = {
  groupId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUsersGroupsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByGroupIdQuery = {
  usersByGroupId?:  {
    __typename: "ModelUsersGroupsConnection",
    items:  Array< {
      __typename: "UsersGroups",
      id: string,
      userId: string,
      groupId: string,
      role?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MaterialsByVendorIdQueryVariables = {
  vendorId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVendorsMaterialsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MaterialsByVendorIdQuery = {
  materialsByVendorId?:  {
    __typename: "ModelVendorsMaterialsConnection",
    items:  Array< {
      __typename: "VendorsMaterials",
      id: string,
      vendorId: string,
      materialId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VendorsByMaterialIdQueryVariables = {
  materialId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVendorsMaterialsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VendorsByMaterialIdQuery = {
  vendorsByMaterialId?:  {
    __typename: "ModelVendorsMaterialsConnection",
    items:  Array< {
      __typename: "VendorsMaterials",
      id: string,
      vendorId: string,
      materialId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMetaTableQueryVariables = {
  id: string,
};

export type GetMetaTableQuery = {
  getMetaTable?:  {
    __typename: "MetaTable",
    id: string,
    name: string,
    label?: string | null,
    fields?:  Array< {
      __typename: "MetaTableField",
      name: string,
      label?: string | null,
      type?: string | null,
      required?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMetaTablesQueryVariables = {
  filter?: ModelMetaTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMetaTablesQuery = {
  listMetaTables?:  {
    __typename: "ModelMetaTableConnection",
    items:  Array< {
      __typename: "MetaTable",
      id: string,
      name: string,
      label?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MetaTableByNameQueryVariables = {
  name?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMetaTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MetaTableByNameQuery = {
  metaTableByName?:  {
    __typename: "ModelMetaTableConnection",
    items:  Array< {
      __typename: "MetaTable",
      id: string,
      name: string,
      label?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTenantQueryVariables = {
  id: string,
};

export type GetTenantQuery = {
  getTenant?:  {
    __typename: "Tenant",
    id: string,
    name: string,
    logoUrl?: string | null,
    address?: string | null,
    phone?: string | null,
    syncSFObject?: boolean | null,
    sfLoginUrl?: string | null,
    sfUsername?: string | null,
    sfPassword?: string | null,
    sfSecretToken?: string | null,
    projectFilters?:  Array< {
      __typename: "ProjectFilter",
      name?: string | null,
      duration?: string | null,
      sort?: string | null,
      showProcesses?: Array< string | null > | null,
      showUnits?: Array< string | null > | null,
      showPhases?: Array< string | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    accounts?:  {
      __typename: "ModelAccountConnection",
      nextToken?: string | null,
    } | null,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelGroupConnection",
      nextToken?: string | null,
    } | null,
    sfObjects?:  {
      __typename: "ModelSFObjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListTenantsQueryVariables = {
  filter?: ModelTenantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTenantsQuery = {
  listTenants?:  {
    __typename: "ModelTenantConnection",
    items:  Array< {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAccountQueryVariables = {
  id: string,
};

export type GetAccountQuery = {
  getAccount?:  {
    __typename: "Account",
    id: string,
    tenantId: string,
    name: string,
    abbreviation?: string | null,
    site?: string | null,
    billingAddress?: string | null,
    billingStreet?: string | null,
    billingCity?: string | null,
    billingState?: string | null,
    billingPostalCode?: string | null,
    billingCountry?: string | null,
    billingType?: string | null,
    fax?: string | null,
    customeCode?: string | null,
    cutoffDateText?: string | null,
    cutoffDateNumber?: number | null,
    paymentMonthText?: string | null,
    paymentMonthNumber?: number | null,
    paymentDateText?: string | null,
    paymentDateNumber?: number | null,
    invoiceUnit?: string | null,
    invoiceMethod?: string | null,
    createdAt: string,
    updatedAt: string,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountsQuery = {
  listAccounts?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      tenantId: string,
      name: string,
      abbreviation?: string | null,
      site?: string | null,
      billingAddress?: string | null,
      billingStreet?: string | null,
      billingCity?: string | null,
      billingState?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingType?: string | null,
      fax?: string | null,
      customeCode?: string | null,
      cutoffDateText?: string | null,
      cutoffDateNumber?: number | null,
      paymentMonthText?: string | null,
      paymentMonthNumber?: number | null,
      paymentDateText?: string | null,
      paymentDateNumber?: number | null,
      invoiceUnit?: string | null,
      invoiceMethod?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AccountsByTenantIdQueryVariables = {
  tenantId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AccountsByTenantIdQuery = {
  accountsByTenantId?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      tenantId: string,
      name: string,
      abbreviation?: string | null,
      site?: string | null,
      billingAddress?: string | null,
      billingStreet?: string | null,
      billingCity?: string | null,
      billingState?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingType?: string | null,
      fax?: string | null,
      customeCode?: string | null,
      cutoffDateText?: string | null,
      cutoffDateNumber?: number | null,
      paymentMonthText?: string | null,
      paymentMonthNumber?: number | null,
      paymentDateText?: string | null,
      paymentDateNumber?: number | null,
      invoiceUnit?: string | null,
      invoiceMethod?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetClientQueryVariables = {
  id: string,
};

export type GetClientQuery = {
  getClient?:  {
    __typename: "Client",
    id: string,
    accountId: string,
    name: string,
    abbreviation?: string | null,
    site?: string | null,
    billingAddress?: string | null,
    billingStreet?: string | null,
    billingCity?: string | null,
    billingState?: string | null,
    billingPostalCode?: string | null,
    billingCountry?: string | null,
    billingType?: string | null,
    phone?: string | null,
    fax?: string | null,
    customeCode?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListClientsQueryVariables = {
  filter?: ModelClientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClientsQuery = {
  listClients?:  {
    __typename: "ModelClientConnection",
    items:  Array< {
      __typename: "Client",
      id: string,
      accountId: string,
      name: string,
      abbreviation?: string | null,
      site?: string | null,
      billingAddress?: string | null,
      billingStreet?: string | null,
      billingCity?: string | null,
      billingState?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingType?: string | null,
      phone?: string | null,
      fax?: string | null,
      customeCode?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ClientsByAccountIdQueryVariables = {
  accountId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ClientsByAccountIdQuery = {
  clientsByAccountId?:  {
    __typename: "ModelClientConnection",
    items:  Array< {
      __typename: "Client",
      id: string,
      accountId: string,
      name: string,
      abbreviation?: string | null,
      site?: string | null,
      billingAddress?: string | null,
      billingStreet?: string | null,
      billingCity?: string | null,
      billingState?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingType?: string | null,
      phone?: string | null,
      fax?: string | null,
      customeCode?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContactQueryVariables = {
  id: string,
};

export type GetContactQuery = {
  getContact?:  {
    __typename: "Contact",
    id: string,
    accountId: string,
    tenantId: string,
    name?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    suffix?: string | null,
    email?: string | null,
    phone?: string | null,
    mobilePhone?: string | null,
    title?: string | null,
    retired?: boolean | null,
    customeCode?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      tenantId: string,
      name: string,
      abbreviation?: string | null,
      site?: string | null,
      billingAddress?: string | null,
      billingStreet?: string | null,
      billingCity?: string | null,
      billingState?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingType?: string | null,
      fax?: string | null,
      customeCode?: string | null,
      cutoffDateText?: string | null,
      cutoffDateNumber?: number | null,
      paymentMonthText?: string | null,
      paymentMonthNumber?: number | null,
      paymentDateText?: string | null,
      paymentDateNumber?: number | null,
      invoiceUnit?: string | null,
      invoiceMethod?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListContactsQueryVariables = {
  filter?: ModelContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactsQuery = {
  listContacts?:  {
    __typename: "ModelContactConnection",
    items:  Array< {
      __typename: "Contact",
      id: string,
      accountId: string,
      tenantId: string,
      name?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      suffix?: string | null,
      email?: string | null,
      phone?: string | null,
      mobilePhone?: string | null,
      title?: string | null,
      retired?: boolean | null,
      customeCode?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ContactsByAccountIdQueryVariables = {
  accountId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ContactsByAccountIdQuery = {
  contactsByAccountId?:  {
    __typename: "ModelContactConnection",
    items:  Array< {
      __typename: "Contact",
      id: string,
      accountId: string,
      tenantId: string,
      name?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      suffix?: string | null,
      email?: string | null,
      phone?: string | null,
      mobilePhone?: string | null,
      title?: string | null,
      retired?: boolean | null,
      customeCode?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ContactsByTenantIdQueryVariables = {
  tenantId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ContactsByTenantIdQuery = {
  contactsByTenantId?:  {
    __typename: "ModelContactConnection",
    items:  Array< {
      __typename: "Contact",
      id: string,
      accountId: string,
      tenantId: string,
      name?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      suffix?: string | null,
      email?: string | null,
      phone?: string | null,
      mobilePhone?: string | null,
      title?: string | null,
      retired?: boolean | null,
      customeCode?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUnitQueryVariables = {
  id: string,
};

export type GetUnitQuery = {
  getUnit?:  {
    __typename: "Unit",
    id: string,
    name: string,
    tenantId: string,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListUnitsQueryVariables = {
  filter?: ModelUnitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUnitsQuery = {
  listUnits?:  {
    __typename: "ModelUnitConnection",
    items:  Array< {
      __typename: "Unit",
      id: string,
      name: string,
      tenantId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UnitsByTenantIdQueryVariables = {
  tenantId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUnitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UnitsByTenantIdQuery = {
  unitsByTenantId?:  {
    __typename: "ModelUnitConnection",
    items:  Array< {
      __typename: "Unit",
      id: string,
      name: string,
      tenantId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAccessLogQueryVariables = {
  id: string,
};

export type GetAccessLogQuery = {
  getAccessLog?:  {
    __typename: "AccessLog",
    id: string,
    device?: string | null,
    ipAddress?: string | null,
    description?: string | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListAccessLogsQueryVariables = {
  filter?: ModelAccessLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccessLogsQuery = {
  listAccessLogs?:  {
    __typename: "ModelAccessLogConnection",
    items:  Array< {
      __typename: "AccessLog",
      id: string,
      device?: string | null,
      ipAddress?: string | null,
      description?: string | null,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AccessLogsByUserIdQueryVariables = {
  userId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAccessLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AccessLogsByUserIdQuery = {
  accessLogsByUserId?:  {
    __typename: "ModelAccessLogConnection",
    items:  Array< {
      __typename: "AccessLog",
      id: string,
      device?: string | null,
      ipAddress?: string | null,
      description?: string | null,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    firstName: string,
    lastName: string,
    email: string,
    showTutorial: boolean,
    invited: boolean,
    verified: boolean,
    fontSize?: number | null,
    language?: string | null,
    receiveEmailNotification: boolean,
    theme?: string | null,
    useMfa: boolean,
    customId?: string | null,
    tenantId: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    accessLogs?:  {
      __typename: "ModelAccessLogConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelUsersGroupsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersByTenantIdQueryVariables = {
  tenantId?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByTenantIdQuery = {
  usersByTenantId?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
};

export type GetGroupQuery = {
  getGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    phone?: string | null,
    fax?: string | null,
    email?: string | null,
    logoUrl?: string | null,
    groupAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    quoteInfo?:  {
      __typename: "QuoteData",
      greeting?: string | null,
      paymentMethod?: string | null,
      destination?: string | null,
      dueDate?: string | null,
      expiryDate?: string | null,
      description?: string | null,
    } | null,
    bank?:  {
      __typename: "Bank",
      name?: string | null,
      branchName?: string | null,
      branchNumber?: string | null,
      type?: string | null,
      accountNumber?: string | null,
      swiftCode?: string | null,
    } | null,
    taxRate?: number | null,
    maxInventoryM3?: number | null,
    heatTreatmentRequestCode?: string | null,
    packingMaterialProducerRegistrationNumber?: string | null,
    tenantId: string,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    users?:  {
      __typename: "ModelUsersGroupsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListGroupsQueryVariables = {
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsQuery = {
  listGroups?:  {
    __typename: "ModelGroupConnection",
    items:  Array< {
      __typename: "Group",
      id: string,
      name: string,
      phone?: string | null,
      fax?: string | null,
      email?: string | null,
      logoUrl?: string | null,
      taxRate?: number | null,
      maxInventoryM3?: number | null,
      heatTreatmentRequestCode?: string | null,
      packingMaterialProducerRegistrationNumber?: string | null,
      tenantId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GroupsByTenantIdQueryVariables = {
  tenantId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GroupsByTenantIdQuery = {
  groupsByTenantId?:  {
    __typename: "ModelGroupConnection",
    items:  Array< {
      __typename: "Group",
      id: string,
      name: string,
      phone?: string | null,
      fax?: string | null,
      email?: string | null,
      logoUrl?: string | null,
      taxRate?: number | null,
      maxInventoryM3?: number | null,
      heatTreatmentRequestCode?: string | null,
      packingMaterialProducerRegistrationNumber?: string | null,
      tenantId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSFObjectQueryVariables = {
  id: string,
};

export type GetSFObjectQuery = {
  getSFObject?:  {
    __typename: "SFObject",
    id: string,
    name: string,
    tenantId: string,
    label?: string | null,
    sfObjectName?: string | null,
    editable: boolean,
    condition?: string | null,
    fields?:  Array< {
      __typename: "SFField",
      name: string,
      label?: string | null,
      apiName?: string | null,
      type?: string | null,
      required?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSFObjectsQueryVariables = {
  filter?: ModelSFObjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSFObjectsQuery = {
  listSFObjects?:  {
    __typename: "ModelSFObjectConnection",
    items:  Array< {
      __typename: "SFObject",
      id: string,
      name: string,
      tenantId: string,
      label?: string | null,
      sfObjectName?: string | null,
      editable: boolean,
      condition?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SFObjectsByTenantIdQueryVariables = {
  tenantId?: string | null,
  sfObjectName?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSFObjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SFObjectsByTenantIdQuery = {
  sFObjectsByTenantId?:  {
    __typename: "ModelSFObjectConnection",
    items:  Array< {
      __typename: "SFObject",
      id: string,
      name: string,
      tenantId: string,
      label?: string | null,
      sfObjectName?: string | null,
      editable: boolean,
      condition?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetVendorQueryVariables = {
  id: string,
};

export type GetVendorQuery = {
  getVendor?:  {
    __typename: "Vendor",
    id: string,
    name: string,
    tenantId: string,
    abbreviation?: string | null,
    site?: string | null,
    disinfectantCertificationCode?: string | null,
    billingAddress?: string | null,
    billingPostalCode?: string | null,
    billingCountry?: string | null,
    billingState?: string | null,
    billingStreet?: string | null,
    billingType?: string | null,
    phone?: string | null,
    fax?: string | null,
    customCode?: string | null,
    createdAt: string,
    updatedAt: string,
    materials?:  {
      __typename: "ModelVendorsMaterialsConnection",
      nextToken?: string | null,
    } | null,
    purchasings?:  {
      __typename: "ModelPurchasingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListVendorsQueryVariables = {
  filter?: ModelVendorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVendorsQuery = {
  listVendors?:  {
    __typename: "ModelVendorConnection",
    items:  Array< {
      __typename: "Vendor",
      id: string,
      name: string,
      tenantId: string,
      abbreviation?: string | null,
      site?: string | null,
      disinfectantCertificationCode?: string | null,
      billingAddress?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingState?: string | null,
      billingStreet?: string | null,
      billingType?: string | null,
      phone?: string | null,
      fax?: string | null,
      customCode?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VendorsByTenantIdQueryVariables = {
  tenantId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVendorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VendorsByTenantIdQuery = {
  vendorsByTenantId?:  {
    __typename: "ModelVendorConnection",
    items:  Array< {
      __typename: "Vendor",
      id: string,
      name: string,
      tenantId: string,
      abbreviation?: string | null,
      site?: string | null,
      disinfectantCertificationCode?: string | null,
      billingAddress?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingState?: string | null,
      billingStreet?: string | null,
      billingType?: string | null,
      phone?: string | null,
      fax?: string | null,
      customCode?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMaterialQueryVariables = {
  id: string,
};

export type GetMaterialQuery = {
  getMaterial?:  {
    __typename: "Material",
    id: string,
    groupId: string,
    materialTypeId: string,
    name: string,
    purchaseUnit?: string | null,
    lossRate?: number | null,
    weight?: number | null,
    costCalculation?: string | null,
    defaultUnitCost?: number | null,
    unit?: string | null,
    length?: number | null,
    lengthApplicable?: boolean | null,
    lengthLocked?: boolean | null,
    lengthNominal?: number | null,
    width?: number | null,
    widthApplicable?: boolean | null,
    widthLocked?: boolean | null,
    widthNominal?: number | null,
    height?: number | null,
    heightApplicable?: boolean | null,
    heightLocked?: boolean | null,
    heightNominal?: number | null,
    createdAt: string,
    updatedAt: string,
    vendors?:  {
      __typename: "ModelVendorsMaterialsConnection",
      nextToken?: string | null,
    } | null,
    materialType?:  {
      __typename: "MaterialType",
      id: string,
      groupId: string,
      name: string,
      description?: string | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    purchasings?:  {
      __typename: "ModelPurchasingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListMaterialsQueryVariables = {
  filter?: ModelMaterialFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMaterialsQuery = {
  listMaterials?:  {
    __typename: "ModelMaterialConnection",
    items:  Array< {
      __typename: "Material",
      id: string,
      groupId: string,
      materialTypeId: string,
      name: string,
      purchaseUnit?: string | null,
      lossRate?: number | null,
      weight?: number | null,
      costCalculation?: string | null,
      defaultUnitCost?: number | null,
      unit?: string | null,
      length?: number | null,
      lengthApplicable?: boolean | null,
      lengthLocked?: boolean | null,
      lengthNominal?: number | null,
      width?: number | null,
      widthApplicable?: boolean | null,
      widthLocked?: boolean | null,
      widthNominal?: number | null,
      height?: number | null,
      heightApplicable?: boolean | null,
      heightLocked?: boolean | null,
      heightNominal?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MaterialsByGroupIdQueryVariables = {
  groupId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMaterialFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MaterialsByGroupIdQuery = {
  materialsByGroupId?:  {
    __typename: "ModelMaterialConnection",
    items:  Array< {
      __typename: "Material",
      id: string,
      groupId: string,
      materialTypeId: string,
      name: string,
      purchaseUnit?: string | null,
      lossRate?: number | null,
      weight?: number | null,
      costCalculation?: string | null,
      defaultUnitCost?: number | null,
      unit?: string | null,
      length?: number | null,
      lengthApplicable?: boolean | null,
      lengthLocked?: boolean | null,
      lengthNominal?: number | null,
      width?: number | null,
      widthApplicable?: boolean | null,
      widthLocked?: boolean | null,
      widthNominal?: number | null,
      height?: number | null,
      heightApplicable?: boolean | null,
      heightLocked?: boolean | null,
      heightNominal?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MaterialsByTypeIdQueryVariables = {
  materialTypeId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMaterialFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MaterialsByTypeIdQuery = {
  materialsByTypeId?:  {
    __typename: "ModelMaterialConnection",
    items:  Array< {
      __typename: "Material",
      id: string,
      groupId: string,
      materialTypeId: string,
      name: string,
      purchaseUnit?: string | null,
      lossRate?: number | null,
      weight?: number | null,
      costCalculation?: string | null,
      defaultUnitCost?: number | null,
      unit?: string | null,
      length?: number | null,
      lengthApplicable?: boolean | null,
      lengthLocked?: boolean | null,
      lengthNominal?: number | null,
      width?: number | null,
      widthApplicable?: boolean | null,
      widthLocked?: boolean | null,
      widthNominal?: number | null,
      height?: number | null,
      heightApplicable?: boolean | null,
      heightLocked?: boolean | null,
      heightNominal?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMaterialTypeQueryVariables = {
  id: string,
};

export type GetMaterialTypeQuery = {
  getMaterialType?:  {
    __typename: "MaterialType",
    id: string,
    groupId: string,
    name: string,
    description?: string | null,
    type?: string | null,
    customFields?:  Array< {
      __typename: "CustomField",
      name?: string | null,
      type?: string | null,
      required?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    materials?:  {
      __typename: "ModelMaterialConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListMaterialTypesQueryVariables = {
  filter?: ModelMaterialTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMaterialTypesQuery = {
  listMaterialTypes?:  {
    __typename: "ModelMaterialTypeConnection",
    items:  Array< {
      __typename: "MaterialType",
      id: string,
      groupId: string,
      name: string,
      description?: string | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MaterialTypesByGroupIdQueryVariables = {
  groupId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMaterialTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MaterialTypesByGroupIdQuery = {
  materialTypesByGroupId?:  {
    __typename: "ModelMaterialTypeConnection",
    items:  Array< {
      __typename: "MaterialType",
      id: string,
      groupId: string,
      name: string,
      description?: string | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPurchasingQueryVariables = {
  id: string,
};

export type GetPurchasingQuery = {
  getPurchasing?:  {
    __typename: "Purchasing",
    id: string,
    groupId: string,
    vendorId: string,
    materialId: string,
    purchasingDate?: string | null,
    startDate?: string | null,
    unitPurchasingCost?: number | null,
    purchaseUnit?: string | null,
    quantity?: number | null,
    totalCost?: number | null,
    unitCost?: number | null,
    costUnit?: string | null,
    customFields?:  Array< {
      __typename: "Field",
      label?: string | null,
      value?: string | null,
    } | null > | null,
    note?: string | null,
    createdAt: string,
    updatedAt: string,
    vendor?:  {
      __typename: "Vendor",
      id: string,
      name: string,
      tenantId: string,
      abbreviation?: string | null,
      site?: string | null,
      disinfectantCertificationCode?: string | null,
      billingAddress?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingState?: string | null,
      billingStreet?: string | null,
      billingType?: string | null,
      phone?: string | null,
      fax?: string | null,
      customCode?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    material?:  {
      __typename: "Material",
      id: string,
      groupId: string,
      materialTypeId: string,
      name: string,
      purchaseUnit?: string | null,
      lossRate?: number | null,
      weight?: number | null,
      costCalculation?: string | null,
      defaultUnitCost?: number | null,
      unit?: string | null,
      length?: number | null,
      lengthApplicable?: boolean | null,
      lengthLocked?: boolean | null,
      lengthNominal?: number | null,
      width?: number | null,
      widthApplicable?: boolean | null,
      widthLocked?: boolean | null,
      widthNominal?: number | null,
      height?: number | null,
      heightApplicable?: boolean | null,
      heightLocked?: boolean | null,
      heightNominal?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListPurchasingsQueryVariables = {
  filter?: ModelPurchasingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPurchasingsQuery = {
  listPurchasings?:  {
    __typename: "ModelPurchasingConnection",
    items:  Array< {
      __typename: "Purchasing",
      id: string,
      groupId: string,
      vendorId: string,
      materialId: string,
      purchasingDate?: string | null,
      startDate?: string | null,
      unitPurchasingCost?: number | null,
      purchaseUnit?: string | null,
      quantity?: number | null,
      totalCost?: number | null,
      unitCost?: number | null,
      costUnit?: string | null,
      note?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PurchasingsByMaterialIdQueryVariables = {
  materialId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPurchasingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PurchasingsByMaterialIdQuery = {
  purchasingsByMaterialId?:  {
    __typename: "ModelPurchasingConnection",
    items:  Array< {
      __typename: "Purchasing",
      id: string,
      groupId: string,
      vendorId: string,
      materialId: string,
      purchasingDate?: string | null,
      startDate?: string | null,
      unitPurchasingCost?: number | null,
      purchaseUnit?: string | null,
      quantity?: number | null,
      totalCost?: number | null,
      unitCost?: number | null,
      costUnit?: string | null,
      note?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PurchasingsByGroupIdQueryVariables = {
  groupId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPurchasingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PurchasingsByGroupIdQuery = {
  purchasingsByGroupId?:  {
    __typename: "ModelPurchasingConnection",
    items:  Array< {
      __typename: "Purchasing",
      id: string,
      groupId: string,
      vendorId: string,
      materialId: string,
      purchasingDate?: string | null,
      startDate?: string | null,
      unitPurchasingCost?: number | null,
      purchaseUnit?: string | null,
      quantity?: number | null,
      totalCost?: number | null,
      unitCost?: number | null,
      costUnit?: string | null,
      note?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PurchasingsByVendorIdQueryVariables = {
  vendorId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPurchasingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PurchasingsByVendorIdQuery = {
  purchasingsByVendorId?:  {
    __typename: "ModelPurchasingConnection",
    items:  Array< {
      __typename: "Purchasing",
      id: string,
      groupId: string,
      vendorId: string,
      materialId: string,
      purchasingDate?: string | null,
      startDate?: string | null,
      unitPurchasingCost?: number | null,
      purchaseUnit?: string | null,
      quantity?: number | null,
      totalCost?: number | null,
      unitCost?: number | null,
      costUnit?: string | null,
      note?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPriceTypeQueryVariables = {
  id: string,
};

export type GetPriceTypeQuery = {
  getPriceType?:  {
    __typename: "PriceType",
    id: string,
    groupId: string,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    pricings?:  {
      __typename: "ModelPricingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListPriceTypesQueryVariables = {
  filter?: ModelPriceTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPriceTypesQuery = {
  listPriceTypes?:  {
    __typename: "ModelPriceTypeConnection",
    items:  Array< {
      __typename: "PriceType",
      id: string,
      groupId: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PriceTypesByGroupIdQueryVariables = {
  groupId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPriceTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PriceTypesByGroupIdQuery = {
  priceTypesByGroupId?:  {
    __typename: "ModelPriceTypeConnection",
    items:  Array< {
      __typename: "PriceType",
      id: string,
      groupId: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPricingQueryVariables = {
  id: string,
};

export type GetPricingQuery = {
  getPricing?:  {
    __typename: "Pricing",
    id: string,
    groupId: string,
    priceTypeId: string,
    packageTypeId?: string | null,
    isDefault: boolean,
    name: string,
    packageTypeName?: string | null,
    unitPrice?: number | null,
    unit?: string | null,
    autoCalculate?: boolean | null,
    minimumAmount?: number | null,
    taxType?: string | null,
    sizeDependent: boolean,
    pricesBySize?:  Array< {
      __typename: "PriceBySize",
      minSize?: number | null,
      maxSize?: number | null,
      unitPrice?: number | null,
    } | null > | null,
    accountSpecific: boolean,
    accounts?:  Array< {
      __typename: "Selection",
      key?: string | null,
      label?: string | null,
    } | null > | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    priceType?:  {
      __typename: "PriceType",
      id: string,
      groupId: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListPricingsQueryVariables = {
  filter?: ModelPricingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPricingsQuery = {
  listPricings?:  {
    __typename: "ModelPricingConnection",
    items:  Array< {
      __typename: "Pricing",
      id: string,
      groupId: string,
      priceTypeId: string,
      packageTypeId?: string | null,
      isDefault: boolean,
      name: string,
      packageTypeName?: string | null,
      unitPrice?: number | null,
      unit?: string | null,
      autoCalculate?: boolean | null,
      minimumAmount?: number | null,
      taxType?: string | null,
      sizeDependent: boolean,
      accountSpecific: boolean,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PricingsByTypeIdQueryVariables = {
  priceTypeId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPricingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PricingsByTypeIdQuery = {
  pricingsByTypeId?:  {
    __typename: "ModelPricingConnection",
    items:  Array< {
      __typename: "Pricing",
      id: string,
      groupId: string,
      priceTypeId: string,
      packageTypeId?: string | null,
      isDefault: boolean,
      name: string,
      packageTypeName?: string | null,
      unitPrice?: number | null,
      unit?: string | null,
      autoCalculate?: boolean | null,
      minimumAmount?: number | null,
      taxType?: string | null,
      sizeDependent: boolean,
      accountSpecific: boolean,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PricingsByGroupIdQueryVariables = {
  groupId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPricingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PricingsByGroupIdQuery = {
  pricingsByGroupId?:  {
    __typename: "ModelPricingConnection",
    items:  Array< {
      __typename: "Pricing",
      id: string,
      groupId: string,
      priceTypeId: string,
      packageTypeId?: string | null,
      isDefault: boolean,
      name: string,
      packageTypeName?: string | null,
      unitPrice?: number | null,
      unit?: string | null,
      autoCalculate?: boolean | null,
      minimumAmount?: number | null,
      taxType?: string | null,
      sizeDependent: boolean,
      accountSpecific: boolean,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPackageTypeQueryVariables = {
  id: string,
};

export type GetPackageTypeQuery = {
  getPackageType?:  {
    __typename: "PackageType",
    id: string,
    groupId: string,
    pricingId?: string | null,
    name: string,
    description?: string | null,
    publish: boolean,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    areas?:  {
      __typename: "ModelBaseAreaConnection",
      nextToken?: string | null,
    } | null,
    decorations?:  {
      __typename: "ModelBaseDecorationComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListPackageTypesQueryVariables = {
  filter?: ModelPackageTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPackageTypesQuery = {
  listPackageTypes?:  {
    __typename: "ModelPackageTypeConnection",
    items:  Array< {
      __typename: "PackageType",
      id: string,
      groupId: string,
      pricingId?: string | null,
      name: string,
      description?: string | null,
      publish: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PackageTypesByGroupIdQueryVariables = {
  groupId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPackageTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PackageTypesByGroupIdQuery = {
  packageTypesByGroupId?:  {
    __typename: "ModelPackageTypeConnection",
    items:  Array< {
      __typename: "PackageType",
      id: string,
      groupId: string,
      pricingId?: string | null,
      name: string,
      description?: string | null,
      publish: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PackageTypesByPricingIdQueryVariables = {
  pricingId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPackageTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PackageTypesByPricingIdQuery = {
  packageTypesByPricingId?:  {
    __typename: "ModelPackageTypeConnection",
    items:  Array< {
      __typename: "PackageType",
      id: string,
      groupId: string,
      pricingId?: string | null,
      name: string,
      description?: string | null,
      publish: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBaseAreaQueryVariables = {
  id: string,
};

export type GetBaseAreaQuery = {
  getBaseArea?:  {
    __typename: "BaseArea",
    id: string,
    packageTypeId: string,
    name: string,
    areaType: string,
    order?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    components?:  {
      __typename: "ModelBaseComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListBaseAreasQueryVariables = {
  filter?: ModelBaseAreaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBaseAreasQuery = {
  listBaseAreas?:  {
    __typename: "ModelBaseAreaConnection",
    items:  Array< {
      __typename: "BaseArea",
      id: string,
      packageTypeId: string,
      name: string,
      areaType: string,
      order?: number | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BaseAreasByPackageTypeIdQueryVariables = {
  packageTypeId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBaseAreaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BaseAreasByPackageTypeIdQuery = {
  baseAreasByPackageTypeId?:  {
    __typename: "ModelBaseAreaConnection",
    items:  Array< {
      __typename: "BaseArea",
      id: string,
      packageTypeId: string,
      name: string,
      areaType: string,
      order?: number | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBaseComponentQueryVariables = {
  id: string,
};

export type GetBaseComponentQuery = {
  getBaseComponent?:  {
    __typename: "BaseComponent",
    id: string,
    baseAreaId: string,
    name: string,
    slug: string,
    order?: number | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBaseComponentsQueryVariables = {
  filter?: ModelBaseComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBaseComponentsQuery = {
  listBaseComponents?:  {
    __typename: "ModelBaseComponentConnection",
    items:  Array< {
      __typename: "BaseComponent",
      id: string,
      baseAreaId: string,
      name: string,
      slug: string,
      order?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BaseComponentsByBaseAreaIdQueryVariables = {
  baseAreaId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBaseComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BaseComponentsByBaseAreaIdQuery = {
  baseComponentsByBaseAreaId?:  {
    __typename: "ModelBaseComponentConnection",
    items:  Array< {
      __typename: "BaseComponent",
      id: string,
      baseAreaId: string,
      name: string,
      slug: string,
      order?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBaseDecorationComponentQueryVariables = {
  id: string,
};

export type GetBaseDecorationComponentQuery = {
  getBaseDecorationComponent?:  {
    __typename: "BaseDecorationComponent",
    id: string,
    packageTypeId: string,
    type?: string | null,
    name: string,
    slug: string,
    order?: number | null,
    unit?: string | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBaseDecorationComponentsQueryVariables = {
  filter?: ModelBaseDecorationComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBaseDecorationComponentsQuery = {
  listBaseDecorationComponents?:  {
    __typename: "ModelBaseDecorationComponentConnection",
    items:  Array< {
      __typename: "BaseDecorationComponent",
      id: string,
      packageTypeId: string,
      type?: string | null,
      name: string,
      slug: string,
      order?: number | null,
      unit?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BaseDecorationComponentsByPackageTypeIdQueryVariables = {
  packageTypeId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBaseDecorationComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BaseDecorationComponentsByPackageTypeIdQuery = {
  baseDecorationComponentsByPackageTypeId?:  {
    __typename: "ModelBaseDecorationComponentConnection",
    items:  Array< {
      __typename: "BaseDecorationComponent",
      id: string,
      packageTypeId: string,
      type?: string | null,
      name: string,
      slug: string,
      order?: number | null,
      unit?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    groupId: string,
    quoteId?: string | null,
    userId: string,
    accountId: string,
    accountName?: string | null,
    contactId: string,
    contactName?: string | null,
    keyDates?:  Array< {
      __typename: "KeyDate",
      name?: string | null,
      m3?: number | null,
      case?: number | null,
      shipType?: string | null,
      stockingDate?: string | null,
      packagingDate?: string | null,
      shippingDate?: string | null,
      cutDate?: string | null,
    } | null > | null,
    name: string,
    status?: string | null,
    inquiryDate?: string | null,
    quotationDate?: string | null,
    destinationName?: string | null,
    destination?:  {
      __typename: "Location",
      lat?: string | null,
      lng?: string | null,
    } | null,
    confidence?: string | null,
    description?: string | null,
    alert?: string | null,
    cancelled: boolean,
    cancelReason?: string | null,
    createdAt: string,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      tenantId: string,
      name: string,
      abbreviation?: string | null,
      site?: string | null,
      billingAddress?: string | null,
      billingStreet?: string | null,
      billingCity?: string | null,
      billingState?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingType?: string | null,
      fax?: string | null,
      customeCode?: string | null,
      cutoffDateText?: string | null,
      cutoffDateNumber?: number | null,
      paymentMonthText?: string | null,
      paymentMonthNumber?: number | null,
      paymentDateText?: string | null,
      paymentDateNumber?: number | null,
      invoiceUnit?: string | null,
      invoiceMethod?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contact?:  {
      __typename: "Contact",
      id: string,
      accountId: string,
      tenantId: string,
      name?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      suffix?: string | null,
      email?: string | null,
      phone?: string | null,
      mobilePhone?: string | null,
      title?: string | null,
      retired?: boolean | null,
      customeCode?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    group?:  {
      __typename: "Group",
      id: string,
      name: string,
      phone?: string | null,
      fax?: string | null,
      email?: string | null,
      logoUrl?: string | null,
      taxRate?: number | null,
      maxInventoryM3?: number | null,
      heatTreatmentRequestCode?: string | null,
      packingMaterialProducerRegistrationNumber?: string | null,
      tenantId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      groupId: string,
      quoteId?: string | null,
      userId: string,
      accountId: string,
      accountName?: string | null,
      contactId: string,
      contactName?: string | null,
      name: string,
      status?: string | null,
      inquiryDate?: string | null,
      quotationDate?: string | null,
      destinationName?: string | null,
      confidence?: string | null,
      description?: string | null,
      alert?: string | null,
      cancelled: boolean,
      cancelReason?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProjectsByUserIdQueryVariables = {
  userId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectsByUserIdQuery = {
  projectsByUserId?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      groupId: string,
      quoteId?: string | null,
      userId: string,
      accountId: string,
      accountName?: string | null,
      contactId: string,
      contactName?: string | null,
      name: string,
      status?: string | null,
      inquiryDate?: string | null,
      quotationDate?: string | null,
      destinationName?: string | null,
      confidence?: string | null,
      description?: string | null,
      alert?: string | null,
      cancelled: boolean,
      cancelReason?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProjectsByAccountIdQueryVariables = {
  accountId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectsByAccountIdQuery = {
  projectsByAccountId?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      groupId: string,
      quoteId?: string | null,
      userId: string,
      accountId: string,
      accountName?: string | null,
      contactId: string,
      contactName?: string | null,
      name: string,
      status?: string | null,
      inquiryDate?: string | null,
      quotationDate?: string | null,
      destinationName?: string | null,
      confidence?: string | null,
      description?: string | null,
      alert?: string | null,
      cancelled: boolean,
      cancelReason?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProjectsByContactIdQueryVariables = {
  contactId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectsByContactIdQuery = {
  projectsByContactId?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      groupId: string,
      quoteId?: string | null,
      userId: string,
      accountId: string,
      accountName?: string | null,
      contactId: string,
      contactName?: string | null,
      name: string,
      status?: string | null,
      inquiryDate?: string | null,
      quotationDate?: string | null,
      destinationName?: string | null,
      confidence?: string | null,
      description?: string | null,
      alert?: string | null,
      cancelled: boolean,
      cancelReason?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProjectsByGroupIdQueryVariables = {
  groupId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProjectsByGroupIdQuery = {
  projectsByGroupId?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      groupId: string,
      quoteId?: string | null,
      userId: string,
      accountId: string,
      accountName?: string | null,
      contactId: string,
      contactName?: string | null,
      name: string,
      status?: string | null,
      inquiryDate?: string | null,
      quotationDate?: string | null,
      destinationName?: string | null,
      confidence?: string | null,
      description?: string | null,
      alert?: string | null,
      cancelled: boolean,
      cancelReason?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetQuoteQueryVariables = {
  id: string,
};

export type GetQuoteQuery = {
  getQuote?:  {
    __typename: "Quote",
    id: string,
    projectId: string,
    name: string,
    quoteNumber?: string | null,
    linkProduct?: boolean | null,
    order: number,
    orderPlaced?: boolean | null,
    revenue?: number | null,
    estimatedCost?: number | null,
    estimatedProfit?: number | null,
    greeting?: string | null,
    paymentMethod?: string | null,
    destination?: string | null,
    dueDate?: string | null,
    expiryDate?: string | null,
    description?: string | null,
    groupName?: string | null,
    logoUrl?: string | null,
    groupAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    phone?: string | null,
    fax?: string | null,
    createdAt: string,
    updatedAt: string,
    quoteLines?:  {
      __typename: "ModelQuoteLineConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListQuotesQueryVariables = {
  filter?: ModelQuoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuotesQuery = {
  listQuotes?:  {
    __typename: "ModelQuoteConnection",
    items:  Array< {
      __typename: "Quote",
      id: string,
      projectId: string,
      name: string,
      quoteNumber?: string | null,
      linkProduct?: boolean | null,
      order: number,
      orderPlaced?: boolean | null,
      revenue?: number | null,
      estimatedCost?: number | null,
      estimatedProfit?: number | null,
      greeting?: string | null,
      paymentMethod?: string | null,
      destination?: string | null,
      dueDate?: string | null,
      expiryDate?: string | null,
      description?: string | null,
      groupName?: string | null,
      logoUrl?: string | null,
      phone?: string | null,
      fax?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QuotesByProjectIdQueryVariables = {
  projectId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQuoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuotesByProjectIdQuery = {
  quotesByProjectId?:  {
    __typename: "ModelQuoteConnection",
    items:  Array< {
      __typename: "Quote",
      id: string,
      projectId: string,
      name: string,
      quoteNumber?: string | null,
      linkProduct?: boolean | null,
      order: number,
      orderPlaced?: boolean | null,
      revenue?: number | null,
      estimatedCost?: number | null,
      estimatedProfit?: number | null,
      greeting?: string | null,
      paymentMethod?: string | null,
      destination?: string | null,
      dueDate?: string | null,
      expiryDate?: string | null,
      description?: string | null,
      groupName?: string | null,
      logoUrl?: string | null,
      phone?: string | null,
      fax?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetQuoteLineQueryVariables = {
  id: string,
};

export type GetQuoteLineQuery = {
  getQuoteLine?:  {
    __typename: "QuoteLine",
    id: string,
    quoteId: string,
    pricingId?: string | null,
    packageTypeId?: string | null,
    pricingName?: string | null,
    packageTypeName?: string | null,
    name?: string | null,
    index?: string | null,
    notes?: string | null,
    quantity?: number | null,
    amount?: number | null,
    minimumAmount?: number | null,
    actualAmount?: number | null,
    order: number,
    unitNW?: number | null,
    NW?: number | null,
    productLength?: number | null,
    productWidth?: number | null,
    productHeight?: number | null,
    outerLength?: number | null,
    outerWidth?: number | null,
    outerHeight?: number | null,
    estimatedUnitM3?: number | null,
    estimatedM3?: number | null,
    estimatedUnitGrossWeight?: number | null,
    estimatedGrossWeight?: number | null,
    estimatedUnitCost?: number | null,
    estimatedCost?: number | null,
    estimatedProfit?: number | null,
    unitPrice?: number | null,
    subtotal?: number | null,
    total?: number | null,
    unit?: string | null,
    taxType?: string | null,
    taxRate?: number | null,
    costDetail?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuoteLinesQueryVariables = {
  filter?: ModelQuoteLineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuoteLinesQuery = {
  listQuoteLines?:  {
    __typename: "ModelQuoteLineConnection",
    items:  Array< {
      __typename: "QuoteLine",
      id: string,
      quoteId: string,
      pricingId?: string | null,
      packageTypeId?: string | null,
      pricingName?: string | null,
      packageTypeName?: string | null,
      name?: string | null,
      index?: string | null,
      notes?: string | null,
      quantity?: number | null,
      amount?: number | null,
      minimumAmount?: number | null,
      actualAmount?: number | null,
      order: number,
      unitNW?: number | null,
      NW?: number | null,
      productLength?: number | null,
      productWidth?: number | null,
      productHeight?: number | null,
      outerLength?: number | null,
      outerWidth?: number | null,
      outerHeight?: number | null,
      estimatedUnitM3?: number | null,
      estimatedM3?: number | null,
      estimatedUnitGrossWeight?: number | null,
      estimatedGrossWeight?: number | null,
      estimatedUnitCost?: number | null,
      estimatedCost?: number | null,
      estimatedProfit?: number | null,
      unitPrice?: number | null,
      subtotal?: number | null,
      total?: number | null,
      unit?: string | null,
      taxType?: string | null,
      taxRate?: number | null,
      costDetail?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QuoteLinesByQuoteIdQueryVariables = {
  quoteId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQuoteLineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuoteLinesByQuoteIdQuery = {
  quoteLinesByQuoteId?:  {
    __typename: "ModelQuoteLineConnection",
    items:  Array< {
      __typename: "QuoteLine",
      id: string,
      quoteId: string,
      pricingId?: string | null,
      packageTypeId?: string | null,
      pricingName?: string | null,
      packageTypeName?: string | null,
      name?: string | null,
      index?: string | null,
      notes?: string | null,
      quantity?: number | null,
      amount?: number | null,
      minimumAmount?: number | null,
      actualAmount?: number | null,
      order: number,
      unitNW?: number | null,
      NW?: number | null,
      productLength?: number | null,
      productWidth?: number | null,
      productHeight?: number | null,
      outerLength?: number | null,
      outerWidth?: number | null,
      outerHeight?: number | null,
      estimatedUnitM3?: number | null,
      estimatedM3?: number | null,
      estimatedUnitGrossWeight?: number | null,
      estimatedGrossWeight?: number | null,
      estimatedUnitCost?: number | null,
      estimatedCost?: number | null,
      estimatedProfit?: number | null,
      unitPrice?: number | null,
      subtotal?: number | null,
      total?: number | null,
      unit?: string | null,
      taxType?: string | null,
      taxRate?: number | null,
      costDetail?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    projectId: string,
    packageTypeId: string,
    pricingId?: string | null,
    packageTypeName: string,
    quoteLineId?: string | null,
    name: string,
    order: number,
    productNumber?: string | null,
    quantity?: number | null,
    material?: string | null,
    tareWeight?: number | null,
    stamp?: string | null,
    destination?: string | null,
    packagingStart?: string | null,
    packagingEnd?: string | null,
    packageMethod?: string | null,
    description?: string | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    areas?:  {
      __typename: "ModelAreaConnection",
      nextToken?: string | null,
    } | null,
    decorations?:  {
      __typename: "ModelDecorationComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      projectId: string,
      packageTypeId: string,
      pricingId?: string | null,
      packageTypeName: string,
      quoteLineId?: string | null,
      name: string,
      order: number,
      productNumber?: string | null,
      quantity?: number | null,
      material?: string | null,
      tareWeight?: number | null,
      stamp?: string | null,
      destination?: string | null,
      packagingStart?: string | null,
      packagingEnd?: string | null,
      packageMethod?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductsByPackageTypeIdQueryVariables = {
  packageTypeId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsByPackageTypeIdQuery = {
  productsByPackageTypeId?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      projectId: string,
      packageTypeId: string,
      pricingId?: string | null,
      packageTypeName: string,
      quoteLineId?: string | null,
      name: string,
      order: number,
      productNumber?: string | null,
      quantity?: number | null,
      material?: string | null,
      tareWeight?: number | null,
      stamp?: string | null,
      destination?: string | null,
      packagingStart?: string | null,
      packagingEnd?: string | null,
      packageMethod?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductsByProjectIdQueryVariables = {
  projectId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsByProjectIdQuery = {
  productsByProjectId?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      projectId: string,
      packageTypeId: string,
      pricingId?: string | null,
      packageTypeName: string,
      quoteLineId?: string | null,
      name: string,
      order: number,
      productNumber?: string | null,
      quantity?: number | null,
      material?: string | null,
      tareWeight?: number | null,
      stamp?: string | null,
      destination?: string | null,
      packagingStart?: string | null,
      packagingEnd?: string | null,
      packageMethod?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAreaQueryVariables = {
  id: string,
};

export type GetAreaQuery = {
  getArea?:  {
    __typename: "Area",
    id: string,
    productId: string,
    name: string,
    areaType?: string | null,
    order?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    components?:  {
      __typename: "ModelComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListAreasQueryVariables = {
  filter?: ModelAreaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAreasQuery = {
  listAreas?:  {
    __typename: "ModelAreaConnection",
    items:  Array< {
      __typename: "Area",
      id: string,
      productId: string,
      name: string,
      areaType?: string | null,
      order?: number | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AreasByProductIdQueryVariables = {
  productId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAreaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AreasByProductIdQuery = {
  areasByProductId?:  {
    __typename: "ModelAreaConnection",
    items:  Array< {
      __typename: "Area",
      id: string,
      productId: string,
      name: string,
      areaType?: string | null,
      order?: number | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetComponentQueryVariables = {
  id: string,
};

export type GetComponentQuery = {
  getComponent?:  {
    __typename: "Component",
    id: string,
    areaId: string,
    name: string,
    slug: string,
    order?: number | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListComponentsQueryVariables = {
  filter?: ModelComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListComponentsQuery = {
  listComponents?:  {
    __typename: "ModelComponentConnection",
    items:  Array< {
      __typename: "Component",
      id: string,
      areaId: string,
      name: string,
      slug: string,
      order?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ComponentsByAreaIdQueryVariables = {
  areaId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ComponentsByAreaIdQuery = {
  componentsByAreaId?:  {
    __typename: "ModelComponentConnection",
    items:  Array< {
      __typename: "Component",
      id: string,
      areaId: string,
      name: string,
      slug: string,
      order?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDecorationComponentQueryVariables = {
  id: string,
};

export type GetDecorationComponentQuery = {
  getDecorationComponent?:  {
    __typename: "DecorationComponent",
    id: string,
    productId: string,
    type?: string | null,
    name: string,
    slug: string,
    order?: number | null,
    unit?: string | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDecorationComponentsQueryVariables = {
  filter?: ModelDecorationComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDecorationComponentsQuery = {
  listDecorationComponents?:  {
    __typename: "ModelDecorationComponentConnection",
    items:  Array< {
      __typename: "DecorationComponent",
      id: string,
      productId: string,
      type?: string | null,
      name: string,
      slug: string,
      order?: number | null,
      unit?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type DecorationComponentsByProductIdQueryVariables = {
  productId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDecorationComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DecorationComponentsByProductIdQuery = {
  decorationComponentsByProductId?:  {
    __typename: "ModelDecorationComponentConnection",
    items:  Array< {
      __typename: "DecorationComponent",
      id: string,
      productId: string,
      type?: string | null,
      name: string,
      slug: string,
      order?: number | null,
      unit?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSummaryQueryVariables = {
  id: string,
};

export type GetSummaryQuery = {
  getSummary?:  {
    __typename: "Summary",
    id: string,
    projectId: string,
    pricingId?: string | null,
    pricingName?: string | null,
    productId?: string | null,
    quoteLineId?: string | null,
    name: string,
    order: number,
    quantity?: number | null,
    tareWeight?: number | null,
    productLength?: number | null,
    productWidth?: number | null,
    productHeight?: number | null,
    outerLength?: number | null,
    outerWidth?: number | null,
    outerHeight?: number | null,
    unitM3?: number | null,
    unitNW?: number | null,
    unitGrossWeight?: number | null,
    NW?: number | null,
    grossWeight?: number | null,
    m3?: number | null,
    unitPrice?: number | null,
    unit?: string | null,
    autoCalculate?: boolean | null,
    taxType?: string | null,
    overwritten?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSummariesQueryVariables = {
  filter?: ModelSummaryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSummariesQuery = {
  listSummaries?:  {
    __typename: "ModelSummaryConnection",
    items:  Array< {
      __typename: "Summary",
      id: string,
      projectId: string,
      pricingId?: string | null,
      pricingName?: string | null,
      productId?: string | null,
      quoteLineId?: string | null,
      name: string,
      order: number,
      quantity?: number | null,
      tareWeight?: number | null,
      productLength?: number | null,
      productWidth?: number | null,
      productHeight?: number | null,
      outerLength?: number | null,
      outerWidth?: number | null,
      outerHeight?: number | null,
      unitM3?: number | null,
      unitNW?: number | null,
      unitGrossWeight?: number | null,
      NW?: number | null,
      grossWeight?: number | null,
      m3?: number | null,
      unitPrice?: number | null,
      unit?: string | null,
      autoCalculate?: boolean | null,
      taxType?: string | null,
      overwritten?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SummariesByProjectIdQueryVariables = {
  projectId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSummaryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SummariesByProjectIdQuery = {
  summariesByProjectId?:  {
    __typename: "ModelSummaryConnection",
    items:  Array< {
      __typename: "Summary",
      id: string,
      projectId: string,
      pricingId?: string | null,
      pricingName?: string | null,
      productId?: string | null,
      quoteLineId?: string | null,
      name: string,
      order: number,
      quantity?: number | null,
      tareWeight?: number | null,
      productLength?: number | null,
      productWidth?: number | null,
      productHeight?: number | null,
      outerLength?: number | null,
      outerWidth?: number | null,
      outerHeight?: number | null,
      unitM3?: number | null,
      unitNW?: number | null,
      unitGrossWeight?: number | null,
      NW?: number | null,
      grossWeight?: number | null,
      m3?: number | null,
      unitPrice?: number | null,
      unit?: string | null,
      autoCalculate?: boolean | null,
      taxType?: string | null,
      overwritten?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInvoiceQueryVariables = {
  id: string,
};

export type GetInvoiceQuery = {
  getInvoice?:  {
    __typename: "Invoice",
    id: string,
    projectId: string,
    accountId: string,
    contactId?: string | null,
    userId: string,
    groupId: string,
    name: string,
    invoiceNo?: string | null,
    issueDate?: string | null,
    billed: boolean,
    billingDate?: string | null,
    taxTotal?: number | null,
    subtotal?: number | null,
    total?: number | null,
    url?: string | null,
    description?: string | null,
    accountName?: string | null,
    billingType?: string | null,
    accountAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    contactName?: string | null,
    contactTitle?: string | null,
    groupName?: string | null,
    logoUrl?: string | null,
    groupBank?:  {
      __typename: "Bank",
      name?: string | null,
      branchName?: string | null,
      branchNumber?: string | null,
      type?: string | null,
      accountNumber?: string | null,
      swiftCode?: string | null,
    } | null,
    groupAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    phone?: string | null,
    fax?: string | null,
    createdAt: string,
    updatedAt: string,
    invoiceLines?:  {
      __typename: "ModelInvoiceLineConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListInvoicesQueryVariables = {
  filter?: ModelInvoiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInvoicesQuery = {
  listInvoices?:  {
    __typename: "ModelInvoiceConnection",
    items:  Array< {
      __typename: "Invoice",
      id: string,
      projectId: string,
      accountId: string,
      contactId?: string | null,
      userId: string,
      groupId: string,
      name: string,
      invoiceNo?: string | null,
      issueDate?: string | null,
      billed: boolean,
      billingDate?: string | null,
      taxTotal?: number | null,
      subtotal?: number | null,
      total?: number | null,
      url?: string | null,
      description?: string | null,
      accountName?: string | null,
      billingType?: string | null,
      contactName?: string | null,
      contactTitle?: string | null,
      groupName?: string | null,
      logoUrl?: string | null,
      phone?: string | null,
      fax?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type InvoicesByProjectIdQueryVariables = {
  projectId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelInvoiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type InvoicesByProjectIdQuery = {
  invoicesByProjectId?:  {
    __typename: "ModelInvoiceConnection",
    items:  Array< {
      __typename: "Invoice",
      id: string,
      projectId: string,
      accountId: string,
      contactId?: string | null,
      userId: string,
      groupId: string,
      name: string,
      invoiceNo?: string | null,
      issueDate?: string | null,
      billed: boolean,
      billingDate?: string | null,
      taxTotal?: number | null,
      subtotal?: number | null,
      total?: number | null,
      url?: string | null,
      description?: string | null,
      accountName?: string | null,
      billingType?: string | null,
      contactName?: string | null,
      contactTitle?: string | null,
      groupName?: string | null,
      logoUrl?: string | null,
      phone?: string | null,
      fax?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInvoiceLineQueryVariables = {
  id: string,
};

export type GetInvoiceLineQuery = {
  getInvoiceLine?:  {
    __typename: "InvoiceLine",
    id: string,
    invoiceId: string,
    pricingId?: string | null,
    pricingName?: string | null,
    quoteLineId?: string | null,
    name: string,
    shippingDate?: string | null,
    salesType?: string | null,
    order: number,
    m3?: number | null,
    grossWeight?: number | null,
    quantity?: number | null,
    amount?: number | null,
    minimumAmount?: number | null,
    actualAmount?: number | null,
    unit?: string | null,
    unitPrice?: number | null,
    taxRate?: number | null,
    taxTotal?: number | null,
    subtotal?: number | null,
    total?: number | null,
    taxType?: string | null,
    synced?: boolean | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInvoiceLinesQueryVariables = {
  filter?: ModelInvoiceLineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInvoiceLinesQuery = {
  listInvoiceLines?:  {
    __typename: "ModelInvoiceLineConnection",
    items:  Array< {
      __typename: "InvoiceLine",
      id: string,
      invoiceId: string,
      pricingId?: string | null,
      pricingName?: string | null,
      quoteLineId?: string | null,
      name: string,
      shippingDate?: string | null,
      salesType?: string | null,
      order: number,
      m3?: number | null,
      grossWeight?: number | null,
      quantity?: number | null,
      amount?: number | null,
      minimumAmount?: number | null,
      actualAmount?: number | null,
      unit?: string | null,
      unitPrice?: number | null,
      taxRate?: number | null,
      taxTotal?: number | null,
      subtotal?: number | null,
      total?: number | null,
      taxType?: string | null,
      synced?: boolean | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type InvoiceLinesByInvoiceIdQueryVariables = {
  invoiceId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelInvoiceLineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type InvoiceLinesByInvoiceIdQuery = {
  invoiceLinesByInvoiceId?:  {
    __typename: "ModelInvoiceLineConnection",
    items:  Array< {
      __typename: "InvoiceLine",
      id: string,
      invoiceId: string,
      pricingId?: string | null,
      pricingName?: string | null,
      quoteLineId?: string | null,
      name: string,
      shippingDate?: string | null,
      salesType?: string | null,
      order: number,
      m3?: number | null,
      grossWeight?: number | null,
      quantity?: number | null,
      amount?: number | null,
      minimumAmount?: number | null,
      actualAmount?: number | null,
      unit?: string | null,
      unitPrice?: number | null,
      taxRate?: number | null,
      taxTotal?: number | null,
      subtotal?: number | null,
      total?: number | null,
      taxType?: string | null,
      synced?: boolean | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSyncLogQueryVariables = {
  id: string,
};

export type GetSyncLogQuery = {
  getSyncLog?:  {
    __typename: "SyncLog",
    id: string,
    status: string,
    numberOfNewRecords?: number | null,
    numberOfDeletedRecords?: number | null,
    numberOfUpdatedRecords?: number | null,
    message?: string | null,
    sFObjectId: string,
    createdAt: string,
    updatedAt: string,
    sFObject?:  {
      __typename: "SFObject",
      id: string,
      name: string,
      tenantId: string,
      label?: string | null,
      sfObjectName?: string | null,
      editable: boolean,
      condition?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListSyncLogsQueryVariables = {
  filter?: ModelSyncLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSyncLogsQuery = {
  listSyncLogs?:  {
    __typename: "ModelSyncLogConnection",
    items:  Array< {
      __typename: "SyncLog",
      id: string,
      status: string,
      numberOfNewRecords?: number | null,
      numberOfDeletedRecords?: number | null,
      numberOfUpdatedRecords?: number | null,
      message?: string | null,
      sFObjectId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SyncLogsBySFObjectQueryVariables = {
  sFObjectId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSyncLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SyncLogsBySFObjectQuery = {
  syncLogsBySFObject?:  {
    __typename: "ModelSyncLogConnection",
    items:  Array< {
      __typename: "SyncLog",
      id: string,
      status: string,
      numberOfNewRecords?: number | null,
      numberOfDeletedRecords?: number | null,
      numberOfUpdatedRecords?: number | null,
      message?: string | null,
      sFObjectId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMetaTableSubscription = {
  onCreateMetaTable?:  {
    __typename: "MetaTable",
    id: string,
    name: string,
    label?: string | null,
    fields?:  Array< {
      __typename: "MetaTableField",
      name: string,
      label?: string | null,
      type?: string | null,
      required?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMetaTableSubscription = {
  onUpdateMetaTable?:  {
    __typename: "MetaTable",
    id: string,
    name: string,
    label?: string | null,
    fields?:  Array< {
      __typename: "MetaTableField",
      name: string,
      label?: string | null,
      type?: string | null,
      required?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMetaTableSubscription = {
  onDeleteMetaTable?:  {
    __typename: "MetaTable",
    id: string,
    name: string,
    label?: string | null,
    fields?:  Array< {
      __typename: "MetaTableField",
      name: string,
      label?: string | null,
      type?: string | null,
      required?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTenantSubscription = {
  onCreateTenant?:  {
    __typename: "Tenant",
    id: string,
    name: string,
    logoUrl?: string | null,
    address?: string | null,
    phone?: string | null,
    syncSFObject?: boolean | null,
    sfLoginUrl?: string | null,
    sfUsername?: string | null,
    sfPassword?: string | null,
    sfSecretToken?: string | null,
    projectFilters?:  Array< {
      __typename: "ProjectFilter",
      name?: string | null,
      duration?: string | null,
      sort?: string | null,
      showProcesses?: Array< string | null > | null,
      showUnits?: Array< string | null > | null,
      showPhases?: Array< string | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    accounts?:  {
      __typename: "ModelAccountConnection",
      nextToken?: string | null,
    } | null,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelGroupConnection",
      nextToken?: string | null,
    } | null,
    sfObjects?:  {
      __typename: "ModelSFObjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateTenantSubscription = {
  onUpdateTenant?:  {
    __typename: "Tenant",
    id: string,
    name: string,
    logoUrl?: string | null,
    address?: string | null,
    phone?: string | null,
    syncSFObject?: boolean | null,
    sfLoginUrl?: string | null,
    sfUsername?: string | null,
    sfPassword?: string | null,
    sfSecretToken?: string | null,
    projectFilters?:  Array< {
      __typename: "ProjectFilter",
      name?: string | null,
      duration?: string | null,
      sort?: string | null,
      showProcesses?: Array< string | null > | null,
      showUnits?: Array< string | null > | null,
      showPhases?: Array< string | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    accounts?:  {
      __typename: "ModelAccountConnection",
      nextToken?: string | null,
    } | null,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelGroupConnection",
      nextToken?: string | null,
    } | null,
    sfObjects?:  {
      __typename: "ModelSFObjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteTenantSubscription = {
  onDeleteTenant?:  {
    __typename: "Tenant",
    id: string,
    name: string,
    logoUrl?: string | null,
    address?: string | null,
    phone?: string | null,
    syncSFObject?: boolean | null,
    sfLoginUrl?: string | null,
    sfUsername?: string | null,
    sfPassword?: string | null,
    sfSecretToken?: string | null,
    projectFilters?:  Array< {
      __typename: "ProjectFilter",
      name?: string | null,
      duration?: string | null,
      sort?: string | null,
      showProcesses?: Array< string | null > | null,
      showUnits?: Array< string | null > | null,
      showPhases?: Array< string | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    accounts?:  {
      __typename: "ModelAccountConnection",
      nextToken?: string | null,
    } | null,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelGroupConnection",
      nextToken?: string | null,
    } | null,
    sfObjects?:  {
      __typename: "ModelSFObjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateAccountSubscription = {
  onCreateAccount?:  {
    __typename: "Account",
    id: string,
    tenantId: string,
    name: string,
    abbreviation?: string | null,
    site?: string | null,
    billingAddress?: string | null,
    billingStreet?: string | null,
    billingCity?: string | null,
    billingState?: string | null,
    billingPostalCode?: string | null,
    billingCountry?: string | null,
    billingType?: string | null,
    fax?: string | null,
    customeCode?: string | null,
    cutoffDateText?: string | null,
    cutoffDateNumber?: number | null,
    paymentMonthText?: string | null,
    paymentMonthNumber?: number | null,
    paymentDateText?: string | null,
    paymentDateNumber?: number | null,
    invoiceUnit?: string | null,
    invoiceMethod?: string | null,
    createdAt: string,
    updatedAt: string,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateAccountSubscription = {
  onUpdateAccount?:  {
    __typename: "Account",
    id: string,
    tenantId: string,
    name: string,
    abbreviation?: string | null,
    site?: string | null,
    billingAddress?: string | null,
    billingStreet?: string | null,
    billingCity?: string | null,
    billingState?: string | null,
    billingPostalCode?: string | null,
    billingCountry?: string | null,
    billingType?: string | null,
    fax?: string | null,
    customeCode?: string | null,
    cutoffDateText?: string | null,
    cutoffDateNumber?: number | null,
    paymentMonthText?: string | null,
    paymentMonthNumber?: number | null,
    paymentDateText?: string | null,
    paymentDateNumber?: number | null,
    invoiceUnit?: string | null,
    invoiceMethod?: string | null,
    createdAt: string,
    updatedAt: string,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteAccountSubscription = {
  onDeleteAccount?:  {
    __typename: "Account",
    id: string,
    tenantId: string,
    name: string,
    abbreviation?: string | null,
    site?: string | null,
    billingAddress?: string | null,
    billingStreet?: string | null,
    billingCity?: string | null,
    billingState?: string | null,
    billingPostalCode?: string | null,
    billingCountry?: string | null,
    billingType?: string | null,
    fax?: string | null,
    customeCode?: string | null,
    cutoffDateText?: string | null,
    cutoffDateNumber?: number | null,
    paymentMonthText?: string | null,
    paymentMonthNumber?: number | null,
    paymentDateText?: string | null,
    paymentDateNumber?: number | null,
    invoiceUnit?: string | null,
    invoiceMethod?: string | null,
    createdAt: string,
    updatedAt: string,
    contacts?:  {
      __typename: "ModelContactConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateClientSubscription = {
  onCreateClient?:  {
    __typename: "Client",
    id: string,
    accountId: string,
    name: string,
    abbreviation?: string | null,
    site?: string | null,
    billingAddress?: string | null,
    billingStreet?: string | null,
    billingCity?: string | null,
    billingState?: string | null,
    billingPostalCode?: string | null,
    billingCountry?: string | null,
    billingType?: string | null,
    phone?: string | null,
    fax?: string | null,
    customeCode?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateClientSubscription = {
  onUpdateClient?:  {
    __typename: "Client",
    id: string,
    accountId: string,
    name: string,
    abbreviation?: string | null,
    site?: string | null,
    billingAddress?: string | null,
    billingStreet?: string | null,
    billingCity?: string | null,
    billingState?: string | null,
    billingPostalCode?: string | null,
    billingCountry?: string | null,
    billingType?: string | null,
    phone?: string | null,
    fax?: string | null,
    customeCode?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteClientSubscription = {
  onDeleteClient?:  {
    __typename: "Client",
    id: string,
    accountId: string,
    name: string,
    abbreviation?: string | null,
    site?: string | null,
    billingAddress?: string | null,
    billingStreet?: string | null,
    billingCity?: string | null,
    billingState?: string | null,
    billingPostalCode?: string | null,
    billingCountry?: string | null,
    billingType?: string | null,
    phone?: string | null,
    fax?: string | null,
    customeCode?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContactSubscription = {
  onCreateContact?:  {
    __typename: "Contact",
    id: string,
    accountId: string,
    tenantId: string,
    name?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    suffix?: string | null,
    email?: string | null,
    phone?: string | null,
    mobilePhone?: string | null,
    title?: string | null,
    retired?: boolean | null,
    customeCode?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      tenantId: string,
      name: string,
      abbreviation?: string | null,
      site?: string | null,
      billingAddress?: string | null,
      billingStreet?: string | null,
      billingCity?: string | null,
      billingState?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingType?: string | null,
      fax?: string | null,
      customeCode?: string | null,
      cutoffDateText?: string | null,
      cutoffDateNumber?: number | null,
      paymentMonthText?: string | null,
      paymentMonthNumber?: number | null,
      paymentDateText?: string | null,
      paymentDateNumber?: number | null,
      invoiceUnit?: string | null,
      invoiceMethod?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateContactSubscription = {
  onUpdateContact?:  {
    __typename: "Contact",
    id: string,
    accountId: string,
    tenantId: string,
    name?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    suffix?: string | null,
    email?: string | null,
    phone?: string | null,
    mobilePhone?: string | null,
    title?: string | null,
    retired?: boolean | null,
    customeCode?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      tenantId: string,
      name: string,
      abbreviation?: string | null,
      site?: string | null,
      billingAddress?: string | null,
      billingStreet?: string | null,
      billingCity?: string | null,
      billingState?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingType?: string | null,
      fax?: string | null,
      customeCode?: string | null,
      cutoffDateText?: string | null,
      cutoffDateNumber?: number | null,
      paymentMonthText?: string | null,
      paymentMonthNumber?: number | null,
      paymentDateText?: string | null,
      paymentDateNumber?: number | null,
      invoiceUnit?: string | null,
      invoiceMethod?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteContactSubscription = {
  onDeleteContact?:  {
    __typename: "Contact",
    id: string,
    accountId: string,
    tenantId: string,
    name?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    suffix?: string | null,
    email?: string | null,
    phone?: string | null,
    mobilePhone?: string | null,
    title?: string | null,
    retired?: boolean | null,
    customeCode?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      tenantId: string,
      name: string,
      abbreviation?: string | null,
      site?: string | null,
      billingAddress?: string | null,
      billingStreet?: string | null,
      billingCity?: string | null,
      billingState?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingType?: string | null,
      fax?: string | null,
      customeCode?: string | null,
      cutoffDateText?: string | null,
      cutoffDateNumber?: number | null,
      paymentMonthText?: string | null,
      paymentMonthNumber?: number | null,
      paymentDateText?: string | null,
      paymentDateNumber?: number | null,
      invoiceUnit?: string | null,
      invoiceMethod?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateUnitSubscription = {
  onCreateUnit?:  {
    __typename: "Unit",
    id: string,
    name: string,
    tenantId: string,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateUnitSubscription = {
  onUpdateUnit?:  {
    __typename: "Unit",
    id: string,
    name: string,
    tenantId: string,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteUnitSubscription = {
  onDeleteUnit?:  {
    __typename: "Unit",
    id: string,
    name: string,
    tenantId: string,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateAccessLogSubscription = {
  onCreateAccessLog?:  {
    __typename: "AccessLog",
    id: string,
    device?: string | null,
    ipAddress?: string | null,
    description?: string | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateAccessLogSubscription = {
  onUpdateAccessLog?:  {
    __typename: "AccessLog",
    id: string,
    device?: string | null,
    ipAddress?: string | null,
    description?: string | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteAccessLogSubscription = {
  onDeleteAccessLog?:  {
    __typename: "AccessLog",
    id: string,
    device?: string | null,
    ipAddress?: string | null,
    description?: string | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    firstName: string,
    lastName: string,
    email: string,
    showTutorial: boolean,
    invited: boolean,
    verified: boolean,
    fontSize?: number | null,
    language?: string | null,
    receiveEmailNotification: boolean,
    theme?: string | null,
    useMfa: boolean,
    customId?: string | null,
    tenantId: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    accessLogs?:  {
      __typename: "ModelAccessLogConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelUsersGroupsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    firstName: string,
    lastName: string,
    email: string,
    showTutorial: boolean,
    invited: boolean,
    verified: boolean,
    fontSize?: number | null,
    language?: string | null,
    receiveEmailNotification: boolean,
    theme?: string | null,
    useMfa: boolean,
    customId?: string | null,
    tenantId: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    accessLogs?:  {
      __typename: "ModelAccessLogConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelUsersGroupsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    firstName: string,
    lastName: string,
    email: string,
    showTutorial: boolean,
    invited: boolean,
    verified: boolean,
    fontSize?: number | null,
    language?: string | null,
    receiveEmailNotification: boolean,
    theme?: string | null,
    useMfa: boolean,
    customId?: string | null,
    tenantId: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    accessLogs?:  {
      __typename: "ModelAccessLogConnection",
      nextToken?: string | null,
    } | null,
    groups?:  {
      __typename: "ModelUsersGroupsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    phone?: string | null,
    fax?: string | null,
    email?: string | null,
    logoUrl?: string | null,
    groupAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    quoteInfo?:  {
      __typename: "QuoteData",
      greeting?: string | null,
      paymentMethod?: string | null,
      destination?: string | null,
      dueDate?: string | null,
      expiryDate?: string | null,
      description?: string | null,
    } | null,
    bank?:  {
      __typename: "Bank",
      name?: string | null,
      branchName?: string | null,
      branchNumber?: string | null,
      type?: string | null,
      accountNumber?: string | null,
      swiftCode?: string | null,
    } | null,
    taxRate?: number | null,
    maxInventoryM3?: number | null,
    heatTreatmentRequestCode?: string | null,
    packingMaterialProducerRegistrationNumber?: string | null,
    tenantId: string,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    users?:  {
      __typename: "ModelUsersGroupsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    phone?: string | null,
    fax?: string | null,
    email?: string | null,
    logoUrl?: string | null,
    groupAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    quoteInfo?:  {
      __typename: "QuoteData",
      greeting?: string | null,
      paymentMethod?: string | null,
      destination?: string | null,
      dueDate?: string | null,
      expiryDate?: string | null,
      description?: string | null,
    } | null,
    bank?:  {
      __typename: "Bank",
      name?: string | null,
      branchName?: string | null,
      branchNumber?: string | null,
      type?: string | null,
      accountNumber?: string | null,
      swiftCode?: string | null,
    } | null,
    taxRate?: number | null,
    maxInventoryM3?: number | null,
    heatTreatmentRequestCode?: string | null,
    packingMaterialProducerRegistrationNumber?: string | null,
    tenantId: string,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    users?:  {
      __typename: "ModelUsersGroupsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    phone?: string | null,
    fax?: string | null,
    email?: string | null,
    logoUrl?: string | null,
    groupAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    quoteInfo?:  {
      __typename: "QuoteData",
      greeting?: string | null,
      paymentMethod?: string | null,
      destination?: string | null,
      dueDate?: string | null,
      expiryDate?: string | null,
      description?: string | null,
    } | null,
    bank?:  {
      __typename: "Bank",
      name?: string | null,
      branchName?: string | null,
      branchNumber?: string | null,
      type?: string | null,
      accountNumber?: string | null,
      swiftCode?: string | null,
    } | null,
    taxRate?: number | null,
    maxInventoryM3?: number | null,
    heatTreatmentRequestCode?: string | null,
    packingMaterialProducerRegistrationNumber?: string | null,
    tenantId: string,
    createdAt: string,
    updatedAt: string,
    tenant?:  {
      __typename: "Tenant",
      id: string,
      name: string,
      logoUrl?: string | null,
      address?: string | null,
      phone?: string | null,
      syncSFObject?: boolean | null,
      sfLoginUrl?: string | null,
      sfUsername?: string | null,
      sfPassword?: string | null,
      sfSecretToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    users?:  {
      __typename: "ModelUsersGroupsConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateUsersGroupsSubscription = {
  onCreateUsersGroups?:  {
    __typename: "UsersGroups",
    id: string,
    userId: string,
    groupId: string,
    role?: string | null,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    group?:  {
      __typename: "Group",
      id: string,
      name: string,
      phone?: string | null,
      fax?: string | null,
      email?: string | null,
      logoUrl?: string | null,
      taxRate?: number | null,
      maxInventoryM3?: number | null,
      heatTreatmentRequestCode?: string | null,
      packingMaterialProducerRegistrationNumber?: string | null,
      tenantId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateUsersGroupsSubscription = {
  onUpdateUsersGroups?:  {
    __typename: "UsersGroups",
    id: string,
    userId: string,
    groupId: string,
    role?: string | null,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    group?:  {
      __typename: "Group",
      id: string,
      name: string,
      phone?: string | null,
      fax?: string | null,
      email?: string | null,
      logoUrl?: string | null,
      taxRate?: number | null,
      maxInventoryM3?: number | null,
      heatTreatmentRequestCode?: string | null,
      packingMaterialProducerRegistrationNumber?: string | null,
      tenantId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteUsersGroupsSubscription = {
  onDeleteUsersGroups?:  {
    __typename: "UsersGroups",
    id: string,
    userId: string,
    groupId: string,
    role?: string | null,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    group?:  {
      __typename: "Group",
      id: string,
      name: string,
      phone?: string | null,
      fax?: string | null,
      email?: string | null,
      logoUrl?: string | null,
      taxRate?: number | null,
      maxInventoryM3?: number | null,
      heatTreatmentRequestCode?: string | null,
      packingMaterialProducerRegistrationNumber?: string | null,
      tenantId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateSFObjectSubscription = {
  onCreateSFObject?:  {
    __typename: "SFObject",
    id: string,
    name: string,
    tenantId: string,
    label?: string | null,
    sfObjectName?: string | null,
    editable: boolean,
    condition?: string | null,
    fields?:  Array< {
      __typename: "SFField",
      name: string,
      label?: string | null,
      apiName?: string | null,
      type?: string | null,
      required?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSFObjectSubscription = {
  onUpdateSFObject?:  {
    __typename: "SFObject",
    id: string,
    name: string,
    tenantId: string,
    label?: string | null,
    sfObjectName?: string | null,
    editable: boolean,
    condition?: string | null,
    fields?:  Array< {
      __typename: "SFField",
      name: string,
      label?: string | null,
      apiName?: string | null,
      type?: string | null,
      required?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSFObjectSubscription = {
  onDeleteSFObject?:  {
    __typename: "SFObject",
    id: string,
    name: string,
    tenantId: string,
    label?: string | null,
    sfObjectName?: string | null,
    editable: boolean,
    condition?: string | null,
    fields?:  Array< {
      __typename: "SFField",
      name: string,
      label?: string | null,
      apiName?: string | null,
      type?: string | null,
      required?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateVendorSubscription = {
  onCreateVendor?:  {
    __typename: "Vendor",
    id: string,
    name: string,
    tenantId: string,
    abbreviation?: string | null,
    site?: string | null,
    disinfectantCertificationCode?: string | null,
    billingAddress?: string | null,
    billingPostalCode?: string | null,
    billingCountry?: string | null,
    billingState?: string | null,
    billingStreet?: string | null,
    billingType?: string | null,
    phone?: string | null,
    fax?: string | null,
    customCode?: string | null,
    createdAt: string,
    updatedAt: string,
    materials?:  {
      __typename: "ModelVendorsMaterialsConnection",
      nextToken?: string | null,
    } | null,
    purchasings?:  {
      __typename: "ModelPurchasingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateVendorSubscription = {
  onUpdateVendor?:  {
    __typename: "Vendor",
    id: string,
    name: string,
    tenantId: string,
    abbreviation?: string | null,
    site?: string | null,
    disinfectantCertificationCode?: string | null,
    billingAddress?: string | null,
    billingPostalCode?: string | null,
    billingCountry?: string | null,
    billingState?: string | null,
    billingStreet?: string | null,
    billingType?: string | null,
    phone?: string | null,
    fax?: string | null,
    customCode?: string | null,
    createdAt: string,
    updatedAt: string,
    materials?:  {
      __typename: "ModelVendorsMaterialsConnection",
      nextToken?: string | null,
    } | null,
    purchasings?:  {
      __typename: "ModelPurchasingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteVendorSubscription = {
  onDeleteVendor?:  {
    __typename: "Vendor",
    id: string,
    name: string,
    tenantId: string,
    abbreviation?: string | null,
    site?: string | null,
    disinfectantCertificationCode?: string | null,
    billingAddress?: string | null,
    billingPostalCode?: string | null,
    billingCountry?: string | null,
    billingState?: string | null,
    billingStreet?: string | null,
    billingType?: string | null,
    phone?: string | null,
    fax?: string | null,
    customCode?: string | null,
    createdAt: string,
    updatedAt: string,
    materials?:  {
      __typename: "ModelVendorsMaterialsConnection",
      nextToken?: string | null,
    } | null,
    purchasings?:  {
      __typename: "ModelPurchasingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateVendorsMaterialsSubscription = {
  onCreateVendorsMaterials?:  {
    __typename: "VendorsMaterials",
    id: string,
    vendorId: string,
    materialId: string,
    createdAt: string,
    updatedAt: string,
    vendor?:  {
      __typename: "Vendor",
      id: string,
      name: string,
      tenantId: string,
      abbreviation?: string | null,
      site?: string | null,
      disinfectantCertificationCode?: string | null,
      billingAddress?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingState?: string | null,
      billingStreet?: string | null,
      billingType?: string | null,
      phone?: string | null,
      fax?: string | null,
      customCode?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    material?:  {
      __typename: "Material",
      id: string,
      groupId: string,
      materialTypeId: string,
      name: string,
      purchaseUnit?: string | null,
      lossRate?: number | null,
      weight?: number | null,
      costCalculation?: string | null,
      defaultUnitCost?: number | null,
      unit?: string | null,
      length?: number | null,
      lengthApplicable?: boolean | null,
      lengthLocked?: boolean | null,
      lengthNominal?: number | null,
      width?: number | null,
      widthApplicable?: boolean | null,
      widthLocked?: boolean | null,
      widthNominal?: number | null,
      height?: number | null,
      heightApplicable?: boolean | null,
      heightLocked?: boolean | null,
      heightNominal?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateVendorsMaterialsSubscription = {
  onUpdateVendorsMaterials?:  {
    __typename: "VendorsMaterials",
    id: string,
    vendorId: string,
    materialId: string,
    createdAt: string,
    updatedAt: string,
    vendor?:  {
      __typename: "Vendor",
      id: string,
      name: string,
      tenantId: string,
      abbreviation?: string | null,
      site?: string | null,
      disinfectantCertificationCode?: string | null,
      billingAddress?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingState?: string | null,
      billingStreet?: string | null,
      billingType?: string | null,
      phone?: string | null,
      fax?: string | null,
      customCode?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    material?:  {
      __typename: "Material",
      id: string,
      groupId: string,
      materialTypeId: string,
      name: string,
      purchaseUnit?: string | null,
      lossRate?: number | null,
      weight?: number | null,
      costCalculation?: string | null,
      defaultUnitCost?: number | null,
      unit?: string | null,
      length?: number | null,
      lengthApplicable?: boolean | null,
      lengthLocked?: boolean | null,
      lengthNominal?: number | null,
      width?: number | null,
      widthApplicable?: boolean | null,
      widthLocked?: boolean | null,
      widthNominal?: number | null,
      height?: number | null,
      heightApplicable?: boolean | null,
      heightLocked?: boolean | null,
      heightNominal?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteVendorsMaterialsSubscription = {
  onDeleteVendorsMaterials?:  {
    __typename: "VendorsMaterials",
    id: string,
    vendorId: string,
    materialId: string,
    createdAt: string,
    updatedAt: string,
    vendor?:  {
      __typename: "Vendor",
      id: string,
      name: string,
      tenantId: string,
      abbreviation?: string | null,
      site?: string | null,
      disinfectantCertificationCode?: string | null,
      billingAddress?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingState?: string | null,
      billingStreet?: string | null,
      billingType?: string | null,
      phone?: string | null,
      fax?: string | null,
      customCode?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    material?:  {
      __typename: "Material",
      id: string,
      groupId: string,
      materialTypeId: string,
      name: string,
      purchaseUnit?: string | null,
      lossRate?: number | null,
      weight?: number | null,
      costCalculation?: string | null,
      defaultUnitCost?: number | null,
      unit?: string | null,
      length?: number | null,
      lengthApplicable?: boolean | null,
      lengthLocked?: boolean | null,
      lengthNominal?: number | null,
      width?: number | null,
      widthApplicable?: boolean | null,
      widthLocked?: boolean | null,
      widthNominal?: number | null,
      height?: number | null,
      heightApplicable?: boolean | null,
      heightLocked?: boolean | null,
      heightNominal?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateMaterialSubscription = {
  onCreateMaterial?:  {
    __typename: "Material",
    id: string,
    groupId: string,
    materialTypeId: string,
    name: string,
    purchaseUnit?: string | null,
    lossRate?: number | null,
    weight?: number | null,
    costCalculation?: string | null,
    defaultUnitCost?: number | null,
    unit?: string | null,
    length?: number | null,
    lengthApplicable?: boolean | null,
    lengthLocked?: boolean | null,
    lengthNominal?: number | null,
    width?: number | null,
    widthApplicable?: boolean | null,
    widthLocked?: boolean | null,
    widthNominal?: number | null,
    height?: number | null,
    heightApplicable?: boolean | null,
    heightLocked?: boolean | null,
    heightNominal?: number | null,
    createdAt: string,
    updatedAt: string,
    vendors?:  {
      __typename: "ModelVendorsMaterialsConnection",
      nextToken?: string | null,
    } | null,
    materialType?:  {
      __typename: "MaterialType",
      id: string,
      groupId: string,
      name: string,
      description?: string | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    purchasings?:  {
      __typename: "ModelPurchasingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateMaterialSubscription = {
  onUpdateMaterial?:  {
    __typename: "Material",
    id: string,
    groupId: string,
    materialTypeId: string,
    name: string,
    purchaseUnit?: string | null,
    lossRate?: number | null,
    weight?: number | null,
    costCalculation?: string | null,
    defaultUnitCost?: number | null,
    unit?: string | null,
    length?: number | null,
    lengthApplicable?: boolean | null,
    lengthLocked?: boolean | null,
    lengthNominal?: number | null,
    width?: number | null,
    widthApplicable?: boolean | null,
    widthLocked?: boolean | null,
    widthNominal?: number | null,
    height?: number | null,
    heightApplicable?: boolean | null,
    heightLocked?: boolean | null,
    heightNominal?: number | null,
    createdAt: string,
    updatedAt: string,
    vendors?:  {
      __typename: "ModelVendorsMaterialsConnection",
      nextToken?: string | null,
    } | null,
    materialType?:  {
      __typename: "MaterialType",
      id: string,
      groupId: string,
      name: string,
      description?: string | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    purchasings?:  {
      __typename: "ModelPurchasingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteMaterialSubscription = {
  onDeleteMaterial?:  {
    __typename: "Material",
    id: string,
    groupId: string,
    materialTypeId: string,
    name: string,
    purchaseUnit?: string | null,
    lossRate?: number | null,
    weight?: number | null,
    costCalculation?: string | null,
    defaultUnitCost?: number | null,
    unit?: string | null,
    length?: number | null,
    lengthApplicable?: boolean | null,
    lengthLocked?: boolean | null,
    lengthNominal?: number | null,
    width?: number | null,
    widthApplicable?: boolean | null,
    widthLocked?: boolean | null,
    widthNominal?: number | null,
    height?: number | null,
    heightApplicable?: boolean | null,
    heightLocked?: boolean | null,
    heightNominal?: number | null,
    createdAt: string,
    updatedAt: string,
    vendors?:  {
      __typename: "ModelVendorsMaterialsConnection",
      nextToken?: string | null,
    } | null,
    materialType?:  {
      __typename: "MaterialType",
      id: string,
      groupId: string,
      name: string,
      description?: string | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    purchasings?:  {
      __typename: "ModelPurchasingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateMaterialTypeSubscription = {
  onCreateMaterialType?:  {
    __typename: "MaterialType",
    id: string,
    groupId: string,
    name: string,
    description?: string | null,
    type?: string | null,
    customFields?:  Array< {
      __typename: "CustomField",
      name?: string | null,
      type?: string | null,
      required?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    materials?:  {
      __typename: "ModelMaterialConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateMaterialTypeSubscription = {
  onUpdateMaterialType?:  {
    __typename: "MaterialType",
    id: string,
    groupId: string,
    name: string,
    description?: string | null,
    type?: string | null,
    customFields?:  Array< {
      __typename: "CustomField",
      name?: string | null,
      type?: string | null,
      required?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    materials?:  {
      __typename: "ModelMaterialConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteMaterialTypeSubscription = {
  onDeleteMaterialType?:  {
    __typename: "MaterialType",
    id: string,
    groupId: string,
    name: string,
    description?: string | null,
    type?: string | null,
    customFields?:  Array< {
      __typename: "CustomField",
      name?: string | null,
      type?: string | null,
      required?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    materials?:  {
      __typename: "ModelMaterialConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreatePurchasingSubscription = {
  onCreatePurchasing?:  {
    __typename: "Purchasing",
    id: string,
    groupId: string,
    vendorId: string,
    materialId: string,
    purchasingDate?: string | null,
    startDate?: string | null,
    unitPurchasingCost?: number | null,
    purchaseUnit?: string | null,
    quantity?: number | null,
    totalCost?: number | null,
    unitCost?: number | null,
    costUnit?: string | null,
    customFields?:  Array< {
      __typename: "Field",
      label?: string | null,
      value?: string | null,
    } | null > | null,
    note?: string | null,
    createdAt: string,
    updatedAt: string,
    vendor?:  {
      __typename: "Vendor",
      id: string,
      name: string,
      tenantId: string,
      abbreviation?: string | null,
      site?: string | null,
      disinfectantCertificationCode?: string | null,
      billingAddress?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingState?: string | null,
      billingStreet?: string | null,
      billingType?: string | null,
      phone?: string | null,
      fax?: string | null,
      customCode?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    material?:  {
      __typename: "Material",
      id: string,
      groupId: string,
      materialTypeId: string,
      name: string,
      purchaseUnit?: string | null,
      lossRate?: number | null,
      weight?: number | null,
      costCalculation?: string | null,
      defaultUnitCost?: number | null,
      unit?: string | null,
      length?: number | null,
      lengthApplicable?: boolean | null,
      lengthLocked?: boolean | null,
      lengthNominal?: number | null,
      width?: number | null,
      widthApplicable?: boolean | null,
      widthLocked?: boolean | null,
      widthNominal?: number | null,
      height?: number | null,
      heightApplicable?: boolean | null,
      heightLocked?: boolean | null,
      heightNominal?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdatePurchasingSubscription = {
  onUpdatePurchasing?:  {
    __typename: "Purchasing",
    id: string,
    groupId: string,
    vendorId: string,
    materialId: string,
    purchasingDate?: string | null,
    startDate?: string | null,
    unitPurchasingCost?: number | null,
    purchaseUnit?: string | null,
    quantity?: number | null,
    totalCost?: number | null,
    unitCost?: number | null,
    costUnit?: string | null,
    customFields?:  Array< {
      __typename: "Field",
      label?: string | null,
      value?: string | null,
    } | null > | null,
    note?: string | null,
    createdAt: string,
    updatedAt: string,
    vendor?:  {
      __typename: "Vendor",
      id: string,
      name: string,
      tenantId: string,
      abbreviation?: string | null,
      site?: string | null,
      disinfectantCertificationCode?: string | null,
      billingAddress?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingState?: string | null,
      billingStreet?: string | null,
      billingType?: string | null,
      phone?: string | null,
      fax?: string | null,
      customCode?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    material?:  {
      __typename: "Material",
      id: string,
      groupId: string,
      materialTypeId: string,
      name: string,
      purchaseUnit?: string | null,
      lossRate?: number | null,
      weight?: number | null,
      costCalculation?: string | null,
      defaultUnitCost?: number | null,
      unit?: string | null,
      length?: number | null,
      lengthApplicable?: boolean | null,
      lengthLocked?: boolean | null,
      lengthNominal?: number | null,
      width?: number | null,
      widthApplicable?: boolean | null,
      widthLocked?: boolean | null,
      widthNominal?: number | null,
      height?: number | null,
      heightApplicable?: boolean | null,
      heightLocked?: boolean | null,
      heightNominal?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeletePurchasingSubscription = {
  onDeletePurchasing?:  {
    __typename: "Purchasing",
    id: string,
    groupId: string,
    vendorId: string,
    materialId: string,
    purchasingDate?: string | null,
    startDate?: string | null,
    unitPurchasingCost?: number | null,
    purchaseUnit?: string | null,
    quantity?: number | null,
    totalCost?: number | null,
    unitCost?: number | null,
    costUnit?: string | null,
    customFields?:  Array< {
      __typename: "Field",
      label?: string | null,
      value?: string | null,
    } | null > | null,
    note?: string | null,
    createdAt: string,
    updatedAt: string,
    vendor?:  {
      __typename: "Vendor",
      id: string,
      name: string,
      tenantId: string,
      abbreviation?: string | null,
      site?: string | null,
      disinfectantCertificationCode?: string | null,
      billingAddress?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingState?: string | null,
      billingStreet?: string | null,
      billingType?: string | null,
      phone?: string | null,
      fax?: string | null,
      customCode?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    material?:  {
      __typename: "Material",
      id: string,
      groupId: string,
      materialTypeId: string,
      name: string,
      purchaseUnit?: string | null,
      lossRate?: number | null,
      weight?: number | null,
      costCalculation?: string | null,
      defaultUnitCost?: number | null,
      unit?: string | null,
      length?: number | null,
      lengthApplicable?: boolean | null,
      lengthLocked?: boolean | null,
      lengthNominal?: number | null,
      width?: number | null,
      widthApplicable?: boolean | null,
      widthLocked?: boolean | null,
      widthNominal?: number | null,
      height?: number | null,
      heightApplicable?: boolean | null,
      heightLocked?: boolean | null,
      heightNominal?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreatePriceTypeSubscription = {
  onCreatePriceType?:  {
    __typename: "PriceType",
    id: string,
    groupId: string,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    pricings?:  {
      __typename: "ModelPricingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdatePriceTypeSubscription = {
  onUpdatePriceType?:  {
    __typename: "PriceType",
    id: string,
    groupId: string,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    pricings?:  {
      __typename: "ModelPricingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeletePriceTypeSubscription = {
  onDeletePriceType?:  {
    __typename: "PriceType",
    id: string,
    groupId: string,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    pricings?:  {
      __typename: "ModelPricingConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreatePricingSubscription = {
  onCreatePricing?:  {
    __typename: "Pricing",
    id: string,
    groupId: string,
    priceTypeId: string,
    packageTypeId?: string | null,
    isDefault: boolean,
    name: string,
    packageTypeName?: string | null,
    unitPrice?: number | null,
    unit?: string | null,
    autoCalculate?: boolean | null,
    minimumAmount?: number | null,
    taxType?: string | null,
    sizeDependent: boolean,
    pricesBySize?:  Array< {
      __typename: "PriceBySize",
      minSize?: number | null,
      maxSize?: number | null,
      unitPrice?: number | null,
    } | null > | null,
    accountSpecific: boolean,
    accounts?:  Array< {
      __typename: "Selection",
      key?: string | null,
      label?: string | null,
    } | null > | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    priceType?:  {
      __typename: "PriceType",
      id: string,
      groupId: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdatePricingSubscription = {
  onUpdatePricing?:  {
    __typename: "Pricing",
    id: string,
    groupId: string,
    priceTypeId: string,
    packageTypeId?: string | null,
    isDefault: boolean,
    name: string,
    packageTypeName?: string | null,
    unitPrice?: number | null,
    unit?: string | null,
    autoCalculate?: boolean | null,
    minimumAmount?: number | null,
    taxType?: string | null,
    sizeDependent: boolean,
    pricesBySize?:  Array< {
      __typename: "PriceBySize",
      minSize?: number | null,
      maxSize?: number | null,
      unitPrice?: number | null,
    } | null > | null,
    accountSpecific: boolean,
    accounts?:  Array< {
      __typename: "Selection",
      key?: string | null,
      label?: string | null,
    } | null > | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    priceType?:  {
      __typename: "PriceType",
      id: string,
      groupId: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeletePricingSubscription = {
  onDeletePricing?:  {
    __typename: "Pricing",
    id: string,
    groupId: string,
    priceTypeId: string,
    packageTypeId?: string | null,
    isDefault: boolean,
    name: string,
    packageTypeName?: string | null,
    unitPrice?: number | null,
    unit?: string | null,
    autoCalculate?: boolean | null,
    minimumAmount?: number | null,
    taxType?: string | null,
    sizeDependent: boolean,
    pricesBySize?:  Array< {
      __typename: "PriceBySize",
      minSize?: number | null,
      maxSize?: number | null,
      unitPrice?: number | null,
    } | null > | null,
    accountSpecific: boolean,
    accounts?:  Array< {
      __typename: "Selection",
      key?: string | null,
      label?: string | null,
    } | null > | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    priceType?:  {
      __typename: "PriceType",
      id: string,
      groupId: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreatePackageTypeSubscription = {
  onCreatePackageType?:  {
    __typename: "PackageType",
    id: string,
    groupId: string,
    pricingId?: string | null,
    name: string,
    description?: string | null,
    publish: boolean,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    areas?:  {
      __typename: "ModelBaseAreaConnection",
      nextToken?: string | null,
    } | null,
    decorations?:  {
      __typename: "ModelBaseDecorationComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdatePackageTypeSubscription = {
  onUpdatePackageType?:  {
    __typename: "PackageType",
    id: string,
    groupId: string,
    pricingId?: string | null,
    name: string,
    description?: string | null,
    publish: boolean,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    areas?:  {
      __typename: "ModelBaseAreaConnection",
      nextToken?: string | null,
    } | null,
    decorations?:  {
      __typename: "ModelBaseDecorationComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeletePackageTypeSubscription = {
  onDeletePackageType?:  {
    __typename: "PackageType",
    id: string,
    groupId: string,
    pricingId?: string | null,
    name: string,
    description?: string | null,
    publish: boolean,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    areas?:  {
      __typename: "ModelBaseAreaConnection",
      nextToken?: string | null,
    } | null,
    decorations?:  {
      __typename: "ModelBaseDecorationComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateBaseAreaSubscription = {
  onCreateBaseArea?:  {
    __typename: "BaseArea",
    id: string,
    packageTypeId: string,
    name: string,
    areaType: string,
    order?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    components?:  {
      __typename: "ModelBaseComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateBaseAreaSubscription = {
  onUpdateBaseArea?:  {
    __typename: "BaseArea",
    id: string,
    packageTypeId: string,
    name: string,
    areaType: string,
    order?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    components?:  {
      __typename: "ModelBaseComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteBaseAreaSubscription = {
  onDeleteBaseArea?:  {
    __typename: "BaseArea",
    id: string,
    packageTypeId: string,
    name: string,
    areaType: string,
    order?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    components?:  {
      __typename: "ModelBaseComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateBaseComponentSubscription = {
  onCreateBaseComponent?:  {
    __typename: "BaseComponent",
    id: string,
    baseAreaId: string,
    name: string,
    slug: string,
    order?: number | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBaseComponentSubscription = {
  onUpdateBaseComponent?:  {
    __typename: "BaseComponent",
    id: string,
    baseAreaId: string,
    name: string,
    slug: string,
    order?: number | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBaseComponentSubscription = {
  onDeleteBaseComponent?:  {
    __typename: "BaseComponent",
    id: string,
    baseAreaId: string,
    name: string,
    slug: string,
    order?: number | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBaseDecorationComponentSubscription = {
  onCreateBaseDecorationComponent?:  {
    __typename: "BaseDecorationComponent",
    id: string,
    packageTypeId: string,
    type?: string | null,
    name: string,
    slug: string,
    order?: number | null,
    unit?: string | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBaseDecorationComponentSubscription = {
  onUpdateBaseDecorationComponent?:  {
    __typename: "BaseDecorationComponent",
    id: string,
    packageTypeId: string,
    type?: string | null,
    name: string,
    slug: string,
    order?: number | null,
    unit?: string | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBaseDecorationComponentSubscription = {
  onDeleteBaseDecorationComponent?:  {
    __typename: "BaseDecorationComponent",
    id: string,
    packageTypeId: string,
    type?: string | null,
    name: string,
    slug: string,
    order?: number | null,
    unit?: string | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    groupId: string,
    quoteId?: string | null,
    userId: string,
    accountId: string,
    accountName?: string | null,
    contactId: string,
    contactName?: string | null,
    keyDates?:  Array< {
      __typename: "KeyDate",
      name?: string | null,
      m3?: number | null,
      case?: number | null,
      shipType?: string | null,
      stockingDate?: string | null,
      packagingDate?: string | null,
      shippingDate?: string | null,
      cutDate?: string | null,
    } | null > | null,
    name: string,
    status?: string | null,
    inquiryDate?: string | null,
    quotationDate?: string | null,
    destinationName?: string | null,
    destination?:  {
      __typename: "Location",
      lat?: string | null,
      lng?: string | null,
    } | null,
    confidence?: string | null,
    description?: string | null,
    alert?: string | null,
    cancelled: boolean,
    cancelReason?: string | null,
    createdAt: string,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      tenantId: string,
      name: string,
      abbreviation?: string | null,
      site?: string | null,
      billingAddress?: string | null,
      billingStreet?: string | null,
      billingCity?: string | null,
      billingState?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingType?: string | null,
      fax?: string | null,
      customeCode?: string | null,
      cutoffDateText?: string | null,
      cutoffDateNumber?: number | null,
      paymentMonthText?: string | null,
      paymentMonthNumber?: number | null,
      paymentDateText?: string | null,
      paymentDateNumber?: number | null,
      invoiceUnit?: string | null,
      invoiceMethod?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contact?:  {
      __typename: "Contact",
      id: string,
      accountId: string,
      tenantId: string,
      name?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      suffix?: string | null,
      email?: string | null,
      phone?: string | null,
      mobilePhone?: string | null,
      title?: string | null,
      retired?: boolean | null,
      customeCode?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    group?:  {
      __typename: "Group",
      id: string,
      name: string,
      phone?: string | null,
      fax?: string | null,
      email?: string | null,
      logoUrl?: string | null,
      taxRate?: number | null,
      maxInventoryM3?: number | null,
      heatTreatmentRequestCode?: string | null,
      packingMaterialProducerRegistrationNumber?: string | null,
      tenantId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    groupId: string,
    quoteId?: string | null,
    userId: string,
    accountId: string,
    accountName?: string | null,
    contactId: string,
    contactName?: string | null,
    keyDates?:  Array< {
      __typename: "KeyDate",
      name?: string | null,
      m3?: number | null,
      case?: number | null,
      shipType?: string | null,
      stockingDate?: string | null,
      packagingDate?: string | null,
      shippingDate?: string | null,
      cutDate?: string | null,
    } | null > | null,
    name: string,
    status?: string | null,
    inquiryDate?: string | null,
    quotationDate?: string | null,
    destinationName?: string | null,
    destination?:  {
      __typename: "Location",
      lat?: string | null,
      lng?: string | null,
    } | null,
    confidence?: string | null,
    description?: string | null,
    alert?: string | null,
    cancelled: boolean,
    cancelReason?: string | null,
    createdAt: string,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      tenantId: string,
      name: string,
      abbreviation?: string | null,
      site?: string | null,
      billingAddress?: string | null,
      billingStreet?: string | null,
      billingCity?: string | null,
      billingState?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingType?: string | null,
      fax?: string | null,
      customeCode?: string | null,
      cutoffDateText?: string | null,
      cutoffDateNumber?: number | null,
      paymentMonthText?: string | null,
      paymentMonthNumber?: number | null,
      paymentDateText?: string | null,
      paymentDateNumber?: number | null,
      invoiceUnit?: string | null,
      invoiceMethod?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contact?:  {
      __typename: "Contact",
      id: string,
      accountId: string,
      tenantId: string,
      name?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      suffix?: string | null,
      email?: string | null,
      phone?: string | null,
      mobilePhone?: string | null,
      title?: string | null,
      retired?: boolean | null,
      customeCode?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    group?:  {
      __typename: "Group",
      id: string,
      name: string,
      phone?: string | null,
      fax?: string | null,
      email?: string | null,
      logoUrl?: string | null,
      taxRate?: number | null,
      maxInventoryM3?: number | null,
      heatTreatmentRequestCode?: string | null,
      packingMaterialProducerRegistrationNumber?: string | null,
      tenantId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    groupId: string,
    quoteId?: string | null,
    userId: string,
    accountId: string,
    accountName?: string | null,
    contactId: string,
    contactName?: string | null,
    keyDates?:  Array< {
      __typename: "KeyDate",
      name?: string | null,
      m3?: number | null,
      case?: number | null,
      shipType?: string | null,
      stockingDate?: string | null,
      packagingDate?: string | null,
      shippingDate?: string | null,
      cutDate?: string | null,
    } | null > | null,
    name: string,
    status?: string | null,
    inquiryDate?: string | null,
    quotationDate?: string | null,
    destinationName?: string | null,
    destination?:  {
      __typename: "Location",
      lat?: string | null,
      lng?: string | null,
    } | null,
    confidence?: string | null,
    description?: string | null,
    alert?: string | null,
    cancelled: boolean,
    cancelReason?: string | null,
    createdAt: string,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      tenantId: string,
      name: string,
      abbreviation?: string | null,
      site?: string | null,
      billingAddress?: string | null,
      billingStreet?: string | null,
      billingCity?: string | null,
      billingState?: string | null,
      billingPostalCode?: string | null,
      billingCountry?: string | null,
      billingType?: string | null,
      fax?: string | null,
      customeCode?: string | null,
      cutoffDateText?: string | null,
      cutoffDateNumber?: number | null,
      paymentMonthText?: string | null,
      paymentMonthNumber?: number | null,
      paymentDateText?: string | null,
      paymentDateNumber?: number | null,
      invoiceUnit?: string | null,
      invoiceMethod?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contact?:  {
      __typename: "Contact",
      id: string,
      accountId: string,
      tenantId: string,
      name?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      suffix?: string | null,
      email?: string | null,
      phone?: string | null,
      mobilePhone?: string | null,
      title?: string | null,
      retired?: boolean | null,
      customeCode?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      firstName: string,
      lastName: string,
      email: string,
      showTutorial: boolean,
      invited: boolean,
      verified: boolean,
      fontSize?: number | null,
      language?: string | null,
      receiveEmailNotification: boolean,
      theme?: string | null,
      useMfa: boolean,
      customId?: string | null,
      tenantId: string,
      isAdmin: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    group?:  {
      __typename: "Group",
      id: string,
      name: string,
      phone?: string | null,
      fax?: string | null,
      email?: string | null,
      logoUrl?: string | null,
      taxRate?: number | null,
      maxInventoryM3?: number | null,
      heatTreatmentRequestCode?: string | null,
      packingMaterialProducerRegistrationNumber?: string | null,
      tenantId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateQuoteSubscription = {
  onCreateQuote?:  {
    __typename: "Quote",
    id: string,
    projectId: string,
    name: string,
    quoteNumber?: string | null,
    linkProduct?: boolean | null,
    order: number,
    orderPlaced?: boolean | null,
    revenue?: number | null,
    estimatedCost?: number | null,
    estimatedProfit?: number | null,
    greeting?: string | null,
    paymentMethod?: string | null,
    destination?: string | null,
    dueDate?: string | null,
    expiryDate?: string | null,
    description?: string | null,
    groupName?: string | null,
    logoUrl?: string | null,
    groupAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    phone?: string | null,
    fax?: string | null,
    createdAt: string,
    updatedAt: string,
    quoteLines?:  {
      __typename: "ModelQuoteLineConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateQuoteSubscription = {
  onUpdateQuote?:  {
    __typename: "Quote",
    id: string,
    projectId: string,
    name: string,
    quoteNumber?: string | null,
    linkProduct?: boolean | null,
    order: number,
    orderPlaced?: boolean | null,
    revenue?: number | null,
    estimatedCost?: number | null,
    estimatedProfit?: number | null,
    greeting?: string | null,
    paymentMethod?: string | null,
    destination?: string | null,
    dueDate?: string | null,
    expiryDate?: string | null,
    description?: string | null,
    groupName?: string | null,
    logoUrl?: string | null,
    groupAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    phone?: string | null,
    fax?: string | null,
    createdAt: string,
    updatedAt: string,
    quoteLines?:  {
      __typename: "ModelQuoteLineConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteQuoteSubscription = {
  onDeleteQuote?:  {
    __typename: "Quote",
    id: string,
    projectId: string,
    name: string,
    quoteNumber?: string | null,
    linkProduct?: boolean | null,
    order: number,
    orderPlaced?: boolean | null,
    revenue?: number | null,
    estimatedCost?: number | null,
    estimatedProfit?: number | null,
    greeting?: string | null,
    paymentMethod?: string | null,
    destination?: string | null,
    dueDate?: string | null,
    expiryDate?: string | null,
    description?: string | null,
    groupName?: string | null,
    logoUrl?: string | null,
    groupAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    phone?: string | null,
    fax?: string | null,
    createdAt: string,
    updatedAt: string,
    quoteLines?:  {
      __typename: "ModelQuoteLineConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateQuoteLineSubscription = {
  onCreateQuoteLine?:  {
    __typename: "QuoteLine",
    id: string,
    quoteId: string,
    pricingId?: string | null,
    packageTypeId?: string | null,
    pricingName?: string | null,
    packageTypeName?: string | null,
    name?: string | null,
    index?: string | null,
    notes?: string | null,
    quantity?: number | null,
    amount?: number | null,
    minimumAmount?: number | null,
    actualAmount?: number | null,
    order: number,
    unitNW?: number | null,
    NW?: number | null,
    productLength?: number | null,
    productWidth?: number | null,
    productHeight?: number | null,
    outerLength?: number | null,
    outerWidth?: number | null,
    outerHeight?: number | null,
    estimatedUnitM3?: number | null,
    estimatedM3?: number | null,
    estimatedUnitGrossWeight?: number | null,
    estimatedGrossWeight?: number | null,
    estimatedUnitCost?: number | null,
    estimatedCost?: number | null,
    estimatedProfit?: number | null,
    unitPrice?: number | null,
    subtotal?: number | null,
    total?: number | null,
    unit?: string | null,
    taxType?: string | null,
    taxRate?: number | null,
    costDetail?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuoteLineSubscription = {
  onUpdateQuoteLine?:  {
    __typename: "QuoteLine",
    id: string,
    quoteId: string,
    pricingId?: string | null,
    packageTypeId?: string | null,
    pricingName?: string | null,
    packageTypeName?: string | null,
    name?: string | null,
    index?: string | null,
    notes?: string | null,
    quantity?: number | null,
    amount?: number | null,
    minimumAmount?: number | null,
    actualAmount?: number | null,
    order: number,
    unitNW?: number | null,
    NW?: number | null,
    productLength?: number | null,
    productWidth?: number | null,
    productHeight?: number | null,
    outerLength?: number | null,
    outerWidth?: number | null,
    outerHeight?: number | null,
    estimatedUnitM3?: number | null,
    estimatedM3?: number | null,
    estimatedUnitGrossWeight?: number | null,
    estimatedGrossWeight?: number | null,
    estimatedUnitCost?: number | null,
    estimatedCost?: number | null,
    estimatedProfit?: number | null,
    unitPrice?: number | null,
    subtotal?: number | null,
    total?: number | null,
    unit?: string | null,
    taxType?: string | null,
    taxRate?: number | null,
    costDetail?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuoteLineSubscription = {
  onDeleteQuoteLine?:  {
    __typename: "QuoteLine",
    id: string,
    quoteId: string,
    pricingId?: string | null,
    packageTypeId?: string | null,
    pricingName?: string | null,
    packageTypeName?: string | null,
    name?: string | null,
    index?: string | null,
    notes?: string | null,
    quantity?: number | null,
    amount?: number | null,
    minimumAmount?: number | null,
    actualAmount?: number | null,
    order: number,
    unitNW?: number | null,
    NW?: number | null,
    productLength?: number | null,
    productWidth?: number | null,
    productHeight?: number | null,
    outerLength?: number | null,
    outerWidth?: number | null,
    outerHeight?: number | null,
    estimatedUnitM3?: number | null,
    estimatedM3?: number | null,
    estimatedUnitGrossWeight?: number | null,
    estimatedGrossWeight?: number | null,
    estimatedUnitCost?: number | null,
    estimatedCost?: number | null,
    estimatedProfit?: number | null,
    unitPrice?: number | null,
    subtotal?: number | null,
    total?: number | null,
    unit?: string | null,
    taxType?: string | null,
    taxRate?: number | null,
    costDetail?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    projectId: string,
    packageTypeId: string,
    pricingId?: string | null,
    packageTypeName: string,
    quoteLineId?: string | null,
    name: string,
    order: number,
    productNumber?: string | null,
    quantity?: number | null,
    material?: string | null,
    tareWeight?: number | null,
    stamp?: string | null,
    destination?: string | null,
    packagingStart?: string | null,
    packagingEnd?: string | null,
    packageMethod?: string | null,
    description?: string | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    areas?:  {
      __typename: "ModelAreaConnection",
      nextToken?: string | null,
    } | null,
    decorations?:  {
      __typename: "ModelDecorationComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    projectId: string,
    packageTypeId: string,
    pricingId?: string | null,
    packageTypeName: string,
    quoteLineId?: string | null,
    name: string,
    order: number,
    productNumber?: string | null,
    quantity?: number | null,
    material?: string | null,
    tareWeight?: number | null,
    stamp?: string | null,
    destination?: string | null,
    packagingStart?: string | null,
    packagingEnd?: string | null,
    packageMethod?: string | null,
    description?: string | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    areas?:  {
      __typename: "ModelAreaConnection",
      nextToken?: string | null,
    } | null,
    decorations?:  {
      __typename: "ModelDecorationComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    projectId: string,
    packageTypeId: string,
    pricingId?: string | null,
    packageTypeName: string,
    quoteLineId?: string | null,
    name: string,
    order: number,
    productNumber?: string | null,
    quantity?: number | null,
    material?: string | null,
    tareWeight?: number | null,
    stamp?: string | null,
    destination?: string | null,
    packagingStart?: string | null,
    packagingEnd?: string | null,
    packageMethod?: string | null,
    description?: string | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    areas?:  {
      __typename: "ModelAreaConnection",
      nextToken?: string | null,
    } | null,
    decorations?:  {
      __typename: "ModelDecorationComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateAreaSubscription = {
  onCreateArea?:  {
    __typename: "Area",
    id: string,
    productId: string,
    name: string,
    areaType?: string | null,
    order?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    components?:  {
      __typename: "ModelComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateAreaSubscription = {
  onUpdateArea?:  {
    __typename: "Area",
    id: string,
    productId: string,
    name: string,
    areaType?: string | null,
    order?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    components?:  {
      __typename: "ModelComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteAreaSubscription = {
  onDeleteArea?:  {
    __typename: "Area",
    id: string,
    productId: string,
    name: string,
    areaType?: string | null,
    order?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    components?:  {
      __typename: "ModelComponentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateComponentSubscription = {
  onCreateComponent?:  {
    __typename: "Component",
    id: string,
    areaId: string,
    name: string,
    slug: string,
    order?: number | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateComponentSubscription = {
  onUpdateComponent?:  {
    __typename: "Component",
    id: string,
    areaId: string,
    name: string,
    slug: string,
    order?: number | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteComponentSubscription = {
  onDeleteComponent?:  {
    __typename: "Component",
    id: string,
    areaId: string,
    name: string,
    slug: string,
    order?: number | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDecorationComponentSubscription = {
  onCreateDecorationComponent?:  {
    __typename: "DecorationComponent",
    id: string,
    productId: string,
    type?: string | null,
    name: string,
    slug: string,
    order?: number | null,
    unit?: string | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDecorationComponentSubscription = {
  onUpdateDecorationComponent?:  {
    __typename: "DecorationComponent",
    id: string,
    productId: string,
    type?: string | null,
    name: string,
    slug: string,
    order?: number | null,
    unit?: string | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDecorationComponentSubscription = {
  onDeleteDecorationComponent?:  {
    __typename: "DecorationComponent",
    id: string,
    productId: string,
    type?: string | null,
    name: string,
    slug: string,
    order?: number | null,
    unit?: string | null,
    elements?:  Array< {
      __typename: "Element",
      type?: string | null,
      name: string,
      slug: string,
      value?: string | null,
      expr?: string | null,
      description?: string | null,
      overwriteValue?: string | null,
      cutting?: Array< number | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSummarySubscription = {
  onCreateSummary?:  {
    __typename: "Summary",
    id: string,
    projectId: string,
    pricingId?: string | null,
    pricingName?: string | null,
    productId?: string | null,
    quoteLineId?: string | null,
    name: string,
    order: number,
    quantity?: number | null,
    tareWeight?: number | null,
    productLength?: number | null,
    productWidth?: number | null,
    productHeight?: number | null,
    outerLength?: number | null,
    outerWidth?: number | null,
    outerHeight?: number | null,
    unitM3?: number | null,
    unitNW?: number | null,
    unitGrossWeight?: number | null,
    NW?: number | null,
    grossWeight?: number | null,
    m3?: number | null,
    unitPrice?: number | null,
    unit?: string | null,
    autoCalculate?: boolean | null,
    taxType?: string | null,
    overwritten?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSummarySubscription = {
  onUpdateSummary?:  {
    __typename: "Summary",
    id: string,
    projectId: string,
    pricingId?: string | null,
    pricingName?: string | null,
    productId?: string | null,
    quoteLineId?: string | null,
    name: string,
    order: number,
    quantity?: number | null,
    tareWeight?: number | null,
    productLength?: number | null,
    productWidth?: number | null,
    productHeight?: number | null,
    outerLength?: number | null,
    outerWidth?: number | null,
    outerHeight?: number | null,
    unitM3?: number | null,
    unitNW?: number | null,
    unitGrossWeight?: number | null,
    NW?: number | null,
    grossWeight?: number | null,
    m3?: number | null,
    unitPrice?: number | null,
    unit?: string | null,
    autoCalculate?: boolean | null,
    taxType?: string | null,
    overwritten?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSummarySubscription = {
  onDeleteSummary?:  {
    __typename: "Summary",
    id: string,
    projectId: string,
    pricingId?: string | null,
    pricingName?: string | null,
    productId?: string | null,
    quoteLineId?: string | null,
    name: string,
    order: number,
    quantity?: number | null,
    tareWeight?: number | null,
    productLength?: number | null,
    productWidth?: number | null,
    productHeight?: number | null,
    outerLength?: number | null,
    outerWidth?: number | null,
    outerHeight?: number | null,
    unitM3?: number | null,
    unitNW?: number | null,
    unitGrossWeight?: number | null,
    NW?: number | null,
    grossWeight?: number | null,
    m3?: number | null,
    unitPrice?: number | null,
    unit?: string | null,
    autoCalculate?: boolean | null,
    taxType?: string | null,
    overwritten?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateInvoiceSubscription = {
  onCreateInvoice?:  {
    __typename: "Invoice",
    id: string,
    projectId: string,
    accountId: string,
    contactId?: string | null,
    userId: string,
    groupId: string,
    name: string,
    invoiceNo?: string | null,
    issueDate?: string | null,
    billed: boolean,
    billingDate?: string | null,
    taxTotal?: number | null,
    subtotal?: number | null,
    total?: number | null,
    url?: string | null,
    description?: string | null,
    accountName?: string | null,
    billingType?: string | null,
    accountAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    contactName?: string | null,
    contactTitle?: string | null,
    groupName?: string | null,
    logoUrl?: string | null,
    groupBank?:  {
      __typename: "Bank",
      name?: string | null,
      branchName?: string | null,
      branchNumber?: string | null,
      type?: string | null,
      accountNumber?: string | null,
      swiftCode?: string | null,
    } | null,
    groupAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    phone?: string | null,
    fax?: string | null,
    createdAt: string,
    updatedAt: string,
    invoiceLines?:  {
      __typename: "ModelInvoiceLineConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateInvoiceSubscription = {
  onUpdateInvoice?:  {
    __typename: "Invoice",
    id: string,
    projectId: string,
    accountId: string,
    contactId?: string | null,
    userId: string,
    groupId: string,
    name: string,
    invoiceNo?: string | null,
    issueDate?: string | null,
    billed: boolean,
    billingDate?: string | null,
    taxTotal?: number | null,
    subtotal?: number | null,
    total?: number | null,
    url?: string | null,
    description?: string | null,
    accountName?: string | null,
    billingType?: string | null,
    accountAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    contactName?: string | null,
    contactTitle?: string | null,
    groupName?: string | null,
    logoUrl?: string | null,
    groupBank?:  {
      __typename: "Bank",
      name?: string | null,
      branchName?: string | null,
      branchNumber?: string | null,
      type?: string | null,
      accountNumber?: string | null,
      swiftCode?: string | null,
    } | null,
    groupAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    phone?: string | null,
    fax?: string | null,
    createdAt: string,
    updatedAt: string,
    invoiceLines?:  {
      __typename: "ModelInvoiceLineConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteInvoiceSubscription = {
  onDeleteInvoice?:  {
    __typename: "Invoice",
    id: string,
    projectId: string,
    accountId: string,
    contactId?: string | null,
    userId: string,
    groupId: string,
    name: string,
    invoiceNo?: string | null,
    issueDate?: string | null,
    billed: boolean,
    billingDate?: string | null,
    taxTotal?: number | null,
    subtotal?: number | null,
    total?: number | null,
    url?: string | null,
    description?: string | null,
    accountName?: string | null,
    billingType?: string | null,
    accountAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    contactName?: string | null,
    contactTitle?: string | null,
    groupName?: string | null,
    logoUrl?: string | null,
    groupBank?:  {
      __typename: "Bank",
      name?: string | null,
      branchName?: string | null,
      branchNumber?: string | null,
      type?: string | null,
      accountNumber?: string | null,
      swiftCode?: string | null,
    } | null,
    groupAddress?:  {
      __typename: "Address",
      address?: string | null,
      street?: string | null,
      city?: string | null,
      state?: string | null,
      postalCode?: string | null,
      country?: string | null,
    } | null,
    phone?: string | null,
    fax?: string | null,
    createdAt: string,
    updatedAt: string,
    invoiceLines?:  {
      __typename: "ModelInvoiceLineConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateInvoiceLineSubscription = {
  onCreateInvoiceLine?:  {
    __typename: "InvoiceLine",
    id: string,
    invoiceId: string,
    pricingId?: string | null,
    pricingName?: string | null,
    quoteLineId?: string | null,
    name: string,
    shippingDate?: string | null,
    salesType?: string | null,
    order: number,
    m3?: number | null,
    grossWeight?: number | null,
    quantity?: number | null,
    amount?: number | null,
    minimumAmount?: number | null,
    actualAmount?: number | null,
    unit?: string | null,
    unitPrice?: number | null,
    taxRate?: number | null,
    taxTotal?: number | null,
    subtotal?: number | null,
    total?: number | null,
    taxType?: string | null,
    synced?: boolean | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInvoiceLineSubscription = {
  onUpdateInvoiceLine?:  {
    __typename: "InvoiceLine",
    id: string,
    invoiceId: string,
    pricingId?: string | null,
    pricingName?: string | null,
    quoteLineId?: string | null,
    name: string,
    shippingDate?: string | null,
    salesType?: string | null,
    order: number,
    m3?: number | null,
    grossWeight?: number | null,
    quantity?: number | null,
    amount?: number | null,
    minimumAmount?: number | null,
    actualAmount?: number | null,
    unit?: string | null,
    unitPrice?: number | null,
    taxRate?: number | null,
    taxTotal?: number | null,
    subtotal?: number | null,
    total?: number | null,
    taxType?: string | null,
    synced?: boolean | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInvoiceLineSubscription = {
  onDeleteInvoiceLine?:  {
    __typename: "InvoiceLine",
    id: string,
    invoiceId: string,
    pricingId?: string | null,
    pricingName?: string | null,
    quoteLineId?: string | null,
    name: string,
    shippingDate?: string | null,
    salesType?: string | null,
    order: number,
    m3?: number | null,
    grossWeight?: number | null,
    quantity?: number | null,
    amount?: number | null,
    minimumAmount?: number | null,
    actualAmount?: number | null,
    unit?: string | null,
    unitPrice?: number | null,
    taxRate?: number | null,
    taxTotal?: number | null,
    subtotal?: number | null,
    total?: number | null,
    taxType?: string | null,
    synced?: boolean | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSyncLogSubscription = {
  onCreateSyncLog?:  {
    __typename: "SyncLog",
    id: string,
    status: string,
    numberOfNewRecords?: number | null,
    numberOfDeletedRecords?: number | null,
    numberOfUpdatedRecords?: number | null,
    message?: string | null,
    sFObjectId: string,
    createdAt: string,
    updatedAt: string,
    sFObject?:  {
      __typename: "SFObject",
      id: string,
      name: string,
      tenantId: string,
      label?: string | null,
      sfObjectName?: string | null,
      editable: boolean,
      condition?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateSyncLogSubscription = {
  onUpdateSyncLog?:  {
    __typename: "SyncLog",
    id: string,
    status: string,
    numberOfNewRecords?: number | null,
    numberOfDeletedRecords?: number | null,
    numberOfUpdatedRecords?: number | null,
    message?: string | null,
    sFObjectId: string,
    createdAt: string,
    updatedAt: string,
    sFObject?:  {
      __typename: "SFObject",
      id: string,
      name: string,
      tenantId: string,
      label?: string | null,
      sfObjectName?: string | null,
      editable: boolean,
      condition?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteSyncLogSubscription = {
  onDeleteSyncLog?:  {
    __typename: "SyncLog",
    id: string,
    status: string,
    numberOfNewRecords?: number | null,
    numberOfDeletedRecords?: number | null,
    numberOfUpdatedRecords?: number | null,
    message?: string | null,
    sFObjectId: string,
    createdAt: string,
    updatedAt: string,
    sFObject?:  {
      __typename: "SFObject",
      id: string,
      name: string,
      tenantId: string,
      label?: string | null,
      sfObjectName?: string | null,
      editable: boolean,
      condition?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};
