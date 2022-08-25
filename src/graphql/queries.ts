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
      tenantId
      isAdmin
      createdAt
      updatedAt
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
        groups {
          items {
            id
            name
          }
        }
        sfObjects {
          items {
            id
            name
          }
        }
      }
      groups {
        items {
          id
          userId
          groupId
          role
          createdAt
          updatedAt
          group {
            id
            name
          }
        }
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
      tenantId
      isAdmin
      createdAt
      updatedAt
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
        groups {
          items {
            id
            name
          }
        }
        sfObjects {
          items {
            id
            name
          }
        }
      }
      groups {
        items {
          id
          userId
          groupId
          role
          createdAt
          updatedAt
          group {
            id
            name
          }
        }
      }
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
        tenantId
        isAdmin
        createdAt
        updatedAt
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
        userId
        accountId
        contactId
        accountName
        contactName
        keyDates {
          name
          m3
          case
          shipType
          stockingDate
          packagingDate
          shippingDate
          cutDate
        }
        name
        status
        inquiryDate
        quotationDate
        confidence
        description
        alert
        cancelled
        cancelReason
        createdAt
        updatedAt
        account {
          id
          name
          abbreviation
          site
        }
        user {
          id
          name
          firstName
          lastName
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
      userId
      accountId
      contactId
      quoteId
      accountName
      contactName
      keyDates {
        name
        m3
        case
        shipType
        stockingDate
        packagingDate
        shippingDate
        cutDate
      }
      name
      status
      inquiryDate
      quotationDate
      confidence
      description
      alert
      cancelled
      cancelReason
      createdAt
      updatedAt
      account {
        id
        name
        abbreviation
        site
        billingStreet
        billingCity
        billingState
        billingPostalCode
      }
      contact {
        lastName
        firstName
        title
      }
      user {
        id
        name
        firstName
        lastName
      }
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
        pricingId
        packageTypeName
        quoteLineId
        tareWeight
        name
        order
        productNumber
        quantity
        material
        stamp
        destination
        packagingStart
        packagingEnd
        packageMethod
        description
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
        unit
        purchaseUnit
        lossRate
        weight
        costCalculation
        defaultUnitCost
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
            vendor {
              id
              name
            }
          }
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
        packageTypeName
        isDefault
        name
        unitPrice
        unit
        minimumAmount
        autoCalculate
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
          showInQuoteSummary
          description
          createdAt
          updatedAt
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
      taxRate
      maxInventoryM3
      heatTreatmentRequestCode
      packingMaterialProducerRegistrationNumber
      tenantId
      createdAt
      updatedAt
      groupAddress {
        address
        street
        city
        state
        postalCode
        country
      }
      bank {
        name
        branchName
        branchNumber
        type
        accountNumber
        swiftCode
      }
      quoteInfo {
        greeting
        expiryDate
        paymentMethod
        destination
        dueDate
        description
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
        }
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
      taxRate
      maxInventoryM3
      heatTreatmentRequestCode
      packingMaterialProducerRegistrationNumber
      tenantId
      createdAt
      updatedAt
      groupAddress {
        address
        street
        city
        state
        postalCode
        country
      }
      bank {
        name
        branchName
        branchNumber
        type
        accountNumber
        swiftCode
      }
      quoteInfo {
        greeting
        expiryDate
        paymentMethod
        destination
        dueDate
        description
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
        }
      }
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
        name
      }
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
          name
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
        }
      }
      nextToken
    }
  }
`;
