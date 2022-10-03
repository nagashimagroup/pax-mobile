/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMetaTable = /* GraphQL */ `
  subscription OnCreateMetaTable {
    onCreateMetaTable {
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
export const onUpdateMetaTable = /* GraphQL */ `
  subscription OnUpdateMetaTable {
    onUpdateMetaTable {
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
export const onDeleteMetaTable = /* GraphQL */ `
  subscription OnDeleteMetaTable {
    onDeleteMetaTable {
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
export const onCreateTenant = /* GraphQL */ `
  subscription OnCreateTenant {
    onCreateTenant {
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
export const onUpdateTenant = /* GraphQL */ `
  subscription OnUpdateTenant {
    onUpdateTenant {
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
export const onDeleteTenant = /* GraphQL */ `
  subscription OnDeleteTenant {
    onDeleteTenant {
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
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount {
    onCreateAccount {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount {
    onUpdateAccount {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount {
    onDeleteAccount {
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
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient {
    onCreateClient {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient {
    onUpdateClient {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient {
    onDeleteClient {
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
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact {
    onCreateContact {
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
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact {
    onUpdateContact {
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
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact {
    onDeleteContact {
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
export const onCreateUnit = /* GraphQL */ `
  subscription OnCreateUnit {
    onCreateUnit {
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
export const onUpdateUnit = /* GraphQL */ `
  subscription OnUpdateUnit {
    onUpdateUnit {
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
export const onDeleteUnit = /* GraphQL */ `
  subscription OnDeleteUnit {
    onDeleteUnit {
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
export const onCreateAccessLog = /* GraphQL */ `
  subscription OnCreateAccessLog {
    onCreateAccessLog {
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
export const onUpdateAccessLog = /* GraphQL */ `
  subscription OnUpdateAccessLog {
    onUpdateAccessLog {
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
export const onDeleteAccessLog = /* GraphQL */ `
  subscription OnDeleteAccessLog {
    onDeleteAccessLog {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
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
export const onCreateUsersGroups = /* GraphQL */ `
  subscription OnCreateUsersGroups {
    onCreateUsersGroups {
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
export const onUpdateUsersGroups = /* GraphQL */ `
  subscription OnUpdateUsersGroups {
    onUpdateUsersGroups {
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
export const onDeleteUsersGroups = /* GraphQL */ `
  subscription OnDeleteUsersGroups {
    onDeleteUsersGroups {
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
export const onCreateSFObject = /* GraphQL */ `
  subscription OnCreateSFObject {
    onCreateSFObject {
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
export const onUpdateSFObject = /* GraphQL */ `
  subscription OnUpdateSFObject {
    onUpdateSFObject {
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
export const onDeleteSFObject = /* GraphQL */ `
  subscription OnDeleteSFObject {
    onDeleteSFObject {
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
export const onCreateVendor = /* GraphQL */ `
  subscription OnCreateVendor {
    onCreateVendor {
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
export const onUpdateVendor = /* GraphQL */ `
  subscription OnUpdateVendor {
    onUpdateVendor {
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
export const onDeleteVendor = /* GraphQL */ `
  subscription OnDeleteVendor {
    onDeleteVendor {
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
export const onCreateVendorsMaterials = /* GraphQL */ `
  subscription OnCreateVendorsMaterials {
    onCreateVendorsMaterials {
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
export const onUpdateVendorsMaterials = /* GraphQL */ `
  subscription OnUpdateVendorsMaterials {
    onUpdateVendorsMaterials {
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
export const onDeleteVendorsMaterials = /* GraphQL */ `
  subscription OnDeleteVendorsMaterials {
    onDeleteVendorsMaterials {
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
export const onCreateMaterial = /* GraphQL */ `
  subscription OnCreateMaterial {
    onCreateMaterial {
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
export const onUpdateMaterial = /* GraphQL */ `
  subscription OnUpdateMaterial {
    onUpdateMaterial {
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
export const onDeleteMaterial = /* GraphQL */ `
  subscription OnDeleteMaterial {
    onDeleteMaterial {
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
export const onCreateMaterialType = /* GraphQL */ `
  subscription OnCreateMaterialType {
    onCreateMaterialType {
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
export const onUpdateMaterialType = /* GraphQL */ `
  subscription OnUpdateMaterialType {
    onUpdateMaterialType {
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
export const onDeleteMaterialType = /* GraphQL */ `
  subscription OnDeleteMaterialType {
    onDeleteMaterialType {
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
export const onCreatePurchasing = /* GraphQL */ `
  subscription OnCreatePurchasing {
    onCreatePurchasing {
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
export const onUpdatePurchasing = /* GraphQL */ `
  subscription OnUpdatePurchasing {
    onUpdatePurchasing {
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
export const onDeletePurchasing = /* GraphQL */ `
  subscription OnDeletePurchasing {
    onDeletePurchasing {
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
export const onCreatePriceType = /* GraphQL */ `
  subscription OnCreatePriceType {
    onCreatePriceType {
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
export const onUpdatePriceType = /* GraphQL */ `
  subscription OnUpdatePriceType {
    onUpdatePriceType {
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
export const onDeletePriceType = /* GraphQL */ `
  subscription OnDeletePriceType {
    onDeletePriceType {
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
export const onCreatePricing = /* GraphQL */ `
  subscription OnCreatePricing {
    onCreatePricing {
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
export const onUpdatePricing = /* GraphQL */ `
  subscription OnUpdatePricing {
    onUpdatePricing {
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
export const onDeletePricing = /* GraphQL */ `
  subscription OnDeletePricing {
    onDeletePricing {
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
export const onCreatePackageType = /* GraphQL */ `
  subscription OnCreatePackageType {
    onCreatePackageType {
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
export const onUpdatePackageType = /* GraphQL */ `
  subscription OnUpdatePackageType {
    onUpdatePackageType {
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
export const onDeletePackageType = /* GraphQL */ `
  subscription OnDeletePackageType {
    onDeletePackageType {
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
export const onCreateBaseArea = /* GraphQL */ `
  subscription OnCreateBaseArea {
    onCreateBaseArea {
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
export const onUpdateBaseArea = /* GraphQL */ `
  subscription OnUpdateBaseArea {
    onUpdateBaseArea {
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
export const onDeleteBaseArea = /* GraphQL */ `
  subscription OnDeleteBaseArea {
    onDeleteBaseArea {
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
export const onCreateBaseComponent = /* GraphQL */ `
  subscription OnCreateBaseComponent {
    onCreateBaseComponent {
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
export const onUpdateBaseComponent = /* GraphQL */ `
  subscription OnUpdateBaseComponent {
    onUpdateBaseComponent {
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
export const onDeleteBaseComponent = /* GraphQL */ `
  subscription OnDeleteBaseComponent {
    onDeleteBaseComponent {
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
export const onCreateBaseDecorationComponent = /* GraphQL */ `
  subscription OnCreateBaseDecorationComponent {
    onCreateBaseDecorationComponent {
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
export const onUpdateBaseDecorationComponent = /* GraphQL */ `
  subscription OnUpdateBaseDecorationComponent {
    onUpdateBaseDecorationComponent {
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
export const onDeleteBaseDecorationComponent = /* GraphQL */ `
  subscription OnDeleteBaseDecorationComponent {
    onDeleteBaseDecorationComponent {
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
export const onCreateSchedule = /* GraphQL */ `
  subscription OnCreateSchedule {
    onCreateSchedule {
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
export const onUpdateSchedule = /* GraphQL */ `
  subscription OnUpdateSchedule {
    onUpdateSchedule {
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
export const onDeleteSchedule = /* GraphQL */ `
  subscription OnDeleteSchedule {
    onDeleteSchedule {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onCreateQuote = /* GraphQL */ `
  subscription OnCreateQuote {
    onCreateQuote {
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
export const onUpdateQuote = /* GraphQL */ `
  subscription OnUpdateQuote {
    onUpdateQuote {
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
export const onDeleteQuote = /* GraphQL */ `
  subscription OnDeleteQuote {
    onDeleteQuote {
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
export const onCreateQuoteLine = /* GraphQL */ `
  subscription OnCreateQuoteLine {
    onCreateQuoteLine {
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
export const onUpdateQuoteLine = /* GraphQL */ `
  subscription OnUpdateQuoteLine {
    onUpdateQuoteLine {
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
export const onDeleteQuoteLine = /* GraphQL */ `
  subscription OnDeleteQuoteLine {
    onDeleteQuoteLine {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateArea = /* GraphQL */ `
  subscription OnCreateArea {
    onCreateArea {
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
export const onUpdateArea = /* GraphQL */ `
  subscription OnUpdateArea {
    onUpdateArea {
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
export const onDeleteArea = /* GraphQL */ `
  subscription OnDeleteArea {
    onDeleteArea {
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
export const onCreateComponent = /* GraphQL */ `
  subscription OnCreateComponent {
    onCreateComponent {
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
export const onUpdateComponent = /* GraphQL */ `
  subscription OnUpdateComponent {
    onUpdateComponent {
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
export const onDeleteComponent = /* GraphQL */ `
  subscription OnDeleteComponent {
    onDeleteComponent {
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
export const onCreateDecorationComponent = /* GraphQL */ `
  subscription OnCreateDecorationComponent {
    onCreateDecorationComponent {
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
export const onUpdateDecorationComponent = /* GraphQL */ `
  subscription OnUpdateDecorationComponent {
    onUpdateDecorationComponent {
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
export const onDeleteDecorationComponent = /* GraphQL */ `
  subscription OnDeleteDecorationComponent {
    onDeleteDecorationComponent {
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
export const onCreateSummary = /* GraphQL */ `
  subscription OnCreateSummary {
    onCreateSummary {
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
export const onUpdateSummary = /* GraphQL */ `
  subscription OnUpdateSummary {
    onUpdateSummary {
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
export const onDeleteSummary = /* GraphQL */ `
  subscription OnDeleteSummary {
    onDeleteSummary {
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
export const onCreateInvoice = /* GraphQL */ `
  subscription OnCreateInvoice {
    onCreateInvoice {
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
export const onUpdateInvoice = /* GraphQL */ `
  subscription OnUpdateInvoice {
    onUpdateInvoice {
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
export const onDeleteInvoice = /* GraphQL */ `
  subscription OnDeleteInvoice {
    onDeleteInvoice {
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
export const onCreateInvoiceLine = /* GraphQL */ `
  subscription OnCreateInvoiceLine {
    onCreateInvoiceLine {
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
export const onUpdateInvoiceLine = /* GraphQL */ `
  subscription OnUpdateInvoiceLine {
    onUpdateInvoiceLine {
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
export const onDeleteInvoiceLine = /* GraphQL */ `
  subscription OnDeleteInvoiceLine {
    onDeleteInvoiceLine {
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
export const onCreateSyncLog = /* GraphQL */ `
  subscription OnCreateSyncLog {
    onCreateSyncLog {
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
export const onUpdateSyncLog = /* GraphQL */ `
  subscription OnUpdateSyncLog {
    onUpdateSyncLog {
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
export const onDeleteSyncLog = /* GraphQL */ `
  subscription OnDeleteSyncLog {
    onDeleteSyncLog {
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
