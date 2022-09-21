/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const testSync = /* GraphQL */ `
  query TestSync($input: SalesForceInput!) {
    testSync(input: $input)
  }
`;
export const listSFObjectNames = /* GraphQL */ `
  query ListSFObjectNames($input: ListSFObjectNamesInput!) {
    listSFObjectNames(input: $input) {
      sfObjectName
      sfObjectLabel
    }
  }
`;
export const listSFFieldsBySFObject = /* GraphQL */ `
  query ListSFFieldsBySFObject($input: ListSFFieldsBySFObjectInput!) {
    listSFFieldsBySFObject(input: $input) {
      sfFieldName
      sfFieldLabel
      sfFieldType
    }
  }
`;
export const groupsByUserId = /* GraphQL */ `
  query GroupsByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUsersGroupsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        groupId
        role
        createdAt
        updatedAt
        user {
          id
          name
          firstName
          lastName
          email
          showTutorial
          invited
          verified
          fontSize
          language
          receiveEmailNotification
          theme
          useMfa
          customId
          tenantId
          isAdmin
          createdAt
          updatedAt
          tenant {
            id
            name
            logoUrl
            address
            phone
            syncSFObject
            sfLoginUrl
            sfUsername
            sfPassword
            sfSecretToken
            createdAt
            updatedAt
          }
          accessLogs {
            nextToken
          }
          groups {
            nextToken
          }
        }
        group {
          id
          name
          phone
          fax
          email
          logoUrl
          groupAddress {
            address
            street
            city
            state
            postalCode
            country
          }
          quoteInfo {
            greeting
            paymentMethod
            destination
            dueDate
            expiryDate
            description
          }
          bank {
            name
            branchName
            branchNumber
            type
            accountNumber
            swiftCode
          }
          taxRate
          maxInventoryM3
          heatTreatmentRequestCode
          packingMaterialProducerRegistrationNumber
          tenantId
          createdAt
          updatedAt
          tenant {
            id
            name
            logoUrl
            address
            phone
            syncSFObject
            sfLoginUrl
            sfUsername
            sfPassword
            sfSecretToken
            createdAt
            updatedAt
          }
          users {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const usersByGroupId = /* GraphQL */ `
  query UsersByGroupId(
    $groupId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUsersGroupsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByGroupId(
      groupId: $groupId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        groupId
        role
        createdAt
        updatedAt
        user {
          id
          name
          firstName
          lastName
          email
          showTutorial
          invited
          verified
          fontSize
          language
          receiveEmailNotification
          theme
          useMfa
          customId
          tenantId
          isAdmin
          createdAt
          updatedAt
          tenant {
            id
            name
            logoUrl
            address
            phone
            syncSFObject
            sfLoginUrl
            sfUsername
            sfPassword
            sfSecretToken
            createdAt
            updatedAt
          }
          accessLogs {
            nextToken
          }
          groups {
            nextToken
          }
        }
        group {
          id
          name
          phone
          fax
          email
          logoUrl
          groupAddress {
            address
            street
            city
            state
            postalCode
            country
          }
          quoteInfo {
            greeting
            paymentMethod
            destination
            dueDate
            expiryDate
            description
          }
          bank {
            name
            branchName
            branchNumber
            type
            accountNumber
            swiftCode
          }
          taxRate
          maxInventoryM3
          heatTreatmentRequestCode
          packingMaterialProducerRegistrationNumber
          tenantId
          createdAt
          updatedAt
          tenant {
            id
            name
            logoUrl
            address
            phone
            syncSFObject
            sfLoginUrl
            sfUsername
            sfPassword
            sfSecretToken
            createdAt
            updatedAt
          }
          users {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const materialsByVendorId = /* GraphQL */ `
  query MaterialsByVendorId(
    $vendorId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelVendorsMaterialsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    materialsByVendorId(
      vendorId: $vendorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        vendorId
        materialId
        createdAt
        updatedAt
        vendor {
          id
          name
          tenantId
          abbreviation
          site
          disinfectantCertificationCode
          billingAddress
          billingPostalCode
          billingCountry
          billingState
          billingStreet
          billingType
          phone
          fax
          customCode
          createdAt
          updatedAt
          materials {
            nextToken
          }
          purchasings {
            nextToken
          }
        }
        material {
          id
          groupId
          materialTypeId
          name
          purchaseUnit
          lossRate
          weight
          costCalculation
          defaultUnitCost
          unit
          length
          lengthApplicable
          lengthLocked
          lengthNominal
          width
          widthApplicable
          widthLocked
          widthNominal
          height
          heightApplicable
          heightLocked
          heightNominal
          createdAt
          updatedAt
          vendors {
            nextToken
          }
          materialType {
            id
            groupId
            name
            description
            type
            createdAt
            updatedAt
          }
          purchasings {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const vendorsByMaterialId = /* GraphQL */ `
  query VendorsByMaterialId(
    $materialId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelVendorsMaterialsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    vendorsByMaterialId(
      materialId: $materialId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        vendorId
        materialId
        createdAt
        updatedAt
        vendor {
          id
          name
          tenantId
          abbreviation
          site
          disinfectantCertificationCode
          billingAddress
          billingPostalCode
          billingCountry
          billingState
          billingStreet
          billingType
          phone
          fax
          customCode
          createdAt
          updatedAt
          materials {
            nextToken
          }
          purchasings {
            nextToken
          }
        }
        material {
          id
          groupId
          materialTypeId
          name
          purchaseUnit
          lossRate
          weight
          costCalculation
          defaultUnitCost
          unit
          length
          lengthApplicable
          lengthLocked
          lengthNominal
          width
          widthApplicable
          widthLocked
          widthNominal
          height
          heightApplicable
          heightLocked
          heightNominal
          createdAt
          updatedAt
          vendors {
            nextToken
          }
          materialType {
            id
            groupId
            name
            description
            type
            createdAt
            updatedAt
          }
          purchasings {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getMetaTable = /* GraphQL */ `
  query GetMetaTable($id: ID!) {
    getMetaTable(id: $id) {
      id
      name
      label
      fields {
        name
        label
        type
        required
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMetaTables = /* GraphQL */ `
  query ListMetaTables(
    $filter: ModelMetaTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMetaTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        label
        fields {
          name
          label
          type
          required
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const metaTableByName = /* GraphQL */ `
  query MetaTableByName(
    $name: String
    $sortDirection: ModelSortDirection
    $filter: ModelMetaTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    metaTableByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        label
        fields {
          name
          label
          type
          required
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTenant = /* GraphQL */ `
  query GetTenant($id: ID!) {
    getTenant(id: $id) {
      id
      name
      logoUrl
      address
      phone
      syncSFObject
      sfLoginUrl
      sfUsername
      sfPassword
      sfSecretToken
      projectFilters {
        name
        duration
        sort
        showProcesses
        showUnits
        showPhases
      }
      createdAt
      updatedAt
      accounts {
        items {
          id
          tenantId
          name
          abbreviation
          site
          billingAddress
          billingStreet
          billingCity
          billingState
          billingPostalCode
          billingCountry
          billingType
          fax
          phone
          customeCode
          cutoffDateText
          cutoffDateNumber
          paymentMonthText
          paymentMonthNumber
          paymentDateText
          paymentDateNumber
          invoiceUnit
          invoiceMethod
          createdAt
          updatedAt
          contacts {
            nextToken
          }
        }
        nextToken
      }
      contacts {
        items {
          id
          accountId
          tenantId
          name
          firstName
          lastName
          suffix
          email
          phone
          mobilePhone
          title
          retired
          customeCode
          description
          createdAt
          updatedAt
          account {
            id
            tenantId
            name
            abbreviation
            site
            billingAddress
            billingStreet
            billingCity
            billingState
            billingPostalCode
            billingCountry
            billingType
            fax
            phone
            customeCode
            cutoffDateText
            cutoffDateNumber
            paymentMonthText
            paymentMonthNumber
            paymentDateText
            paymentDateNumber
            invoiceUnit
            invoiceMethod
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      users {
        items {
          id
          name
          firstName
          lastName
          email
          showTutorial
          invited
          verified
          fontSize
          language
          receiveEmailNotification
          theme
          useMfa
          customId
          tenantId
          isAdmin
          createdAt
          updatedAt
          tenant {
            id
            name
            logoUrl
            address
            phone
            syncSFObject
            sfLoginUrl
            sfUsername
            sfPassword
            sfSecretToken
            createdAt
            updatedAt
          }
          accessLogs {
            nextToken
          }
          groups {
            nextToken
          }
        }
        nextToken
      }
      groups {
        items {
          id
          name
          phone
          fax
          email
          logoUrl
          groupAddress {
            address
            street
            city
            state
            postalCode
            country
          }
          quoteInfo {
            greeting
            paymentMethod
            destination
            dueDate
            expiryDate
            description
          }
          bank {
            name
            branchName
            branchNumber
            type
            accountNumber
            swiftCode
          }
          taxRate
          maxInventoryM3
          heatTreatmentRequestCode
          packingMaterialProducerRegistrationNumber
          tenantId
          createdAt
          updatedAt
          tenant {
            id
            name
            logoUrl
            address
            phone
            syncSFObject
            sfLoginUrl
            sfUsername
            sfPassword
            sfSecretToken
            createdAt
            updatedAt
          }
          users {
            nextToken
          }
        }
        nextToken
      }
      sfObjects {
        items {
          id
          name
          tenantId
          label
          sfObjectName
          editable
          condition
          fields {
            name
            label
            apiName
            type
            required
          }
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listTenants = /* GraphQL */ `
  query ListTenants(
    $filter: ModelTenantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTenants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        logoUrl
        address
        phone
        syncSFObject
        sfLoginUrl
        sfUsername
        sfPassword
        sfSecretToken
        projectFilters {
          name
          duration
          sort
          showProcesses
          showUnits
          showPhases
        }
        createdAt
        updatedAt
        accounts {
          items {
            id
            tenantId
            name
            abbreviation
            site
            billingAddress
            billingStreet
            billingCity
            billingState
            billingPostalCode
            billingCountry
            billingType
            fax
            phone
            customeCode
            cutoffDateText
            cutoffDateNumber
            paymentMonthText
            paymentMonthNumber
            paymentDateText
            paymentDateNumber
            invoiceUnit
            invoiceMethod
            createdAt
            updatedAt
          }
          nextToken
        }
        contacts {
          items {
            id
            accountId
            tenantId
            name
            firstName
            lastName
            suffix
            email
            phone
            mobilePhone
            title
            retired
            customeCode
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        users {
          items {
            id
            name
            firstName
            lastName
            email
            showTutorial
            invited
            verified
            fontSize
            language
            receiveEmailNotification
            theme
            useMfa
            customId
            tenantId
            isAdmin
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            name
            phone
            fax
            email
            logoUrl
            taxRate
            maxInventoryM3
            heatTreatmentRequestCode
            packingMaterialProducerRegistrationNumber
            tenantId
            createdAt
            updatedAt
          }
          nextToken
        }
        sfObjects {
          items {
            id
            name
            tenantId
            label
            sfObjectName
            editable
            condition
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      tenantId
      name
      abbreviation
      site
      billingAddress
      billingStreet
      billingCity
      billingState
      billingPostalCode
      billingCountry
      billingType
      fax
      phone
      customeCode
      cutoffDateText
      cutoffDateNumber
      paymentMonthText
      paymentMonthNumber
      paymentDateText
      paymentDateNumber
      invoiceUnit
      invoiceMethod
      createdAt
      updatedAt
      contacts {
        items {
          id
          accountId
          tenantId
          name
          firstName
          lastName
          suffix
          email
          phone
          mobilePhone
          title
          retired
          customeCode
          description
          createdAt
          updatedAt
          account {
            id
            tenantId
            name
            abbreviation
            site
            billingAddress
            billingStreet
            billingCity
            billingState
            billingPostalCode
            billingCountry
            billingType
            fax
            phone
            customeCode
            cutoffDateText
            cutoffDateNumber
            paymentMonthText
            paymentMonthNumber
            paymentDateText
            paymentDateNumber
            invoiceUnit
            invoiceMethod
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tenantId
        name
        abbreviation
        site
        billingAddress
        billingStreet
        billingCity
        billingState
        billingPostalCode
        billingCountry
        billingType
        fax
        phone
        customeCode
        cutoffDateText
        cutoffDateNumber
        paymentMonthText
        paymentMonthNumber
        paymentDateText
        paymentDateNumber
        invoiceUnit
        invoiceMethod
        createdAt
        updatedAt
        contacts {
          items {
            id
            accountId
            tenantId
            name
            firstName
            lastName
            suffix
            email
            phone
            mobilePhone
            title
            retired
            customeCode
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const accountsByTenantId = /* GraphQL */ `
  query AccountsByTenantId(
    $tenantId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    accountsByTenantId(
      tenantId: $tenantId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenantId
        name
        abbreviation
        site
        billingAddress
        billingStreet
        billingCity
        billingState
        billingPostalCode
        billingCountry
        billingType
        fax
        phone
        customeCode
        cutoffDateText
        cutoffDateNumber
        paymentMonthText
        paymentMonthNumber
        paymentDateText
        paymentDateNumber
        invoiceUnit
        invoiceMethod
        createdAt
        updatedAt
        contacts {
          items {
            id
            accountId
            tenantId
            name
            firstName
            lastName
            suffix
            email
            phone
            mobilePhone
            title
            retired
            customeCode
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      accountId
      name
      abbreviation
      site
      billingAddress
      billingStreet
      billingCity
      billingState
      billingPostalCode
      billingCountry
      billingType
      phone
      fax
      customeCode
      createdAt
      updatedAt
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        accountId
        name
        abbreviation
        site
        billingAddress
        billingStreet
        billingCity
        billingState
        billingPostalCode
        billingCountry
        billingType
        phone
        fax
        customeCode
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const clientsByAccountId = /* GraphQL */ `
  query ClientsByAccountId(
    $accountId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    clientsByAccountId(
      accountId: $accountId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        accountId
        name
        abbreviation
        site
        billingAddress
        billingStreet
        billingCity
        billingState
        billingPostalCode
        billingCountry
        billingType
        phone
        fax
        customeCode
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
      id
      accountId
      tenantId
      name
      firstName
      lastName
      suffix
      email
      phone
      mobilePhone
      title
      retired
      customeCode
      description
      createdAt
      updatedAt
      account {
        id
        tenantId
        name
        abbreviation
        site
        billingAddress
        billingStreet
        billingCity
        billingState
        billingPostalCode
        billingCountry
        billingType
        fax
        phone
        customeCode
        cutoffDateText
        cutoffDateNumber
        paymentMonthText
        paymentMonthNumber
        paymentDateText
        paymentDateNumber
        invoiceUnit
        invoiceMethod
        createdAt
        updatedAt
        contacts {
          items {
            id
            accountId
            tenantId
            name
            firstName
            lastName
            suffix
            email
            phone
            mobilePhone
            title
            retired
            customeCode
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        accountId
        tenantId
        name
        firstName
        lastName
        suffix
        email
        phone
        mobilePhone
        title
        retired
        customeCode
        description
        createdAt
        updatedAt
        account {
          id
          tenantId
          name
          abbreviation
          site
          billingAddress
          billingStreet
          billingCity
          billingState
          billingPostalCode
          billingCountry
          billingType
          fax
          phone
          customeCode
          cutoffDateText
          cutoffDateNumber
          paymentMonthText
          paymentMonthNumber
          paymentDateText
          paymentDateNumber
          invoiceUnit
          invoiceMethod
          createdAt
          updatedAt
          contacts {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const contactsByAccountId = /* GraphQL */ `
  query ContactsByAccountId(
    $accountId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contactsByAccountId(
      accountId: $accountId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        accountId
        tenantId
        name
        firstName
        lastName
        suffix
        email
        phone
        mobilePhone
        title
        retired
        customeCode
        description
        createdAt
        updatedAt
        account {
          id
          tenantId
          name
          abbreviation
          site
          billingAddress
          billingStreet
          billingCity
          billingState
          billingPostalCode
          billingCountry
          billingType
          fax
          phone
          customeCode
          cutoffDateText
          cutoffDateNumber
          paymentMonthText
          paymentMonthNumber
          paymentDateText
          paymentDateNumber
          invoiceUnit
          invoiceMethod
          createdAt
          updatedAt
          contacts {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const contactsByTenantId = /* GraphQL */ `
  query ContactsByTenantId(
    $tenantId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contactsByTenantId(
      tenantId: $tenantId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        accountId
        tenantId
        name
        firstName
        lastName
        suffix
        email
        phone
        mobilePhone
        title
        retired
        customeCode
        description
        createdAt
        updatedAt
        account {
          id
          tenantId
          name
          abbreviation
          site
          billingAddress
          billingStreet
          billingCity
          billingState
          billingPostalCode
          billingCountry
          billingType
          fax
          phone
          customeCode
          cutoffDateText
          cutoffDateNumber
          paymentMonthText
          paymentMonthNumber
          paymentDateText
          paymentDateNumber
          invoiceUnit
          invoiceMethod
          createdAt
          updatedAt
          contacts {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getUnit = /* GraphQL */ `
  query GetUnit($id: ID!) {
    getUnit(id: $id) {
      id
      name
      tenantId
      createdAt
      updatedAt
      tenant {
        id
        name
        logoUrl
        address
        phone
        syncSFObject
        sfLoginUrl
        sfUsername
        sfPassword
        sfSecretToken
        projectFilters {
          name
          duration
          sort
          showProcesses
          showUnits
          showPhases
        }
        createdAt
        updatedAt
        accounts {
          items {
            id
            tenantId
            name
            abbreviation
            site
            billingAddress
            billingStreet
            billingCity
            billingState
            billingPostalCode
            billingCountry
            billingType
            fax
            phone
            customeCode
            cutoffDateText
            cutoffDateNumber
            paymentMonthText
            paymentMonthNumber
            paymentDateText
            paymentDateNumber
            invoiceUnit
            invoiceMethod
            createdAt
            updatedAt
          }
          nextToken
        }
        contacts {
          items {
            id
            accountId
            tenantId
            name
            firstName
            lastName
            suffix
            email
            phone
            mobilePhone
            title
            retired
            customeCode
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        users {
          items {
            id
            name
            firstName
            lastName
            email
            showTutorial
            invited
            verified
            fontSize
            language
            receiveEmailNotification
            theme
            useMfa
            customId
            tenantId
            isAdmin
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            name
            phone
            fax
            email
            logoUrl
            taxRate
            maxInventoryM3
            heatTreatmentRequestCode
            packingMaterialProducerRegistrationNumber
            tenantId
            createdAt
            updatedAt
          }
          nextToken
        }
        sfObjects {
          items {
            id
            name
            tenantId
            label
            sfObjectName
            editable
            condition
            createdAt
            updatedAt
          }
          nextToken
        }
      }
    }
  }
`;
export const listUnits = /* GraphQL */ `
  query ListUnits(
    $filter: ModelUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        tenantId
        createdAt
        updatedAt
        tenant {
          id
          name
          logoUrl
          address
          phone
          syncSFObject
          sfLoginUrl
          sfUsername
          sfPassword
          sfSecretToken
          projectFilters {
            name
            duration
            sort
            showProcesses
            showUnits
            showPhases
          }
          createdAt
          updatedAt
          accounts {
            nextToken
          }
          contacts {
            nextToken
          }
          users {
            nextToken
          }
          groups {
            nextToken
          }
          sfObjects {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const unitsByTenantId = /* GraphQL */ `
  query UnitsByTenantId(
    $tenantId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    unitsByTenantId(
      tenantId: $tenantId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        tenantId
        createdAt
        updatedAt
        tenant {
          id
          name
          logoUrl
          address
          phone
          syncSFObject
          sfLoginUrl
          sfUsername
          sfPassword
          sfSecretToken
          projectFilters {
            name
            duration
            sort
            showProcesses
            showUnits
            showPhases
          }
          createdAt
          updatedAt
          accounts {
            nextToken
          }
          contacts {
            nextToken
          }
          users {
            nextToken
          }
          groups {
            nextToken
          }
          sfObjects {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getAccessLog = /* GraphQL */ `
  query GetAccessLog($id: ID!) {
    getAccessLog(id: $id) {
      id
      device
      ipAddress
      description
      userId
      createdAt
      updatedAt
      user {
        id
        name
        firstName
        lastName
        email
        showTutorial
        invited
        verified
        fontSize
        language
        receiveEmailNotification
        theme
        useMfa
        customId
        configuration {
          projectFilter {
            name
            duration
            sort
            showProcesses
            showUnits
            showPhases
          }
        }
        tenantId
        isAdmin
        createdAt
        updatedAt
        tenant {
          id
          name
          logoUrl
          address
          phone
          syncSFObject
          sfLoginUrl
          sfUsername
          sfPassword
          sfSecretToken
          projectFilters {
            name
            duration
            sort
            showProcesses
            showUnits
            showPhases
          }
          createdAt
          updatedAt
          accounts {
            nextToken
          }
          contacts {
            nextToken
          }
          users {
            nextToken
          }
          groups {
            nextToken
          }
          sfObjects {
            nextToken
          }
        }
        accessLogs {
          items {
            id
            device
            ipAddress
            description
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userId
            groupId
            role
            createdAt
            updatedAt
          }
          nextToken
        }
      }
    }
  }
`;
export const listAccessLogs = /* GraphQL */ `
  query ListAccessLogs(
    $filter: ModelAccessLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccessLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        device
        ipAddress
        description
        userId
        createdAt
        updatedAt
        user {
          id
          name
          firstName
          lastName
          email
          showTutorial
          invited
          verified
          fontSize
          language
          receiveEmailNotification
          theme
          useMfa
          customId
          tenantId
          isAdmin
          createdAt
          updatedAt
          tenant {
            id
            name
            logoUrl
            address
            phone
            syncSFObject
            sfLoginUrl
            sfUsername
            sfPassword
            sfSecretToken
            createdAt
            updatedAt
          }
          accessLogs {
            nextToken
          }
          groups {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const accessLogsByUserId = /* GraphQL */ `
  query AccessLogsByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelAccessLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    accessLogsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        device
        ipAddress
        description
        userId
        createdAt
        updatedAt
        user {
          id
          name
          firstName
          lastName
          email
          showTutorial
          invited
          verified
          fontSize
          language
          receiveEmailNotification
          theme
          useMfa
          customId
          tenantId
          isAdmin
          createdAt
          updatedAt
          tenant {
            id
            name
            logoUrl
            address
            phone
            syncSFObject
            sfLoginUrl
            sfUsername
            sfPassword
            sfSecretToken
            createdAt
            updatedAt
          }
          accessLogs {
            nextToken
          }
          groups {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      firstName
      lastName
      email
      showTutorial
      invited
      verified
      fontSize
      language
      receiveEmailNotification
      theme
      useMfa
      customId
      configuration {
        projectFilter {
          name
          duration
          sort
          showProcesses
          showUnits
          showPhases
        }
      }
      tenantId
      isAdmin
      createdAt
      updatedAt
      tenant {
        id
        name
        logoUrl
        address
        phone
        syncSFObject
        sfLoginUrl
        sfUsername
        sfPassword
        sfSecretToken
        projectFilters {
          name
          duration
          sort
          showProcesses
          showUnits
          showPhases
        }
        createdAt
        updatedAt
        accounts {
          items {
            id
            tenantId
            name
            abbreviation
            site
            billingAddress
            billingStreet
            billingCity
            billingState
            billingPostalCode
            billingCountry
            billingType
            fax
            phone
            customeCode
            cutoffDateText
            cutoffDateNumber
            paymentMonthText
            paymentMonthNumber
            paymentDateText
            paymentDateNumber
            invoiceUnit
            invoiceMethod
            createdAt
            updatedAt
          }
          nextToken
        }
        contacts {
          items {
            id
            accountId
            tenantId
            name
            firstName
            lastName
            suffix
            email
            phone
            mobilePhone
            title
            retired
            customeCode
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        users {
          items {
            id
            name
            firstName
            lastName
            email
            showTutorial
            invited
            verified
            fontSize
            language
            receiveEmailNotification
            theme
            useMfa
            customId
            tenantId
            isAdmin
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            name
            phone
            fax
            email
            logoUrl
            taxRate
            maxInventoryM3
            heatTreatmentRequestCode
            packingMaterialProducerRegistrationNumber
            tenantId
            createdAt
            updatedAt
          }
          nextToken
        }
        sfObjects {
          items {
            id
            name
            tenantId
            label
            sfObjectName
            editable
            condition
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      accessLogs {
        items {
          id
          device
          ipAddress
          description
          userId
          createdAt
          updatedAt
          user {
            id
            name
            firstName
            lastName
            email
            showTutorial
            invited
            verified
            fontSize
            language
            receiveEmailNotification
            theme
            useMfa
            customId
            tenantId
            isAdmin
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      groups {
        items {
          id
          userId
          groupId
          role
          createdAt
          updatedAt
          user {
            id
            name
            firstName
            lastName
            email
            showTutorial
            invited
            verified
            fontSize
            language
            receiveEmailNotification
            theme
            useMfa
            customId
            tenantId
            isAdmin
            createdAt
            updatedAt
          }
          group {
            id
            name
            phone
            fax
            email
            logoUrl
            taxRate
            maxInventoryM3
            heatTreatmentRequestCode
            packingMaterialProducerRegistrationNumber
            tenantId
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        firstName
        lastName
        email
        showTutorial
        invited
        verified
        fontSize
        language
        receiveEmailNotification
        theme
        useMfa
        customId
        configuration {
          projectFilter {
            name
            duration
            sort
            showProcesses
            showUnits
            showPhases
          }
        }
        tenantId
        isAdmin
        createdAt
        updatedAt
        tenant {
          id
          name
          logoUrl
          address
          phone
          syncSFObject
          sfLoginUrl
          sfUsername
          sfPassword
          sfSecretToken
          projectFilters {
            name
            duration
            sort
            showProcesses
            showUnits
            showPhases
          }
          createdAt
          updatedAt
          accounts {
            nextToken
          }
          contacts {
            nextToken
          }
          users {
            nextToken
          }
          groups {
            nextToken
          }
          sfObjects {
            nextToken
          }
        }
        accessLogs {
          items {
            id
            device
            ipAddress
            description
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userId
            groupId
            role
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const usersByTenantId = /* GraphQL */ `
  query UsersByTenantId(
    $tenantId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByTenantId(
      tenantId: $tenantId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        firstName
        lastName
        email
        showTutorial
        invited
        verified
        fontSize
        language
        receiveEmailNotification
        theme
        useMfa
        customId
        configuration {
          projectFilter {
            name
            duration
            sort
            showProcesses
            showUnits
            showPhases
          }
        }
        tenantId
        isAdmin
        createdAt
        updatedAt
        tenant {
          id
          name
          logoUrl
          address
          phone
          syncSFObject
          sfLoginUrl
          sfUsername
          sfPassword
          sfSecretToken
          projectFilters {
            name
            duration
            sort
            showProcesses
            showUnits
            showPhases
          }
          createdAt
          updatedAt
          accounts {
            nextToken
          }
          contacts {
            nextToken
          }
          users {
            nextToken
          }
          groups {
            nextToken
          }
          sfObjects {
            nextToken
          }
        }
        accessLogs {
          items {
            id
            device
            ipAddress
            description
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userId
            groupId
            role
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      name
      phone
      fax
      email
      logoUrl
      groupAddress {
        address
        street
        city
        state
        postalCode
        country
      }
      quoteInfo {
        greeting
        paymentMethod
        destination
        dueDate
        expiryDate
        description
      }
      bank {
        name
        branchName
        branchNumber
        type
        accountNumber
        swiftCode
      }
      taxRate
      maxInventoryM3
      heatTreatmentRequestCode
      packingMaterialProducerRegistrationNumber
      tenantId
      createdAt
      updatedAt
      tenant {
        id
        name
        logoUrl
        address
        phone
        syncSFObject
        sfLoginUrl
        sfUsername
        sfPassword
        sfSecretToken
        projectFilters {
          name
          duration
          sort
          showProcesses
          showUnits
          showPhases
        }
        createdAt
        updatedAt
        accounts {
          items {
            id
            tenantId
            name
            abbreviation
            site
            billingAddress
            billingStreet
            billingCity
            billingState
            billingPostalCode
            billingCountry
            billingType
            fax
            phone
            customeCode
            cutoffDateText
            cutoffDateNumber
            paymentMonthText
            paymentMonthNumber
            paymentDateText
            paymentDateNumber
            invoiceUnit
            invoiceMethod
            createdAt
            updatedAt
          }
          nextToken
        }
        contacts {
          items {
            id
            accountId
            tenantId
            name
            firstName
            lastName
            suffix
            email
            phone
            mobilePhone
            title
            retired
            customeCode
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        users {
          items {
            id
            name
            firstName
            lastName
            email
            showTutorial
            invited
            verified
            fontSize
            language
            receiveEmailNotification
            theme
            useMfa
            customId
            tenantId
            isAdmin
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            name
            phone
            fax
            email
            logoUrl
            taxRate
            maxInventoryM3
            heatTreatmentRequestCode
            packingMaterialProducerRegistrationNumber
            tenantId
            createdAt
            updatedAt
          }
          nextToken
        }
        sfObjects {
          items {
            id
            name
            tenantId
            label
            sfObjectName
            editable
            condition
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      users {
        items {
          id
          userId
          groupId
          role
          createdAt
          updatedAt
          user {
            id
            name
            firstName
            lastName
            email
            showTutorial
            invited
            verified
            fontSize
            language
            receiveEmailNotification
            theme
            useMfa
            customId
            tenantId
            isAdmin
            createdAt
            updatedAt
          }
          group {
            id
            name
            phone
            fax
            email
            logoUrl
            taxRate
            maxInventoryM3
            heatTreatmentRequestCode
            packingMaterialProducerRegistrationNumber
            tenantId
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        fax
        email
        logoUrl
        groupAddress {
          address
          street
          city
          state
          postalCode
          country
        }
        quoteInfo {
          greeting
          paymentMethod
          destination
          dueDate
          expiryDate
          description
        }
        bank {
          name
          branchName
          branchNumber
          type
          accountNumber
          swiftCode
        }
        taxRate
        maxInventoryM3
        heatTreatmentRequestCode
        packingMaterialProducerRegistrationNumber
        tenantId
        createdAt
        updatedAt
        tenant {
          id
          name
          logoUrl
          address
          phone
          syncSFObject
          sfLoginUrl
          sfUsername
          sfPassword
          sfSecretToken
          projectFilters {
            name
            duration
            sort
            showProcesses
            showUnits
            showPhases
          }
          createdAt
          updatedAt
          accounts {
            nextToken
          }
          contacts {
            nextToken
          }
          users {
            nextToken
          }
          groups {
            nextToken
          }
          sfObjects {
            nextToken
          }
        }
        users {
          items {
            id
            userId
            groupId
            role
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const groupsByTenantId = /* GraphQL */ `
  query GroupsByTenantId(
    $tenantId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupsByTenantId(
      tenantId: $tenantId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        phone
        fax
        email
        logoUrl
        groupAddress {
          address
          street
          city
          state
          postalCode
          country
        }
        quoteInfo {
          greeting
          paymentMethod
          destination
          dueDate
          expiryDate
          description
        }
        bank {
          name
          branchName
          branchNumber
          type
          accountNumber
          swiftCode
        }
        taxRate
        maxInventoryM3
        heatTreatmentRequestCode
        packingMaterialProducerRegistrationNumber
        tenantId
        createdAt
        updatedAt
        tenant {
          id
          name
          logoUrl
          address
          phone
          syncSFObject
          sfLoginUrl
          sfUsername
          sfPassword
          sfSecretToken
          projectFilters {
            name
            duration
            sort
            showProcesses
            showUnits
            showPhases
          }
          createdAt
          updatedAt
          accounts {
            nextToken
          }
          contacts {
            nextToken
          }
          users {
            nextToken
          }
          groups {
            nextToken
          }
          sfObjects {
            nextToken
          }
        }
        users {
          items {
            id
            userId
            groupId
            role
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getSFObject = /* GraphQL */ `
  query GetSFObject($id: ID!) {
    getSFObject(id: $id) {
      id
      name
      tenantId
      label
      sfObjectName
      editable
      condition
      fields {
        name
        label
        apiName
        type
        required
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSFObjects = /* GraphQL */ `
  query ListSFObjects(
    $filter: ModelSFObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSFObjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        tenantId
        label
        sfObjectName
        editable
        condition
        fields {
          name
          label
          apiName
          type
          required
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const sFObjectsByTenantId = /* GraphQL */ `
  query SFObjectsByTenantId(
    $tenantId: ID
    $sfObjectName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSFObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sFObjectsByTenantId(
      tenantId: $tenantId
      sfObjectName: $sfObjectName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        tenantId
        label
        sfObjectName
        editable
        condition
        fields {
          name
          label
          apiName
          type
          required
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVendor = /* GraphQL */ `
  query GetVendor($id: ID!) {
    getVendor(id: $id) {
      id
      name
      tenantId
      abbreviation
      site
      disinfectantCertificationCode
      billingAddress
      billingPostalCode
      billingCountry
      billingState
      billingStreet
      billingType
      phone
      fax
      customCode
      createdAt
      updatedAt
      materials {
        items {
          id
          vendorId
          materialId
          createdAt
          updatedAt
          vendor {
            id
            name
            tenantId
            abbreviation
            site
            disinfectantCertificationCode
            billingAddress
            billingPostalCode
            billingCountry
            billingState
            billingStreet
            billingType
            phone
            fax
            customCode
            createdAt
            updatedAt
          }
          material {
            id
            groupId
            materialTypeId
            name
            purchaseUnit
            lossRate
            weight
            costCalculation
            defaultUnitCost
            unit
            length
            lengthApplicable
            lengthLocked
            lengthNominal
            width
            widthApplicable
            widthLocked
            widthNominal
            height
            heightApplicable
            heightLocked
            heightNominal
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      purchasings {
        items {
          id
          groupId
          vendorId
          materialId
          purchasingDate
          startDate
          unitPurchasingCost
          purchaseUnit
          quantity
          totalCost
          unitCost
          costUnit
          customFields {
            label
            value
          }
          note
          createdAt
          updatedAt
          vendor {
            id
            name
            tenantId
            abbreviation
            site
            disinfectantCertificationCode
            billingAddress
            billingPostalCode
            billingCountry
            billingState
            billingStreet
            billingType
            phone
            fax
            customCode
            createdAt
            updatedAt
          }
          material {
            id
            groupId
            materialTypeId
            name
            purchaseUnit
            lossRate
            weight
            costCalculation
            defaultUnitCost
            unit
            length
            lengthApplicable
            lengthLocked
            lengthNominal
            width
            widthApplicable
            widthLocked
            widthNominal
            height
            heightApplicable
            heightLocked
            heightNominal
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const listVendors = /* GraphQL */ `
  query ListVendors(
    $filter: ModelVendorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        tenantId
        abbreviation
        site
        disinfectantCertificationCode
        billingAddress
        billingPostalCode
        billingCountry
        billingState
        billingStreet
        billingType
        phone
        fax
        customCode
        createdAt
        updatedAt
        materials {
          items {
            id
            vendorId
            materialId
            createdAt
            updatedAt
          }
          nextToken
        }
        purchasings {
          items {
            id
            groupId
            vendorId
            materialId
            purchasingDate
            startDate
            unitPurchasingCost
            purchaseUnit
            quantity
            totalCost
            unitCost
            costUnit
            note
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const vendorsByTenantId = /* GraphQL */ `
  query VendorsByTenantId(
    $tenantId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelVendorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    vendorsByTenantId(
      tenantId: $tenantId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        tenantId
        abbreviation
        site
        disinfectantCertificationCode
        billingAddress
        billingPostalCode
        billingCountry
        billingState
        billingStreet
        billingType
        phone
        fax
        customCode
        createdAt
        updatedAt
        materials {
          items {
            id
            vendorId
            materialId
            createdAt
            updatedAt
          }
          nextToken
        }
        purchasings {
          items {
            id
            groupId
            vendorId
            materialId
            purchasingDate
            startDate
            unitPurchasingCost
            purchaseUnit
            quantity
            totalCost
            unitCost
            costUnit
            note
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getMaterial = /* GraphQL */ `
  query GetMaterial($id: ID!) {
    getMaterial(id: $id) {
      id
      groupId
      materialTypeId
      name
      purchaseUnit
      lossRate
      weight
      costCalculation
      defaultUnitCost
      unit
      length
      lengthApplicable
      lengthLocked
      lengthNominal
      width
      widthApplicable
      widthLocked
      widthNominal
      height
      heightApplicable
      heightLocked
      heightNominal
      createdAt
      updatedAt
      vendors {
        items {
          id
          vendorId
          materialId
          createdAt
          updatedAt
          vendor {
            id
            name
            tenantId
            abbreviation
            site
            disinfectantCertificationCode
            billingAddress
            billingPostalCode
            billingCountry
            billingState
            billingStreet
            billingType
            phone
            fax
            customCode
            createdAt
            updatedAt
          }
          material {
            id
            groupId
            materialTypeId
            name
            purchaseUnit
            lossRate
            weight
            costCalculation
            defaultUnitCost
            unit
            length
            lengthApplicable
            lengthLocked
            lengthNominal
            width
            widthApplicable
            widthLocked
            widthNominal
            height
            heightApplicable
            heightLocked
            heightNominal
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      materialType {
        id
        groupId
        name
        description
        type
        customFields {
          name
          type
          required
        }
        createdAt
        updatedAt
        materials {
          items {
            id
            groupId
            materialTypeId
            name
            purchaseUnit
            lossRate
            weight
            costCalculation
            defaultUnitCost
            unit
            length
            lengthApplicable
            lengthLocked
            lengthNominal
            width
            widthApplicable
            widthLocked
            widthNominal
            height
            heightApplicable
            heightLocked
            heightNominal
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      purchasings {
        items {
          id
          groupId
          vendorId
          materialId
          purchasingDate
          startDate
          unitPurchasingCost
          purchaseUnit
          quantity
          totalCost
          unitCost
          costUnit
          customFields {
            label
            value
          }
          note
          createdAt
          updatedAt
          vendor {
            id
            name
            tenantId
            abbreviation
            site
            disinfectantCertificationCode
            billingAddress
            billingPostalCode
            billingCountry
            billingState
            billingStreet
            billingType
            phone
            fax
            customCode
            createdAt
            updatedAt
          }
          material {
            id
            groupId
            materialTypeId
            name
            purchaseUnit
            lossRate
            weight
            costCalculation
            defaultUnitCost
            unit
            length
            lengthApplicable
            lengthLocked
            lengthNominal
            width
            widthApplicable
            widthLocked
            widthNominal
            height
            heightApplicable
            heightLocked
            heightNominal
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const listMaterials = /* GraphQL */ `
  query ListMaterials(
    $filter: ModelMaterialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMaterials(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupId
        materialTypeId
        name
        purchaseUnit
        lossRate
        weight
        costCalculation
        defaultUnitCost
        unit
        length
        lengthApplicable
        lengthLocked
        lengthNominal
        width
        widthApplicable
        widthLocked
        widthNominal
        height
        heightApplicable
        heightLocked
        heightNominal
        createdAt
        updatedAt
        vendors {
          items {
            id
            vendorId
            materialId
            createdAt
            updatedAt
          }
          nextToken
        }
        materialType {
          id
          groupId
          name
          description
          type
          customFields {
            name
            type
            required
          }
          createdAt
          updatedAt
          materials {
            nextToken
          }
        }
        purchasings {
          items {
            id
            groupId
            vendorId
            materialId
            purchasingDate
            startDate
            unitPurchasingCost
            purchaseUnit
            quantity
            totalCost
            unitCost
            costUnit
            note
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const materialsByGroupId = /* GraphQL */ `
  query MaterialsByGroupId(
    $groupId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelMaterialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    materialsByGroupId(
      groupId: $groupId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        materialTypeId
        name
        purchaseUnit
        lossRate
        weight
        costCalculation
        defaultUnitCost
        unit
        length
        lengthApplicable
        lengthLocked
        lengthNominal
        width
        widthApplicable
        widthLocked
        widthNominal
        height
        heightApplicable
        heightLocked
        heightNominal
        createdAt
        updatedAt
        vendors {
          items {
            id
            vendorId
            materialId
            createdAt
            updatedAt
          }
          nextToken
        }
        materialType {
          id
          groupId
          name
          description
          type
          customFields {
            name
            type
            required
          }
          createdAt
          updatedAt
          materials {
            nextToken
          }
        }
        purchasings {
          items {
            id
            groupId
            vendorId
            materialId
            purchasingDate
            startDate
            unitPurchasingCost
            purchaseUnit
            quantity
            totalCost
            unitCost
            costUnit
            note
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const materialsByTypeId = /* GraphQL */ `
  query MaterialsByTypeId(
    $materialTypeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelMaterialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    materialsByTypeId(
      materialTypeId: $materialTypeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        materialTypeId
        name
        purchaseUnit
        lossRate
        weight
        costCalculation
        defaultUnitCost
        unit
        length
        lengthApplicable
        lengthLocked
        lengthNominal
        width
        widthApplicable
        widthLocked
        widthNominal
        height
        heightApplicable
        heightLocked
        heightNominal
        createdAt
        updatedAt
        vendors {
          items {
            id
            vendorId
            materialId
            createdAt
            updatedAt
          }
          nextToken
        }
        materialType {
          id
          groupId
          name
          description
          type
          customFields {
            name
            type
            required
          }
          createdAt
          updatedAt
          materials {
            nextToken
          }
        }
        purchasings {
          items {
            id
            groupId
            vendorId
            materialId
            purchasingDate
            startDate
            unitPurchasingCost
            purchaseUnit
            quantity
            totalCost
            unitCost
            costUnit
            note
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getMaterialType = /* GraphQL */ `
  query GetMaterialType($id: ID!) {
    getMaterialType(id: $id) {
      id
      groupId
      name
      description
      type
      customFields {
        name
        type
        required
      }
      createdAt
      updatedAt
      materials {
        items {
          id
          groupId
          materialTypeId
          name
          purchaseUnit
          lossRate
          weight
          costCalculation
          defaultUnitCost
          unit
          length
          lengthApplicable
          lengthLocked
          lengthNominal
          width
          widthApplicable
          widthLocked
          widthNominal
          height
          heightApplicable
          heightLocked
          heightNominal
          createdAt
          updatedAt
          vendors {
            nextToken
          }
          materialType {
            id
            groupId
            name
            description
            type
            createdAt
            updatedAt
          }
          purchasings {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const listMaterialTypes = /* GraphQL */ `
  query ListMaterialTypes(
    $filter: ModelMaterialTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMaterialTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupId
        name
        description
        type
        customFields {
          name
          type
          required
        }
        createdAt
        updatedAt
        materials {
          items {
            id
            groupId
            materialTypeId
            name
            purchaseUnit
            lossRate
            weight
            costCalculation
            defaultUnitCost
            unit
            length
            lengthApplicable
            lengthLocked
            lengthNominal
            width
            widthApplicable
            widthLocked
            widthNominal
            height
            heightApplicable
            heightLocked
            heightNominal
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const materialTypesByGroupId = /* GraphQL */ `
  query MaterialTypesByGroupId(
    $groupId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelMaterialTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    materialTypesByGroupId(
      groupId: $groupId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        name
        description
        type
        customFields {
          name
          type
          required
        }
        createdAt
        updatedAt
        materials {
          items {
            id
            groupId
            materialTypeId
            name
            purchaseUnit
            lossRate
            weight
            costCalculation
            defaultUnitCost
            unit
            length
            lengthApplicable
            lengthLocked
            lengthNominal
            width
            widthApplicable
            widthLocked
            widthNominal
            height
            heightApplicable
            heightLocked
            heightNominal
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPurchasing = /* GraphQL */ `
  query GetPurchasing($id: ID!) {
    getPurchasing(id: $id) {
      id
      groupId
      vendorId
      materialId
      purchasingDate
      startDate
      unitPurchasingCost
      purchaseUnit
      quantity
      totalCost
      unitCost
      costUnit
      customFields {
        label
        value
      }
      note
      createdAt
      updatedAt
      vendor {
        id
        name
        tenantId
        abbreviation
        site
        disinfectantCertificationCode
        billingAddress
        billingPostalCode
        billingCountry
        billingState
        billingStreet
        billingType
        phone
        fax
        customCode
        createdAt
        updatedAt
        materials {
          items {
            id
            vendorId
            materialId
            createdAt
            updatedAt
          }
          nextToken
        }
        purchasings {
          items {
            id
            groupId
            vendorId
            materialId
            purchasingDate
            startDate
            unitPurchasingCost
            purchaseUnit
            quantity
            totalCost
            unitCost
            costUnit
            note
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      material {
        id
        groupId
        materialTypeId
        name
        purchaseUnit
        lossRate
        weight
        costCalculation
        defaultUnitCost
        unit
        length
        lengthApplicable
        lengthLocked
        lengthNominal
        width
        widthApplicable
        widthLocked
        widthNominal
        height
        heightApplicable
        heightLocked
        heightNominal
        createdAt
        updatedAt
        vendors {
          items {
            id
            vendorId
            materialId
            createdAt
            updatedAt
          }
          nextToken
        }
        materialType {
          id
          groupId
          name
          description
          type
          customFields {
            name
            type
            required
          }
          createdAt
          updatedAt
          materials {
            nextToken
          }
        }
        purchasings {
          items {
            id
            groupId
            vendorId
            materialId
            purchasingDate
            startDate
            unitPurchasingCost
            purchaseUnit
            quantity
            totalCost
            unitCost
            costUnit
            note
            createdAt
            updatedAt
          }
          nextToken
        }
      }
    }
  }
`;
export const listPurchasings = /* GraphQL */ `
  query ListPurchasings(
    $filter: ModelPurchasingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPurchasings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupId
        vendorId
        materialId
        purchasingDate
        startDate
        unitPurchasingCost
        purchaseUnit
        quantity
        totalCost
        unitCost
        costUnit
        customFields {
          label
          value
        }
        note
        createdAt
        updatedAt
        vendor {
          id
          name
          tenantId
          abbreviation
          site
          disinfectantCertificationCode
          billingAddress
          billingPostalCode
          billingCountry
          billingState
          billingStreet
          billingType
          phone
          fax
          customCode
          createdAt
          updatedAt
          materials {
            nextToken
          }
          purchasings {
            nextToken
          }
        }
        material {
          id
          groupId
          materialTypeId
          name
          purchaseUnit
          lossRate
          weight
          costCalculation
          defaultUnitCost
          unit
          length
          lengthApplicable
          lengthLocked
          lengthNominal
          width
          widthApplicable
          widthLocked
          widthNominal
          height
          heightApplicable
          heightLocked
          heightNominal
          createdAt
          updatedAt
          vendors {
            nextToken
          }
          materialType {
            id
            groupId
            name
            description
            type
            createdAt
            updatedAt
          }
          purchasings {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const purchasingsByMaterialId = /* GraphQL */ `
  query PurchasingsByMaterialId(
    $materialId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPurchasingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    purchasingsByMaterialId(
      materialId: $materialId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        vendorId
        materialId
        purchasingDate
        startDate
        unitPurchasingCost
        purchaseUnit
        quantity
        totalCost
        unitCost
        costUnit
        customFields {
          label
          value
        }
        note
        createdAt
        updatedAt
        vendor {
          id
          name
          tenantId
          abbreviation
          site
          disinfectantCertificationCode
          billingAddress
          billingPostalCode
          billingCountry
          billingState
          billingStreet
          billingType
          phone
          fax
          customCode
          createdAt
          updatedAt
          materials {
            nextToken
          }
          purchasings {
            nextToken
          }
        }
        material {
          id
          groupId
          materialTypeId
          name
          purchaseUnit
          lossRate
          weight
          costCalculation
          defaultUnitCost
          unit
          length
          lengthApplicable
          lengthLocked
          lengthNominal
          width
          widthApplicable
          widthLocked
          widthNominal
          height
          heightApplicable
          heightLocked
          heightNominal
          createdAt
          updatedAt
          vendors {
            nextToken
          }
          materialType {
            id
            groupId
            name
            description
            type
            createdAt
            updatedAt
          }
          purchasings {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const purchasingsByGroupId = /* GraphQL */ `
  query PurchasingsByGroupId(
    $groupId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPurchasingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    purchasingsByGroupId(
      groupId: $groupId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        vendorId
        materialId
        purchasingDate
        startDate
        unitPurchasingCost
        purchaseUnit
        quantity
        totalCost
        unitCost
        costUnit
        customFields {
          label
          value
        }
        note
        createdAt
        updatedAt
        vendor {
          id
          name
          tenantId
          abbreviation
          site
          disinfectantCertificationCode
          billingAddress
          billingPostalCode
          billingCountry
          billingState
          billingStreet
          billingType
          phone
          fax
          customCode
          createdAt
          updatedAt
          materials {
            nextToken
          }
          purchasings {
            nextToken
          }
        }
        material {
          id
          groupId
          materialTypeId
          name
          purchaseUnit
          lossRate
          weight
          costCalculation
          defaultUnitCost
          unit
          length
          lengthApplicable
          lengthLocked
          lengthNominal
          width
          widthApplicable
          widthLocked
          widthNominal
          height
          heightApplicable
          heightLocked
          heightNominal
          createdAt
          updatedAt
          vendors {
            nextToken
          }
          materialType {
            id
            groupId
            name
            description
            type
            createdAt
            updatedAt
          }
          purchasings {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const purchasingsByVendorId = /* GraphQL */ `
  query PurchasingsByVendorId(
    $vendorId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPurchasingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    purchasingsByVendorId(
      vendorId: $vendorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        vendorId
        materialId
        purchasingDate
        startDate
        unitPurchasingCost
        purchaseUnit
        quantity
        totalCost
        unitCost
        costUnit
        customFields {
          label
          value
        }
        note
        createdAt
        updatedAt
        vendor {
          id
          name
          tenantId
          abbreviation
          site
          disinfectantCertificationCode
          billingAddress
          billingPostalCode
          billingCountry
          billingState
          billingStreet
          billingType
          phone
          fax
          customCode
          createdAt
          updatedAt
          materials {
            nextToken
          }
          purchasings {
            nextToken
          }
        }
        material {
          id
          groupId
          materialTypeId
          name
          purchaseUnit
          lossRate
          weight
          costCalculation
          defaultUnitCost
          unit
          length
          lengthApplicable
          lengthLocked
          lengthNominal
          width
          widthApplicable
          widthLocked
          widthNominal
          height
          heightApplicable
          heightLocked
          heightNominal
          createdAt
          updatedAt
          vendors {
            nextToken
          }
          materialType {
            id
            groupId
            name
            description
            type
            createdAt
            updatedAt
          }
          purchasings {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getPriceType = /* GraphQL */ `
  query GetPriceType($id: ID!) {
    getPriceType(id: $id) {
      id
      groupId
      name
      description
      showInQuoteSummary
      createdAt
      updatedAt
      pricings {
        items {
          id
          groupId
          priceTypeId
          packageTypeId
          isDefault
          name
          packageTypeName
          unitPrice
          unit
          autoCalculate
          minimumAmount
          taxType
          sizeDependent
          pricesBySize {
            minSize
            maxSize
            unitPrice
          }
          accountSpecific
          accounts {
            key
            label
          }
          description
          createdAt
          updatedAt
          priceType {
            id
            groupId
            name
            description
            showInQuoteSummary
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const listPriceTypes = /* GraphQL */ `
  query ListPriceTypes(
    $filter: ModelPriceTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPriceTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupId
        name
        description
        showInQuoteSummary
        createdAt
        updatedAt
        pricings {
          items {
            id
            groupId
            priceTypeId
            packageTypeId
            isDefault
            name
            packageTypeName
            unitPrice
            unit
            autoCalculate
            minimumAmount
            taxType
            sizeDependent
            accountSpecific
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const priceTypesByGroupId = /* GraphQL */ `
  query PriceTypesByGroupId(
    $groupId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPriceTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    priceTypesByGroupId(
      groupId: $groupId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        name
        description
        showInQuoteSummary
        createdAt
        updatedAt
        pricings {
          items {
            id
            groupId
            priceTypeId
            packageTypeId
            isDefault
            name
            packageTypeName
            unitPrice
            unit
            autoCalculate
            minimumAmount
            taxType
            sizeDependent
            accountSpecific
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPricing = /* GraphQL */ `
  query GetPricing($id: ID!) {
    getPricing(id: $id) {
      id
      groupId
      priceTypeId
      packageTypeId
      isDefault
      name
      packageTypeName
      unitPrice
      unit
      autoCalculate
      minimumAmount
      taxType
      sizeDependent
      pricesBySize {
        minSize
        maxSize
        unitPrice
      }
      accountSpecific
      accounts {
        key
        label
      }
      description
      createdAt
      updatedAt
      priceType {
        id
        groupId
        name
        description
        showInQuoteSummary
        createdAt
        updatedAt
        pricings {
          items {
            id
            groupId
            priceTypeId
            packageTypeId
            isDefault
            name
            packageTypeName
            unitPrice
            unit
            autoCalculate
            minimumAmount
            taxType
            sizeDependent
            accountSpecific
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }
    }
  }
`;
export const listPricings = /* GraphQL */ `
  query ListPricings(
    $filter: ModelPricingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPricings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupId
        priceTypeId
        packageTypeId
        isDefault
        name
        packageTypeName
        unitPrice
        unit
        autoCalculate
        minimumAmount
        taxType
        sizeDependent
        pricesBySize {
          minSize
          maxSize
          unitPrice
        }
        accountSpecific
        accounts {
          key
          label
        }
        description
        createdAt
        updatedAt
        priceType {
          id
          groupId
          name
          description
          showInQuoteSummary
          createdAt
          updatedAt
          pricings {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const pricingsByTypeId = /* GraphQL */ `
  query PricingsByTypeId(
    $priceTypeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPricingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pricingsByTypeId(
      priceTypeId: $priceTypeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        priceTypeId
        packageTypeId
        isDefault
        name
        packageTypeName
        unitPrice
        unit
        autoCalculate
        minimumAmount
        taxType
        sizeDependent
        pricesBySize {
          minSize
          maxSize
          unitPrice
        }
        accountSpecific
        accounts {
          key
          label
        }
        description
        createdAt
        updatedAt
        priceType {
          id
          groupId
          name
          description
          showInQuoteSummary
          createdAt
          updatedAt
          pricings {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const pricingsByGroupId = /* GraphQL */ `
  query PricingsByGroupId(
    $groupId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPricingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pricingsByGroupId(
      groupId: $groupId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        priceTypeId
        packageTypeId
        isDefault
        name
        packageTypeName
        unitPrice
        unit
        autoCalculate
        minimumAmount
        taxType
        sizeDependent
        pricesBySize {
          minSize
          maxSize
          unitPrice
        }
        accountSpecific
        accounts {
          key
          label
        }
        description
        createdAt
        updatedAt
        priceType {
          id
          groupId
          name
          description
          showInQuoteSummary
          createdAt
          updatedAt
          pricings {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getPackageType = /* GraphQL */ `
  query GetPackageType($id: ID!) {
    getPackageType(id: $id) {
      id
      groupId
      pricingId
      name
      description
      publish
      elements {
        type
        name
        slug
        value
        expr
        description
        overwriteValue
        cutting
      }
      createdAt
      updatedAt
      areas {
        items {
          id
          packageTypeId
          name
          areaType
          order
          description
          createdAt
          updatedAt
          components {
            nextToken
          }
        }
        nextToken
      }
      decorations {
        items {
          id
          packageTypeId
          type
          name
          slug
          order
          unit
          elements {
            type
            name
            slug
            value
            expr
            description
            overwriteValue
            cutting
          }
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listPackageTypes = /* GraphQL */ `
  query ListPackageTypes(
    $filter: ModelPackageTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPackageTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupId
        pricingId
        name
        description
        publish
        elements {
          type
          name
          slug
          value
          expr
          description
          overwriteValue
          cutting
        }
        createdAt
        updatedAt
        areas {
          items {
            id
            packageTypeId
            name
            areaType
            order
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        decorations {
          items {
            id
            packageTypeId
            type
            name
            slug
            order
            unit
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const packageTypesByGroupId = /* GraphQL */ `
  query PackageTypesByGroupId(
    $groupId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPackageTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    packageTypesByGroupId(
      groupId: $groupId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        pricingId
        name
        description
        publish
        elements {
          type
          name
          slug
          value
          expr
          description
          overwriteValue
          cutting
        }
        createdAt
        updatedAt
        areas {
          items {
            id
            packageTypeId
            name
            areaType
            order
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        decorations {
          items {
            id
            packageTypeId
            type
            name
            slug
            order
            unit
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const packageTypesByPricingId = /* GraphQL */ `
  query PackageTypesByPricingId(
    $pricingId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPackageTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    packageTypesByPricingId(
      pricingId: $pricingId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        pricingId
        name
        description
        publish
        elements {
          type
          name
          slug
          value
          expr
          description
          overwriteValue
          cutting
        }
        createdAt
        updatedAt
        areas {
          items {
            id
            packageTypeId
            name
            areaType
            order
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        decorations {
          items {
            id
            packageTypeId
            type
            name
            slug
            order
            unit
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getBaseArea = /* GraphQL */ `
  query GetBaseArea($id: ID!) {
    getBaseArea(id: $id) {
      id
      packageTypeId
      name
      areaType
      order
      description
      createdAt
      updatedAt
      components {
        items {
          id
          baseAreaId
          name
          slug
          order
          elements {
            type
            name
            slug
            value
            expr
            description
            overwriteValue
            cutting
          }
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listBaseAreas = /* GraphQL */ `
  query ListBaseAreas(
    $filter: ModelBaseAreaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBaseAreas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        packageTypeId
        name
        areaType
        order
        description
        createdAt
        updatedAt
        components {
          items {
            id
            baseAreaId
            name
            slug
            order
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const baseAreasByPackageTypeId = /* GraphQL */ `
  query BaseAreasByPackageTypeId(
    $packageTypeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelBaseAreaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    baseAreasByPackageTypeId(
      packageTypeId: $packageTypeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        packageTypeId
        name
        areaType
        order
        description
        createdAt
        updatedAt
        components {
          items {
            id
            baseAreaId
            name
            slug
            order
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getBaseComponent = /* GraphQL */ `
  query GetBaseComponent($id: ID!) {
    getBaseComponent(id: $id) {
      id
      baseAreaId
      name
      slug
      order
      elements {
        type
        name
        slug
        value
        expr
        description
        overwriteValue
        cutting
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBaseComponents = /* GraphQL */ `
  query ListBaseComponents(
    $filter: ModelBaseComponentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBaseComponents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        baseAreaId
        name
        slug
        order
        elements {
          type
          name
          slug
          value
          expr
          description
          overwriteValue
          cutting
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const baseComponentsByBaseAreaId = /* GraphQL */ `
  query BaseComponentsByBaseAreaId(
    $baseAreaId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelBaseComponentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    baseComponentsByBaseAreaId(
      baseAreaId: $baseAreaId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        baseAreaId
        name
        slug
        order
        elements {
          type
          name
          slug
          value
          expr
          description
          overwriteValue
          cutting
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBaseDecorationComponent = /* GraphQL */ `
  query GetBaseDecorationComponent($id: ID!) {
    getBaseDecorationComponent(id: $id) {
      id
      packageTypeId
      type
      name
      slug
      order
      unit
      elements {
        type
        name
        slug
        value
        expr
        description
        overwriteValue
        cutting
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBaseDecorationComponents = /* GraphQL */ `
  query ListBaseDecorationComponents(
    $filter: ModelBaseDecorationComponentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBaseDecorationComponents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        packageTypeId
        type
        name
        slug
        order
        unit
        elements {
          type
          name
          slug
          value
          expr
          description
          overwriteValue
          cutting
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const baseDecorationComponentsByPackageTypeId = /* GraphQL */ `
  query BaseDecorationComponentsByPackageTypeId(
    $packageTypeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelBaseDecorationComponentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    baseDecorationComponentsByPackageTypeId(
      packageTypeId: $packageTypeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        packageTypeId
        type
        name
        slug
        order
        unit
        elements {
          type
          name
          slug
          value
          expr
          description
          overwriteValue
          cutting
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSchedule = /* GraphQL */ `
  query GetSchedule($id: ID!) {
    getSchedule(id: $id) {
      id
      projectId
      name
      m3
      case
      shipType
      stockingDate
      packagingDate
      shippingDate
      cutDate
      createdAt
      updatedAt
      products {
        items {
          id
          projectId
          packageTypeId
          scheduleId
          userId
          pricingId
          packageTypeName
          quoteLineId
          name
          order
          productNumber
          quantity
          material
          tareWeight
          stamp
          destination
          packagingStart
          packagingEnd
          packageMethod
          description
          cases {
            order
            name
            netWeight
            grossWeight
            outerLength
            outerWidth
            outerHeight
          }
          elements {
            type
            name
            slug
            value
            expr
            description
            overwriteValue
            cutting
          }
          createdAt
          updatedAt
          schedule {
            id
            projectId
            name
            m3
            case
            shipType
            stockingDate
            packagingDate
            shippingDate
            cutDate
            createdAt
            updatedAt
          }
          areas {
            nextToken
          }
          decorations {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const listSchedules = /* GraphQL */ `
  query ListSchedules(
    $filter: ModelScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectId
        name
        m3
        case
        shipType
        stockingDate
        packagingDate
        shippingDate
        cutDate
        createdAt
        updatedAt
        products {
          items {
            id
            projectId
            packageTypeId
            scheduleId
            userId
            pricingId
            packageTypeName
            quoteLineId
            name
            order
            productNumber
            quantity
            material
            tareWeight
            stamp
            destination
            packagingStart
            packagingEnd
            packageMethod
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const schedulesByProject = /* GraphQL */ `
  query SchedulesByProject(
    $projectId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    schedulesByProject(
      projectId: $projectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectId
        name
        m3
        case
        shipType
        stockingDate
        packagingDate
        shippingDate
        cutDate
        createdAt
        updatedAt
        products {
          items {
            id
            projectId
            packageTypeId
            scheduleId
            userId
            pricingId
            packageTypeName
            quoteLineId
            name
            order
            productNumber
            quantity
            material
            tareWeight
            stamp
            destination
            packagingStart
            packagingEnd
            packageMethod
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      groupId
      quoteId
      userId
      accountId
      accountName
      contactId
      contactName
      name
      status
      inquiryDate
      quotationDate
      destinationName
      destination {
        lat
        lng
      }
      confidence
      description
      alert
      cancelled
      cancelReason
      createdAt
      updatedAt
      account {
        id
        tenantId
        name
        abbreviation
        site
        billingAddress
        billingStreet
        billingCity
        billingState
        billingPostalCode
        billingCountry
        billingType
        fax
        phone
        customeCode
        cutoffDateText
        cutoffDateNumber
        paymentMonthText
        paymentMonthNumber
        paymentDateText
        paymentDateNumber
        invoiceUnit
        invoiceMethod
        createdAt
        updatedAt
        contacts {
          items {
            id
            accountId
            tenantId
            name
            firstName
            lastName
            suffix
            email
            phone
            mobilePhone
            title
            retired
            customeCode
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      contact {
        id
        accountId
        tenantId
        name
        firstName
        lastName
        suffix
        email
        phone
        mobilePhone
        title
        retired
        customeCode
        description
        createdAt
        updatedAt
        account {
          id
          tenantId
          name
          abbreviation
          site
          billingAddress
          billingStreet
          billingCity
          billingState
          billingPostalCode
          billingCountry
          billingType
          fax
          phone
          customeCode
          cutoffDateText
          cutoffDateNumber
          paymentMonthText
          paymentMonthNumber
          paymentDateText
          paymentDateNumber
          invoiceUnit
          invoiceMethod
          createdAt
          updatedAt
          contacts {
            nextToken
          }
        }
      }
      user {
        id
        name
        firstName
        lastName
        email
        showTutorial
        invited
        verified
        fontSize
        language
        receiveEmailNotification
        theme
        useMfa
        customId
        configuration {
          projectFilter {
            name
            duration
            sort
            showProcesses
            showUnits
            showPhases
          }
        }
        tenantId
        isAdmin
        createdAt
        updatedAt
        tenant {
          id
          name
          logoUrl
          address
          phone
          syncSFObject
          sfLoginUrl
          sfUsername
          sfPassword
          sfSecretToken
          projectFilters {
            name
            duration
            sort
            showProcesses
            showUnits
            showPhases
          }
          createdAt
          updatedAt
          accounts {
            nextToken
          }
          contacts {
            nextToken
          }
          users {
            nextToken
          }
          groups {
            nextToken
          }
          sfObjects {
            nextToken
          }
        }
        accessLogs {
          items {
            id
            device
            ipAddress
            description
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            userId
            groupId
            role
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      group {
        id
        name
        phone
        fax
        email
        logoUrl
        groupAddress {
          address
          street
          city
          state
          postalCode
          country
        }
        quoteInfo {
          greeting
          paymentMethod
          destination
          dueDate
          expiryDate
          description
        }
        bank {
          name
          branchName
          branchNumber
          type
          accountNumber
          swiftCode
        }
        taxRate
        maxInventoryM3
        heatTreatmentRequestCode
        packingMaterialProducerRegistrationNumber
        tenantId
        createdAt
        updatedAt
        tenant {
          id
          name
          logoUrl
          address
          phone
          syncSFObject
          sfLoginUrl
          sfUsername
          sfPassword
          sfSecretToken
          projectFilters {
            name
            duration
            sort
            showProcesses
            showUnits
            showPhases
          }
          createdAt
          updatedAt
          accounts {
            nextToken
          }
          contacts {
            nextToken
          }
          users {
            nextToken
          }
          groups {
            nextToken
          }
          sfObjects {
            nextToken
          }
        }
        users {
          items {
            id
            userId
            groupId
            role
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      schedules {
        items {
          id
          projectId
          name
          m3
          case
          shipType
          stockingDate
          packagingDate
          shippingDate
          cutDate
          createdAt
          updatedAt
          products {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupId
        quoteId
        userId
        accountId
        accountName
        contactId
        contactName
        name
        status
        inquiryDate
        quotationDate
        destinationName
        destination {
          lat
          lng
        }
        confidence
        description
        alert
        cancelled
        cancelReason
        createdAt
        updatedAt
        account {
          id
          tenantId
          name
          abbreviation
          site
          billingAddress
          billingStreet
          billingCity
          billingState
          billingPostalCode
          billingCountry
          billingType
          fax
          phone
          customeCode
          cutoffDateText
          cutoffDateNumber
          paymentMonthText
          paymentMonthNumber
          paymentDateText
          paymentDateNumber
          invoiceUnit
          invoiceMethod
          createdAt
          updatedAt
          contacts {
            nextToken
          }
        }
        contact {
          id
          accountId
          tenantId
          name
          firstName
          lastName
          suffix
          email
          phone
          mobilePhone
          title
          retired
          customeCode
          description
          createdAt
          updatedAt
          account {
            id
            tenantId
            name
            abbreviation
            site
            billingAddress
            billingStreet
            billingCity
            billingState
            billingPostalCode
            billingCountry
            billingType
            fax
            phone
            customeCode
            cutoffDateText
            cutoffDateNumber
            paymentMonthText
            paymentMonthNumber
            paymentDateText
            paymentDateNumber
            invoiceUnit
            invoiceMethod
            createdAt
            updatedAt
          }
        }
        user {
          id
          name
          firstName
          lastName
          email
          showTutorial
          invited
          verified
          fontSize
          language
          receiveEmailNotification
          theme
          useMfa
          customId
          tenantId
          isAdmin
          createdAt
          updatedAt
          tenant {
            id
            name
            logoUrl
            address
            phone
            syncSFObject
            sfLoginUrl
            sfUsername
            sfPassword
            sfSecretToken
            createdAt
            updatedAt
          }
          accessLogs {
            nextToken
          }
          groups {
            nextToken
          }
        }
        group {
          id
          name
          phone
          fax
          email
          logoUrl
          groupAddress {
            address
            street
            city
            state
            postalCode
            country
          }
          quoteInfo {
            greeting
            paymentMethod
            destination
            dueDate
            expiryDate
            description
          }
          bank {
            name
            branchName
            branchNumber
            type
            accountNumber
            swiftCode
          }
          taxRate
          maxInventoryM3
          heatTreatmentRequestCode
          packingMaterialProducerRegistrationNumber
          tenantId
          createdAt
          updatedAt
          tenant {
            id
            name
            logoUrl
            address
            phone
            syncSFObject
            sfLoginUrl
            sfUsername
            sfPassword
            sfSecretToken
            createdAt
            updatedAt
          }
          users {
            nextToken
          }
        }
        schedules {
          items {
            id
            projectId
            name
            m3
            case
            shipType
            stockingDate
            packagingDate
            shippingDate
            cutDate
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const projectsByUserId = /* GraphQL */ `
  query ProjectsByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        quoteId
        userId
        accountId
        accountName
        contactId
        contactName
        name
        status
        inquiryDate
        quotationDate
        destinationName
        destination {
          lat
          lng
        }
        confidence
        description
        alert
        cancelled
        cancelReason
        createdAt
        updatedAt
        account {
          id
          tenantId
          name
          abbreviation
          site
          billingAddress
          billingStreet
          billingCity
          billingState
          billingPostalCode
          billingCountry
          billingType
          fax
          phone
          customeCode
          cutoffDateText
          cutoffDateNumber
          paymentMonthText
          paymentMonthNumber
          paymentDateText
          paymentDateNumber
          invoiceUnit
          invoiceMethod
          createdAt
          updatedAt
          contacts {
            nextToken
          }
        }
        contact {
          id
          accountId
          tenantId
          name
          firstName
          lastName
          suffix
          email
          phone
          mobilePhone
          title
          retired
          customeCode
          description
          createdAt
          updatedAt
          account {
            id
            tenantId
            name
            abbreviation
            site
            billingAddress
            billingStreet
            billingCity
            billingState
            billingPostalCode
            billingCountry
            billingType
            fax
            phone
            customeCode
            cutoffDateText
            cutoffDateNumber
            paymentMonthText
            paymentMonthNumber
            paymentDateText
            paymentDateNumber
            invoiceUnit
            invoiceMethod
            createdAt
            updatedAt
          }
        }
        user {
          id
          name
          firstName
          lastName
          email
          showTutorial
          invited
          verified
          fontSize
          language
          receiveEmailNotification
          theme
          useMfa
          customId
          tenantId
          isAdmin
          createdAt
          updatedAt
          tenant {
            id
            name
            logoUrl
            address
            phone
            syncSFObject
            sfLoginUrl
            sfUsername
            sfPassword
            sfSecretToken
            createdAt
            updatedAt
          }
          accessLogs {
            nextToken
          }
          groups {
            nextToken
          }
        }
        group {
          id
          name
          phone
          fax
          email
          logoUrl
          groupAddress {
            address
            street
            city
            state
            postalCode
            country
          }
          quoteInfo {
            greeting
            paymentMethod
            destination
            dueDate
            expiryDate
            description
          }
          bank {
            name
            branchName
            branchNumber
            type
            accountNumber
            swiftCode
          }
          taxRate
          maxInventoryM3
          heatTreatmentRequestCode
          packingMaterialProducerRegistrationNumber
          tenantId
          createdAt
          updatedAt
          tenant {
            id
            name
            logoUrl
            address
            phone
            syncSFObject
            sfLoginUrl
            sfUsername
            sfPassword
            sfSecretToken
            createdAt
            updatedAt
          }
          users {
            nextToken
          }
        }
        schedules {
          items {
            id
            projectId
            name
            m3
            case
            shipType
            stockingDate
            packagingDate
            shippingDate
            cutDate
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const projectsByAccountId = /* GraphQL */ `
  query ProjectsByAccountId(
    $accountId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectsByAccountId(
      accountId: $accountId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        quoteId
        userId
        accountId
        accountName
        contactId
        contactName
        name
        status
        inquiryDate
        quotationDate
        destinationName
        destination {
          lat
          lng
        }
        confidence
        description
        alert
        cancelled
        cancelReason
        createdAt
        updatedAt
        account {
          id
          tenantId
          name
          abbreviation
          site
          billingAddress
          billingStreet
          billingCity
          billingState
          billingPostalCode
          billingCountry
          billingType
          fax
          phone
          customeCode
          cutoffDateText
          cutoffDateNumber
          paymentMonthText
          paymentMonthNumber
          paymentDateText
          paymentDateNumber
          invoiceUnit
          invoiceMethod
          createdAt
          updatedAt
          contacts {
            nextToken
          }
        }
        contact {
          id
          accountId
          tenantId
          name
          firstName
          lastName
          suffix
          email
          phone
          mobilePhone
          title
          retired
          customeCode
          description
          createdAt
          updatedAt
          account {
            id
            tenantId
            name
            abbreviation
            site
            billingAddress
            billingStreet
            billingCity
            billingState
            billingPostalCode
            billingCountry
            billingType
            fax
            phone
            customeCode
            cutoffDateText
            cutoffDateNumber
            paymentMonthText
            paymentMonthNumber
            paymentDateText
            paymentDateNumber
            invoiceUnit
            invoiceMethod
            createdAt
            updatedAt
          }
        }
        user {
          id
          name
          firstName
          lastName
          email
          showTutorial
          invited
          verified
          fontSize
          language
          receiveEmailNotification
          theme
          useMfa
          customId
          tenantId
          isAdmin
          createdAt
          updatedAt
          tenant {
            id
            name
            logoUrl
            address
            phone
            syncSFObject
            sfLoginUrl
            sfUsername
            sfPassword
            sfSecretToken
            createdAt
            updatedAt
          }
          accessLogs {
            nextToken
          }
          groups {
            nextToken
          }
        }
        group {
          id
          name
          phone
          fax
          email
          logoUrl
          groupAddress {
            address
            street
            city
            state
            postalCode
            country
          }
          quoteInfo {
            greeting
            paymentMethod
            destination
            dueDate
            expiryDate
            description
          }
          bank {
            name
            branchName
            branchNumber
            type
            accountNumber
            swiftCode
          }
          taxRate
          maxInventoryM3
          heatTreatmentRequestCode
          packingMaterialProducerRegistrationNumber
          tenantId
          createdAt
          updatedAt
          tenant {
            id
            name
            logoUrl
            address
            phone
            syncSFObject
            sfLoginUrl
            sfUsername
            sfPassword
            sfSecretToken
            createdAt
            updatedAt
          }
          users {
            nextToken
          }
        }
        schedules {
          items {
            id
            projectId
            name
            m3
            case
            shipType
            stockingDate
            packagingDate
            shippingDate
            cutDate
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const projectsByContactId = /* GraphQL */ `
  query ProjectsByContactId(
    $contactId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectsByContactId(
      contactId: $contactId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        quoteId
        userId
        accountId
        accountName
        contactId
        contactName
        name
        status
        inquiryDate
        quotationDate
        destinationName
        destination {
          lat
          lng
        }
        confidence
        description
        alert
        cancelled
        cancelReason
        createdAt
        updatedAt
        account {
          id
          tenantId
          name
          abbreviation
          site
          billingAddress
          billingStreet
          billingCity
          billingState
          billingPostalCode
          billingCountry
          billingType
          fax
          phone
          customeCode
          cutoffDateText
          cutoffDateNumber
          paymentMonthText
          paymentMonthNumber
          paymentDateText
          paymentDateNumber
          invoiceUnit
          invoiceMethod
          createdAt
          updatedAt
          contacts {
            nextToken
          }
        }
        contact {
          id
          accountId
          tenantId
          name
          firstName
          lastName
          suffix
          email
          phone
          mobilePhone
          title
          retired
          customeCode
          description
          createdAt
          updatedAt
          account {
            id
            tenantId
            name
            abbreviation
            site
            billingAddress
            billingStreet
            billingCity
            billingState
            billingPostalCode
            billingCountry
            billingType
            fax
            phone
            customeCode
            cutoffDateText
            cutoffDateNumber
            paymentMonthText
            paymentMonthNumber
            paymentDateText
            paymentDateNumber
            invoiceUnit
            invoiceMethod
            createdAt
            updatedAt
          }
        }
        user {
          id
          name
          firstName
          lastName
          email
          showTutorial
          invited
          verified
          fontSize
          language
          receiveEmailNotification
          theme
          useMfa
          customId
          tenantId
          isAdmin
          createdAt
          updatedAt
          tenant {
            id
            name
            logoUrl
            address
            phone
            syncSFObject
            sfLoginUrl
            sfUsername
            sfPassword
            sfSecretToken
            createdAt
            updatedAt
          }
          accessLogs {
            nextToken
          }
          groups {
            nextToken
          }
        }
        group {
          id
          name
          phone
          fax
          email
          logoUrl
          groupAddress {
            address
            street
            city
            state
            postalCode
            country
          }
          quoteInfo {
            greeting
            paymentMethod
            destination
            dueDate
            expiryDate
            description
          }
          bank {
            name
            branchName
            branchNumber
            type
            accountNumber
            swiftCode
          }
          taxRate
          maxInventoryM3
          heatTreatmentRequestCode
          packingMaterialProducerRegistrationNumber
          tenantId
          createdAt
          updatedAt
          tenant {
            id
            name
            logoUrl
            address
            phone
            syncSFObject
            sfLoginUrl
            sfUsername
            sfPassword
            sfSecretToken
            createdAt
            updatedAt
          }
          users {
            nextToken
          }
        }
        schedules {
          items {
            id
            projectId
            name
            m3
            case
            shipType
            stockingDate
            packagingDate
            shippingDate
            cutDate
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const projectsByGroupId = /* GraphQL */ `
  query ProjectsByGroupId(
    $groupId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectsByGroupId(
      groupId: $groupId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        quoteId
        userId
        accountId
        accountName
        contactId
        contactName
        name
        status
        inquiryDate
        quotationDate
        destinationName
        destination {
          lat
          lng
        }
        confidence
        description
        alert
        cancelled
        cancelReason
        createdAt
        updatedAt
        account {
          id
          tenantId
          name
          abbreviation
          site
          billingAddress
          billingStreet
          billingCity
          billingState
          billingPostalCode
          billingCountry
          billingType
          fax
          phone
          customeCode
          cutoffDateText
          cutoffDateNumber
          paymentMonthText
          paymentMonthNumber
          paymentDateText
          paymentDateNumber
          invoiceUnit
          invoiceMethod
          createdAt
          updatedAt
          contacts {
            nextToken
          }
        }
        contact {
          id
          accountId
          tenantId
          name
          firstName
          lastName
          suffix
          email
          phone
          mobilePhone
          title
          retired
          customeCode
          description
          createdAt
          updatedAt
          account {
            id
            tenantId
            name
            abbreviation
            site
            billingAddress
            billingStreet
            billingCity
            billingState
            billingPostalCode
            billingCountry
            billingType
            fax
            phone
            customeCode
            cutoffDateText
            cutoffDateNumber
            paymentMonthText
            paymentMonthNumber
            paymentDateText
            paymentDateNumber
            invoiceUnit
            invoiceMethod
            createdAt
            updatedAt
          }
        }
        user {
          id
          name
          firstName
          lastName
          email
          showTutorial
          invited
          verified
          fontSize
          language
          receiveEmailNotification
          theme
          useMfa
          customId
          tenantId
          isAdmin
          createdAt
          updatedAt
          tenant {
            id
            name
            logoUrl
            address
            phone
            syncSFObject
            sfLoginUrl
            sfUsername
            sfPassword
            sfSecretToken
            createdAt
            updatedAt
          }
          accessLogs {
            nextToken
          }
          groups {
            nextToken
          }
        }
        group {
          id
          name
          phone
          fax
          email
          logoUrl
          groupAddress {
            address
            street
            city
            state
            postalCode
            country
          }
          quoteInfo {
            greeting
            paymentMethod
            destination
            dueDate
            expiryDate
            description
          }
          bank {
            name
            branchName
            branchNumber
            type
            accountNumber
            swiftCode
          }
          taxRate
          maxInventoryM3
          heatTreatmentRequestCode
          packingMaterialProducerRegistrationNumber
          tenantId
          createdAt
          updatedAt
          tenant {
            id
            name
            logoUrl
            address
            phone
            syncSFObject
            sfLoginUrl
            sfUsername
            sfPassword
            sfSecretToken
            createdAt
            updatedAt
          }
          users {
            nextToken
          }
        }
        schedules {
          items {
            id
            projectId
            name
            m3
            case
            shipType
            stockingDate
            packagingDate
            shippingDate
            cutDate
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getQuote = /* GraphQL */ `
  query GetQuote($id: ID!) {
    getQuote(id: $id) {
      id
      projectId
      name
      quoteNumber
      linkProduct
      order
      orderPlaced
      revenue
      estimatedCost
      estimatedProfit
      greeting
      paymentMethod
      destination
      dueDate
      expiryDate
      description
      groupName
      logoUrl
      groupAddress {
        address
        street
        city
        state
        postalCode
        country
      }
      phone
      fax
      createdAt
      updatedAt
      quoteLines {
        items {
          id
          quoteId
          pricingId
          packageTypeId
          productId
          pricingName
          packageTypeName
          showInQuoteSummary
          name
          index
          notes
          quantity
          amount
          minimumAmount
          actualAmount
          order
          unitNW
          NW
          productLength
          productWidth
          productHeight
          outerLength
          outerWidth
          outerHeight
          estimatedUnitM3
          estimatedM3
          estimatedUnitGrossWeight
          estimatedGrossWeight
          estimatedUnitCost
          estimatedCost
          estimatedProfit
          unitPrice
          subtotal
          total
          unit
          taxType
          taxRate
          costDetail
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listQuotes = /* GraphQL */ `
  query ListQuotes(
    $filter: ModelQuoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectId
        name
        quoteNumber
        linkProduct
        order
        orderPlaced
        revenue
        estimatedCost
        estimatedProfit
        greeting
        paymentMethod
        destination
        dueDate
        expiryDate
        description
        groupName
        logoUrl
        groupAddress {
          address
          street
          city
          state
          postalCode
          country
        }
        phone
        fax
        createdAt
        updatedAt
        quoteLines {
          items {
            id
            quoteId
            pricingId
            packageTypeId
            productId
            pricingName
            packageTypeName
            showInQuoteSummary
            name
            index
            notes
            quantity
            amount
            minimumAmount
            actualAmount
            order
            unitNW
            NW
            productLength
            productWidth
            productHeight
            outerLength
            outerWidth
            outerHeight
            estimatedUnitM3
            estimatedM3
            estimatedUnitGrossWeight
            estimatedGrossWeight
            estimatedUnitCost
            estimatedCost
            estimatedProfit
            unitPrice
            subtotal
            total
            unit
            taxType
            taxRate
            costDetail
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const quotesByProjectId = /* GraphQL */ `
  query QuotesByProjectId(
    $projectId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelQuoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    quotesByProjectId(
      projectId: $projectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectId
        name
        quoteNumber
        linkProduct
        order
        orderPlaced
        revenue
        estimatedCost
        estimatedProfit
        greeting
        paymentMethod
        destination
        dueDate
        expiryDate
        description
        groupName
        logoUrl
        groupAddress {
          address
          street
          city
          state
          postalCode
          country
        }
        phone
        fax
        createdAt
        updatedAt
        quoteLines {
          items {
            id
            quoteId
            pricingId
            packageTypeId
            productId
            pricingName
            packageTypeName
            showInQuoteSummary
            name
            index
            notes
            quantity
            amount
            minimumAmount
            actualAmount
            order
            unitNW
            NW
            productLength
            productWidth
            productHeight
            outerLength
            outerWidth
            outerHeight
            estimatedUnitM3
            estimatedM3
            estimatedUnitGrossWeight
            estimatedGrossWeight
            estimatedUnitCost
            estimatedCost
            estimatedProfit
            unitPrice
            subtotal
            total
            unit
            taxType
            taxRate
            costDetail
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getQuoteLine = /* GraphQL */ `
  query GetQuoteLine($id: ID!) {
    getQuoteLine(id: $id) {
      id
      quoteId
      pricingId
      packageTypeId
      productId
      pricingName
      packageTypeName
      showInQuoteSummary
      name
      index
      notes
      quantity
      amount
      minimumAmount
      actualAmount
      order
      unitNW
      NW
      productLength
      productWidth
      productHeight
      outerLength
      outerWidth
      outerHeight
      estimatedUnitM3
      estimatedM3
      estimatedUnitGrossWeight
      estimatedGrossWeight
      estimatedUnitCost
      estimatedCost
      estimatedProfit
      unitPrice
      subtotal
      total
      unit
      taxType
      taxRate
      costDetail
      createdAt
      updatedAt
    }
  }
`;
export const listQuoteLines = /* GraphQL */ `
  query ListQuoteLines(
    $filter: ModelQuoteLineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuoteLines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quoteId
        pricingId
        packageTypeId
        productId
        pricingName
        packageTypeName
        showInQuoteSummary
        name
        index
        notes
        quantity
        amount
        minimumAmount
        actualAmount
        order
        unitNW
        NW
        productLength
        productWidth
        productHeight
        outerLength
        outerWidth
        outerHeight
        estimatedUnitM3
        estimatedM3
        estimatedUnitGrossWeight
        estimatedGrossWeight
        estimatedUnitCost
        estimatedCost
        estimatedProfit
        unitPrice
        subtotal
        total
        unit
        taxType
        taxRate
        costDetail
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const quoteLinesByQuoteId = /* GraphQL */ `
  query QuoteLinesByQuoteId(
    $quoteId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelQuoteLineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    quoteLinesByQuoteId(
      quoteId: $quoteId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        quoteId
        pricingId
        packageTypeId
        productId
        pricingName
        packageTypeName
        showInQuoteSummary
        name
        index
        notes
        quantity
        amount
        minimumAmount
        actualAmount
        order
        unitNW
        NW
        productLength
        productWidth
        productHeight
        outerLength
        outerWidth
        outerHeight
        estimatedUnitM3
        estimatedM3
        estimatedUnitGrossWeight
        estimatedGrossWeight
        estimatedUnitCost
        estimatedCost
        estimatedProfit
        unitPrice
        subtotal
        total
        unit
        taxType
        taxRate
        costDetail
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      projectId
      packageTypeId
      scheduleId
      userId
      pricingId
      packageTypeName
      quoteLineId
      name
      order
      productNumber
      quantity
      material
      tareWeight
      stamp
      destination
      packagingStart
      packagingEnd
      packageMethod
      description
      cases {
        order
        name
        netWeight
        grossWeight
        outerLength
        outerWidth
        outerHeight
      }
      elements {
        type
        name
        slug
        value
        expr
        description
        overwriteValue
        cutting
      }
      createdAt
      updatedAt
      schedule {
        id
        projectId
        name
        m3
        case
        shipType
        stockingDate
        packagingDate
        shippingDate
        cutDate
        createdAt
        updatedAt
        products {
          items {
            id
            projectId
            packageTypeId
            scheduleId
            userId
            pricingId
            packageTypeName
            quoteLineId
            name
            order
            productNumber
            quantity
            material
            tareWeight
            stamp
            destination
            packagingStart
            packagingEnd
            packageMethod
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      areas {
        items {
          id
          productId
          name
          areaType
          order
          description
          createdAt
          updatedAt
          components {
            nextToken
          }
        }
        nextToken
      }
      decorations {
        items {
          id
          productId
          type
          name
          slug
          order
          unit
          elements {
            type
            name
            slug
            value
            expr
            description
            overwriteValue
            cutting
          }
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectId
        packageTypeId
        scheduleId
        userId
        pricingId
        packageTypeName
        quoteLineId
        name
        order
        productNumber
        quantity
        material
        tareWeight
        stamp
        destination
        packagingStart
        packagingEnd
        packageMethod
        description
        cases {
          order
          name
          netWeight
          grossWeight
          outerLength
          outerWidth
          outerHeight
        }
        elements {
          type
          name
          slug
          value
          expr
          description
          overwriteValue
          cutting
        }
        createdAt
        updatedAt
        schedule {
          id
          projectId
          name
          m3
          case
          shipType
          stockingDate
          packagingDate
          shippingDate
          cutDate
          createdAt
          updatedAt
          products {
            nextToken
          }
        }
        areas {
          items {
            id
            productId
            name
            areaType
            order
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        decorations {
          items {
            id
            productId
            type
            name
            slug
            order
            unit
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const productsbyScheduleId = /* GraphQL */ `
  query ProductsbyScheduleId(
    $scheduleId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsbyScheduleId(
      scheduleId: $scheduleId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectId
        packageTypeId
        scheduleId
        userId
        pricingId
        packageTypeName
        quoteLineId
        name
        order
        productNumber
        quantity
        material
        tareWeight
        stamp
        destination
        packagingStart
        packagingEnd
        packageMethod
        description
        cases {
          order
          name
          netWeight
          grossWeight
          outerLength
          outerWidth
          outerHeight
        }
        elements {
          type
          name
          slug
          value
          expr
          description
          overwriteValue
          cutting
        }
        createdAt
        updatedAt
        schedule {
          id
          projectId
          name
          m3
          case
          shipType
          stockingDate
          packagingDate
          shippingDate
          cutDate
          createdAt
          updatedAt
          products {
            nextToken
          }
        }
        areas {
          items {
            id
            productId
            name
            areaType
            order
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        decorations {
          items {
            id
            productId
            type
            name
            slug
            order
            unit
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const productsByPackageTypeId = /* GraphQL */ `
  query ProductsByPackageTypeId(
    $packageTypeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByPackageTypeId(
      packageTypeId: $packageTypeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectId
        packageTypeId
        scheduleId
        userId
        pricingId
        packageTypeName
        quoteLineId
        name
        order
        productNumber
        quantity
        material
        tareWeight
        stamp
        destination
        packagingStart
        packagingEnd
        packageMethod
        description
        cases {
          order
          name
          netWeight
          grossWeight
          outerLength
          outerWidth
          outerHeight
        }
        elements {
          type
          name
          slug
          value
          expr
          description
          overwriteValue
          cutting
        }
        createdAt
        updatedAt
        schedule {
          id
          projectId
          name
          m3
          case
          shipType
          stockingDate
          packagingDate
          shippingDate
          cutDate
          createdAt
          updatedAt
          products {
            nextToken
          }
        }
        areas {
          items {
            id
            productId
            name
            areaType
            order
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        decorations {
          items {
            id
            productId
            type
            name
            slug
            order
            unit
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const productsByProjectId = /* GraphQL */ `
  query ProductsByProjectId(
    $projectId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByProjectId(
      projectId: $projectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectId
        packageTypeId
        scheduleId
        userId
        pricingId
        packageTypeName
        quoteLineId
        name
        order
        productNumber
        quantity
        material
        tareWeight
        stamp
        destination
        packagingStart
        packagingEnd
        packageMethod
        description
        cases {
          order
          name
          netWeight
          grossWeight
          outerLength
          outerWidth
          outerHeight
        }
        elements {
          type
          name
          slug
          value
          expr
          description
          overwriteValue
          cutting
        }
        createdAt
        updatedAt
        schedule {
          id
          projectId
          name
          m3
          case
          shipType
          stockingDate
          packagingDate
          shippingDate
          cutDate
          createdAt
          updatedAt
          products {
            nextToken
          }
        }
        areas {
          items {
            id
            productId
            name
            areaType
            order
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        decorations {
          items {
            id
            productId
            type
            name
            slug
            order
            unit
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getArea = /* GraphQL */ `
  query GetArea($id: ID!) {
    getArea(id: $id) {
      id
      productId
      name
      areaType
      order
      description
      createdAt
      updatedAt
      components {
        items {
          id
          areaId
          name
          slug
          order
          elements {
            type
            name
            slug
            value
            expr
            description
            overwriteValue
            cutting
          }
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listAreas = /* GraphQL */ `
  query ListAreas(
    $filter: ModelAreaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAreas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productId
        name
        areaType
        order
        description
        createdAt
        updatedAt
        components {
          items {
            id
            areaId
            name
            slug
            order
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const areasByProductId = /* GraphQL */ `
  query AreasByProductId(
    $productId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelAreaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    areasByProductId(
      productId: $productId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        name
        areaType
        order
        description
        createdAt
        updatedAt
        components {
          items {
            id
            areaId
            name
            slug
            order
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getComponent = /* GraphQL */ `
  query GetComponent($id: ID!) {
    getComponent(id: $id) {
      id
      areaId
      name
      slug
      order
      elements {
        type
        name
        slug
        value
        expr
        description
        overwriteValue
        cutting
      }
      createdAt
      updatedAt
    }
  }
`;
export const listComponents = /* GraphQL */ `
  query ListComponents(
    $filter: ModelComponentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComponents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        areaId
        name
        slug
        order
        elements {
          type
          name
          slug
          value
          expr
          description
          overwriteValue
          cutting
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const componentsByAreaId = /* GraphQL */ `
  query ComponentsByAreaId(
    $areaId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelComponentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    componentsByAreaId(
      areaId: $areaId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        areaId
        name
        slug
        order
        elements {
          type
          name
          slug
          value
          expr
          description
          overwriteValue
          cutting
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDecorationComponent = /* GraphQL */ `
  query GetDecorationComponent($id: ID!) {
    getDecorationComponent(id: $id) {
      id
      productId
      type
      name
      slug
      order
      unit
      elements {
        type
        name
        slug
        value
        expr
        description
        overwriteValue
        cutting
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDecorationComponents = /* GraphQL */ `
  query ListDecorationComponents(
    $filter: ModelDecorationComponentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDecorationComponents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        type
        name
        slug
        order
        unit
        elements {
          type
          name
          slug
          value
          expr
          description
          overwriteValue
          cutting
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const decorationComponentsByProductId = /* GraphQL */ `
  query DecorationComponentsByProductId(
    $productId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelDecorationComponentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    decorationComponentsByProductId(
      productId: $productId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        type
        name
        slug
        order
        unit
        elements {
          type
          name
          slug
          value
          expr
          description
          overwriteValue
          cutting
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSummary = /* GraphQL */ `
  query GetSummary($id: ID!) {
    getSummary(id: $id) {
      id
      projectId
      pricingId
      pricingName
      productId
      quoteLineId
      name
      order
      quantity
      tareWeight
      productLength
      productWidth
      productHeight
      outerLength
      outerWidth
      outerHeight
      unitM3
      unitNW
      unitGrossWeight
      NW
      grossWeight
      m3
      unitPrice
      unit
      autoCalculate
      taxType
      overwritten
      createdAt
      updatedAt
    }
  }
`;
export const listSummaries = /* GraphQL */ `
  query ListSummaries(
    $filter: ModelSummaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSummaries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectId
        pricingId
        pricingName
        productId
        quoteLineId
        name
        order
        quantity
        tareWeight
        productLength
        productWidth
        productHeight
        outerLength
        outerWidth
        outerHeight
        unitM3
        unitNW
        unitGrossWeight
        NW
        grossWeight
        m3
        unitPrice
        unit
        autoCalculate
        taxType
        overwritten
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const summariesByProjectId = /* GraphQL */ `
  query SummariesByProjectId(
    $projectId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelSummaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    summariesByProjectId(
      projectId: $projectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectId
        pricingId
        pricingName
        productId
        quoteLineId
        name
        order
        quantity
        tareWeight
        productLength
        productWidth
        productHeight
        outerLength
        outerWidth
        outerHeight
        unitM3
        unitNW
        unitGrossWeight
        NW
        grossWeight
        m3
        unitPrice
        unit
        autoCalculate
        taxType
        overwritten
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInvoice = /* GraphQL */ `
  query GetInvoice($id: ID!) {
    getInvoice(id: $id) {
      id
      projectId
      accountId
      contactId
      userId
      groupId
      name
      invoiceNo
      issueDate
      billed
      billingDate
      taxTotal
      subtotal
      total
      url
      description
      accountName
      billingType
      accountAddress {
        address
        street
        city
        state
        postalCode
        country
      }
      contactName
      contactTitle
      groupName
      logoUrl
      groupBank {
        name
        branchName
        branchNumber
        type
        accountNumber
        swiftCode
      }
      groupAddress {
        address
        street
        city
        state
        postalCode
        country
      }
      phone
      fax
      createdAt
      updatedAt
      invoiceLines {
        items {
          id
          invoiceId
          pricingId
          pricingName
          quoteLineId
          name
          shippingDate
          salesType
          order
          m3
          grossWeight
          quantity
          amount
          minimumAmount
          actualAmount
          unit
          unitPrice
          taxRate
          taxTotal
          subtotal
          total
          taxType
          synced
          description
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listInvoices = /* GraphQL */ `
  query ListInvoices(
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectId
        accountId
        contactId
        userId
        groupId
        name
        invoiceNo
        issueDate
        billed
        billingDate
        taxTotal
        subtotal
        total
        url
        description
        accountName
        billingType
        accountAddress {
          address
          street
          city
          state
          postalCode
          country
        }
        contactName
        contactTitle
        groupName
        logoUrl
        groupBank {
          name
          branchName
          branchNumber
          type
          accountNumber
          swiftCode
        }
        groupAddress {
          address
          street
          city
          state
          postalCode
          country
        }
        phone
        fax
        createdAt
        updatedAt
        invoiceLines {
          items {
            id
            invoiceId
            pricingId
            pricingName
            quoteLineId
            name
            shippingDate
            salesType
            order
            m3
            grossWeight
            quantity
            amount
            minimumAmount
            actualAmount
            unit
            unitPrice
            taxRate
            taxTotal
            subtotal
            total
            taxType
            synced
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const invoicesByProjectId = /* GraphQL */ `
  query InvoicesByProjectId(
    $projectId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    invoicesByProjectId(
      projectId: $projectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectId
        accountId
        contactId
        userId
        groupId
        name
        invoiceNo
        issueDate
        billed
        billingDate
        taxTotal
        subtotal
        total
        url
        description
        accountName
        billingType
        accountAddress {
          address
          street
          city
          state
          postalCode
          country
        }
        contactName
        contactTitle
        groupName
        logoUrl
        groupBank {
          name
          branchName
          branchNumber
          type
          accountNumber
          swiftCode
        }
        groupAddress {
          address
          street
          city
          state
          postalCode
          country
        }
        phone
        fax
        createdAt
        updatedAt
        invoiceLines {
          items {
            id
            invoiceId
            pricingId
            pricingName
            quoteLineId
            name
            shippingDate
            salesType
            order
            m3
            grossWeight
            quantity
            amount
            minimumAmount
            actualAmount
            unit
            unitPrice
            taxRate
            taxTotal
            subtotal
            total
            taxType
            synced
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getInvoiceLine = /* GraphQL */ `
  query GetInvoiceLine($id: ID!) {
    getInvoiceLine(id: $id) {
      id
      invoiceId
      pricingId
      pricingName
      quoteLineId
      name
      shippingDate
      salesType
      order
      m3
      grossWeight
      quantity
      amount
      minimumAmount
      actualAmount
      unit
      unitPrice
      taxRate
      taxTotal
      subtotal
      total
      taxType
      synced
      description
      createdAt
      updatedAt
    }
  }
`;
export const listInvoiceLines = /* GraphQL */ `
  query ListInvoiceLines(
    $filter: ModelInvoiceLineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvoiceLines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        invoiceId
        pricingId
        pricingName
        quoteLineId
        name
        shippingDate
        salesType
        order
        m3
        grossWeight
        quantity
        amount
        minimumAmount
        actualAmount
        unit
        unitPrice
        taxRate
        taxTotal
        subtotal
        total
        taxType
        synced
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const invoiceLinesByInvoiceId = /* GraphQL */ `
  query InvoiceLinesByInvoiceId(
    $invoiceId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelInvoiceLineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    invoiceLinesByInvoiceId(
      invoiceId: $invoiceId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        invoiceId
        pricingId
        pricingName
        quoteLineId
        name
        shippingDate
        salesType
        order
        m3
        grossWeight
        quantity
        amount
        minimumAmount
        actualAmount
        unit
        unitPrice
        taxRate
        taxTotal
        subtotal
        total
        taxType
        synced
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSyncLog = /* GraphQL */ `
  query GetSyncLog($id: ID!) {
    getSyncLog(id: $id) {
      id
      status
      numberOfNewRecords
      numberOfDeletedRecords
      numberOfUpdatedRecords
      message
      sFObjectId
      createdAt
      updatedAt
      sFObject {
        id
        name
        tenantId
        label
        sfObjectName
        editable
        condition
        fields {
          name
          label
          apiName
          type
          required
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const listSyncLogs = /* GraphQL */ `
  query ListSyncLogs(
    $filter: ModelSyncLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSyncLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        numberOfNewRecords
        numberOfDeletedRecords
        numberOfUpdatedRecords
        message
        sFObjectId
        createdAt
        updatedAt
        sFObject {
          id
          name
          tenantId
          label
          sfObjectName
          editable
          condition
          fields {
            name
            label
            apiName
            type
            required
          }
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const syncLogsBySFObject = /* GraphQL */ `
  query SyncLogsBySFObject(
    $sFObjectId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelSyncLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    syncLogsBySFObject(
      sFObjectId: $sFObjectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        numberOfNewRecords
        numberOfDeletedRecords
        numberOfUpdatedRecords
        message
        sFObjectId
        createdAt
        updatedAt
        sFObject {
          id
          name
          tenantId
          label
          sfObjectName
          editable
          condition
          fields {
            name
            label
            apiName
            type
            required
          }
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
