/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const inviteAdmin = /* GraphQL */ `
  mutation InviteAdmin($input: InviteAdminInput!) {
    inviteAdmin(input: $input) {
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
export const inviteUser = /* GraphQL */ `
  mutation InviteUser($input: InviteUserInput!) {
    inviteUser(input: $input) {
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
export const removeUser = /* GraphQL */ `
  mutation RemoveUser($input: RemoveUserInput!) {
    removeUser(input: $input) {
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
export const syncAll = /* GraphQL */ `
  mutation SyncAll {
    syncAll
  }
`;
export const syncTenant = /* GraphQL */ `
  mutation SyncTenant($input: SyncTenantInput!) {
    syncTenant(input: $input)
  }
`;
export const syncObject = /* GraphQL */ `
  mutation SyncObject($input: SyncObjectInput!) {
    syncObject(input: $input)
  }
`;
export const createMetaTable = /* GraphQL */ `
  mutation CreateMetaTable(
    $input: CreateMetaTableInput!
    $condition: ModelMetaTableConditionInput
  ) {
    createMetaTable(input: $input, condition: $condition) {
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
export const updateMetaTable = /* GraphQL */ `
  mutation UpdateMetaTable(
    $input: UpdateMetaTableInput!
    $condition: ModelMetaTableConditionInput
  ) {
    updateMetaTable(input: $input, condition: $condition) {
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
export const deleteMetaTable = /* GraphQL */ `
  mutation DeleteMetaTable(
    $input: DeleteMetaTableInput!
    $condition: ModelMetaTableConditionInput
  ) {
    deleteMetaTable(input: $input, condition: $condition) {
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
export const createTenant = /* GraphQL */ `
  mutation CreateTenant(
    $input: CreateTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    createTenant(input: $input, condition: $condition) {
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
          packPhases {
            id
            name
            requiresPhoto
            showInKanBan
            numImgs
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
export const updateTenant = /* GraphQL */ `
  mutation UpdateTenant(
    $input: UpdateTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    updateTenant(input: $input, condition: $condition) {
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
          packPhases {
            id
            name
            requiresPhoto
            showInKanBan
            numImgs
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
export const deleteTenant = /* GraphQL */ `
  mutation DeleteTenant(
    $input: DeleteTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    deleteTenant(input: $input, condition: $condition) {
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
          packPhases {
            id
            name
            requiresPhoto
            showInKanBan
            numImgs
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
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
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
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
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
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
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
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
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
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
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
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
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
export const createUnit = /* GraphQL */ `
  mutation CreateUnit(
    $input: CreateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    createUnit(input: $input, condition: $condition) {
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
export const updateUnit = /* GraphQL */ `
  mutation UpdateUnit(
    $input: UpdateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    updateUnit(input: $input, condition: $condition) {
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
export const deleteUnit = /* GraphQL */ `
  mutation DeleteUnit(
    $input: DeleteUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    deleteUnit(input: $input, condition: $condition) {
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
export const createAccessLog = /* GraphQL */ `
  mutation CreateAccessLog(
    $input: CreateAccessLogInput!
    $condition: ModelAccessLogConditionInput
  ) {
    createAccessLog(input: $input, condition: $condition) {
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
export const updateAccessLog = /* GraphQL */ `
  mutation UpdateAccessLog(
    $input: UpdateAccessLogInput!
    $condition: ModelAccessLogConditionInput
  ) {
    updateAccessLog(input: $input, condition: $condition) {
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
export const deleteAccessLog = /* GraphQL */ `
  mutation DeleteAccessLog(
    $input: DeleteAccessLogInput!
    $condition: ModelAccessLogConditionInput
  ) {
    deleteAccessLog(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
      packPhases {
        id
        name
        requiresPhoto
        showInKanBan
        numImgs
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
      packPhases {
        id
        name
        requiresPhoto
        showInKanBan
        numImgs
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
      packPhases {
        id
        name
        requiresPhoto
        showInKanBan
        numImgs
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
export const createUsersGroups = /* GraphQL */ `
  mutation CreateUsersGroups(
    $input: CreateUsersGroupsInput!
    $condition: ModelUsersGroupsConditionInput
  ) {
    createUsersGroups(input: $input, condition: $condition) {
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
        packPhases {
          id
          name
          requiresPhoto
          showInKanBan
          numImgs
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
    }
  }
`;
export const updateUsersGroups = /* GraphQL */ `
  mutation UpdateUsersGroups(
    $input: UpdateUsersGroupsInput!
    $condition: ModelUsersGroupsConditionInput
  ) {
    updateUsersGroups(input: $input, condition: $condition) {
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
        packPhases {
          id
          name
          requiresPhoto
          showInKanBan
          numImgs
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
    }
  }
`;
export const deleteUsersGroups = /* GraphQL */ `
  mutation DeleteUsersGroups(
    $input: DeleteUsersGroupsInput!
    $condition: ModelUsersGroupsConditionInput
  ) {
    deleteUsersGroups(input: $input, condition: $condition) {
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
        packPhases {
          id
          name
          requiresPhoto
          showInKanBan
          numImgs
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
    }
  }
`;
export const createSFObject = /* GraphQL */ `
  mutation CreateSFObject(
    $input: CreateSFObjectInput!
    $condition: ModelSFObjectConditionInput
  ) {
    createSFObject(input: $input, condition: $condition) {
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
export const updateSFObject = /* GraphQL */ `
  mutation UpdateSFObject(
    $input: UpdateSFObjectInput!
    $condition: ModelSFObjectConditionInput
  ) {
    updateSFObject(input: $input, condition: $condition) {
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
export const deleteSFObject = /* GraphQL */ `
  mutation DeleteSFObject(
    $input: DeleteSFObjectInput!
    $condition: ModelSFObjectConditionInput
  ) {
    deleteSFObject(input: $input, condition: $condition) {
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
export const createVendor = /* GraphQL */ `
  mutation CreateVendor(
    $input: CreateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    createVendor(input: $input, condition: $condition) {
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
export const updateVendor = /* GraphQL */ `
  mutation UpdateVendor(
    $input: UpdateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    updateVendor(input: $input, condition: $condition) {
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
export const deleteVendor = /* GraphQL */ `
  mutation DeleteVendor(
    $input: DeleteVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    deleteVendor(input: $input, condition: $condition) {
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
export const createVendorsMaterials = /* GraphQL */ `
  mutation CreateVendorsMaterials(
    $input: CreateVendorsMaterialsInput!
    $condition: ModelVendorsMaterialsConditionInput
  ) {
    createVendorsMaterials(input: $input, condition: $condition) {
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
export const updateVendorsMaterials = /* GraphQL */ `
  mutation UpdateVendorsMaterials(
    $input: UpdateVendorsMaterialsInput!
    $condition: ModelVendorsMaterialsConditionInput
  ) {
    updateVendorsMaterials(input: $input, condition: $condition) {
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
export const deleteVendorsMaterials = /* GraphQL */ `
  mutation DeleteVendorsMaterials(
    $input: DeleteVendorsMaterialsInput!
    $condition: ModelVendorsMaterialsConditionInput
  ) {
    deleteVendorsMaterials(input: $input, condition: $condition) {
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
export const createMaterial = /* GraphQL */ `
  mutation CreateMaterial(
    $input: CreateMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    createMaterial(input: $input, condition: $condition) {
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
export const updateMaterial = /* GraphQL */ `
  mutation UpdateMaterial(
    $input: UpdateMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    updateMaterial(input: $input, condition: $condition) {
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
export const deleteMaterial = /* GraphQL */ `
  mutation DeleteMaterial(
    $input: DeleteMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    deleteMaterial(input: $input, condition: $condition) {
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
export const createMaterialType = /* GraphQL */ `
  mutation CreateMaterialType(
    $input: CreateMaterialTypeInput!
    $condition: ModelMaterialTypeConditionInput
  ) {
    createMaterialType(input: $input, condition: $condition) {
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
export const updateMaterialType = /* GraphQL */ `
  mutation UpdateMaterialType(
    $input: UpdateMaterialTypeInput!
    $condition: ModelMaterialTypeConditionInput
  ) {
    updateMaterialType(input: $input, condition: $condition) {
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
export const deleteMaterialType = /* GraphQL */ `
  mutation DeleteMaterialType(
    $input: DeleteMaterialTypeInput!
    $condition: ModelMaterialTypeConditionInput
  ) {
    deleteMaterialType(input: $input, condition: $condition) {
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
export const createPurchasing = /* GraphQL */ `
  mutation CreatePurchasing(
    $input: CreatePurchasingInput!
    $condition: ModelPurchasingConditionInput
  ) {
    createPurchasing(input: $input, condition: $condition) {
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
export const updatePurchasing = /* GraphQL */ `
  mutation UpdatePurchasing(
    $input: UpdatePurchasingInput!
    $condition: ModelPurchasingConditionInput
  ) {
    updatePurchasing(input: $input, condition: $condition) {
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
export const deletePurchasing = /* GraphQL */ `
  mutation DeletePurchasing(
    $input: DeletePurchasingInput!
    $condition: ModelPurchasingConditionInput
  ) {
    deletePurchasing(input: $input, condition: $condition) {
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
export const createPriceType = /* GraphQL */ `
  mutation CreatePriceType(
    $input: CreatePriceTypeInput!
    $condition: ModelPriceTypeConditionInput
  ) {
    createPriceType(input: $input, condition: $condition) {
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
export const updatePriceType = /* GraphQL */ `
  mutation UpdatePriceType(
    $input: UpdatePriceTypeInput!
    $condition: ModelPriceTypeConditionInput
  ) {
    updatePriceType(input: $input, condition: $condition) {
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
export const deletePriceType = /* GraphQL */ `
  mutation DeletePriceType(
    $input: DeletePriceTypeInput!
    $condition: ModelPriceTypeConditionInput
  ) {
    deletePriceType(input: $input, condition: $condition) {
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
export const createPricing = /* GraphQL */ `
  mutation CreatePricing(
    $input: CreatePricingInput!
    $condition: ModelPricingConditionInput
  ) {
    createPricing(input: $input, condition: $condition) {
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
export const updatePricing = /* GraphQL */ `
  mutation UpdatePricing(
    $input: UpdatePricingInput!
    $condition: ModelPricingConditionInput
  ) {
    updatePricing(input: $input, condition: $condition) {
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
export const deletePricing = /* GraphQL */ `
  mutation DeletePricing(
    $input: DeletePricingInput!
    $condition: ModelPricingConditionInput
  ) {
    deletePricing(input: $input, condition: $condition) {
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
export const createPackageType = /* GraphQL */ `
  mutation CreatePackageType(
    $input: CreatePackageTypeInput!
    $condition: ModelPackageTypeConditionInput
  ) {
    createPackageType(input: $input, condition: $condition) {
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
export const updatePackageType = /* GraphQL */ `
  mutation UpdatePackageType(
    $input: UpdatePackageTypeInput!
    $condition: ModelPackageTypeConditionInput
  ) {
    updatePackageType(input: $input, condition: $condition) {
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
export const deletePackageType = /* GraphQL */ `
  mutation DeletePackageType(
    $input: DeletePackageTypeInput!
    $condition: ModelPackageTypeConditionInput
  ) {
    deletePackageType(input: $input, condition: $condition) {
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
export const createBaseArea = /* GraphQL */ `
  mutation CreateBaseArea(
    $input: CreateBaseAreaInput!
    $condition: ModelBaseAreaConditionInput
  ) {
    createBaseArea(input: $input, condition: $condition) {
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
export const updateBaseArea = /* GraphQL */ `
  mutation UpdateBaseArea(
    $input: UpdateBaseAreaInput!
    $condition: ModelBaseAreaConditionInput
  ) {
    updateBaseArea(input: $input, condition: $condition) {
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
export const deleteBaseArea = /* GraphQL */ `
  mutation DeleteBaseArea(
    $input: DeleteBaseAreaInput!
    $condition: ModelBaseAreaConditionInput
  ) {
    deleteBaseArea(input: $input, condition: $condition) {
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
export const createBaseComponent = /* GraphQL */ `
  mutation CreateBaseComponent(
    $input: CreateBaseComponentInput!
    $condition: ModelBaseComponentConditionInput
  ) {
    createBaseComponent(input: $input, condition: $condition) {
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
export const updateBaseComponent = /* GraphQL */ `
  mutation UpdateBaseComponent(
    $input: UpdateBaseComponentInput!
    $condition: ModelBaseComponentConditionInput
  ) {
    updateBaseComponent(input: $input, condition: $condition) {
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
export const deleteBaseComponent = /* GraphQL */ `
  mutation DeleteBaseComponent(
    $input: DeleteBaseComponentInput!
    $condition: ModelBaseComponentConditionInput
  ) {
    deleteBaseComponent(input: $input, condition: $condition) {
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
export const createBaseDecorationComponent = /* GraphQL */ `
  mutation CreateBaseDecorationComponent(
    $input: CreateBaseDecorationComponentInput!
    $condition: ModelBaseDecorationComponentConditionInput
  ) {
    createBaseDecorationComponent(input: $input, condition: $condition) {
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
export const updateBaseDecorationComponent = /* GraphQL */ `
  mutation UpdateBaseDecorationComponent(
    $input: UpdateBaseDecorationComponentInput!
    $condition: ModelBaseDecorationComponentConditionInput
  ) {
    updateBaseDecorationComponent(input: $input, condition: $condition) {
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
export const deleteBaseDecorationComponent = /* GraphQL */ `
  mutation DeleteBaseDecorationComponent(
    $input: DeleteBaseDecorationComponentInput!
    $condition: ModelBaseDecorationComponentConditionInput
  ) {
    deleteBaseDecorationComponent(input: $input, condition: $condition) {
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
export const createSchedule = /* GraphQL */ `
  mutation CreateSchedule(
    $input: CreateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    createSchedule(input: $input, condition: $condition) {
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
      numImgs
      isShipped
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
          readyToPack
          packPhases {
            id
            name
            requiresPhoto
            showInKanBan
            numImgs
          }
          cases {
            order
            name
            phaseId
            isPacked
            netWeight
            grossWeight
            outerLength
            outerWidth
            outerHeight
            thumbnail
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
            numImgs
            isShipped
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
export const updateSchedule = /* GraphQL */ `
  mutation UpdateSchedule(
    $input: UpdateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    updateSchedule(input: $input, condition: $condition) {
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
      numImgs
      isShipped
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
          readyToPack
          packPhases {
            id
            name
            requiresPhoto
            showInKanBan
            numImgs
          }
          cases {
            order
            name
            phaseId
            isPacked
            netWeight
            grossWeight
            outerLength
            outerWidth
            outerHeight
            thumbnail
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
            numImgs
            isShipped
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
export const deleteSchedule = /* GraphQL */ `
  mutation DeleteSchedule(
    $input: DeleteScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    deleteSchedule(input: $input, condition: $condition) {
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
      numImgs
      isShipped
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
          readyToPack
          packPhases {
            id
            name
            requiresPhoto
            showInKanBan
            numImgs
          }
          cases {
            order
            name
            phaseId
            isPacked
            netWeight
            grossWeight
            outerLength
            outerWidth
            outerHeight
            thumbnail
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
            numImgs
            isShipped
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
      caseMarkNumImgs
      stockNumImgs
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
        packPhases {
          id
          name
          requiresPhoto
          showInKanBan
          numImgs
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
          numImgs
          isShipped
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
      caseMarkNumImgs
      stockNumImgs
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
        packPhases {
          id
          name
          requiresPhoto
          showInKanBan
          numImgs
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
          numImgs
          isShipped
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
      caseMarkNumImgs
      stockNumImgs
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
        packPhases {
          id
          name
          requiresPhoto
          showInKanBan
          numImgs
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
          numImgs
          isShipped
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
export const createQuote = /* GraphQL */ `
  mutation CreateQuote(
    $input: CreateQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    createQuote(input: $input, condition: $condition) {
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
export const updateQuote = /* GraphQL */ `
  mutation UpdateQuote(
    $input: UpdateQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    updateQuote(input: $input, condition: $condition) {
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
export const deleteQuote = /* GraphQL */ `
  mutation DeleteQuote(
    $input: DeleteQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    deleteQuote(input: $input, condition: $condition) {
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
export const createQuoteLine = /* GraphQL */ `
  mutation CreateQuoteLine(
    $input: CreateQuoteLineInput!
    $condition: ModelQuoteLineConditionInput
  ) {
    createQuoteLine(input: $input, condition: $condition) {
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
export const updateQuoteLine = /* GraphQL */ `
  mutation UpdateQuoteLine(
    $input: UpdateQuoteLineInput!
    $condition: ModelQuoteLineConditionInput
  ) {
    updateQuoteLine(input: $input, condition: $condition) {
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
export const deleteQuoteLine = /* GraphQL */ `
  mutation DeleteQuoteLine(
    $input: DeleteQuoteLineInput!
    $condition: ModelQuoteLineConditionInput
  ) {
    deleteQuoteLine(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
      readyToPack
      packPhases {
        id
        name
        requiresPhoto
        showInKanBan
        numImgs
      }
      cases {
        order
        name
        packPhases {
          id
          name
          requiresPhoto
          showInKanBan
          numImgs
        }
        phaseId
        isPacked
        netWeight
        grossWeight
        outerLength
        outerWidth
        outerHeight
        thumbnail
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
        numImgs
        isShipped
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
            readyToPack
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
      readyToPack
      packPhases {
        id
        name
        requiresPhoto
        showInKanBan
        numImgs
      }
      cases {
        order
        name
        packPhases {
          id
          name
          requiresPhoto
          showInKanBan
          numImgs
        }
        phaseId
        isPacked
        netWeight
        grossWeight
        outerLength
        outerWidth
        outerHeight
        thumbnail
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
        numImgs
        isShipped
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
            readyToPack
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
      readyToPack
      packPhases {
        id
        name
        requiresPhoto
        showInKanBan
        numImgs
      }
      cases {
        order
        name
        packPhases {
          id
          name
          requiresPhoto
          showInKanBan
          numImgs
        }
        phaseId
        isPacked
        netWeight
        grossWeight
        outerLength
        outerWidth
        outerHeight
        thumbnail
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
        numImgs
        isShipped
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
            readyToPack
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
export const createArea = /* GraphQL */ `
  mutation CreateArea(
    $input: CreateAreaInput!
    $condition: ModelAreaConditionInput
  ) {
    createArea(input: $input, condition: $condition) {
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
export const updateArea = /* GraphQL */ `
  mutation UpdateArea(
    $input: UpdateAreaInput!
    $condition: ModelAreaConditionInput
  ) {
    updateArea(input: $input, condition: $condition) {
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
export const deleteArea = /* GraphQL */ `
  mutation DeleteArea(
    $input: DeleteAreaInput!
    $condition: ModelAreaConditionInput
  ) {
    deleteArea(input: $input, condition: $condition) {
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
export const createComponent = /* GraphQL */ `
  mutation CreateComponent(
    $input: CreateComponentInput!
    $condition: ModelComponentConditionInput
  ) {
    createComponent(input: $input, condition: $condition) {
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
export const updateComponent = /* GraphQL */ `
  mutation UpdateComponent(
    $input: UpdateComponentInput!
    $condition: ModelComponentConditionInput
  ) {
    updateComponent(input: $input, condition: $condition) {
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
export const deleteComponent = /* GraphQL */ `
  mutation DeleteComponent(
    $input: DeleteComponentInput!
    $condition: ModelComponentConditionInput
  ) {
    deleteComponent(input: $input, condition: $condition) {
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
export const createDecorationComponent = /* GraphQL */ `
  mutation CreateDecorationComponent(
    $input: CreateDecorationComponentInput!
    $condition: ModelDecorationComponentConditionInput
  ) {
    createDecorationComponent(input: $input, condition: $condition) {
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
export const updateDecorationComponent = /* GraphQL */ `
  mutation UpdateDecorationComponent(
    $input: UpdateDecorationComponentInput!
    $condition: ModelDecorationComponentConditionInput
  ) {
    updateDecorationComponent(input: $input, condition: $condition) {
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
export const deleteDecorationComponent = /* GraphQL */ `
  mutation DeleteDecorationComponent(
    $input: DeleteDecorationComponentInput!
    $condition: ModelDecorationComponentConditionInput
  ) {
    deleteDecorationComponent(input: $input, condition: $condition) {
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
export const createSummary = /* GraphQL */ `
  mutation CreateSummary(
    $input: CreateSummaryInput!
    $condition: ModelSummaryConditionInput
  ) {
    createSummary(input: $input, condition: $condition) {
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
export const updateSummary = /* GraphQL */ `
  mutation UpdateSummary(
    $input: UpdateSummaryInput!
    $condition: ModelSummaryConditionInput
  ) {
    updateSummary(input: $input, condition: $condition) {
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
export const deleteSummary = /* GraphQL */ `
  mutation DeleteSummary(
    $input: DeleteSummaryInput!
    $condition: ModelSummaryConditionInput
  ) {
    deleteSummary(input: $input, condition: $condition) {
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
export const createInvoice = /* GraphQL */ `
  mutation CreateInvoice(
    $input: CreateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    createInvoice(input: $input, condition: $condition) {
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
export const updateInvoice = /* GraphQL */ `
  mutation UpdateInvoice(
    $input: UpdateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    updateInvoice(input: $input, condition: $condition) {
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
export const deleteInvoice = /* GraphQL */ `
  mutation DeleteInvoice(
    $input: DeleteInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    deleteInvoice(input: $input, condition: $condition) {
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
export const createInvoiceLine = /* GraphQL */ `
  mutation CreateInvoiceLine(
    $input: CreateInvoiceLineInput!
    $condition: ModelInvoiceLineConditionInput
  ) {
    createInvoiceLine(input: $input, condition: $condition) {
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
export const updateInvoiceLine = /* GraphQL */ `
  mutation UpdateInvoiceLine(
    $input: UpdateInvoiceLineInput!
    $condition: ModelInvoiceLineConditionInput
  ) {
    updateInvoiceLine(input: $input, condition: $condition) {
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
export const deleteInvoiceLine = /* GraphQL */ `
  mutation DeleteInvoiceLine(
    $input: DeleteInvoiceLineInput!
    $condition: ModelInvoiceLineConditionInput
  ) {
    deleteInvoiceLine(input: $input, condition: $condition) {
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
export const createSyncLog = /* GraphQL */ `
  mutation CreateSyncLog(
    $input: CreateSyncLogInput!
    $condition: ModelSyncLogConditionInput
  ) {
    createSyncLog(input: $input, condition: $condition) {
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
export const updateSyncLog = /* GraphQL */ `
  mutation UpdateSyncLog(
    $input: UpdateSyncLogInput!
    $condition: ModelSyncLogConditionInput
  ) {
    updateSyncLog(input: $input, condition: $condition) {
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
export const deleteSyncLog = /* GraphQL */ `
  mutation DeleteSyncLog(
    $input: DeleteSyncLogInput!
    $condition: ModelSyncLogConditionInput
  ) {
    deleteSyncLog(input: $input, condition: $condition) {
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
