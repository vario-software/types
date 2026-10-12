import {
    EavAccount, EavAccountaddress, EavAccountlisting, EavAccountperson, 
    EavArticle, EavArticleListing, EavArticleListingDescription, 
    EavArticleserialnumber, EavAsset, EavContact, EavCrmactivity, EavCrmdeal, 
    EavCrmproject, EavCrmtask, EavDocument, EavDocumentline, 
    EavDocumentlinecomponent, EavFabrication, EavFabricationline, 
    EavFabricationlinecomponent, EavProductgroup, EavProductmaingroup, 
    EavSalesagent, EavShelfdocument, EavShelfshare, EavTextenumeration, 
    EavVariantattributelisting, EavVariantvaluelisting
} from "./eav_types"

export const enum AccessoryInsertTerm {
    MANUAL = 'MANUAL',
    AUTOMATIC_QUANTITY_IF_ACCESSORY_INSERTED = 'AUTOMATIC_QUANTITY_IF_ACCESSORY_INSERTED',
    AUTOMATIC_PROPORTIONAL_QUANTITY = 'AUTOMATIC_PROPORTIONAL_QUANTITY',
    AUTOMATIC_FIXED_QUANTITY = 'AUTOMATIC_FIXED_QUANTITY'
}

export interface Account {

    /**
     * Note.
     */
    note: string;

    /**
     * Is the tax liability reversed under §13b UStG?
     */
    taxLiabilityReversed: boolean;

    /**
     * All addresses except the default address.
     */
    addresses: Array<AccountAddress>;

    /**
     * Total receivables currency (ISO Alpha-3).
     */
    receivablesSumCurrencyCode: string;

    /**
     * Display name.
     */
    displayName: string;

    /**
     * Is the account anonymized?
     */
    anonymized: boolean;

    /**
     * Competent local court.
     */
    localCourt: string;

    /**
     * Remark.
     */
    remark: string;

    /**
     * Commercial register identifier.
     */
    companyRegister: string;

    /**
     * Tax numbers.
     */
    taxIds: Array<TaxIdForeignCountry>;

    /**
     * Manufacturer of this account
     */
    manufacturer: AccountManufacturer;

    /**
     * Address number.
     */
    number: string;

    /**
     * Business relation type.
     */
    businessRelationType: BusinessRelationType;

    /**
     * first contact type for this account
     */
    initialContactTypeRef: ApiCreatableReference;

    /**
     * Account time zone (or time zone offset).
     */
    accountZoneId: AccountZoneId;

    /**
     * Supplier of this account
     */
    supplier: Supplier;

    /**
     * Sales Agent of this account
     */
    salesAgent: SalesAgent;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Dunning block.
     */
    dunningBlock: boolean;

    /**
     * Total payables currency (ISO Alpha-3).
     */
    payablesSumCurrencyCode: string;

    /**
     * Credit limit currency (ISO Alpha-3).
     */
    loanCurrencyCode: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * list of types, this account is used for (e.g. CUSTOMER, SUPPLIER, 
     */
    types: Array<AccountType>;

    /**
     * Default address of account
     */
    defaultAddress: AccountAddress;

    /**
     * Total payables.
     */
    payablesSum: number;

    /**
     * Total receivables.
     */
    receivablesSum: number;

    /**
     * Cost center.
     */
    costCenter: string;

    /**
     * companyLegal for this account
     */
    companyLegalRef: ApiCreatableReference;

    /**
     * Custom account data
     */
    custom: EavAccount;

    /**
     * Tax number.
     */
    taxNumber: string;

    /**
     * Is account active?
     */
    active: boolean;

    /**
     * Responsible user.
     */
    responsibleUserRef: ApiObjectReference;

    /**
     * Account language.
     */
    languageCode: string;

    /**
     * Initial contact at.
     */
    initialContactAt: ScriptingDate;

    /**
     * calculation mode of this document
     */
    calculationMode: CalculationMode;

    /**
     * Has this Account a possible duplicate
     */
    hasActiveDuplicates: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * List of tags
     */
    tags: Array<TagDto>;

    /**
     * Contact person.
     */
    persons: Array<AccountPerson>;

    /**
     * Default contact person.
     */
    defaultPerson: AccountPerson;

    /**
     * Reference to the target document category after the picking.
     */
    afterPickingTargetDocumentTypeRef: ApiObjectReference;

    /**
     * Account relations.
     */
    relations: Array<AccountRelation>;

    /**
     * currency code  IsoAlpha3
     */
    currencyCode: string;

    /**
     * Currently calculated values for the account credit limit.
     */
    loanValue: AccountLoanValue;

    /**
     * Report group, if it deviates from the default.
     */
    reportGroupRef: ApiObjectReference;

    /**
     * Customer of this account
     */
    customer: Customer;
}

export interface AccountAddress {

    /**
     * salutation for this address
     */
    salutationRef: ApiObjectReference;

    /**
     * City
     */
    city: string;

    /**
     * Deviating delivery method.
     */
    deviatingDeliveryMethodRef: ApiObjectReference;

    /**
     * latitude
     */
    latitude: number;

    /**
     * EN16931 profile.
     */
    en16931Profile: EN16931Profile;

    /**
     * Special remark.
     */
    remark: string;

    /**
     * Parcel provider
     */
    parcelProvider: string;

    /**
     * Region
     */
    regionRef: ApiObjectReference;

    /**
     * Title
     */
    titleRef: ApiCreatableReference;

    /**
     * Post office box
     */
    postOfficeBox: string;

    /**
     * Country code
     */
    countryCode: string;

    /**
     * Street
     */
    street: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * EORI number.
     */
    eoriNumber: string;

    /**
     * Longitude
     */
    longitude: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * the kind of usages for this address
     */
    types: Array<ApiCreatableReference>;

    /**
     * GLN/ILN as location identifier for this address
     */
    globalLocationNumber: string;

    /**
     * Leitweg-ID
     */
    buyerReference: string;

    /**
     * Deviating payment method.
     */
    deviatingPaymentMethodRef: ApiObjectReference;

    /**
     * Custom data.
     */
    custom: EavAccountaddress;

    /**
     * Postcode
     */
    postcode: string;

    /**
     * Associated manufacturer.
     */
    manufacturerRef: ApiObjectReference;

    /**
     * Default for the account type.
     */
    defaultForType: boolean;

    /**
     * Address language.
     */
    languageCode: string;

    /**
     * calculation mode of this address
     */
    calculationMode: CalculationMode;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Additional address line1
     */
    additionalAddressLine1: string;

    /**
     * Tax identification number (VAT ID).
     */
    taxIdentificationNumber: string;

    /**
     * Parcel station
     */
    parcelStation: string;

    /**
     * Additional address line2
     */
    additionalAddressLine2: string;

    /**
     * Street address number
     */
    streetAddressNumber: string;

    /**
     * Parcel station customer number
     */
    parcelStationCustomerNumber: string;

    /**
     * Default contacts
     */
    defaultContacts: Map<ContactTypeType,Contact>;

    /**
     * Name3
     */
    name3: string;

    /**
     * Homepage URL
     */
    homepageUrl: string;

    /**
     * Deviating delivery terms.
     */
    deviatingDeliveryTermRef: ApiObjectReference;

    /**
     * State of the last validation of the tax id number/ UST-ID-Nr.?
     */
    taxIdVerificationState: TaxIdVerificationState;

    /**
     * Name2
     */
    name2: string;

    /**
     * Name1
     */
    name1: string;

    /**
     * Deviating payment terms.
     */
    deviatingPaymentTermRef: ApiObjectReference;

    /**
     * Contacts
     */
    contacts: Array<Contact>;

    /**
     * is this the default address of the account
     */
    defaultAddress: boolean;
}

export interface AccountBankdetail {

    /**
     * Is active?
     */
    active: boolean;

    /**
     * post-code of the bank
     */
    bankPostCode: string;

    /**
     * name of the bank
     */
    bankName: string;

    /**
     * account from, if differs from account-address
     */
    accountFrom: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Tax performance location type for which this is the main bank account.
     */
    mainBankAccountType: TaxPerformanceLocationType;

    /**
     * city of the bank
     */
    bankCity: string;

    /**
     * origin type
     */
    originType: AccountBankdetail$OriginType;

    /**
     * Is default bank?
     */
    defaultBank: boolean;

    /**
     * IBAN
     */
    iban: string;

    /**
     * origin info
     */
    originInfo: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * BIC
     */
    bic: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum AccountBankdetail$OriginType {
    FRONTEND = 'FRONTEND',
    IMPORT = 'IMPORT'
}

export const enum AccountBillingType {
    GROSS = 'GROSS',
    NET = 'NET'
}

export interface AccountListing {

    /**
     * Is the customer listed?
     */
    customerListed: boolean;

    /**
     * Is the manufacturer listed?
     */
    manufacturerListed: boolean;

    /**
     * Sales channel.
     */
    salesChannelRef: ApiObjectReference;

    /**
     * Custom field.
     */
    custom: EavAccountlisting;

    /**
     * Address.
     */
    accountRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface AccountLoanValue {

    /**
     * Amount not taken into account.
     */
    unconsideredAmount: number;

    /**
     * Account.
     */
    accountId: number;

    /**
     * Amount from orders.
     */
    nonInvoicedDocumentLoan: number;

    /**
     * Amount from payables (negative).
     */
    payablesSum: number;

    /**
     * Credit limit.
     */
    maximalLoan: number;

    /**
     * Credit amount exceeded.
     */
    exceededLoan: number;

    /**
     * Current document amount.
     */
    currentDocumentLoan: number;

    /**
     * Current loan.
     */
    currentLoan: number;

    /**
     * Amount from receivables.
     */
    receivableLoan: number;

    /**
     * Remaining amount until the credit limit is reached.
     */
    remainingLoan: number;
}

export interface AccountManufacturer {

    /**
     * active true/false
     */
    active: boolean;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Is the recommended retail price mandatory?
     */
    forcedRecommendedRetailPrice: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Descriptions.
     */
    labels: Array<AccountManufacturerDescription>;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface AccountManufacturerDescription {

    /**
     * Manufacturer URL.
     */
    manufacturerUrl: string;

    /**
     * Description.
     */
    description: string;

    /**
     * Label.
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Description language.
     */
    languageCode: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum AccountOrderStackProcessingType {
    ACCORDING_TO_CRITERIA = 'ACCORDING_TO_CRITERIA',
    ONLY_FULL_ORDER = 'ONLY_FULL_ORDER',
    ONLY_FULL_ORDER_LINES = 'ONLY_FULL_ORDER_LINES',
    AVAILABLE_QUANTITIES = 'AVAILABLE_QUANTITIES',
    NO_PROCESSING = 'NO_PROCESSING',
    FULL_ORDER_LINES_MAX_TWO_PARTIAL_DELIVERIES = 'FULL_ORDER_LINES_MAX_TWO_PARTIAL_DELIVERIES',
    AVAILABLE_QUANTITIES_MAX_TWO_PARTIAL_DELIVERIES = 'AVAILABLE_QUANTITIES_MAX_TWO_PARTIAL_DELIVERIES',
    FULL_ORDER_LINES_MAX_THREE_PARTIAL_DELIVERIES = 'FULL_ORDER_LINES_MAX_THREE_PARTIAL_DELIVERIES',
    AVAILABLE_QUANTITIES_MAX_THREE_PARTIAL_DELIVERIES = 'AVAILABLE_QUANTITIES_MAX_THREE_PARTIAL_DELIVERIES',
    AVAILABLE_QUANTITIES_FINISH_ORDER = 'AVAILABLE_QUANTITIES_FINISH_ORDER'
}

export interface AccountPerson {

    /**
     * salutation for this person
     */
    salutationRef: ApiObjectReference;

    /**
     * Lastname
     */
    lastName: string;

    /**
     * Gender
     */
    gender: PersonGenderType;

    /**
     * Special remark.
     */
    remark: string;

    /**
     * Locale
     */
    locale: string;

    /**
     * Title
     */
    titleRef: ApiCreatableReference;

    /**
     * First contact type for this account person
     */
    initialContactTypeRef: ApiCreatableReference;

    /**
     * jobType
     */
    jobTypeRef: ApiCreatableReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * Custom data.
     */
    custom: EavAccountperson;

    /**
     * Job area
     */
    jobArea: string;

    /**
     * Is this active?
     */
    active: boolean;

    /**
     * Date of birth
     */
    dateOfBirth: ScriptingDate;

    /**
     * Label.
     */
    label: string;

    /**
     * Initial contact at.
     */
    initialContactAt: ScriptingDate;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Default contact person.
     */
    defaultPerson: boolean;

    /**
     * List of tags
     */
    tags: Array<TagDto>;

    /**
     * Default contacts
     */
    defaultContacts: Map<ContactTypeType,Contact>;

    /**
     * First name
     */
    firstName: string;

    /**
     * Assigned user (for the own account).
     */
    userRef: ApiObjectReference;

    /**
     * Sort order.
     */
    sortOrder: number;

    /**
     * Comment.
     */
    comment: string;

    /**
     * Middle name
     */
    middleName: string;

    /**
     * List of contacts
     */
    contacts: Array<Contact>;
}

export interface AccountRelation {

    /**
     * Relation type
     */
    relationTypeRef: ApiCreatableReference;

    /**
     * Related account
     */
    relatedAccountRef: ApiObjectReference;

    /**
     * Comment.
     */
    comment: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum AccountType {
    CUSTOMER = 'CUSTOMER',
    SUPPLIER = 'SUPPLIER',
    MANUFACTURER = 'MANUFACTURER',
    SERVICE_PROVIDER = 'SERVICE_PROVIDER',
    MERCHANT = 'MERCHANT',
    SALES_AGENT = 'SALES_AGENT',
    COMPANY = 'COMPANY',
    PROSPECTIVE = 'PROSPECTIVE'
}

export const enum AccountZoneId {
    ACT = 'ACT',
    AET = 'AET',
    AGT = 'AGT',
    ART = 'ART',
    AST = 'AST',
    BET = 'BET',
    BST = 'BST',
    CAT = 'CAT',
    CNT = 'CNT',
    CST = 'CST',
    CTT = 'CTT',
    EAT = 'EAT',
    ECT = 'ECT',
    IET = 'IET',
    IST = 'IST',
    JST = 'JST',
    MIT = 'MIT',
    NET = 'NET',
    NST = 'NST',
    PLT = 'PLT',
    PNT = 'PNT',
    PRT = 'PRT',
    PST = 'PST',
    SST = 'SST',
    VST = 'VST',
    EST = 'EST',
    MST = 'MST',
    HST = 'HST'
}

export interface AdditionalParameter {

    /**
     * value for this parameter
     */
    value: object;

    /**
     * key for this parameter
     */
    key: string;
}

export interface ApiCreatableReference {

    /**
     * a short description
     */
    description: string;

    /**
     * Identifier
     */
    id: number;

    /**
     * a label
     */
    label: string;
}

export interface ApiObjectReference {

    /**
     * Active.
     */
    active: boolean;

    /**
     * a short description
     */
    description: string;

    /**
     * Identifier
     */
    id: number;

    /**
     * a label
     */
    label: string;
}

export interface Article {

    /**
     * Component fabrication.
     */
    fabricationOfComponents: FabricationOfComponents;

    /**
     * Label printing settings.
     */
    printLabelSettings: ArticlePrintLabelSettings;

    /**
     * Customs tariff number.
     */
    customsTariffNumber: string;

    /**
     * Dangerous goods information.
     */
    dangerousGoodInformation: DangerousGoodInformation;

    /**
     * is this product purchasable
     */
    purchasable: boolean;

    /**
     * Product custom data
     */
    listingCustom: EavArticleListing;

    /**
     * base capacity unit
     */
    baseCapacityUnit: UnitTypeReference;

    /**
     * Serial number labeling type.
     */
    serialNumberLabelingType: ArticleSerialNumberLabelingType;

    /**
     * Average purchase price (initial value).
     */
    initialAvgPurchasePrice: number;

    /**
     * is this product sellable without any quantity at the stock
     */
    sellableWithoutStock: boolean;

    /**
     * gross Volume in cubic meters
     */
    grossVolumeInCubicMeters: number;

    /**
     * Is the article still deliverable?
     */
    deliverable: boolean;

    /**
     * unit-type of this product
     */
    productUnit: UnitTypeReference;

    /**
     * Is the recommended retail price mandatory?
     */
    forcedRecommendedRetailPrice: boolean;

    /**
     * Warranty in months.
     */
    warrantyInMonths: number;

    /**
     * unique product number
     */
    number: string;

    /**
     * weight and size w.o. packaging
     */
    netMetric: Article$Metric;

    /**
     * Options for calculating the availability.
     */
    availabilityDetermination: ArticleAvailabilityDetermination;

    /**
     * is this product mergeable to another package-variant
     */
    mergeable: boolean;

    /**
     * Is this article eligible for the payment discount?
     */
    cashDiscountable: boolean;

    /**
     * Should the average purchase price be calculated?
     */
    determineAvgPurchasePrice: boolean;

    /**
     * Dissolution into container articles on incoming goods.
     */
    onGoodsArrivalConvertIntoBundleArticleRef: ApiObjectReference;

    /**
     * Discount group.
     */
    discountGroupRef: ApiObjectReference;

    /**
     * Drop shipping policy.
     */
    dropShippingPolicy: DropShippingPolicy;

    /**
     * Information about the connection between the asset and the Article.
     */
    articleAssetInformation: ArticleAssetInformation;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * serial-type of this article
     */
    serialType: ArticleSerialType;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * reference to TaxSchema
     */
    taxSchemaRef: ApiObjectReference;

    /**
     * reference to DeliveryMethod
     */
    deliveryMethodRef: ApiObjectReference;

    /**
     * Target trading margin.
     */
    targetTradingMargin: number;

    /**
     * Fabrication.
     */
    fabrication: boolean;

    /**
     * active
     */
    active: boolean;

    /**
     * Responsible user.
     */
    responsibleUserRef: ApiObjectReference;

    /**
     * Listing identifier.
     */
    listingId: number;

    /**
     * Restriction to a country.
     */
    languageCode: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Product tags.
     */
    tags: Array<TagDto>;

    /**
     * is this product solvable to another package-variant
     */
    solvable: boolean;

    /**
     * Is this returnable?
     */
    returnable: boolean;

    /**
     * weight and size inc. packaging
     */
    grossMetric: Article$Metric;

    /**
     * Sales unit.
     */
    salesUnit: number;

    /**
     * name of this product
     */
    name: string;

    /**
     * Last listingState update.
     */
    listingStateChangeTime: ScriptingDateTime;

    /**
     * Work unit in minutes.
     */
    workUnitInMinutes: number;

    /**
     * Country code
     */
    countryOfOriginRef: CountryReference;

    /**
     * description custom data
     */
    listingDescriptionCustom: EavArticleListingDescription;

    /**
     * Freely pickable.
     */
    freelyPickable: boolean;

    /**
     * Is the tax liability reversed under §13b UStG?
     */
    taxLiabilityReversed: boolean;

    /**
     * Note.
     */
    note: string;

    /**
     * A lot must be assigned when booking into a sales storage (for serial types LOT and BEST_BEFORE).
     */
    lotOnlyRequiredWhenBookedToSalesStorage: boolean;

    /**
     * Allowed types of picking.
     */
    pickingType: ArticlePickingType;

    /**
     * Only for quota articles: should the billing print a note that no quota is available?
     */
    printWarningIfNoContingentAvailable: boolean;

    /**
     * description of this product
     */
    description: string;

    /**
     * Special remark.
     */
    remark: string;

    /**
     * is this product sellable
     */
    sellable: boolean;

    /**
     * reference to Product Group
     */
    productGroupRef: ApiObjectReference;

    /**
     * capacity
     */
    capacity: number;

    /**
     * Predefined production costs.
     */
    defaultFabricationCost: number;

    /**
     * gross sales prices
     */
    grossSalesPrice: number;

    /**
     * Minimum remaining shelf life incoming (days): minimum remaining shelf life in days an article must still have when booked into a sales storage.
     */
    minimumRemainingDaysBeforeExpiryDateOnGoodsReceipt: number;

    /**
     * Last purchase price (initial value).
     */
    initialLastPurchasePrice: number;

    /**
     * Eligible for inclusion in order proposals.
     */
    permissibleForOrderProposal: boolean;

    /**
     * reference to Product
     */
    productRef: ApiObjectReference;

    /**
     * Shipping label printing.
     */
    shippingLabelPrinting: boolean;

    /**
     * Is this article eligible for discount?
     */
    discountable: boolean;

    /**
     * alternative name of this product
     */
    alternativeName: string;

    /**
     * Quota article.
     */
    contingentArticleRef: ApiObjectReference;

    /**
     * base capacity
     */
    baseCapacity: number;

    /**
     * type of this article
     */
    productType: ProductType;

    /**
     * Article number.
     */
    manufacturerArticleNumber: string;

    /**
     * Is this the product's base article?
     */
    baseArticle: boolean;

    /**
     * The article is dangerous goods.
     */
    dangerousGoods: boolean;

    /**
     * all (external) product numbers (SKU, EAN, ...)
     */
    identifiers: Array<ArticleIdentifier>;

    /**
     * Product custom data
     */
    custom: EavArticle;

    /**
     * Expiry date type.
     */
    expiryDateType: ArticleSerialExpiryDateType;

    /**
     * Demand determination based on reservations only.
     */
    needsAssessmentOnlyOnReservationBasis: boolean;

    /**
     * Manufacturer.
     */
    manufacturerRef: ApiObjectReference;

    /**
     * net sales prices
     */
    netSalesPrice: number;

    /**
     * capacity unit
     */
    capacityUnit: UnitTypeReference;

    /**
     * Kommissionierungshinweis
     */
    storageInfo: string;

    /**
     * Base price unit.
     */
    basePriceUnit: number;

    /**
     * Should the article be listed?
     */
    listed: boolean;

    /**
     * Is this article eligible for commission?
     */
    commissionable: boolean;

    /**
     * Manual fabrication only.
     */
    onlyManualFabrication: boolean;

    /**
     * Minimum remaining shelf life outgoing (days): minimum remaining shelf life in days an article must still have when sold.
     */
    minimumRemainingDaysBeforeExpiryDateForGoodsIssued: number;

    /**
     * Price base.
     */
    priceBase: ArticlePriceBase;

    /**
     * Is the article deliverable on its own?
     */
    availableAlone: boolean;

    /**
     * Current listing state.
     */
    listingState: ListingState;
}

export interface Article$Metric {

    /**
     * size
     */
    sizeX: number;

    /**
     * weight
     */
    weight: number;

    /**
     * size unit
     */
    sizeUnit: UnitTypeReference;

    /**
     * size
     */
    sizeY: number;

    /**
     * weight unit
     */
    weightUnit: UnitTypeReference;

    /**
     * size
     */
    sizeZ: number;
}

export interface ArticleAssetInformation {

    /**
     * Create assets automatically on stock receipt.
     */
    createAssetOnStorageEntry: boolean;

    /**
     * Create the asset automatically on sale.
     */
    createAssetOnSale: boolean;

    /**
     * Create the asset for this document category.
     */
    createAssetOnDocumentCategory: AssetCreateOnDocumentCategory;

    /**
     * Asset type to create.
     */
    createWithAssetType: AssetType;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ArticleAvailabilityDetermination {

    /**
     * How ordered quantities are handled.
     */
    ordered: ArticleAvailabilityDetermination$Operation;

    /**
     * How reserved quantities are handled.
     */
    reserved: ArticleAvailabilityDetermination$Operation;

    /**
     * How the stock is handled.
     */
    inStock: ArticleAvailabilityDetermination$Operation;

    /**
     * How quantities in picking are handled.
     */
    inPicking: ArticleAvailabilityDetermination$Operation;

    /**
     * How reorder levels are handled.
     */
    reporting: ArticleAvailabilityDetermination$Operation;
}

export const enum ArticleAvailabilityDetermination$Operation {
    IGNORE = 'IGNORE',
    ADD = 'ADD',
    SUBTRACT = 'SUBTRACT'
}

export interface ArticleBundleConversionInfo {

    /**
     * Possible targets for the dissolution.
     */
    dissolveRatios: Array<ArticleConversionRatio>;

    /**
     * Article the information here belongs to.
     */
    articleRef: ProductArticleRef;

    /**
     * Possible targets for the merging.
     */
    mergeRatios: Array<ArticleConversionRatio>;
}

export interface ArticleConversionRatio {

    /**
     * Source unit.
     */
    sourceUnitTypeRef: UnitTypeReference;

    /**
     * Article.
     */
    articleRef: ProductArticleRef;

    /**
     * Factor.
     */
    factor: number;
}

export interface ArticleCustomer {

    /**
     * Account display name.
     */
    accountDisplayName: string;

    /**
     * Referenced Article name
     */
    articleName: string;

    /**
     * Label printing settings.
     */
    customerPrintLabelSettings: ArticlePrintLabelSettings;

    /**
     * Should the deviating product identifier be used (e.g. when scanning)?
     */
    useDeviatingArticleIdentifier: boolean;

    /**
     * Customer prices.
     */
    productPrices: Array<ProductPrice>;

    /**
     * Referenced Article
     */
    articleId: number;

    /**
     * Should the deviating product description be used (e.g. in documents)?
     */
    useDeviatingArticleDescription: boolean;

    /**
     * Is this active?
     */
    active: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Deviating product description.
     */
    deviatingArticleDescription: string;

    /**
     * Default net price.
     */
    defaultNetPrice: number;

    /**
     * Referenced Customer-Account
     */
    accountId: number;

    /**
     * Deviating product name.
     */
    deviatingArticleName: string;

    /**
     * Default gross price.
     */
    defaultGrossPrice: number;

    /**
     * Deviating product number.
     */
    deviatingArticleNumber: string;

    /**
     * Price determination type.
     */
    priceDetermination: ArticleCustomerPriceDetermination;

    /**
     * Article number.
     */
    articleNumber: string;

    /**
     * Deviating product identifier (e.g. barcode).
     */
    deviatingArticleIdentifier: string;

    /**
     * Should the deviating product number be used (e.g. in documents)?
     */
    useDeviatingArticleNumber: boolean;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Should the deviating product name be used (e.g. in documents)?
     */
    useDeviatingArticleName: boolean;

    /**
     * Is the product blocked for the customer?
     */
    lockedForCustomer: boolean;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum ArticleCustomerPriceDetermination {
    DEFAULT = 'DEFAULT',
    SPECIAL = 'SPECIAL',
    ONLY_DEFAULT_PRICE = 'ONLY_DEFAULT_PRICE'
}

export interface ArticleIdentifier {

    /**
     * Is this the default article identifier?
     */
    defaultArticleIdentifier: boolean;

    /**
     * identifier type
     */
    name: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * identifier
     */
    value: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ArticleListing {

    /**
     * all (external) article numbers (SKU, EAN, ...)
     */
    identifiers: WithDefaults<List<ArticleIdentifier>>;

    /**
     * custom data
     */
    custom: EavArticleListing;

    /**
     * is this product sellable without any quantity at the stock
     */
    sellableWithoutStock: boolean;

    /**
     * description custom data
     */
    descriptionCustom: ArticleListing$CustomFieldWithDefaults;

    /**
     * description of this article
     */
    description: WithDefaults<String>;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Lowest gross price of the last 30 days (determined by the system).
     */
    proposedLowestPriceGross: number;

    /**
     * Sales channel.
     */
    salesChannelRef: ApiObjectReference;

    /**
     * Lowest gross price of the last 30 days (user-defined input).
     */
    customLowestPriceGross: number;

    /**
     * Should the article be listed?
     */
    listed: boolean;

    /**
     * name of this article
     */
    name: WithDefaults<String>;

    /**
     * Categories this listing is assigned to.
     */
    categoryRefs: Array<ApiObjectReference>;

    /**
     * Last listingState update.
     */
    listingStateChangeTime: ScriptingDateTime;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * alternative name of this article
     */
    alternativeName: WithDefaults<String>;

    /**
     * Lowest net price of the last 30 days (determined by the system).
     */
    proposedLowestPriceNet: number;

    /**
     * Lowest net price of the last 30 days (user-defined input).
     */
    customLowestPriceNet: number;

    /**
     * Current listing state.
     */
    listingState: ListingState;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ArticleListing$CustomFieldWithDefaults {

    /**
     * Default sales channel value.
     */
    defaultValue: EavArticleListingDescription;

    /**
     * Sales channel value.
     */
    value: EavArticleListingDescription;
}

export const enum ArticlePickingType {
    ACCORDING_TO_TEMPLATE = 'ACCORDING_TO_TEMPLATE',
    PICKING_ALLOWED = 'PICKING_ALLOWED',
    PICKING_NOT_ALLOWED = 'PICKING_NOT_ALLOWED',
    ONLY_SINGLE_ORDER_PICKING_ALLOWED = 'ONLY_SINGLE_ORDER_PICKING_ALLOWED',
    ONLY_COLLECTIVE_ORDER_PICKING_ALLOWED = 'ONLY_COLLECTIVE_ORDER_PICKING_ALLOWED'
}

export const enum ArticlePriceBase {
    NET_PRICE = 'NET_PRICE',
    GROSS_PRICE = 'GROSS_PRICE'
}

export const enum ArticlePrintLabelCalculationMode {
    NO_LABEL = 'NO_LABEL',
    FIXED_AMOUNT = 'FIXED_AMOUNT',
    QUANTITY_TIMES_AMOUNT = 'QUANTITY_TIMES_AMOUNT',
    QUANTITY_PER_PACKAGING_UNIT = 'QUANTITY_PER_PACKAGING_UNIT',
    QUANTITY_TIMES_AMOUNT_AND_PACKAGING_QUANTITY = 'QUANTITY_TIMES_AMOUNT_AND_PACKAGING_QUANTITY'
}

export interface ArticlePrintLabelSettings {

    /**
     * Outgoing goods: print quantity.
     */
    outgoingPrintQuantity: number;

    /**
     * Outgoing goods: print quantity determination.
     */
    outgoingCalculationMode: ArticlePrintLabelCalculationMode;

    /**
     * Incoming goods: print quantity determination.
     */
    incomingCalculationMode: ArticlePrintLabelCalculationMode;

    /**
     * Incoming goods: print quantity.
     */
    incomingPrintQuantity: number;

    /**
     * Label report.
     */
    report: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum ArticleSerialExpiryDateType {
    NONE = 'NONE',
    BEST_BEFORE_DATE = 'BEST_BEFORE_DATE',
    EXPIRATION_DATE = 'EXPIRATION_DATE'
}

export interface ArticleSerialNumber {

    /**
     * Expiry date.
     */
    expiryDate: ScriptingDate;

    /**
     * Note.
     */
    note: string;

    /**
     * Ignore expiry date on stock booking
     */
    ignoreExpiryDateOnStockBooking: boolean;

    /**
     * Serial number 2.
     */
    serialNumber2: string;

    /**
     * Serial number 1.
     */
    serialNumber1: string;

    /**
     * Serial number custom field.
     */
    custom: EavArticleserialnumber;

    /**
     * Article.
     */
    articleRef: ApiObjectReference;

    /**
     * Unique Device Identifier (UDI)
     */
    udi: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum ArticleSerialNumberLabelingType {
    MANUAL = 'MANUAL',
    AUTOMATIC_ON_SUPPLIER_ORDER = 'AUTOMATIC_ON_SUPPLIER_ORDER',
    AUTOMATIC_ON_SUPPLIER_DELIVERY = 'AUTOMATIC_ON_SUPPLIER_DELIVERY'
}

export const enum ArticleSerialType {
    NONE = 'NONE',
    SERIAL_NUMBER = 'SERIAL_NUMBER',
    LOT = 'LOT',
    BEST_BEFORE = 'BEST_BEFORE',
    DOUBLE_SERIAL_NUMBER = 'DOUBLE_SERIAL_NUMBER'
}

export interface ArticleStorage {

    /**
     * Stock in the storage.
     */
    quantityInStock: number;

    /**
     * Replenish from.
     */
    replenishmentFrom: number;

    /**
     * Reorder level.
     */
    reorderPoint: number;

    /**
     * Ordered quantity.
     */
    orderedQuantity: number;

    /**
     * Current quantity in picking.
     */
    quantityInPicking: number;

    /**
     * Replenish to.
     */
    replenishmentOn: number;

    /**
     * Current "virtual" stock (if larger containers were dissolved into this one).
     */
    virtualStockAmount: number;

    /**
     * Reserved quantity.
     */
    reservedQuantity: number;

    /**
     * Current "virtual" available quantity (if larger containers were dissolved into this one).
     */
    virtualStockAvailable: number;

    /**
     * Product whose storage information is returned here.
     */
    articleId: number;

    /**
     * Storage location.
     */
    storageLocation: string;

    /**
     * Available quantity in the storage according to the configured availability determination.
     */
    stockAvailable: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Picking remark.
     */
    storageInfo: string;

    /**
     * Does this storage use storage bins?
     */
    withStorageBins: boolean;

    /**
     * Storage whose information is returned here.
     */
    storageRef: ApiObjectReference;

    /**
     * Predefined storage bins.
     */
    presetStorageBinRefs: Array<StorageBinRef>;

    /**
     * Target stock.
     */
    targetStock: number;

    /**
     * Current quantity in fabrication.
     */
    quantityInFabrication: number;

    /**
     * Minimum stock.
     */
    minimumStock: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ArticleSupplier {

    /**
     * Should the deviating product description be used (e.g. in documents)?
     */
    useSupplierArticleDescription: boolean;

    /**
     * Account display name.
     */
    accountDisplayName: string;

    /**
     * Supplier reorder level.
     */
    supplierReportingStock: number;

    /**
     * Delivery time in (working) days.
     */
    deliveryTime: number;

    /**
     * Should the deviating product identifier be used (e.g. when scanning)?
     */
    useSupplierArticleIdentifier: boolean;

    /**
     * Should the deviating product number be used (e.g. in documents)?
     */
    useSupplierArticleNumber: boolean;

    /**
     * Minimum order quantity.
     */
    minimumOrderQuantity: number;

    /**
     * Unit type.
     */
    productUnit: UnitTypeReference;

    /**
     * Should the deviating product name be used (e.g. in documents)?
     */
    useSupplierArticleName: boolean;

    /**
     * Default gross price.
     */
    defaultGrossPrice: number;

    /**
     * Article number.
     */
    articleNumber: string;

    /**
     * Discount group.
     */
    discountGroupRef: ApiObjectReference;

    /**
     * Order unit type.
     */
    orderUnit: UnitTypeReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * Referenced Article name
     */
    articleName: string;

    /**
     * Packaging unit.
     */
    packagingUnit: number;

    /**
     * Supplier prices.
     */
    productPrices: Array<ProductPrice>;

    /**
     * Referenced Article
     */
    articleId: number;

    /**
     * Is this active?
     */
    active: boolean;

    /**
     * Main supplier.
     */
    mainSupplier: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Indicates whether drop shipping is allowed.
     */
    dropShippingAllowed: boolean;

    /**
     * Deviating product name.
     */
    supplierArticleName: string;

    /**
     * Deviating product description.
     */
    supplierArticleDescription: string;

    /**
     * Default net price.
     */
    defaultNetPrice: number;

    /**
     * Purchase unit.
     */
    purchaseUnit: number;

    /**
     * Referenced Supplier-Account
     */
    accountId: number;

    /**
     * Should assemblies be ordered on a component basis?
     */
    orderOnComponentBase: boolean;

    /**
     * Deviating product identifier (e.g. barcode).
     */
    supplierArticleIdentifier: string;

    /**
     * Deviating product number.
     */
    supplierArticleNumber: string;

    /**
     * Label printing settings.
     */
    supplierPrintLabelSettings: ArticlePrintLabelSettings;
}

export interface AssemblyComponentReturnLine {

    /**
     * Returned quantity.
     */
    quantity: number;

    /**
     * Assembly source line identifier.
     */
    sourceLineId: number;

    /**
     * Bookings for the component.
     */
    bookings: Array<RequestDocumentLineBooking>;

    /**
     * Component identifier in the assembly source line.
     */
    sourceComponentId: number;

    /**
     * Return cause identifier.
     */
    returnCauseId: number;
}

export interface Asset {

    /**
     * Note.
     */
    note: string;

    /**
     * Serial number.
     */
    serialNumber: ArticleSerialNumber;

    /**
     * Freely enterable serial number or best-before date.
     */
    freeSerialNumber: string;

    /**
     * Asset custom fields.
     */
    custom: EavAsset;

    /**
     * Article.
     */
    articleRef: ApiObjectReference;

    /**
     * active
     */
    active: boolean;

    /**
     * Warranty end.
     */
    warrantyEndDate: ScriptingDate;

    /**
     * Associated assets.
     */
    childAssetRefs: Array<ApiObjectReference>;

    /**
     * Asset label.
     */
    label: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Billing address.
     */
    billingAddressRef: ApiObjectReference;

    /**
     * Contract.
     */
    contractRef: ApiObjectReference;

    /**
     * Additional address.
     */
    accountAddressRef: ApiObjectReference;

    /**
     * Asset tags.
     */
    tags: Array<TagDto>;

    /**
     * Asset number.
     */
    number: string;

    /**
     * Warranty start.
     */
    warrantyStartDate: ScriptingDate;

    /**
     * Asset holder.
     */
    accountRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Parent asset.
     */
    parentAssetRef: ApiObjectReference;

    /**
     * Asset type.
     */
    typeRef: ApiObjectReference;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum AssetCreateOnDocumentCategory {
    CUSTOMER_DELIVERY = 'CUSTOMER_DELIVERY',
    CUSTOMER_INVOICE = 'CUSTOMER_INVOICE'
}

export interface AssetType {

    /**
     * Is this active?
     */
    active: boolean;

    /**
     * Label.
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum BankPaymentType {
    MONEY_TRANSFER = 'MONEY_TRANSFER',
    REALTIME_MONEY_TRANSFER = 'REALTIME_MONEY_TRANSFER',
    SEPA_CORE_DIRECT_DEBIT = 'SEPA_CORE_DIRECT_DEBIT',
    SEPA_B2B_DIRECT_DEBIT = 'SEPA_B2B_DIRECT_DEBIT',
    CLEARING = 'CLEARING',
    CLEARING_WITH_PREDECESSOR_DOCUMENT = 'CLEARING_WITH_PREDECESSOR_DOCUMENT',
    FACTORING = 'FACTORING',
    OTHER = 'OTHER'
}

export interface BatchScriptingContext$BatchScriptImportSession {
}

export const enum BillingType {
    GROSS = 'GROSS',
    NET = 'NET'
}

export interface BulkTransferRequestApi {

    /**
     * Should a report be created after the transfer?
     */
    createReportAfterTransfer: boolean;

    /**
     * Contains the instructions for the transfers.
     */
    stockTransfers: Array<StockTransferApi>;
}

export interface BulkTransferResult {

    /**
     * Booking date.
     */
    date: ScriptingDate;

    /**
     * When the report was requested in the request, the identifier from the DMS is returned here.
     */
    reportId: number;

    /**
     * Storage bin stocks changed by the stock booking.
     */
    stocks: Array<StockTransferResult>;
}

export interface BundleSchema {

    /**
     * Product this schema belongs to.
     */
    productId: number;

    /**
     * Name.
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Schema base unit.
     */
    baseTypeRef: UnitTypeReference;

    /**
     * Conversions for the associated product articles.
     */
    ratios: Array<BundleUnitTypeRatio>;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface BundleUnitTypeRatio {

    /**
     * Unit type.
     */
    baseUnitTypeRef: UnitTypeReference;

    /**
     * Relation unit type.
     */
    relationUnitTypeRef: UnitTypeReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Factor.
     */
    factor: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum BusinessRelationType {
    B2B = 'B2B',
    B2C = 'B2C',
    B2G = 'B2G'
}

export const enum BuyerReferenceOrigin {
    FROM_BILLING_ADDRESS = 'FROM_BILLING_ADDRESS',
    FROM_DEFAULT_ADDRESS = 'FROM_DEFAULT_ADDRESS',
    USER_DEFINED = 'USER_DEFINED'
}

export const enum CalculateFreightChargesFromType {
    CHARGES_FROM_ORDER = 'CHARGES_FROM_ORDER',
    RECALCULATE = 'RECALCULATE'
}

export const enum CalculateFreightChargesWithType {
    EVERY_SHIPPING = 'EVERY_SHIPPING',
    FIRST_SHIPPING = 'FIRST_SHIPPING'
}

export const enum CalculationMode {
    HORIZONTAL = 'HORIZONTAL',
    VERTICAL = 'VERTICAL'
}

export const enum CalculationModeOrigin {
    FROM_BILLING_ADDRESS = 'FROM_BILLING_ADDRESS',
    FROM_DEFAULT_ADDRESS = 'FROM_DEFAULT_ADDRESS',
    FROM_ACCOUNT = 'FROM_ACCOUNT',
    FROM_SALES_CHANNEL = 'FROM_SALES_CHANNEL',
    FROM_DOCUMENT_PARAMS = 'FROM_DOCUMENT_PARAMS',
    USER_DEFINED = 'USER_DEFINED'
}

export const enum CashJournalWithdrawalMode {
    FULL = 'FULL',
    BALANCE = 'BALANCE',
    MANUAL = 'MANUAL',
    NONE = 'NONE'
}

export interface CommissionAssignment {

    /**
     * Article.
     */
    articleRef: ApiObjectReference;

    /**
     * Description
     */
    description: string;

    /**
     * Valid From
     */
    validFrom: ScriptingDate;

    /**
     * Product Group
     */
    productGroupRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Commission Value
     */
    commissionValue: number;

    /**
     * the currency-code IsoAlpha3
     */
    valueCurrencyCode: string;

    /**
     * Commission Value type
     */
    commissionValueType: ValueType;

    /**
     * Qualifier
     */
    qualifier: CommissionQualifier;

    /**
     * Valid Until
     */
    validUntil: ScriptingDate;

    /**
     * User comment
     */
    comment: string;

    /**
     * Account.
     */
    accountRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Sales Agent
     */
    salesAgentAccountRef: ApiObjectReference;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum CommissionQualifier {
    SALES = 'SALES'
}

export const enum CommonUserType {
    REGULAR = 'REGULAR',
    SUPPORT = 'SUPPORT',
    SYSTEM = 'SYSTEM',
    LIMITED_WMS = 'LIMITED_WMS',
    LIMITED_POS = 'LIMITED_POS',
    LIMITED_DASHBOARD = 'LIMITED_DASHBOARD',
    LIMITED_AGENT = 'LIMITED_AGENT',
    APP_BUILTIN_USER = 'APP_BUILTIN_USER'
}

export interface Contact {

    /**
     * Is default contact?
     */
    defaultContact: boolean;

    /**
     * Custom field.
     */
    custom: EavContact;

    /**
     * Type identifier
     */
    ctId: number;

    /**
     * Contact label
     */
    ctLabel: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Contact type
     */
    ctType: ContactTypeType;

    /**
     * A Value
     */
    value: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum ContactTypeType {
    PHONE = 'PHONE',
    SOCIAL = 'SOCIAL',
    EMAIL = 'EMAIL',
    FAX = 'FAX',
    SKYPE = 'SKYPE',
    MS_TEAMS = 'MS_TEAMS',
    CUSTOM = 'CUSTOM',
    MOBILE = 'MOBILE'
}

export interface CountryReference {

    /**
     * Country ISO Alpha-2 code.
     */
    isoAlpha2: string;

    /**
     * Country ISO Alpha-3 code.
     */
    isoAlpha3: string;

    /**
     * Country identifier.
     */
    id: number;

    /**
     * Country label.
     */
    label: string;
}

/**
 * Details zur Erstellung eines neuen Belegs
 */
export interface CreateNewDocumentRequest {

    /**
     * Standard-Belegart der Kategorie verwenden
     */
    defaultDocumentTypeByCategory: EDocumentCategory;

    /**
     * Belegart
     */
    documentTypeLabel: string;

    /**
     * Beleg als extern erstellt kennzeichnen (extern erstellter Beleg)
     */
    externallyCreated: boolean;

    /**
     * Details zum Beleg
     */
    document: RequestDocument;

    /**
     * Zusätzliche Parameter
     */
    parameters: Array<AdditionalParameter>;
}

export interface CrmActivity {

    /**
     * Notes.
     */
    notes: string;

    /**
     * Activity duration in seconds.
     */
    durationInSeconds: number;

    /**
     * Activity type.
     */
    type: CrmActivityType;

    /**
     * Activity billing type.
     */
    billingType: CrmActivityBillingType;

    /**
     * Actual duration.
     */
    durationToBillInSeconds: number;

    /**
     * Planned start time.
     */
    plannedStartDateTime: ScriptingDateTime;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Billing document line.
     */
    billingDocumentLineRef: ApiObjectReference;

    /**
     * Is the activity an email?
     */
    email: boolean;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * Was the activity billed internally?
     */
    internalBilled: boolean;

    /**
     * Planned duration.
     */
    plannedDurationInSeconds: number;

    /**
     * CRM activity custom fields.
     */
    custom: EavCrmactivity;

    /**
     * Discount for the billing.
     */
    billingDiscount: number;

    /**
     * Is the activity published?
     */
    published: boolean;

    /**
     * Contact person.
     */
    accountPersonRef: ApiObjectReference;

    /**
     * Is this billable?
     */
    billable: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Which user this activity belongs to; when NULL it is a system activity.
     */
    userRef: ApiObjectReference;

    /**
     * Actual start time.
     */
    startDateTime: ScriptingDateTime;

    /**
     * Is this a system activity?
     */
    system: boolean;

    /**
     * Activity content.
     */
    comment: string;

    /**
     * Which address this activity belongs to.
     */
    accountRef: ApiObjectReference;

    /**
     * Which CRM object this activity belongs to.
     */
    crmParent: CrmObjectRef;
}

export const enum CrmActivityBillingType {
    LIKE_TASK = 'LIKE_TASK',
    UNCLEAR = 'UNCLEAR',
    CUSTOMER = 'CUSTOMER',
    INTERNAL = 'INTERNAL',
    PLANNED = 'PLANNED'
}

export interface CrmActivityType {

    /**
     * Text for the activity type that is entered in the editor.
     */
    descriptionTemplate: string;

    /**
     * Possible types where this activity type can be used.
     */
    possibleUsingTypes: Array<PossibleUsingType>;

    /**
     * Is this active?
     */
    active: boolean;

    /**
     * Description.
     */
    description: string;

    /**
     * Label.
     */
    label: string;

    /**
     * Is this for "archive email"?
     */
    emailArchiving: boolean;

    /**
     * Is this billable?
     */
    billable: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Is this the default for comments?
     */
    defaultForComments: boolean;

    /**
     * Is this for "edit email"?
     */
    emailProcessing: boolean;

    /**
     * Sort order.
     */
    sortOrder: number;

    /**
     * Default billing type.
     */
    defaultBillingType: CrmActivityBillingType;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * May the activity be published?
     */
    canBePublished: boolean;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface CrmChecklistItem {

    /**
     * Is the item "checked"?
     */
    checked: boolean;

    /**
     * Checklist item text.
     */
    memo: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface CrmDeal {

    /**
     * Planned investment amount.
     */
    plannedInvestmentSum: number;

    /**
     * Closing reason.
     */
    closingReasonRef: ApiObjectReference;

    /**
     * Notes.
     */
    notes: string;

    /**
     * Planned performance date.
     */
    plannedPerformanceDate: ScriptingDate;

    /**
     * Free or detailed closing reason.
     */
    detailedClosingReason: string;

    /**
     * Note or description.
     */
    description: string;

    /**
     * Observers.
     */
    observerRefs: Array<ApiObjectReference>;

    /**
     * Main responsible customer contact person.
     */
    responsibleCustomerPersonRef: ApiObjectReference;

    /**
     * Task priority.
     */
    priorityRef: ApiObjectReference;

    /**
     * Task number.
     */
    number: string;

    /**
     * Responsible user.
     */
    mainResponsibleUserRef: ApiObjectReference;

    /**
     * Task status.
     */
    stateRef: ApiObjectReference;

    /**
     * Topic.
     */
    topicRef: ApiObjectReference;

    /**
     * Planned closing date.
     */
    plannedClosingDate: ScriptingDate;

    /**
     * Sales documents.
     */
    salesDocumentRefs: Array<DocumentRef>;

    /**
     * Contract.
     */
    contractRefs: Array<DocumentRef>;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Task type.
     */
    typeRef: ApiObjectReference;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * Additional client participants.
     */
    additionalParticipantsOfCustomer: Array<CrmParticipant>;

    /**
     * To be done by the user (assigned user).
     */
    assignedUserRef: ApiObjectReference;

    /**
     * Chance (in percent).
     */
    chance: number;

    /**
     * Parent CRM objects.
     */
    parentRefs: Array<CrmObjectRef>;

    /**
     * Health status.
     */
    healthRef: ApiObjectReference;

    /**
     * Assigned by.
     */
    assignedByUserRef: ApiObjectReference;

    /**
     * Task title.
     */
    label: string;

    /**
     * Is this in workflow processing?
     */
    processedByWorkflow: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * CRM deal custom fields.
     */
    customField: EavCrmdeal;

    /**
     * Child CRM objects.
     */
    childRefs: Array<CrmObjectRef>;

    /**
     * Tags
     */
    tags: Array<TagDto>;

    /**
     * To be done by the user group (assigned user group).
     */
    assignedGroupRef: ApiObjectReference;

    /**
     * Additional contractor participants.
     */
    additionalParticipantsOfContractor: Array<CrmParticipant>;

    /**
     * Closing type.
     */
    closingType: CrmDealClosingType;

    /**
     * Responsible user.
     */
    mainResponsibleGroupRef: ApiObjectReference;

    /**
     * Address the task belongs to.
     */
    accountRef: ApiObjectReference;

    /**
     * Next planned contact.
     */
    nextPlannedContactDate: ScriptingDateTime;

    /**
     * Sales agent information.
     */
    salesAgentAccountRef: ApiObjectReference;
}

export const enum CrmDealClosingType {
    POSITIVE = 'POSITIVE',
    NEGATIVE = 'NEGATIVE'
}

export interface CrmDealTopic {

    /**
     * Sort order.
     */
    sortOrder: number;

    /**
     * Active.
     */
    active: boolean;

    /**
     * Description.
     */
    description: string;

    /**
     * Label.
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface CrmObjectRef {

    /**
     * Number.
     */
    number: string;

    /**
     * Description.
     */
    description: string;

    /**
     * Sub-Type
     */
    subType: CrmSubType;

    /**
     * Unique identifier.
     */
    id: number;

    /**
     * Status.
     */
    state: CrmState;

    /**
     * Label.
     */
    label: string;

    /**
     * CRM type.
     */
    type: CrmType;
}

export interface CrmParticipant {

    /**
     * Description.
     */
    description: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Contact person.
     */
    accountPersonRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface CrmPriority {

    /**
     * Sort order.
     */
    sortOrder: number;

    /**
     * Priority type.
     */
    crmPriorityType: CrmPriorityType;

    /**
     * Label.
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * portalEnum for this priority
     */
    portalEnumRef: ApiCreatableReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum CrmPriorityType {
    CRITICAL = 'CRITICAL',
    NORMAL = 'NORMAL',
    LOW = 'LOW'
}

export interface CrmProject {

    /**
     * Notes.
     */
    notes: string;

    /**
     * Recorded times in seconds.
     */
    recordedTimes: number;

    /**
     * Actual project period (to).
     */
    actualProjectPeriodTo: ScriptingDate;

    /**
     * Actual project period (from).
     */
    actualProjectPeriodFrom: ScriptingDate;

    /**
     * Note or description.
     */
    description: string;

    /**
     * Observers.
     */
    observerRefs: Array<ApiObjectReference>;

    /**
     * Task priority.
     */
    priorityRef: ApiObjectReference;

    /**
     * Phase
     */
    phaseRef: ApiObjectReference;

    /**
     * Contractor project manager.
     */
    projectManagerOfContractor: CrmParticipant;

    /**
     * Task number.
     */
    number: string;

    /**
     * Task status.
     */
    stateRef: ApiObjectReference;

    /**
     * Billed times in seconds.
     */
    billedTimes: number;

    /**
     * Planned project period (from).
     */
    plannedProjectPeriodFrom: ScriptingDate;

    /**
     * Purchase documents.
     */
    purchaseDocumentRefs: Array<DocumentRef>;

    /**
     * Sales documents.
     */
    salesDocumentRefs: Array<DocumentRef>;

    /**
     * Contract.
     */
    contractRefs: Array<DocumentRef>;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Contract conclusion date.
     */
    contractConclusionDate: ScriptingDate;

    /**
     * Task type.
     */
    typeRef: ApiObjectReference;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * Additional client participants.
     */
    additionalParticipantsOfCustomer: Array<CrmParticipant>;

    /**
     * Client project manager.
     */
    projectManagerOfCustomer: CrmParticipant;

    /**
     * Parent CRM objects.
     */
    parentRefs: Array<CrmObjectRef>;

    /**
     * Total commissioned time in seconds.
     */
    effortCommissioned: number;

    /**
     * Total effort estimation in seconds.
     */
    effortEstimation: number;

    /**
     * Checklist: memo and checked.
     */
    checklist: Array<CrmChecklistItem>;

    /**
     * Task title.
     */
    label: string;

    /**
     * Is this in workflow processing?
     */
    processedByWorkflow: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * CRM project custom fields.
     */
    customField: EavCrmproject;

    /**
     * Child CRM objects.
     */
    childRefs: Array<CrmObjectRef>;

    /**
     * Tags
     */
    tags: Array<TagDto>;

    /**
     * Additional contractor participants.
     */
    additionalParticipantsOfContractor: Array<CrmParticipant>;

    /**
     * Address the task belongs to.
     */
    accountRef: ApiObjectReference;

    /**
     * Planned project period (to).
     */
    plannedProjectPeriodTo: ScriptingDate;
}

export interface CrmReference {

    /**
     * Reference.
     */
    reference: ApiObjectReference;

    /**
     * Reference type.
     */
    referenceType: CrmReferenceType;
}

export const enum CrmReferenceType {
    ARTICLE = 'ARTICLE',
    DOCUMENT_LINE = 'DOCUMENT_LINE',
    OPEN_ITEM = 'OPEN_ITEM',
    ASSET = 'ASSET'
}

export interface CrmReminder {

    /**
     * CRM object identifier.
     */
    crmId: number;

    /**
     * Note on the reminder.
     */
    note: string;

    /**
     * Who is to be reminded?
     */
    userRef: ApiObjectReference;

    /**
     * Is this a critical reminder?
     */
    critical: boolean;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Reminder time.
     */
    remindAt: ScriptingDateTime;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface CrmState {

    /**
     * Type this state belongs to.
     */
    crmSubTypes: Array<CrmSubType>;

    /**
     * active
     */
    active: boolean;

    /**
     * Description.
     */
    description: string;

    /**
     * A comment is required on a positive closing.
     */
    needsCommentOnPositiveFinish: boolean;

    /**
     * Label.
     */
    label: string;

    /**
     * portalEnum for this state
     */
    portalEnumRef: ApiCreatableReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Is this an end state?
     */
    finishState: boolean;

    /**
     * Sort order.
     */
    sortOrder: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Is this a "ready for billing" state?
     */
    readyToBill: boolean;

    /**
     * A comment is required on a negative closing.
     */
    needsCommentOnNegativeFinish: boolean;

    /**
     * Is this a start state?
     */
    startState: boolean;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface CrmSubType {

    /**
     * Sort order.
     */
    sortOrder: number;

    /**
     * Active.
     */
    active: boolean;

    /**
     * Description.
     */
    description: string;

    /**
     * Label.
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface CrmTask {

    /**
     * Responsible participant (contact person).
     */
    mainResponsibleParticipantRef: ApiObjectReference;

    /**
     * Reminders.
     */
    reminders: Array<CrmReminder>;

    /**
     * Customer offer.
     */
    customerOfferRef: DocumentRef;

    /**
     * Notes.
     */
    notes: string;

    /**
     * References.
     */
    references: Array<CrmReference>;

    /**
     * Observers.
     */
    observerRefs: Array<ApiObjectReference>;

    /**
     * Main responsible customer contact person.
     */
    responsibleCustomerPersonRef: ApiObjectReference;

    /**
     * Task priority.
     */
    priorityRef: ApiObjectReference;

    /**
     * Task number.
     */
    number: string;

    /**
     * Responsible user.
     */
    mainResponsibleUserRef: ApiObjectReference;

    /**
     * Customer order.
     */
    customerOrderRef: DocumentRef;

    /**
     * Recorded times in seconds (internal).
     */
    internalRecordedTimes: number;

    /**
     * Purchase documents.
     */
    purchaseDocumentRefs: Array<DocumentRef>;

    /**
     * Contract.
     */
    contractRefs: Array<DocumentRef>;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * Additional client participants.
     */
    additionalParticipantsOfCustomer: Array<CrmTaskParticipant>;

    /**
     * Assigned by.
     */
    assignedByUserRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * CRM task custom fields.
     */
    customField: EavCrmtask;

    /**
     * Child CRM objects.
     */
    childRefs: Array<CrmObjectRef>;

    /**
     * Tags
     */
    tags: Array<TagDto>;

    /**
     * Duplicated by these tasks.
     */
    duplicatedByTaskRefs: Array<ApiObjectReference>;

    /**
     * To be done by the user group (assigned user group).
     */
    assignedGroupRef: ApiObjectReference;

    /**
     * To be done.
     */
    dueDateTime: ScriptingDateTime;

    /**
     * Responsible user.
     */
    mainResponsibleGroupRef: ApiObjectReference;

    /**
     * Address the task belongs to.
     */
    accountRef: ApiObjectReference;

    /**
     * Blocked by these tasks.
     */
    blockedByTaskRefs: Array<ApiObjectReference>;

    /**
     * To be done by the participant (contact person).
     */
    assignedParticipantRef: ApiObjectReference;

    /**
     * Billed times in seconds (external).
     */
    externalBilledTimes: number;

    /**
     * Kanban sort order.
     */
    kanbanSortOrder: number;

    /**
     * Related to these tasks.
     */
    relatedToTaskRefs: Array<ApiObjectReference>;

    /**
     * Note or description.
     */
    description: string;

    /**
     * Task status.
     */
    stateRef: ApiObjectReference;

    /**
     * Billing type.
     */
    billingType: CrmTaskBillingType;

    /**
     * Billings.
     */
    billingDocumentRefs: Array<DocumentRef>;

    /**
     * Sales documents.
     */
    salesDocumentRefs: Array<DocumentRef>;

    /**
     * To be done from.
     */
    toBeDoneStartingFrom: ScriptingDateTime;

    /**
     * Task type.
     */
    typeRef: ApiObjectReference;

    /**
     * To be done by the user (assigned user).
     */
    assignedUserRef: ApiObjectReference;

    /**
     * Parent CRM objects.
     */
    parentRefs: Array<CrmObjectRef>;

    /**
     * Commissioned time in seconds.
     */
    effortCommissioned: number;

    /**
     * Recorded times in seconds (external).
     */
    externalRecordedTimes: number;

    /**
     * Effort estimation in seconds.
     */
    effortEstimation: number;

    /**
     * Billing rule.
     */
    billingRule: CrmTaskBillingRule;

    /**
     * Checklist: memo and checked.
     */
    checklist: Array<CrmChecklistItem>;

    /**
     * Task title.
     */
    label: string;

    /**
     * Is this in workflow processing?
     */
    processedByWorkflow: boolean;

    /**
     * Billed times in seconds (internal).
     */
    internalBilledTimes: number;

    /**
     * Blocks these tasks.
     */
    blocksTaskRefs: Array<ApiObjectReference>;

    /**
     * Additional contractor participants.
     */
    additionalParticipantsOfContractor: Array<CrmTaskParticipant>;

    /**
     * Should the task be published?
     */
    publish: boolean;

    /**
     * Progress in percent.
     */
    progress: number;

    /**
     * Duplicated tasks.
     */
    duplicatesTaskRefs: Array<ApiObjectReference>;
}

export const enum CrmTaskBillingRule {
    ONLY_COMPLETE = 'ONLY_COMPLETE',
    ONLY_BILL_WITH_PARENT_TASK = 'ONLY_BILL_WITH_PARENT_TASK',
    ALLOW_ACTIVITIES_INDIVIDUALLY = 'ALLOW_ACTIVITIES_INDIVIDUALLY'
}

export const enum CrmTaskBillingType {
    UNCLEAR = 'UNCLEAR',
    CUSTOMER = 'CUSTOMER',
    INTERNAL = 'INTERNAL'
}

export interface CrmTaskParticipant {

    /**
     * Observers.
     */
    observer: boolean;

    /**
     * Description.
     */
    description: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Comment on the vote.
     */
    voteComment: string;

    /**
     * Contact person.
     */
    accountPersonRef: ApiObjectReference;

    /**
     * Vote.
     */
    vote: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum CrmType {
    TASK = 'TASK',
    DEAL = 'DEAL',
    PROJECT = 'PROJECT'
}

/**
 * CRM-Belegreferenz
 */
export interface CrmTypedDocumentRef {

    /**
     * Typ der Belegreferenz
     */
    specialRefType: ECrmSpecialDocumentRefType;

    /**
     * Beleg-Qualifizierer
     */
    documentQualifier: EDocumentQualifier;

    /**
     * Belegreferenz
     */
    documentRef: DocumentRef;
}

/**
 * Liste von CRM-Belegreferenzen
 */
export interface CrmTypedDocumentRefList {
}

export interface CurrencyReference {

    /**
     * Currency symbol.
     */
    symbol: string;

    /**
     * Currency ISO Alpha-3 code.
     */
    isoAlpha3: string;

    /**
     * Currency identifier.
     */
    id: number;

    /**
     * Currency label.
     */
    label: string;
}

export interface Customer {

    /**
     * reference to customer group
     */
    customerGroupRef: ApiObjectReference;

    /**
     * Option for the batch processing.
     */
    stackProcessingType: AccountOrderStackProcessingType;

    /**
     * Cron expression for calculating the collective billing.
     */
    dueDateCalculation: string;

    /**
     * Credit limit.
     */
    maximalLoan: number;

    /**
     * Next collective billing due date.
     */
    dueDate: ScriptingDate;

    /**
     * collective billable
     */
    collectiveBillable: boolean;

    /**
     * Maximum possible deliveries.
     */
    maxDeliveries: number;

    /**
     * Does the customer have a delivery block?
     */
    deliveryBlocked: boolean;

    /**
     * number of customer
     */
    number: string;

    /**
     * presetting of billing type
     */
    billingType: AccountBillingType;

    /**
     * Next due date after the current one.
     */
    nextDueDate: ScriptingDate;

    /**
     * Priority for the batch processing.
     */
    stackProcessingPriority: number;

    /**
     * Trigger the collective billing manually only?
     */
    collectiveInvoiceManually: boolean;

    /**
     * reference to product price group
     */
    productPriceGroupRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * finance account-number of customer
     */
    accountingNumber: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * reference to the delivery method
     */
    deliveryMethodRef: ApiObjectReference;

    /**
     * Taxable or tax free.
     */
    taxable: boolean;

    /**
     * active true/false
     */
    active: boolean;

    /**
     * reference to responsible user
     */
    responsibleUserRef: ApiObjectReference;

    /**
     * customers number for us
     */
    ourNumber: string;

    /**
     * reference to the payment term
     */
    paymentTermRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * reference to the delivery term
     */
    deliveryTermRef: ApiObjectReference;

    /**
     * country code performance country IsoAlpha3
     */
    performanceCountryCode: string;

    /**
     * reference to the payment method
     */
    paymentMethodRef: ApiObjectReference;

    /**
     * currency code  IsoAlpha3
     */
    currencyCode: string;
}

export interface DangerousGoodInformation {

    /**
     * shipping name
     */
    shippingName: string;

    /**
     * tunnel restriction classes
     */
    tunnelRestrictionCode: TunnelRestrictionCode;

    /**
     * transportation category
     */
    transportCategory: string;

    /**
     * description
     */
    description: string;

    /**
     * technical name
     */
    technicalName: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * secundary risk of the dangerous good
     */
    subsidiaryRisk: boolean;

    /**
     * classification code
     */
    classificationCode: string;

    /**
     * packing code
     */
    packingCode: string;

    /**
     * united nations number (un number)
     */
    unNumber: string;

    /**
     * identification class
     */
    identificationClass: string;

    /**
     * regulation code
     */
    regulationCode: RegulationCode;

    /**
     * regulation Set, e.g. ADR
     */
    regulationSet: RegulationSet;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * packing group (I, II, III or blank)
     */
    packingGroup: string;

    /**
     * weight of the hazardous part
     */
    hazardousWeight: number;

    /**
     * adr identification number
     */
    adrNumber: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum DealNotificationEventConfig {
    DEAL_CHANGED = 'DEAL_CHANGED',
    DEAL_COMMENT_MENTIONED = 'DEAL_COMMENT_MENTIONED',
    DEAL_CLOSED_LOOSE = 'DEAL_CLOSED_LOOSE',
    DEAL_CLOSED_WON = 'DEAL_CLOSED_WON',
    DEAL_REMINDER = 'DEAL_REMINDER'
}

export interface DeliveryMethod {

    /**
     * Should a line with this delivery method be transferred into a delivery document with this method?
     */
    splitIntoNewDocument: boolean;

    /**
     * Pass the email to the shipper.
     */
    forwardEmailToShipper: boolean;

    /**
     * Barcode.
     */
    identifier: string;

    /**
     * Minimum weight per parcel.
     */
    minWeightPerParcel: number;

    /**
     * Shipping duration in days.
     */
    deliveryTime: number;

    /**
     * printDescription
     */
    printDescription: string;

    /**
     * Maximum weight per parcel.
     */
    maxWeightPerParcel: number;

    /**
     * Is this active?
     */
    active: boolean;

    /**
     * description
     */
    description: string;

    /**
     * label for this delivery method
     */
    label: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Pass the phone number to the shipper.
     */
    forwardPhoneToShipper: boolean;

    /**
     * Default length unit.
     */
    defaultSizeUnit: UnitTypeReference;

    /**
     * translations
     */
    translations: Array<DocumentTypeTerm>;

    /**
     * Parcel weight source.
     */
    parcelWeightSource: DeliveryMethodParcelWeightSource;

    /**
     * Shipping provider.
     */
    vdsCarrierId: number;

    /**
     * Valid country codes.
     */
    validCountryCodes: Array<string>;

    /**
     * Default weight unit.
     */
    defaultWeightUnit: UnitTypeReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum DeliveryMethodParcelWeightSource {
    AUTOMATIC_VIA_DOCUMENT_LINE = 'AUTOMATIC_VIA_DOCUMENT_LINE',
    MANUAL_RECORDING = 'MANUAL_RECORDING'
}

export interface DeliveryTerm {

    /**
     * free shipping gross value
     */
    freeShippingGrossValue: number;

    /**
     * cod net fee to charge on document
     */
    codNetFee: number;

    /**
     * printDescription
     */
    printDescription: string;

    /**
     * cod gross fee to charge on document
     */
    codGrossFee: number;

    /**
     * Is this active?
     */
    active: boolean;

    /**
     * description
     */
    description: string;

    /**
     * label for this delivery term
     */
    label: string;

    /**
     * information, when the shipping charges should be calculated
     */
    calculateFreightChargesWithType: CalculateFreightChargesWithType;

    /**
     * Account language.
     */
    languageCode: string;

    /**
     * calculate shipping charges per parcel
     */
    freightChargesPerParcel: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * information, how the shipping charges should be calculated
     */
    calculateFreightChargesFromType: CalculateFreightChargesFromType;

    /**
     * translations
     */
    translations: Array<DocumentTypeTerm>;

    /**
     * Delivery methods.
     */
    deliveryMethodRefs: Array<ApiObjectReference>;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * free shipping net value
     */
    freeShippingNetValue: number;

    /**
     * Shipping cost article.
     */
    shippingCostArticleRef: ApiObjectReference;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

/**
 * Leitet die geschriebenen Daten an ein Dokument im DMS weiter.
 */
export interface DmsOutputStream {

    delegate: ShelfFileUploadSession;

    producedFile: ShelfFile;

    shelfCommonMapper: ShelfCommonMapper;

    /**
     * Nach Ende des Schreibvorgangs: Gibt die erzeugte Datei zurück
     * 
     * @return {ShelfFile} 
     */
    getProducedFile(): ShelfFile;
}

export interface Document {

    /**
     * Reference to the billing account.
     */
    billingAccountRef: ApiObjectReference;

    /**
     * Confirmed delivery end (only when the confirmed delivery date is set).
     */
    confirmedDeliveryDateEnd: ScriptingDate;

    /**
     * External document number.
     */
    externalNumber: string;

    /**
     * Document tax summary.
     */
    taxes: Array<DocumentTax>;

    /**
     * Total price - net in base currency.
     */
    baseTotalNetPrice: number;

    /**
     * Receipt details.
     */
    posDetail: DocumentPosDetail;

    /**
     * Confirmed delivery date.
     */
    confirmedDeliveryDate: ScriptingDate;

    /**
     * Document number.
     */
    number: string;

    /**
     * Total VAT.
     */
    totalVat: number;

    /**
     * Default storage for new lines.
     */
    defaultStorageRef: ApiObjectReference;

    /**
     * Name of the ordering person.
     */
    orderedBy: string;

    /**
     * Delivery address.
     */
    deliveryAddress: DocumentAddress;

    /**
     * Priority in the batch processing.
     */
    stackProcessingPriority: number;

    /**
     * Total line discount [gross, net].
     */
    totalLinePriceModifier: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Receipt: balance.
A positive value is the amount still to be paid.
A negative value is the overpaid amount or change.

     */
    posReceiptBalance: number;

    /**
     * Expected number of parcels (information only).
     */
    deliveryQuantityPackages: number;

    /**
     * Return delivery address.
     */
    returnDeliveryAddress: DocumentAddress;

    /**
     * Leitweg-ID
     */
    buyerReference: string;

    /**
     * Order number from the predecessor document.
     */
    referencedOrderNumber: string;

    /**
     * Taxable or tax free.
     */
    taxable: boolean;

    /**
     * Price adjustments - document line total, in base currency.
     */
    baseTotalLinePriceModifier: number;

    /**
     * Prepayment amount in base currency.
     */
    baseDepositPaymentAmount: number;

    /**
     * Total price before discount [gross, net].
     */
    totalBeforeModifier: number;

    /**
     * Is the document frozen?
     */
    frozen: boolean;

    /**
     * Reference to the responsible user.
     */
    responsibleUserRef: ApiObjectReference;

    /**
     * Sales agent number.
     */
    salesAgentNumber: string;

    /**
     * Language.
     */
    languageCode: string;

    /**
     * Reason why the document has been cancelled
     */
    cancellationReasonRef: ApiCreatableReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Document tags.
     */
    tags: Array<TagDto>;

    /**
     * Organizational unit identifier.
     */
    accountId: number;

    /**
     * Country code of the country of origin (ISO Alpha-3).
     */
    sourceCountryCode: string;

    /**
     * Country code of the performance country (ISO Alpha-3).
     */
    performanceCountryCode: string;

    /**
     * Agreed deposit date.
     */
    depositPaymentDate: ScriptingDate;

    /**
     * Total of the shipping costs (net and gross).
     */
    shippingCostSum: number;

    /**
     * Document qualifier.
     */
    qualifier: DocumentQualifier;

    /**
     * Reference to the payment method.
     */
    paymentMethodRef: ApiObjectReference;

    /**
     * Document date.
     */
    documentDate: ScriptingDate;

    /**
     * Is the reverse charge procedure under §13b UStG applied?
     */
    taxLiabilityReversed: boolean;

    /**
     * Final amount rounding: difference between the rounded gross amount and (net + VAT).
     */
    roundingAmount: number;

    /**
     * Shipping date.
     */
    shippingDate: ScriptingDate;

    /**
     * Supplier number.
     */
    supplierNumber: string;

    /**
     * Total price gross.
     */
    totalGrossPrice: number;

    /**
     * Is the document released for delivery?
     */
    deliveryApproved: boolean;

    /**
     * POS payment lines.
     */
    posPayments: Array<DocumentPosPayment>;

    /**
     * Is the receipt paid?
True when the receipt is paid.

     */
    posReceiptPayed: boolean;

    /**
     * Customer number at the supplier.
     */
    ourCustomerNumber: string;

    /**
     * Maximum possible deliveries.
     */
    maxDeliveries: number;

    /**
     * Receipt: total payment amount.
     */
    posReceiptPaymentSum: number;

    /**
     * Expected delivery date.
     */
    deliveryDate: ScriptingDate;

    /**
     * Expected delivery end (only when the delivery date is set).
     */
    deliveryDateEnd: ScriptingDate;

    /**
     * Contract details.
     */
    contractDetail: DocumentContractDetail;

    /**
     * Is a payment plan present?
     */
    paymentPlan: boolean;

    /**
     * Total gross amount eligible for the payment discount.
     */
    cashDiscountableTotalGrossPrice: number;

    /**
     * Fabrication details.
     */
    fabricationDetail: DocumentFabricationDetail;

    /**
     * Calculation mode.
     */
    calculationMode: CalculationMode;

    /**
     * Account number of the associated organizational unit.
     */
    accountNumber: string;

    /**
     * Reference to the payment term.
     */
    paymentTermRef: PaymentTermRef;

    /**
     * Is this processed by the workflow?
     */
    processedByWorkflow: boolean;

    /**
     * Pass the phone number to the shipper.
     */
    forwardPhoneToShipper: boolean;

    /**
     * Price adjustments - document, in base currency.
     */
    baseTotalDocumentPriceModifier: number;

    /**
     * Document texts.
     */
    texts: Array<DocumentText>;

    /**
     * Location (for fabrication orders).
     */
    locationRef: ApiObjectReference;

    /**
     * Is this a collective invoice?
     */
    collectiveInvoice: boolean;

    /**
     * Currency (ISO code, Alpha-3).
     */
    currencyCode: string;

    /**
     * Default address.
     */
    defaultAddress: DocumentAddress;

    /**
     * Performance date.
     */
    performanceDate: ScriptingDate;

    /**
     * Processing option for the batch.
     */
    stackProcessingType: OrderStackProcessingType;

    /**
     * Is the drop shipping document released for invoicing?
     */
    dropShippingInvoiceApproved: boolean;

    /**
     * EN16931 profile for electronic invoices.
     */
    en16931Profile: EN16931Profile;

    /**
     * Exchange rate.
     */
    exchangeRate: number;

    /**
     * Place of the taxable performance.
     */
    taxPerformanceLocation: TaxPerformanceLocationType;

    /**
     * Additional information about decisions in the document context.
     */
    additionalInfo: DocumentAdditionalInfo;

    /**
     * Invoice amount eligible for the payment discount in base currency.
     */
    baseCashDiscountableTotalGrossPrice: number;

    /**
     * Order date.
     */
    orderedOn: ScriptingDate;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * Reference to the delivery method.
     */
    deliveryMethodRef: ApiObjectReference;

    /**
     * Total discount [gross, net].
     */
    totalPriceModifier: number;

    /**
     * Drop shipping.
     */
    dropShipping: boolean;

    /**
     * Total price net.
     */
    totalNetPrice: number;

    /**
     * Validation status for electronic invoices.
     */
    valitoolValidationState: EInvoiceValidationState;

    /**
     * Is the document published (printed, sent by email)?
     */
    published: boolean;

    /**
     * Target document category after the picking.
     */
    afterPickingTargetDocumentTypeRef: ApiObjectReference;

    /**
     * Agreed deposit amount.
     */
    depositPaymentAmount: number;

    /**
     * Total document discount [gross, net].
     */
    totalDocumentPriceModifier: number;

    /**
     * Document type (internal).
     */
    documentType: string;

    /**
     * total gross Volume in cubic meters
     */
    totalGrossVolumeInCubicMeters: number;

    /**
     * Document type identifier.
     */
    documentTypeId: number;

    /**
     * Document category.
     */
    documentTypeCategory: DocumentCategory;

    /**
     * The total weight was set manually.
     */
    userDefinedWeight: boolean;

    /**
     * Document import mode.
     */
    importType: DocumentImportType;

    /**
     * Reference to the assigned sales channel.
     */
    salesChannelRef: ApiObjectReference;

    /**
     * Billing type.
     */
    billingType: BillingType;

    /**
     * Total price - gross in base currency.
     */
    baseTotalGrossPrice: number;

    /**
     * External identifier.
     */
    externalIdentifier: string;

    /**
     * Total weight unit.
     */
    grossWeightUnit: UnitTypeReference;

    /**
     * Document lines.
     */
    lines: Array<DocumentLine>;

    /**
     * Pass the email to the shipper.
     */
    forwardEmailToShipper: boolean;

    /**
     * Additional delivery text.
     */
    deliveryText: string;

    /**
     * Custom fields.
     */
    custom: EavDocument;

    /**
     * Value date.
     */
    valueDate: ScriptingDate;

    /**
     * Customer number.
     */
    customerNumber: string;

    /**
     * Shipping cost lines.
     */
    shippingCosts: Array<DocumentShippingCost>;

    /**
     * Document state instance.
     */
    documentState: DocumentTypeState;

    /**
     * VAT identification number.
     */
    taxIdentificationNumber: string;

    /**
     * Change.
     */
    posReceiptChangeAmount: number;

    /**
     * Is the receipt balanced, i.e. paid with no change?
True when the receipt is balanced.

     */
    posReceiptBalanced: boolean;

    /**
     * Reference to the delivery term.
     */
    deliveryTermRef: ApiObjectReference;

    /**
     * Total gross weight.
     */
    grossWeight: number;

    /**
     * Document base currency.
     */
    baseCurrencyCode: string;

    /**
     * Exchange rate determination origin.
     */
    exchangeRateOrigin: ExchangeRateOrigin;

    /**
     * Price changes (e.g. discounts).
     */
    priceModifiers: Array<DocumentPriceModifier>;

    /**
     * Billing address.
     */
    billingAddress: DocumentAddress;

    /**
     * VAT ID validation status.
     */
    taxIdVerificationState: TaxIdVerificationState;

    /**
     * Ordered by the contact person.
     */
    orderedByPersonRef: ApiObjectReference;

    /**
     * Report group, if it deviates from the default.
     */
    reportGroupRef: ApiObjectReference;
}

export interface DocumentAdditionalInfo {

    /**
     * Tax situation origin.
     */
    taxSituationOrigin: TaxSituationOrigin;

    /**
     * Active rounding mode for this document (frozen from the SalesChannel).
     */
    roundingMode: DocumentRounding;

    /**
     * Language origin.
     */
    languageCodeOrigin: LanguageCodeOrigin;

    /**
     * Parameters used in the {@link DocumentContext}.
     */
    contextParameters: Array<AdditionalParameter>;

    /**
     * Buyer reference origin.
     */
    buyerReferenceOrigin: BuyerReferenceOrigin;

    /**
     * Calculation mode origin.
     */
    calculationModeOrigin: CalculationModeOrigin;

    /**
     * Targets for the incoming goods for the whole document.
     */
    incomingGoodsTarget: DocumentAdditionalInfo$IncomingGoodsTarget;

    /**
     * Electronic invoice profile origin.
     */
    en16931Origin: EN16931Origin;

    /**
     * Translations.
     */
    translations: Array<DocumentAdditionalInfo$PrintedTranslatedField>;

    /**
     * Contains the results of previous user decisions on this Document.
     */
    previousDecisions: string;

    /**
     * Targets for the incoming goods per document line.
     */
    incomingGoodsTargetsPerLine: Array<DocumentAdditionalInfo$IncomingGoodsTargetOfLine>;
}

export interface DocumentAdditionalInfo$IncomingGoodsTarget {

    /**
     * Pick trolley for the incoming goods.
     */
    pickTrolleyId: number;

    /**
     * Storage bin for the incoming goods.
     */
    storageBinId: number;
}

export interface DocumentAdditionalInfo$IncomingGoodsTargetOfLine {

    /**
     * Pick trolley for the incoming goods.
     */
    pickTrolleyId: number;

    /**
     * Storage bin for the incoming goods.
     */
    storageBinId: number;

    /**
     * Document line identifier.
     */
    lineId: number;

    /**
     * Predecessor document line identifier.
     */
    sourceLineId: number;
}

export interface DocumentAdditionalInfo$PrintedTranslatedField {

    /**
     * Field name.
     */
    fieldName: string;

    /**
     * For which entity?
     */
    entityName: string;

    /**
     * Translation.
     */
    content: string;
}

export interface DocumentAddress {

    /**
     * city
     */
    city: string;

    /**
     * Title.
     */
    title: string;

    /**
     * Region
     */
    regionRef: ApiObjectReference;

    /**
     * Post office box
     */
    postOfficeBox: string;

    /**
     * country code IsoAlpha3
     */
    countryCode: string;

    /**
     * Street
     */
    street: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Mail contact
     */
    mailContact: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * GLN
     */
    globalLocationNumber: string;

    /**
     * Delivery method.
     */
    deliveryMethodRef: ApiObjectReference;

    /**
     * Postcode
     */
    postcode: string;

    /**
     * Language Code
     */
    languageCode: string;

    /**
     * Payment terms.
     */
    paymentTermRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Additional address line1
     */
    additionalAddressLine1: string;

    /**
     * Additional address line2
     */
    additionalAddressLine2: string;

    /**
     * Delivery terms.
     */
    deliveryTermRef: ApiObjectReference;

    /**
     * Street address number
     */
    streetAddressNumber: string;

    /**
     * address line 3
     */
    name3: string;

    /**
     * Phone contact
     */
    phoneContact: string;

    /**
     * Payment method.
     */
    paymentMethodRef: ApiObjectReference;

    /**
     * Reference to the account.
     */
    accountRef: ApiObjectReference;

    /**
     * salutation for this address
     */
    salutation: string;

    /**
     * address line 2
     */
    name2: string;

    /**
     * address line 1
     */
    name1: string;
}

export const enum DocumentCategory {
    CUSTOMER_OFFER = 'CUSTOMER_OFFER',
    CUSTOMER_ORDER = 'CUSTOMER_ORDER',
    CUSTOMER_DELIVERY_DOCUMENT = 'CUSTOMER_DELIVERY_DOCUMENT',
    CUSTOMER_INVOICE = 'CUSTOMER_INVOICE',
    CUSTOMER_PROFORMA_INVOICE = 'CUSTOMER_PROFORMA_INVOICE',
    CUSTOMER_DELIVERY_INVOICE = 'CUSTOMER_DELIVERY_INVOICE',
    CUSTOMER_PROGRESS_INVOICE = 'CUSTOMER_PROGRESS_INVOICE',
    CUSTOMER_FINAL_INVOICE = 'CUSTOMER_FINAL_INVOICE',
    CUSTOMER_PARTIAL_INVOICE = 'CUSTOMER_PARTIAL_INVOICE',
    CUSTOMER_INVOICE_CANCELLATION = 'CUSTOMER_INVOICE_CANCELLATION',
    CUSTOMER_DELIVERY_INVOICE_CANCELLATION = 'CUSTOMER_DELIVERY_INVOICE_CANCELLATION',
    CUSTOMER_PROGRESS_INVOICE_CANCELLATION = 'CUSTOMER_PROGRESS_INVOICE_CANCELLATION',
    CUSTOMER_FINAL_INVOICE_CANCELLATION = 'CUSTOMER_FINAL_INVOICE_CANCELLATION',
    CUSTOMER_PARTIAL_INVOICE_CANCELLATION = 'CUSTOMER_PARTIAL_INVOICE_CANCELLATION',
    CUSTOMER_DEPOSIT_INVOICE = 'CUSTOMER_DEPOSIT_INVOICE',
    CUSTOMER_DEPOSIT_INVOICE_CANCELLATION = 'CUSTOMER_DEPOSIT_INVOICE_CANCELLATION',
    CUSTOMER_CREDIT_NOTE_WITH_STOCK = 'CUSTOMER_CREDIT_NOTE_WITH_STOCK',
    CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK = 'CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK',
    CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK_CANCELLATION = 'CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK_CANCELLATION',
    CUSTOMER_CREDIT_NOTE_WITH_STOCK_CANCELLATION = 'CUSTOMER_CREDIT_NOTE_WITH_STOCK_CANCELLATION',
    CUSTOMER_RETURN_ANNOUNCEMENT = 'CUSTOMER_RETURN_ANNOUNCEMENT',
    CUSTOMER_GOODS_RETURN = 'CUSTOMER_GOODS_RETURN',
    SUPPLIER_PRICE_REQUEST = 'SUPPLIER_PRICE_REQUEST',
    SUPPLIER_ORDER = 'SUPPLIER_ORDER',
    SUPPLIER_DELIVERY_DOCUMENT = 'SUPPLIER_DELIVERY_DOCUMENT',
    SUPPLIER_INVOICE = 'SUPPLIER_INVOICE',
    SUPPLIER_DELIVERY_INVOICE = 'SUPPLIER_DELIVERY_INVOICE',
    SUPPLIER_CREDIT_NOTE_WITH_STOCK = 'SUPPLIER_CREDIT_NOTE_WITH_STOCK',
    SUPPLIER_CREDIT_NOTE_WITHOUT_STOCK = 'SUPPLIER_CREDIT_NOTE_WITHOUT_STOCK',
    SUPPLIER_DEPOSIT_INVOICE = 'SUPPLIER_DEPOSIT_INVOICE',
    SUPPLIER_PROGRESS_INVOICE = 'SUPPLIER_PROGRESS_INVOICE',
    SUPPLIER_PARTIAL_INVOICE = 'SUPPLIER_PARTIAL_INVOICE',
    SUPPLIER_FINAL_INVOICE = 'SUPPLIER_FINAL_INVOICE',
    COMMISSION_SETTLEMENT = 'COMMISSION_SETTLEMENT',
    COMMISSION_SETTLEMENT_CANCELLATION = 'COMMISSION_SETTLEMENT_CANCELLATION',
    SUPPLIER_COMMISSION_CREDIT_NOTE = 'SUPPLIER_COMMISSION_CREDIT_NOTE',
    SUPPLIER_COMMISSION_CREDIT_NOTE_CANCELLATION = 'SUPPLIER_COMMISSION_CREDIT_NOTE_CANCELLATION',
    CUSTOMER_SUBSCRIPTION_CONTRACT = 'CUSTOMER_SUBSCRIPTION_CONTRACT',
    POS_CASH_JOURNAL_OPENING = 'POS_CASH_JOURNAL_OPENING',
    POS_CASH_RECEIPT = 'POS_CASH_RECEIPT',
    POS_RETURN_CASH_RECEIPT = 'POS_RETURN_CASH_RECEIPT',
    POS_CASH_JOURNAL_DEPOSIT = 'POS_CASH_JOURNAL_DEPOSIT',
    POS_CASH_JOURNAL_EXPENSE = 'POS_CASH_JOURNAL_EXPENSE',
    POS_CASH_JOURNAL_DEPOSIT_CANCELLATION = 'POS_CASH_JOURNAL_DEPOSIT_CANCELLATION',
    POS_CASH_JOURNAL_EXPENSE_CANCELLATION = 'POS_CASH_JOURNAL_EXPENSE_CANCELLATION',
    POS_CASH_JOURNAL_WITHDRAWAL_CANCELLATION = 'POS_CASH_JOURNAL_WITHDRAWAL_CANCELLATION',
    POS_CASH_JOURNAL_WITHDRAWAL = 'POS_CASH_JOURNAL_WITHDRAWAL',
    POS_CASH_JOURNAL_CLOSING = 'POS_CASH_JOURNAL_CLOSING',
    FABRICATION_ORDER = 'FABRICATION_ORDER'
}

export const enum DocumentCommissionOrigin {
    NOT_COMMISSIONABLE = 'NOT_COMMISSIONABLE',
    USER_DEFINED = 'USER_DEFINED',
    AUTOMATIC = 'AUTOMATIC',
    PREDECESSOR = 'PREDECESSOR',
    RECALCULATE = 'RECALCULATE'
}

export interface DocumentContractDetail {

    /**
     * Cron expression for calculating the due date.
     */
    dueDateCalculation: string;

    /**
     * Term from.
     */
    runtimeFromDate: ScriptingDate;

    /**
     * Contract end (header only).
     */
    endDate: ScriptingDate;

    /**
     * Show in the portal?
     */
    publishInPortal: boolean;

    /**
     * Due date.
     */
    dueDate: ScriptingDate;

    /**
     * Is the contract active?
     */
    active: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Bill immediately?
     */
    calculateDirectly: boolean;

    /**
     * Term until.
     */
    runtimeToDate: ScriptingDate;

    /**
     * Latest possible termination date for the provider.
     */
    lastProviderCancellationDate: ScriptingDate;

    /**
     * Next due date.
     */
    nextDueDate: ScriptingDate;

    /**
     * Latest possible termination date for the customer.
     */
    lastCustomerCancellationDate: ScriptingDate;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Contract start (header only).
     */
    startDate: ScriptingDate;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentFabricationDetail {

    /**
     * Target storage.
     */
    targetStorageRef: ApiObjectReference;

    /**
     * Note.
     */
    note: string;

    /**
     * Material storage.
     */
    componentsStorageRef: ApiObjectReference;

    /**
     * Quality assurance storage.
     */
    qualityAssuranceStorageRef: ApiObjectReference;

    /**
     * Workbench storage.
     */
    workbenchStorageRef: ApiObjectReference;

    /**
     * Custom field.
     */
    custom: EavFabrication;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Defect storage bin (when the storage uses storage bins).
     */
    defectiveStorageBinRef: ApiObjectReference;

    /**
     * Quality assurance storage bin (when the storage uses storage bins).
     */
    qualityAssuranceStorageBinRef: ApiObjectReference;

    /**
     * Defect storage.
     */
    defectiveStorageRef: ApiObjectReference;

    /**
     * Target storage bin (when the storage uses storage bins).
     */
    targetStorageBinRef: ApiObjectReference;

    /**
     * Workbench storage bin (when the storage uses storage bins).
     */
    workbenchStorageBinRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Minimum degree of fulfillment.
     */
    minimumDegreeOfFulfillment: number;

    /**
     * Start date.
     */
    startDate: ScriptingDate;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentFinanceBooking {

    /**
     * Cost center.
     */
    costCenter1: string;

    /**
     * Finance account number.
     */
    ledgerNumber: string;

    /**
     * Document line identifier.
     */
    documentLineId: number;

    /**
     * Booking text.
     */
    description: string;

    /**
     * Comment.
     */
    comment: string;

    /**
     * Transaction key.
     */
    transactionKey: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum DocumentImportType {
    NOT_IMPORTED = 'NOT_IMPORTED',
    TRANSFERABLE = 'TRANSFERABLE',
    TRANSFERABLE_AND_EDITABLE = 'TRANSFERABLE_AND_EDITABLE',
    HISTORICAL_DATA = 'HISTORICAL_DATA',
    E_INVOICE = 'E_INVOICE',
    EXTERNALLY_CREATED = 'EXTERNALLY_CREATED'
}

export interface DocumentLine {

    /**
     * Confirmed delivery period end (only required for delivery periods when the delivery date is set).
     */
    confirmedDeliveryDateEnd: ScriptingDate;

    /**
     * Base unit.
     */
    baseCapacityUnit: UnitTypeReference;

    /**
     * Processed quantity.
     */
    quantityCommitted: number;

    /**
     * Taxes.
     */
    taxes: Array<DocumentTax>;

    /**
     * POS information.
     */
    posDetail: DocumentLinePosDetail;

    /**
     * Confirmed delivery date.
     */
    confirmedDeliveryDate: ScriptingDate;

    /**
     * Article number.
     */
    number: string;

    /**
     * Total gross weight.
     */
    totalGrossWeight: number;

    /**
     * Reference to the customer order line.
     */
    customerOrderLineRef: DocumentLineRef;

    /**
     * Reference to the open item to settle (only for OPEN_ITEM_SETTLEMENT).
     */
    settledOpenItemRef: ApiObjectReference;

    /**
     * Is this line eligible for the payment discount?
     */
    cashDiscountable: boolean;

    /**
     * Price per quantity [gross, net].
     */
    price: number;

    /**
     * Finance booking.
     */
    financeBooking: DocumentFinanceBooking;

    /**
     * Total of the line price changes [gross, net].
     */
    totalLinePriceModifier: number;

    /**
     * Drop shipping policy.
     */
    dropShippingPolicy: DropShippingPolicy;

    /**
     * §13b UStG preset of the article.
     */
    articleTaxLiabilityReversed: boolean;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Position number across all article lines.
     */
    positionOfArticleLine: number;

    /**
     * Price per unit in base currency.
     */
    basePrice: number;

    /**
     * Serial type.
     */
    serialType: ArticleSerialType;

    /**
     * Price unit.
     */
    priceUnit: number;

    /**
     * Tax schema.
     */
    taxSchemaRef: ApiObjectReference;

    /**
     * Price adjustments - line, in base currency.
     */
    baseTotalLinePriceModifier: number;

    /**
     * Tax amount.
     */
    vat: number;

    /**
     * Reference to the accessory's main article line.
     */
    mainArticleLineRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * External article name.
     */
    externalArticleName: string;

    /**
     * Total net weight.
     */
    totalNetWeight: number;

    /**
     * Is §13b UStG applied?
     */
    taxLiabilityReversed: boolean;

    /**
     * Components.
     */
    components: Array<DocumentLineComponent>;

    /**
     * Shipping date.
     */
    shippingDate: ScriptingDate;

    /**
     * Open remaining amount of the open item to settle (only in the response).
     */
    settledOpenItemBalance: number;

    /**
     * Return details.
     */
    returnDetail: DocumentLineReturnDetail;

    /**
     * Calculation structure.
     */
    calculationData: string;

    /**
     * Reference to the predecessor document line.
     */
    sourceLineRef: DocumentLineRef;

    /**
     * Price determination criteria.
     */
    priceSelectionCriteria: PriceSelectionCriteria;

    /**
     * Voucher type to issue (VOUCHER_SALE only)
     */
    voucherTypeRef: ApiObjectReference;

    /**
     * Unit of measure content.
     */
    capacity: number;

    /**
     * Unit type.
     */
    unitType: UnitTypeReference;

    /**
     * Accessory insert term.
     */
    insertTerm: AccessoryInsertTerm;

    /**
     * Delivery date.
     */
    deliveryDate: ScriptingDate;

    /**
     * Expected delivery period end (only required for delivery periods when the delivery date is set).
     */
    deliveryDateEnd: ScriptingDate;

    /**
     * Scanned code of the preprinted voucher card (VOUCHER_SALE of a voucher type with scanned codes only)
     */
    voucherCode: string;

    /**
     * Payment discount of the open item to settle that is applicable at the document date (only in the response).
     */
    settledOpenItemDiscountAmount: number;

    /**
     * Line net sales value in base currency.
     */
    baseSalesValueNet: number;

    /**
     * Net weight unit.
     */
    netWeightUnit: UnitTypeReference;

    /**
     * Contract information.
     */
    contractDetail: DocumentContractDetail;

    /**
     * Shipping cost details; only set for shipping cost lines that are kept as a numbered document line (e.g. in a collective invoice).
     */
    shippingCostDetail: RequestDocumentLineShippingCostDetail;

    /**
     * Fabrication details.
     */
    fabricationDetail: DocumentLineFabricationDetail;

    /**
     * Price adjustments - proportionally from the document, in base currency.
     */
    baseTotalDocumentPriceModifier: number;

    /**
     * picking hint
     */
    storageInfo: string;

    /**
     * Line texts.
     */
    texts: Array<DocumentText>;

    /**
     * Is this line eligible for commission?
     */
    commissionable: boolean;

    /**
     * Does the article have accessories?
     */
    hasAccessories: boolean;

    /**
     * Is this line completely processed?
     */
    complete: boolean;

    /**
     * Due date of the open item to settle (only in the response).
     */
    settledOpenItemPaymentDueDate: ScriptingDate;

    /**
     * Country of origin.
     */
    country: CountryReference;

    /**
     * Customs tariff number.
     */
    customsTariffNumber: string;

    /**
     * Performance date.
     */
    performanceDate: ScriptingDate;

    /**
     * Dissolved into container articles.
     */
    convertedIntoBundleArticleRef: ApiObjectReference;

    /**
     * Internal tax information.
     */
    internalVatInfo: string;

    /**
     * Warranty in months.
     */
    warrantyInMonths: number;

    /**
     * Is this a progress invoice line?
     */
    progressInvoice: boolean;

    /**
     * Shipper-specific information.
     */
    packageOptions: string;

    /**
     * Commissions.
     */
    commissions: Array<DocumentLineCommission>;

    /**
     * Total line price in base currency.
     */
    baseTotalLinePrice: number;

    /**
     * Line type.
     */
    lineType: DocumentLineType;

    /**
     * Pre-ordered quantity in the picking process.
     */
    preOrderPickedQuantity: number;

    /**
     * Reference to the supplier order line.
     */
    supplierOrderLineIds: Array<number>;

    /**
     * External reference to the VDS parcel.
     */
    externalReferenceVds: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * Should labels be printed for this line?
     */
    doPrintLabel: boolean;

    /**
     * Delivery method.
     */
    deliveryMethodRef: ApiObjectReference;

    /**
     * Region of the payment when it comes from within the country.
     */
    countryRegion: ApiObjectReference;

    /**
     * The affected voucher: for VOUCHER_REDEMPTION the one to redeem, for VOUCHER_SALE the issued one, or on return, credit note or cancellation the returned one
     */
    voucherRef: ApiObjectReference;

    /**
     * Commission origin.
     */
    commissionOrigin: DocumentCommissionOrigin;

    /**
     * Net weight.
     */
    netWeight: number;

    /**
     * Net total price (after the price changes).
     */
    salesValueNet: number;

    /**
     * Article name.
     */
    name: string;

    /**
     * Position number.
     */
    position: number;

    /**
     * Should the DocumentLine be recalculated from the components?
     */
    recalcLinePriceViaComponents: boolean;

    /**
     * Bookings.
     */
    bookings: Array<DocumentLineBooking>;

    /**
     * unit gross Volume in cubic meters
     */
    unitGrossVolumeInCubicMeters: number;

    /**
     * Total of the document price changes [gross, net].
     */
    totalDocumentPriceModifier: number;

    /**
     * Quantity in the picking process.
     */
    pickingQuantity: number;

    /**
     * unit gross Volume in cubic meters
     */
    totalGrossVolumeInCubicMeters: number;

    /**
     * Article description.
     */
    description: string;

    /**
     * Price origin.
     */
    priceOrigin: ProductPriceOrigin;

    /**
     * Reference to the storage.
     */
    storage: ApiObjectReference;

    /**
     * Gross profit determination.
     */
    revenueCalculation: RevenueCalculation;

    /**
     * Line total [gross, net], i.e. price * quantity less the line discounts.
     */
    totalLinePrice: number;

    /**
     * Reference to the base line.
     */
    baseLineId: number;

    /**
     * Gross weight unit.
     */
    grossWeightUnit: UnitTypeReference;

    /**
     * Is this line eligible for discount?
     */
    discountable: boolean;

    /**
     * Base unit content.
     */
    baseCapacity: number;

    /**
     * Product type.
     */
    productType: ProductType;

    /**
     * Quantity.
     */
    quantity: number;

    /**
     * Delivery text.
     */
    deliveryText: string;

    /**
     * Preset value for the price calculation.
     */
    presetPrice: number;

    /**
     * Custom fields.
     */
    custom: EavDocumentline;

    /**
     * Note on the open item line - transferred into the open item comment on closing.
     */
    settledOpenItemComment: string;

    /**
     * Article.
     */
    articleId: number;

    /**
     * Internal price change information.
     */
    internalPriceModifierInfo: string;

    /**
     * Unit of measure.
     */
    capacityUnit: UnitTypeReference;

    /**
     * Delivery term.
     */
    deliveryTermRef: ApiObjectReference;

    /**
     * Gross weight.
     */
    grossWeight: number;

    /**
     * External article description.
     */
    externalArticleDescription: string;

    /**
     * Applied price changes.
     */
    priceModifiers: Array<DocumentPriceModifier>;

    /**
     * Contains the results of previous user decisions on this DocumentLine.
     */
    previousDecisions: JsonNode;

    /**
     * External article number.
     */
    externalArticleNumber: string;

    /**
     * Components.
     */
    fabricationComponents: Array<DocumentLineFabricationComponent>;

    /**
     * Product variant values.
     */
    variantValues: Array<ApiObjectReference>;
}

export interface DocumentLineBooking {

    /**
     * Note.
     */
    note: string;

    /**
     * Serial number (object).
     */
    serialNumberRef: ApiObjectReference;

    /**
     * Booked quantity.
     */
    quantity: number;

    /**
     * Serial number 2.
     */
    serialNumber2: string;

    /**
     * Serial number 1.
     */
    serialNumber1: string;

    /**
     * Booked storage bin.
     */
    storageBinRef: ApiObjectReference;

    /**
     * Booked article.
     */
    articleRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Expiry date.
     */
    expiryDate: ScriptingDate;

    /**
     * Unique Device Identifier (UDI)
     */
    udi: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentLineCommission {

    /**
     * the currency-code IsoAlpha3
     */
    valueCurrencyCode: string;

    /**
     * Commission type.
     */
    valueType: ValueType;

    /**
     * Origin.
     */
    origin: DocumentCommissionOrigin;

    /**
     * Description.
     */
    description: string;

    /**
     * Comment.
     */
    comment: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Commission percentage or value.
     */
    value: number;

    /**
     * Sales agent.
     */
    salesAgentAccountRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentLineComponent {

    /**
     * Quantity.
     */
    quantity: number;

    /**
     * Quantity in picking.
     */
    pickingQuantity: number;

    /**
     * Fabrication details.
     */
    fabricationDetail: DocumentLineComponentFabricationDetail;

    /**
     * Custom fields.
     */
    custom: EavDocumentlinecomponent;

    /**
     * Delivered quantity.
     */
    quantityCommitted: number;

    /**
     * Reference to the component article.
     */
    articleId: number;

    /**
     * Article description.
     */
    description: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Reference to the component in the source Document.
     */
    sourceDocumentLineComponentId: number;

    /**
     * Component texts.
     */
    texts: Array<DocumentText>;

    /**
     * Unit price.
     */
    price: number;

    /**
     * Article name.
     */
    name: string;

    /**
     * Quantity per assembly.
     */
    quantityPerAssemblyGroup: number;

    /**
     * Component position in the assembly.
     */
    position: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Bookings for this component.
     */
    bookings: Array<DocumentLineBooking>;

    /**
     * Serial type.
     */
    serialType: ArticleSerialType;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentLineComponentFabricationDetail {

    /**
     * Source container article for the material transfer.
     */
    sourceBundleArticleRef: ProductArticleRef;

    /**
     * Deviating production costs.
     */
    deviatingUnitPrice: number;

    /**
     * Custom field.
     */
    custom: EavFabricationlinecomponent;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Use for the serial number inheritance.
     */
    serialInheritanceComponent: boolean;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentLineFabricationBookedComponent {

    /**
     * Article number.
     */
    number: string;

    /**
     * Serial number.
     */
    serialNumberRef: ApiObjectReference;

    /**
     * Quantity used.
     */
    quantity: number;

    /**
     * Article name.
     */
    name: string;

    /**
     * Article identifier.
     */
    articleId: number;

    /**
     * Article description.
     */
    description: string;
}

export interface DocumentLineFabricationComponent {

    /**
     * Source container article for the material transfer.
     */
    sourceBundleArticleRef: ProductArticleRef;

    /**
     * Quantity.
     */
    quantity: number;

    /**
     * Deviating production costs.
     */
    deviatingUnitPrice: number;

    /**
     * Description.
     */
    description: string;

    /**
     * Deviating product unit.
     */
    deviatingUnitRef: UnitTypeReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Basis for inheriting the serial number.
     */
    forSerialInheritance: boolean;

    /**
     * Label.
     */
    name: string;

    /**
     * Position.
     */
    position: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Component article.
     */
    componentArticleRef: ProductArticleRef;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentLineFabricationDetail {

    /**
     * Quantity completed.
     */
    quantityFinished: number;

    /**
     * Produced serial numbers.
     */
    serialNumbers: Array<DocumentLineFabricationDetailSerialNumber>;

    /**
     * Custom field.
     */
    custom: EavFabricationline;

    /**
     * Quantity defective.
     */
    quantityDefective: number;

    /**
     * Quantity produced.
     */
    quantityCommitted: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Quantity in quality assurance.
     */
    quantityInQA: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentLineFabricationDetailSerialNumber {

    /**
     * Quantity completed.
     */
    quantityFinished: number;

    /**
     * Produced or planned quantity.
     */
    quantity: number;

    /**
     * Produced serial number.
     */
    serialNumber: ArticleSerialNumber;

    /**
     * Booked components.
     */
    bookedComponents: Array<DocumentLineFabricationBookedComponent>;

    /**
     * Quantity defective.
     */
    quantityDefective: number;

    /**
     * Actually produced quantity.
     */
    quantityCommitted: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Quantity in quality assurance.
     */
    quantityInQA: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentLinePosDetail {

    /**
     * Payment operation type (PAYMENT, CANCEL, REFUND).
     */
    paymentOperation: PosPaymentOperation;

    /**
     * Mode for the withdrawal at the cash closing.
     */
    withdrawalMode: CashJournalWithdrawalMode;

    /**
     * Can this payment line be removed from the document? False while the payment is still running or has already been executed successfully.
     */
    deletable: boolean;

    /**
     * Deposit or expense type.
     */
    depositExpenseTypeId: number;

    /**
     * External payment status.
     */
    externalPaymentStatus: PosPaymentStatus;

    /**
     * Withdrawal to amount (mode BALANCE) — remaining amount that stays in the POS register.
     */
    withdrawToBalance: number;

    /**
     * External payment identifier of the payment to cancel (only for CANCEL).
     */
    cancelledExternalPaymentId: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Withdrawal amount (mode MANUAL).
     */
    withdrawalAmount: number;

    /**
     * Payment method.
     */
    paymentMethodId: number;

    /**
     * Error message from the payment backend (only for a failed payment).
     */
    externalPaymentErrorMessage: string;

    /**
     * Payment method balance before the withdrawal.
     */
    balanceBeforeWithdrawal: number;

    /**
     * External payment identifier for the connection to the payment backend.
     */
    externalPaymentId: string;

    /**
     * Line type.
     */
    posLineType: PosLineType;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentLineRef {

    /**
     * Document number.
     */
    number: string;

    /**
     * quantity
     */
    quantity: number;

    /**
     * Document type.
     */
    documentType: string;

    /**
     * Article number.
     */
    articleNumber: string;

    /**
     * Customer short label.
     */
    displayName: string;

    /**
     * price per quantity [GROSS, NET]
     */
    price: number;

    /**
     * Article name.
     */
    name: string;

    /**
     * Document identifier.
     */
    documentId: number;

    /**
     * Document line identifier.
     */
    id: number;

    /**
     * Position number.
     */
    position: number;

    /**
     * Document category.
     */
    category: DocumentCategory;

    /**
     * Document state.
     */
    documentState: string;
}

export interface DocumentLineReturnDetail {

    /**
     * Delivery term for the replacement shipment when transferred into a shipment or customer order.
     */
    replacementDeliveryTermRef: ApiObjectReference;

    /**
     * Delivery method for the return (how the customer sends it back).
     */
    deliveryMethodRef: ApiObjectReference;

    /**
     * Reference to the replacement article (only for GOODS_EXCHANGE_*; default: the same article as in the document line).
     */
    goodsExchangeArticleRef: ApiObjectReference;

    /**
     * Is a repair requested (only for GOODS_EXCHANGE_ITEM_GETS_SEND_BACK)?
     */
    repairRequested: boolean;

    /**
     * Is this a warranty exchange (only for *_ITEM_GETS_SEND_BACK)?
     */
    warrantyExchange: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Customer share of a price reduction in percent (0-100). How much % of the saving is credited to the customer?
     */
    customerShareOnReduction: number;

    /**
     * Wait for the return before the goods replacement (only for GOODS_EXCHANGE_ITEM_GETS_SEND_BACK)?
     */
    waitForReturnBeforeExchange: boolean;

    /**
     * Delivery term for the return (how the customer sends it back).
     */
    deliveryTermRef: ApiObjectReference;

    /**
     * Reference to the return cause.
     */
    returnCauseRef: ApiObjectReference;

    /**
     * Customer share of a surcharge in percent (0-100). How much % of the surcharge does the customer pay?
     */
    customerShareOnSurcharge: number;

    /**
     * Delivery method for the replacement shipment when transferred into a shipment or customer order.
     */
    replacementDeliveryMethodRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Return category.
     */
    returnCategory: ReturnCategory;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum DocumentLineType {
    ARTICLE_LINE = 'ARTICLE_LINE',
    ALTERNATIVE_POSITION = 'ALTERNATIVE_POSITION',
    LINK_POSITION = 'LINK_POSITION',
    OPTIONAL_POSITION = 'OPTIONAL_POSITION',
    TEXT_LINE = 'TEXT_LINE',
    SHIPPING_COST_LINE = 'SHIPPING_COST_LINE',
    SUBTOTAL = 'SUBTOTAL',
    POS = 'POS',
    ROUNDING_LINE = 'ROUNDING_LINE',
    OPEN_ITEM_SETTLEMENT = 'OPEN_ITEM_SETTLEMENT',
    ON_ACCOUNT_PAYMENT = 'ON_ACCOUNT_PAYMENT',
    VOUCHER_SALE = 'VOUCHER_SALE',
    VOUCHER_REDEMPTION = 'VOUCHER_REDEMPTION'
}

export interface DocumentPosDetail {

    /**
     * Transaction end time.
     */
    timeEnd: number;

    /**
     * TSS serial number.
     */
    tssSerialNumber: string;

    /**
     * Fiscalization backend the document was created with.
     */
    fiscalizationBackendRef: ApiObjectReference;

    /**
     * Signature.
     */
    signature: string;

    /**
     * Client serial number.
     */
    clientSerialNumber: string;

    /**
     * Transaction number.
     */
    transactionNumber: number;

    /**
     * Was this cash withdrawal created by the cash closing? Such a withdrawal cannot be cancelled on its own.
     */
    withdrawalFromClosing: boolean;

    /**
     * Signature counter.
     */
    signatureCounter: number;

    /**
     * TSS signature.
     */
    tssSignature: TssSignature;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Revision
     */
    revision: number;

    /**
     * External reference.
     */
    externalReference: string;

    /**
     * Transaction start time.
     */
    timeStart: number;

    /**
     * Cash book.
     */
    cashJournalRef: ApiObjectReference;

    /**
     * POS register.
     */
    posRegisterRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Cash drawer.
     */
    cashDrawerRef: ApiObjectReference;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentPosPayment {

    /**
     * Payment operation type (PAYMENT, CANCEL, REFUND).
     */
    paymentOperation: PosPaymentOperation;

    /**
     * Amount.
     */
    amount: number;

    /**
     * Mode for the withdrawal at the cash closing (only relevant for a CASH_FINAL_BALANCE line).
     */
    withdrawalMode: CashJournalWithdrawalMode;

    /**
     * Deposit or expense type.
     */
    depositExpenseTypeRef: ApiObjectReference;

    /**
     * Can this payment line be removed from the document? False while the payment is still running or has already been executed successfully.
     */
    deletable: boolean;

    /**
     * External payment status.
     */
    externalPaymentStatus: PosPaymentStatus;

    /**
     * Withdrawal to amount (mode BALANCE) — remaining amount that stays in the POS register.
     */
    withdrawToBalance: number;

    /**
     * Voucher type of a voucher balance (final balance and withdrawal lines)
     */
    voucherTypeRef: ApiObjectReference;

    /**
     * External payment identifier of the payment to cancel (only for CANCEL).
     */
    cancelledExternalPaymentId: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Redeemed voucher, voucher payments only
     */
    voucherRef: ApiObjectReference;

    /**
     * Withdrawal amount; in mode MANUAL provided by the user, in modes FULL/BALANCE/NONE calculated by the backend from the current balance.
     */
    withdrawalAmount: number;

    /**
     * Payment method.
     */
    posPaymentMethodRef: ApiObjectReference;

    /**
     * Error message from the payment backend (only for a failed payment).
     */
    externalPaymentErrorMessage: string;

    /**
     * Payment method balance before the withdrawal (set by the backend).
     */
    balanceBeforeWithdrawal: number;

    /**
     * External payment identifier for the connection to the payment backend.
     */
    externalPaymentId: string;

    /**
     * Line type.
     */
    posLineType: PosLineType;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentPriceModifier {

    /**
     * ID of Source entity of price modifier
     */
    sourceId: number;

    /**
     * Calculated modifier value in base currency.
     */
    baseCalculatedValue: number;

    /**
     * calculated discount/surcharge
     */
    calculatedValue: number;

    /**
     * modifierType
     */
    modifierType: PriceModifierType;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Modifier value in base currency.
     */
    baseValue: number;

    /**
     * Source of price modifier
     */
    sourceType: DocumentPriceModifier$PriceModifierSourceType;

    /**
     * Type of value
     */
    valueType: ValueType;

    /**
     * Name of modifier
     */
    name: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Value
     */
    value: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum DocumentPriceModifier$PriceModifierSourceType {
    CUSTOM = 'CUSTOM',
    PRODUCT = 'PRODUCT',
    DISCOUNT_GROUP = 'DISCOUNT_GROUP',
    PREDECESSOR_DOCUMENT = 'PREDECESSOR_DOCUMENT'
}

export const enum DocumentQualifier {
    SALE = 'SALE',
    PURCHASE = 'PURCHASE',
    COMMISSION = 'COMMISSION',
    SALES_CONTRACT = 'SALES_CONTRACT',
    PURCHASE_CONTRACT = 'PURCHASE_CONTRACT',
    POINT_OF_SALE = 'POINT_OF_SALE',
    FABRICATION = 'FABRICATION',
    RMA = 'RMA'
}

export interface DocumentRef {

    /**
     * Document number.
     */
    number: string;

    /**
     * Document type.
     */
    documentType: string;

    /**
     * Unique identifier.
     */
    id: number;

    /**
     * Document category.
     */
    category: DocumentCategory;

    /**
     * Document state.
     */
    documentState: string;
}

export const enum DocumentRounding {
    NONE = 'NONE',
    SWITZERLAND = 'SWITZERLAND'
}

export interface DocumentShippingCost {

    /**
     * Shipping costs.
     */
    costs: number;

    /**
     * Taxes.
     */
    taxes: Array<DocumentTax>;

    /**
     * Article description.
     */
    description: string;

    /**
     * Purchase price.
     */
    purchasePrice: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Were the shipping costs entered manually?
     */
    manualCosts: boolean;

    /**
     * No shipping costs (free shipping).
     */
    freeShipping: boolean;

    /**
     * Texts.
     */
    texts: Array<DocumentText>;

    /**
     * Is this eligible for the payment discount?
     */
    cashDiscountable: boolean;

    /**
     * Article name.
     */
    name: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Is this eligible for discount?
     */
    discountable: boolean;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentTax {

    /**
     * taxable amount
     */
    taxableAmount: number;

    /**
     * Is this tax free?
     */
    taxFree: boolean;

    /**
     * Tax amount in base currency.
     */
    baseTaxValue: number;

    /**
     * internal calculation infos
     */
    internalCalculationInfo: string;

    /**
     * gross amount
     */
    grossAmount: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Gross amount in base currency.
     */
    baseGrossAmount: number;

    /**
     * reference to tax rate
     */
    taxRateRef: ApiObjectReference;

    /**
     * Taxable amount in base currency.
     */
    baseTaxableAmount: number;

    /**
     * tax value
     */
    taxValue: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * tax type
     */
    taxType: DocumentTaxType;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum DocumentTaxType {
    VAT = 'VAT'
}

export interface DocumentText {

    /**
     * Does this text remain after transfer into a subsequent document
     */
    transferableIntoSubsequentDocuments: boolean;

    /**
     * Removed and should therefore no longer be shown.
     */
    deleted: boolean;

    /**
     * position relative to the product line OR Document. For usage within text-line, this position is irrelevant
     */
    textPosition: TextPosition;

    /**
     * Text template.
     */
    textTemplateRef: ApiObjectReference;

    /**
     * Is the content filled?
     */
    initialized: boolean;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * if this attribute is used, the text is used as free-text
     */
    content: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

/**
 * Transfer-to-State-Request für Belege
 */
export interface DocumentTransferToStateRequest {

    copyTargetDocumentType: DocumentType;

    /**
     * ID eines Belegs
     */
    documentId: number;

    /**
     * Zusätzliche Parameter
     */
    parameters: Array<AdditionalParameter>;

    /**
     * Transition zum gewünschten Ziel-Status
     */
    transition: EDocumentTransition;
}

/**
 * Transfer-to-Type-Request für Belege
 */
export interface DocumentTransferToTypeRequest {

    /**
     * Gewünschte Ziel-Belegart
     */
    targetDocumentType: string;

    /**
     * ID eines Belegs
     */
    documentId: number;

    /**
     * Zusätzliche Parameter
     */
    parameters: Array<AdditionalParameter>;

    /**
     * Soll der Beleg kopiert werden? (Standard: nein)
     */
    copyDocument: boolean;
}

export interface DocumentType {

    /**
     * May this type be used to create new documents?
     */
    showForManualDocumentCreation: boolean;

    /**
     * Is this document type active?
     */
    active: boolean;

    /**
     * Reference to the document type in the DMS.
     */
    shelfDocumentTypeRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * label/name of this type
     */
    labels: Array<DocumentTypeLabel>;

    /**
     * Number range.
     */
    sequencerConfiguration: SequencerConfiguration;

    /**
     * Next document number.
     */
    nextNumber: string;

    /**
     * Sort order.
     */
    sortOrder: number;

    /**
     * follow up document types
     */
    followUpDocumentTypes: Array<DocumentTypeFollowUp>;

    /**
     * Assigned DMS document behavior.
     */
    publishingPolicy: PublishingPolicy;

    /**
     * The business relation is mandatory.
     */
    requiresBusinessRelationship: boolean;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * associated category
     */
    category: DocumentCategory;

    /**
     * Is this document type the default document type of its category?
     */
    defaultTypeOfCategory: boolean;

    /**
     * unique key for this type (internal representation)
     */
    key: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentTypeFollowUp {

    /**
     * Is this successor document type active?
     */
    active: boolean;

    /**
     * target type
     */
    targetDocumentTypeRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * source type
     */
    sourceDocumentTypeRef: ApiObjectReference;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentTypeLabel {

    /**
     * label/name of this type (for printout)
     */
    labelPrintout: string;

    /**
     * label/name of this type (for display)
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Language code
     */
    languageCode: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentTypeState {

    /**
     * additional state information
     */
    definition: DocumentTypeState$StateDefinition;

    /**
     * label/name of this state
     */
    label: string;

    /**
     * unique key for this state
     */
    key: string;
}

export const enum DocumentTypeState$StateDefinition {
    SELECTABLE_TYPES = 'SELECTABLE_TYPES',
    EDITABLE = 'EDITABLE',
    DELETED = 'DELETED'
}

export interface DocumentTypeTerm {

    /**
     * documentType
     */
    documentType: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Language.
     */
    languageCode: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * content
     */
    content: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum DropShippingPolicy {
    ANY = 'ANY',
    DROP_SHIPPING = 'DROP_SHIPPING',
    STORAGE = 'STORAGE',
    STORAGE_WITH_FALLBACK_TO_DROP_SHIPPING = 'STORAGE_WITH_FALLBACK_TO_DROP_SHIPPING'
}

export interface DummySerialNumberStockTransferApi {

    /**
     * Target storage.
     */
    targetStorageId: number;

    /**
     * Serial number.
     */
    serialNumberId: number;

    /**
     * Note.
     */
    note: string;

    /**
     * Booking date.
     */
    bookDate: ScriptingDate;

    /**
     * Best-before or expiry date, if the article requires one.
     */
    targetExpiryDate: ScriptingDate;

    /**
     * Quantity.
     */
    quantity: number;

    /**
     * Source storage.
     */
    sourceStorageId: number;

    /**
     * Target storage bin.
     */
    targetStorageBinId: number;

    /**
     * Article.
     */
    articleId: number;

    /**
     * Valid serial number.
     */
    targetSerialNumber: string;

    /**
     * Source storage bin.
     */
    sourceStorageBinId: number;

    /**
     * Ignore expiry date on stock booking
     */
    ignoreExpiryDateOnStockBooking: boolean;

    /**
     * Picklist line component, if the booking takes place for it.
     */
    picklistLineComponentId: number;
}

export const enum ECrmPriorityType {
    CRITICAL = 'CRITICAL',
    NORMAL = 'NORMAL',
    LOW = 'LOW'
}

export const enum ECrmSpecialDocumentRefType {
    /**Normaler Beleg **/
    NONE = 'NONE',
    /**Angebot **/
    CUSTOMER_OFFER = 'CUSTOMER_OFFER',
    /**Auftrag **/
    CUSTOMER_ORDER = 'CUSTOMER_ORDER',
    /**Abrechnungsbeleg **/
    BILLING_DOCUMENT = 'BILLING_DOCUMENT'
}

export const enum ECrmType {
    /**Aufgaben **/
    TASK = 'TASK',
    /**Deals **/
    DEAL = 'DEAL',
    /**Projekte **/
    PROJECT = 'PROJECT'
}

export const enum EDocumentCategory {
    CUSTOMER_OFFER = 'CUSTOMER_OFFER',
    CUSTOMER_ORDER = 'CUSTOMER_ORDER',
    CUSTOMER_DELIVERY_DOCUMENT = 'CUSTOMER_DELIVERY_DOCUMENT',
    CUSTOMER_INVOICE = 'CUSTOMER_INVOICE',
    CUSTOMER_PROFORMA_INVOICE = 'CUSTOMER_PROFORMA_INVOICE',
    CUSTOMER_DELIVERY_INVOICE = 'CUSTOMER_DELIVERY_INVOICE',
    CUSTOMER_DEPOSIT_INVOICE = 'CUSTOMER_DEPOSIT_INVOICE',
    CUSTOMER_DEPOSIT_INVOICE_CANCELLATION = 'CUSTOMER_DEPOSIT_INVOICE_CANCELLATION',
    CUSTOMER_PROGRESS_INVOICE = 'CUSTOMER_PROGRESS_INVOICE',
    CUSTOMER_PROGRESS_INVOICE_CANCELLATION = 'CUSTOMER_PROGRESS_INVOICE_CANCELLATION',
    CUSTOMER_PARTIAL_INVOICE = 'CUSTOMER_PARTIAL_INVOICE',
    CUSTOMER_PARTIAL_INVOICE_CANCELLATION = 'CUSTOMER_PARTIAL_INVOICE_CANCELLATION',
    CUSTOMER_FINAL_INVOICE = 'CUSTOMER_FINAL_INVOICE',
    CUSTOMER_FINAL_INVOICE_CANCELLATION = 'CUSTOMER_FINAL_INVOICE_CANCELLATION',
    CUSTOMER_CREDIT_NOTE_WITH_STOCK = 'CUSTOMER_CREDIT_NOTE_WITH_STOCK',
    CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK = 'CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK',
    CUSTOMER_INVOICE_CANCELLATION = 'CUSTOMER_INVOICE_CANCELLATION',
    CUSTOMER_DELIVERY_INVOICE_CANCELLATION = 'CUSTOMER_DELIVERY_INVOICE_CANCELLATION',
    CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK_CANCELLATION = 'CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK_CANCELLATION',
    CUSTOMER_CREDIT_NOTE_WITH_STOCK_CANCELLATION = 'CUSTOMER_CREDIT_NOTE_WITH_STOCK_CANCELLATION',
    CUSTOMER_RETURN_ANNOUNCEMENT = 'CUSTOMER_RETURN_ANNOUNCEMENT',
    CUSTOMER_GOODS_RETURN = 'CUSTOMER_GOODS_RETURN',
    SUPPLIER_PRICE_REQUEST = 'SUPPLIER_PRICE_REQUEST',
    SUPPLIER_ORDER = 'SUPPLIER_ORDER',
    SUPPLIER_DELIVERY_DOCUMENT = 'SUPPLIER_DELIVERY_DOCUMENT',
    SUPPLIER_INVOICE = 'SUPPLIER_INVOICE',
    SUPPLIER_DELIVERY_INVOICE = 'SUPPLIER_DELIVERY_INVOICE',
    SUPPLIER_CREDIT_NOTE_WITH_STOCK = 'SUPPLIER_CREDIT_NOTE_WITH_STOCK',
    SUPPLIER_CREDIT_NOTE_WITHOUT_STOCK = 'SUPPLIER_CREDIT_NOTE_WITHOUT_STOCK',
    SUPPLIER_DEPOSIT_INVOICE = 'SUPPLIER_DEPOSIT_INVOICE',
    SUPPLIER_PROGRESS_INVOICE = 'SUPPLIER_PROGRESS_INVOICE',
    SUPPLIER_PARTIAL_INVOICE = 'SUPPLIER_PARTIAL_INVOICE',
    SUPPLIER_FINAL_INVOICE = 'SUPPLIER_FINAL_INVOICE',
    COMMISSION_SETTLEMENT = 'COMMISSION_SETTLEMENT',
    COMMISSION_SETTLEMENT_CANCELLATION = 'COMMISSION_SETTLEMENT_CANCELLATION',
    SUPPLIER_COMMISSION_CREDIT_NOTE = 'SUPPLIER_COMMISSION_CREDIT_NOTE',
    SUPPLIER_COMMISSION_CREDIT_NOTE_CANCELLATION = 'SUPPLIER_COMMISSION_CREDIT_NOTE_CANCELLATION',
    CUSTOMER_SUBSCRIPTION_CONTRACT = 'CUSTOMER_SUBSCRIPTION_CONTRACT',
    POS_CASH_JOURNAL_OPENING = 'POS_CASH_JOURNAL_OPENING',
    POS_CASH_RECEIPT = 'POS_CASH_RECEIPT',
    POS_RETURN_CASH_RECEIPT = 'POS_RETURN_CASH_RECEIPT',
    POS_CASH_JOURNAL_DEPOSIT = 'POS_CASH_JOURNAL_DEPOSIT',
    POS_CASH_JOURNAL_EXPENSE = 'POS_CASH_JOURNAL_EXPENSE',
    POS_CASH_JOURNAL_DEPOSIT_CANCELLATION = 'POS_CASH_JOURNAL_DEPOSIT_CANCELLATION',
    POS_CASH_JOURNAL_EXPENSE_CANCELLATION = 'POS_CASH_JOURNAL_EXPENSE_CANCELLATION',
    POS_CASH_JOURNAL_WITHDRAWAL = 'POS_CASH_JOURNAL_WITHDRAWAL',
    POS_CASH_JOURNAL_WITHDRAWAL_CANCELLATION = 'POS_CASH_JOURNAL_WITHDRAWAL_CANCELLATION',
    POS_CASH_JOURNAL_CLOSING = 'POS_CASH_JOURNAL_CLOSING',
    FABRICATION_ORDER = 'FABRICATION_ORDER'
}

export const enum EDocumentQualifier {
    SALE = 'SALE',
    PURCHASE = 'PURCHASE',
    COMMISSION = 'COMMISSION',
    POINT_OF_SALE = 'POINT_OF_SALE',
    SALES_CONTRACT = 'SALES_CONTRACT',
    PURCHASE_CONTRACT = 'PURCHASE_CONTRACT',
    FABRICATION = 'FABRICATION',
    RMA = 'RMA'
}

export const enum EDocumentTransition {
    /**Bearbeitung beginnen **/
    BEGIN_EDITING = 'BEGIN_EDITING',
    /**Speichern **/
    END_EDITING = 'END_EDITING',
    /**Bearbeitung abbrechen **/
    CANCEL_EDITING = 'CANCEL_EDITING',
    /**Bearbeiten (für übernommenen Beleg) **/
    EDIT_ACCEPTED = 'EDIT_ACCEPTED',
    /**Bearbeitung abbrechen (für übernommenen Beleg) **/
    CANCEL_EDITING_ACCEPTED = 'CANCEL_EDITING_ACCEPTED',
    /**Speichern (für übernommenen Beleg) **/
    SAVE_ACCEPTED = 'SAVE_ACCEPTED',
    /**Neue Version erstellen **/
    CREATE_NEW_VERSION = 'CREATE_NEW_VERSION',
    /**Auftrag in Kommissionierung übernehmen **/
    ORDER_IN_PICKING = 'ORDER_IN_PICKING',
    /**Auftrags aus Kommissionierung stornieren **/
    ORDER_RESET_FROM_PICKING = 'ORDER_RESET_FROM_PICKING',
    /**Auftrag abschließen **/
    ORDER_CLOSE_REMAINING = 'ORDER_CLOSE_REMAINING',
    /**Auftrag wieder öffnen **/
    ORDER_REOPEN = 'ORDER_REOPEN',
    /**Beleg auflösen **/
    DISSOLVE = 'DISSOLVE',
    /**Quittung abbrechen **/
    CANCEL_POS_RECEIPT = 'CANCEL_POS_RECEIPT',
    /**Produktion starten **/
    START_FABRICATION = 'START_FABRICATION',
    /**Produktion stornieren **/
    CANCEL_FABRICATION = 'CANCEL_FABRICATION',
    UPDATE_WHILE_IN_FABRICATION = 'UPDATE_WHILE_IN_FABRICATION',
    /**Produktion pausieren **/
    PAUSE_FABRICATION = 'PAUSE_FABRICATION',
    /**Produktion fortsetzen **/
    RESUME_FABRICATION = 'RESUME_FABRICATION',
    /**Produktion fertigstellen **/
    COMPLETE_FABRICATION = 'COMPLETE_FABRICATION',
    /**Produktion fortsetzen **/
    RESTART_FABRICATION = 'RESTART_FABRICATION',
    /**QS-Prüfung starten **/
    START_FABRICATION_QA = 'START_FABRICATION_QA',
    START_PROCESSING_FABRICATION_QA = 'START_PROCESSING_FABRICATION_QA',
    PROCESSING_FABRICATION_QA = 'PROCESSING_FABRICATION_QA',
    FINISH_PROCESSING_FABRICATION_QA = 'FINISH_PROCESSING_FABRICATION_QA',
    /**QS-Prüfung abbrechen **/
    CANCEL_FABRICATION_QA = 'CANCEL_FABRICATION_QA',
    /**QS-Prüfung abschließen **/
    FINISH_FABRICATION_QA = 'FINISH_FABRICATION_QA',
    /**Produktion abschließen **/
    FINISH_FABRICATION = 'FINISH_FABRICATION',
    /**Kundenauftrag in Produktionsauftrag übernehmen **/
    CUSTOMER_ORDER_TO_FABRICATION_ORDER = 'CUSTOMER_ORDER_TO_FABRICATION_ORDER'
}

export const enum EInvoiceValidationState {
    NOT_VALIDATED = 'NOT_VALIDATED',
    VALID = 'VALID',
    NOT_VALID = 'NOT_VALID'
}

export const enum ELinebreakType {
    CR_LF = 'CR_LF',
    CR = 'CR',
    LF = 'LF'
}

export const enum EN16931Origin {
    FROM_BILLING_ADDRESS = 'FROM_BILLING_ADDRESS',
    FROM_DEFAULT_ADDRESS = 'FROM_DEFAULT_ADDRESS',
    FROM_ACCOUNT_PARAMS = 'FROM_ACCOUNT_PARAMS',
    USER_DEFINED = 'USER_DEFINED'
}

export const enum EN16931Profile {
    ZUGFERD = 'ZUGFERD',
    XRECHNUNG = 'XRECHNUNG',
    NO_EN_PROFILE = 'NO_EN_PROFILE'
}

export const enum EOutputType {
    /**Preview output **/
    PREVIEW = 'PREVIEW',
    /**Output to the printer **/
    PRINT = 'PRINT',
    /**File export in a selectable format **/
    FILE_EXPORT = 'FILE_EXPORT',
    /**Output as e-mail **/
    MAIL = 'MAIL',
    /**Output as user message **/
    USER_MESSAGE = 'USER_MESSAGE',
    /**Stored in DMS only **/
    DMS_ONLY = 'DMS_ONLY',
    /**Triggers priority-based rule selection **/
    SYSTEM = 'SYSTEM'
}

export const enum EScriptingAuthenticationType {
    BASIC_AUTH = 'BASIC_AUTH',
    BEARER_TOKEN = 'BEARER_TOKEN'
}

export const enum EShelfDocumentDeletionState {
    NOT_YET = 'NOT_YET',
    PREPARE_DELETE = 'PREPARE_DELETE',
    FILE_DELETED = 'FILE_DELETED',
    MANUALLY_RETAIN = 'MANUALLY_RETAIN'
}

export const enum EWorkflowInstanceState {
    /**Erstellt **/
    CREATED = 'CREATED',
    /**In Verarbeitung **/
    IN_PROCESS = 'IN_PROCESS',
    /**Erfolgreich beendet **/
    COMPLETED_SUCCESSFULLY = 'COMPLETED_SUCCESSFULLY',
    /**Fehlgeschlagen **/
    COMPLETED_WITH_FAILURE = 'COMPLETED_WITH_FAILURE',
    /**Fehlerhaft **/
    ERRONEOUS = 'ERRONEOUS',
    /**Abgestürzt abgebrochen **/
    ABORTED_CRASHED = 'ABORTED_CRASHED',
    /**Manuell abgebrochen **/
    ABORTED_MANUALLY = 'ABORTED_MANUALLY',
    /**Abgestürzt **/
    CRASHED = 'CRASHED',
    /**Wartend **/
    WAITING = 'WAITING',
    /**Unterbrochen **/
    INTERRUPTED = 'INTERRUPTED'
}

export const enum ExchangeRateOrigin {
    AUTOMATIC = 'AUTOMATIC',
    AUTOMATIC_FOR_CURRENT_DATE = 'AUTOMATIC_FOR_CURRENT_DATE',
    USER_DEFINED = 'USER_DEFINED'
}

/**
 * Position eines extern erstellten Belegs inkl. gelieferter Steuerangaben
 */
export interface ExternalDocumentWithTaxesLine {

    /**
     * Menge
     */
    quantity: number;

    /**
     * Zeilen-Netto
     */
    netAmount: number;

    /**
     * Steuerbetrag (nur bei steuerpflichtigem Beleg)
     */
    taxValue: number;

    /**
     * Netto-Einzelpreis
     */
    price: number;

    /**
     * ID des Artikels
     */
    articleId: number;

    /**
     * Zeilen-Brutto
     */
    grossAmount: number;

    /**
     * ID des Steuersatzes (nur bei steuerpflichtigem Beleg)
     */
    taxRateId: number;

    /**
     * Steuerart (Standard: VAT)
     */
    taxType: DocumentTaxType;
}

/**
 * Details zum Import eines extern erstellten Belegs
 */
export interface ExternalDocumentWithTaxesRequest {

    /**
     * Belegdatum
     */
    documentDate: ScriptingDate;

    /**
     * ID des Kontos/Accounts
     */
    accountId: number;

    /**
     * Steuerpflichtig? true = mit Steuern, false = steuerfrei (keine Steuerzeilen). Null = Steuerstatus aus dem Kundenstamm übernehmen
     */
    taxable: boolean;

    /**
     * Abrechnungsart (Brutto/Netto)
     */
    billingType: BillingType;

    /**
     * Belegpositionen inkl. gelieferter Steuerangaben
     */
    lines: Array<ExternalDocumentWithTaxesLine>;

    /**
     * Key der Belegart
     */
    documentTypeKey: string;

    /**
     * USt-IdNr des Empfängers (z.B. bei steuerfreier innergemeinschaftlicher Lieferung)
     */
    taxIdentificationNumber: string;
}

export interface FabricationComponentForProduction {

    /**
     * Serial number to produce the component is used for.
     */
    serialNumberId: number;

    /**
     * Quantity to use.
     */
    quantity: number;

    /**
     * Component identifier.
     */
    documentLineComponentId: number;

    /**
     * Serial number identifier.
     */
    articleSerialNumberId: number;
}

export interface FabricationDefectiveRequest {

    /**
     * Quantity that is (no longer) defective.
     */
    quantity: number;

    /**
     * Serial numbers that are (no longer) defective.
     */
    serialNumberIdsWithQuantity: Array<SerialNumberWithQuantityApi>;

    /**
     * Should a new line be created for reproducing the defective articles?
     */
    createLineForReproduction: boolean;
}

export const enum FabricationOfComponents {
    NEVER = 'NEVER',
    COMPLETELY_IF_NECESSARY = 'COMPLETELY_IF_NECESSARY',
    REQUIRED_QUANTITY_IF_NECESSARY = 'REQUIRED_QUANTITY_IF_NECESSARY',
    ALWAYS = 'ALWAYS'
}

export interface FabricationProduceRequest {

    /**
     * Quantity to produce.
     */
    quantity: number;

    /**
     * Confirm the material automatically.
     */
    autoCommitComponents: boolean;

    /**
     * Material to use for the fabrication.
     */
    componentsForProduction: Array<FabricationComponentForProduction>;

    /**
     * Identifier of the line to produce.
     */
    documentLineId: number;

    /**
     * Serial numbers to produce.
     */
    serialNumbers: Array<FabricationSerialNumber>;
}

export interface FabricationRemainingComponent {

    /**
     * Serial number to produce the component belongs to.
     */
    lineSerialNumber: ArticleSerialNumber;

    /**
     * Open quantity.
     */
    quantity: number;

    /**
     * Component identifier.
     */
    documentLineComponentId: number;

    /**
     * Article.
     */
    articleRef: ApiObjectReference;

    /**
     * Serial type.
     */
    serialType: ArticleSerialType;
}

export interface FabricationRevertRequest {

    /**
     * Quantity to cancel.
     */
    quantity: number;

    /**
     * Identifier of the line to cancel.
     */
    documentLineId: number;

    /**
     * Cancel the material automatically.
     */
    autoRevertComponents: boolean;

    /**
     * Serial numbers to cancel.
     */
    serialNumbers: Array<FabricationSerialNumber>;

    /**
     * Material to cancel.
     */
    componentsToRevert: Array<FabricationComponentForProduction>;
}

export interface FabricationSerialNumber {

    /**
     * Identifier of the serial number to produce (only for the targeted production of serial numbers that are already defined).
     */
    serialNumberId: number;

    /**
     * Best-before or expiry date.
     */
    expiryDate: ScriptingDate;

    /**
     * Note.
     */
    note: string;

    /**
     * Deviating quantity for lots.
     */
    quantity: number;

    /**
     * Serial number 2.
     */
    serialNumber2: string;

    /**
     * Serial number 1.
     */
    serialNumber1: string;
}

export const enum FabricationSerialNumberLabelingType {
    QUERY_ON_START = 'QUERY_ON_START',
    QUERY_ON_FINISH = 'QUERY_ON_FINISH',
    INHERITANCE = 'INHERITANCE',
    AUTOMATICALLY_ON_START = 'AUTOMATICALLY_ON_START',
    AUTOMATICALLY_ON_FINISH = 'AUTOMATICALLY_ON_FINISH'
}

export interface Group {

    /**
     * roles associated with this group
     */
    roles: Array<ApiObjectReference>;

    /**
     * Is the group active?
     */
    active: boolean;

    /**
     * Description of this Group
     */
    description: string;

    /**
     * Label of this Group
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * users associated with this group
     */
    users: Array<ApiObjectReference>;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

/**
 * Zu importierende Daten
 */
export interface ImportDataMap {
}

export interface JsonNode {
}

export const enum LanguageCodeOrigin {
    FROM_DELIVERY_ADDRESS = 'FROM_DELIVERY_ADDRESS',
    FROM_BILLING_ADDRESS = 'FROM_BILLING_ADDRESS',
    FROM_DEFAULT_ADDRESS = 'FROM_DEFAULT_ADDRESS',
    FROM_RETURN_DELIVERY_ADDRESS = 'FROM_RETURN_DELIVERY_ADDRESS',
    FROM_MY_COMPANY = 'FROM_MY_COMPANY'
}

export const enum ListingState {
    DISABLED = 'DISABLED',
    NEED_SYNCHRONIZE = 'NEED_SYNCHRONIZE',
    QUEUED_FOR_SYNCHRONIZE = 'QUEUED_FOR_SYNCHRONIZE',
    SYNCHRONIZED = 'SYNCHRONIZED',
    ERRONEOUS = 'ERRONEOUS',
    NEED_DELETION = 'NEED_DELETION',
    QUEUED_FOR_DELETION = 'QUEUED_FOR_DELETION'
}

export interface LocalizedTextTemplateContent {

    /**
     * Text language.
     */
    languageCodeIsoAlpha2: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Text
     */
    content: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface MetaInfo {

    /**
     * Created At Timestamp
     */
    createdAt: ScriptingDateTime;

    /**
     * TenantUser-Identifier of the creator
     */
    createdFrom: number;

    /**
     * TenantUser-Identifier of most recent updater
     */
    updatedFrom: number;

    /**
     * Last Updated AT Timestamp
     */
    updatedAt: ScriptingDateTime;
}

export interface NotificationDataprovider {

    referenceable: Referenceable;

    links: Set<Referenceable>;

    event: NotificationEventConfig<Object>;
}

export interface NotificationEventConfig<Object> {
}

export interface OpenItem {

    /**
     * Performance date (settable externally when no document is present).
     */
    performanceDate: ScriptingDate;

    /**
     * Due date (payment discount 2).
     */
    paymentDiscount2DueDate: ScriptingDate;

    /**
     * External open item number.
     */
    externalNumber: string;

    /**
     * How many days are given for using the first discount rule
     */
    paymentDays1: number;

    /**
     * How many days are given for using the second discount rule
     */
    paymentDays2: number;

    /**
     * Due date (payment discount 1).
     */
    paymentDiscount1DueDate: ScriptingDate;

    /**
     * Origin of the payment discount values (days and percentages).
     */
    paymentDiscountOrigin: PaymentDiscountOrigin;

    /**
     * Number of dunning lines or dunnings for this open item.
     */
    dunningCount: number;

    /**
     * balanced date of this open item (calculated)
     */
    balancedDate: ScriptingDate;

    /**
     * Total sum of the invoice amounts in base currency.
     */
    baseSumTotalAmount: number;

    /**
     * Open item number.
     */
    number: string;

    /**
     * The kind of payment
     */
    paymentKind: OpenItem$OpenItemPaymentKind;

    /**
     * Balance.
     */
    balance: number;

    /**
     * Currency exchange rate against the base currency.
     */
    exchangeRate: number;

    /**
     * Performance tax situation (settable externally when no document is present).
     */
    taxPerformanceLocation: TaxPerformanceLocationType;

    /**
     * Dunning level.
     */
    dunningLevel: number;

    /**
     * Due period in days.
     */
    paymentDaysNet: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Payment state.
     */
    paymentState: OpenItemPaymentState;

    /**
     * Dunning block.
     */
    dunningBlock: boolean;

    /**
     * Total of the payments in base currency.
     */
    baseSumPayments: number;

    /**
     * order
     */
    order: ApiObjectReference;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * Total of the dunning fees and interest.
     */
    sumDunnings: number;

    /**
     * General fees in base currency.
     */
    baseSumFee: number;

    /**
     * Agreed deposit amount in base currency.
     */
    baseDepositPaymentAmount: number;

    /**
     * Total of the booked payments.
     */
    sumPayments: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Total of the invoice amounts eligible for the payment discount in base currency.
     */
    baseSumDiscountableAmount: number;

    /**
     * List of tags
     */
    tags: Array<TagDto>;

    /**
     * Due date.
     */
    paymentDueDate: ScriptingDate;

    /**
     * Country code of the country of origin (ISO Alpha-3, settable externally when no document is present).
     */
    sourceCountryCode: string;

    /**
     * Country code of the performance country (ISO Alpha-3, settable externally when no document is present).
     */
    performanceCountryCode: string;

    /**
     * agreed Deposit payment date
     */
    depositPaymentDate: ScriptingDate;

    /**
     * Value date, read-only.
     */
    valueDateReadOnly: boolean;

    /**
     * Does this open item belong to accounts payable or accounts receivable
     */
    qualifier: OpenItem$OpenItemQualifier;

    /**
     * Original payment term.
     */
    basisPaymentTermRef: ApiObjectReference;

    /**
     * Is the open item blocked by a document?
     */
    blockedByDocument: boolean;

    /**
     * Payment method.
     */
    paymentMethodRef: ApiObjectReference;

    /**
     * Open amount (balance) in base currency.
     */
    baseBalance: number;

    /**
     * is the agreed deposit payed?
     */
    depositPayed: boolean;

    /**
     * agreed Deposit payment amount
     */
    depositPaymentAmount: number;

    /**
     * Payment purpose.
     */
    purpose: string;

    /**
     * free payments
     */
    records: Array<OpenItemRecord>;

    /**
     * How much discount can be given for speedy payment, rule 2
     */
    paymentDiscount2: number;

    /**
     * Can this open item be reopened?
     */
    canBeReopened: boolean;

    /**
     * How much discount can be given for speedy payment, rule 1
     */
    paymentDiscount1: number;

    /**
     * Currently valid amount to be paid.
     */
    paymentAmount: number;

    /**
     * how should a refund be done?
     */
    refundType: OpenItem$OpenItemRefundType;

    /**
     * Credit note.
     */
    creditNote: ApiObjectReference;

    /**
     * Booking to a supplier or a customer for manual open items.
     */
    bookingAccountType: OpenItem$BookingAccountType;

    /**
     * Dunning state.
     */
    dunningState: OpenItemDunningState;

    /**
     * Payment discount amount 2.
     */
    paymentDiscount2Amount: number;

    /**
     * General fees.
     */
    sumFee: number;

    /**
     * The full amount of the payment
     */
    fullPaymentAmount: number;

    /**
     * Payment plan.
     */
    paymentPlan: OpenItemPaymentPlan;

    /**
     * Payment block.
     */
    paymentBlock: boolean;

    /**
     * Original due date.
     */
    originalPaymentDueDate: ScriptingDate;

    /**
     * whether this open item is balanced, partially paid or open
     */
    balanceState: OpenItemBalanceState;

    /**
     * Value date.
     */
    valueDate: ScriptingDate;

    /**
     * Payment discount amount 1.
     */
    paymentDiscount1Amount: number;

    /**
     * Total of the deductions (payment discount etc.) in base currency.
     */
    baseSumDiscount: number;

    /**
     * Total of the dunning fees and interest in base currency.
     */
    baseSumDunnings: number;

    /**
     * Payment template.
     */
    paymentTemplateRef: ApiObjectReference;

    /**
     * Invoice amount.
     */
    sumTotalAmount: number;

    /**
     * Tax rate (settable externally when no document is present).
     */
    taxRateRef: ApiObjectReference;

    /**
     * Open item base currency (ISO-A3).
     */
    baseCurrencyCode: string;

    /**
     * Deposit invoice.
     */
    depositInvoice: ApiObjectReference;

    /**
     * Tax state (settable externally when no document is present).
     */
    taxState: TaxStateType;

    /**
     * Comment.
     */
    comment: string;

    /**
     * invoice
     */
    invoice: ApiObjectReference;

    /**
     * Invoice amount eligible for the payment discount.
     */
    sumDiscountableAmount: number;

    /**
     * Open item currency (ISO-A3).
     */
    currencyCode: string;

    /**
     * account
     */
    account: ApiObjectReference;
}

export const enum OpenItem$BookingAccountType {
    CUSTOMER = 'CUSTOMER',
    SUPPLIER = 'SUPPLIER'
}

export const enum OpenItem$OpenItemPaymentKind {
    PREPAYMENT = 'PREPAYMENT',
    PAYMENT = 'PAYMENT'
}

export const enum OpenItem$OpenItemQualifier {
    PAYABLE = 'PAYABLE',
    RECEIVABLE = 'RECEIVABLE'
}

export const enum OpenItem$OpenItemRefundType {
    DISBURSE = 'DISBURSE',
    OFFSET_LATER = 'OFFSET_LATER'
}

export const enum OpenItemBalanceState {
    OPEN = 'OPEN',
    PARTIALLY_BALANCED = 'PARTIALLY_BALANCED',
    BALANCED = 'BALANCED',
    OVERPAID = 'OVERPAID'
}

export const enum OpenItemDunningState {
    IN_DUNNING = 'IN_DUNNING',
    NO_DUNNING = 'NO_DUNNING',
    DUNNING_PAID = 'DUNNING_PAID',
    DUNNING_PARTIALLY_PAID = 'DUNNING_PARTIALLY_PAID',
    DUNNING_OVERPAID = 'DUNNING_OVERPAID'
}

export interface OpenItemPaymentPlan {

    /**
     * Due date rule.
     */
    dueDateCalculation: string;

    /**
     * Amount.
     */
    amount: number;

    /**
     * End date.
     */
    endDate: ScriptingDate;

    /**
     * Due date.
     */
    dueDate: ScriptingDate;

    /**
     * Payment plan type.
     */
    paymentPlanType: OpenItemPaymentPlan$PaymentPlanType;

    /**
     * Active.
     */
    active: boolean;

    /**
     * Description.
     */
    description: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Amount in base currency.
     */
    baseAmount: number;

    /**
     * Payment plan base currency (ISO-A3).
     */
    baseCurrencyCode: string;

    /**
     * Currency exchange rate against the base currency.
     */
    exchangeRate: number;

    /**
     * Manual booking presets.
     */
    manualRuleEntries: Array<PaymentPlanManualRule>;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Payment plan currency (ISO-A3).
     */
    currencyCode: string;

    /**
     * Start date.
     */
    startDate: ScriptingDate;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum OpenItemPaymentPlan$PaymentPlanType {
    RULE = 'RULE',
    MANUAL = 'MANUAL'
}

export const enum OpenItemPaymentState {
    NO_PAYMENT = 'NO_PAYMENT',
    PAYMENT_CREATED = 'PAYMENT_CREATED',
    PAYMENT_TRANSFERRED = 'PAYMENT_TRANSFERRED',
    PAYMENT_COMMITTED = 'PAYMENT_COMMITTED'
}

export interface OpenItemRecord {

    /**
     * document 
     */
    document: ApiObjectReference;

    /**
     * origin for this record
     */
    origin: OpenItemRecord$RecordOrigin;

    /**
     * company account bankdetails
     */
    accountBankdetailsRef: ApiObjectReference;

    /**
     * record discount amount
     */
    discountAmount: number;

    /**
     * Dunning interest in base currency.
     */
    baseDunningInterest: number;

    /**
     * record reference number
     */
    recordReferenceNumber: string;

    /**
     * Process number that led to the booking.
     */
    number: string;

    /**
     * ref to the financialBookingRecord
     */
    bookingRecordId: number;

    /**
     * revertable
     */
    revertable: boolean;

    /**
     * Currency exchange rate against the base currency.
     */
    exchangeRate: number;

    /**
     * Booking type of the open item record (derived from the origin and the booking type).
     */
    bookingType: OpenItemRecord$BookingType;

    /**
     * record discountable amount
     */
    discountableAmount: number;

    /**
     * record date
     */
    recordDate: ScriptingDate;

    /**
     * Total amount in base currency.
     */
    baseTotalAmount: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * locked
     */
    locked: boolean;

    /**
     * Total amount eligible for the payment discount in base currency.
     */
    baseDiscountableAmount: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * Dunning level.
     */
    dunningLvl: number;

    /**
     * record amount
     */
    amount: number;

    /**
     * bank transaction details
     */
    transactionRef: ApiObjectReference;

    /**
     * Bank account of the transaction.
     */
    bankAccountRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Booking amount in base currency.
     */
    baseAmount: number;

    /**
     * Identifier of the transaction that caused this record.
     */
    transactionId: number;

    /**
     * Deduction amount in base currency.
     */
    baseDiscountAmount: number;

    /**
     * Dunning fees in base currency.
     */
    baseDunningFee: number;

    /**
     * record total amount
     */
    totalAmount: number;

    /**
     * Open item base currency (ISO-A3).
     */
    baseCurrencyCode: string;

    /**
     * Identifier of the record that cancelled this one.
     */
    revertedByRecordId: number;

    /**
     * qualifier of open item
     */
    qualifier: OpenItemRecord$RecordQualifier;

    /**
     * payment-method 
     */
    paymentMethod: ApiObjectReference;

    /**
     * comment
     */
    comment: string;

    /**
     * Business transaction.
     */
    businessTransaction: ApiObjectReference;

    /**
     * Open item currency (ISO-A3).
     */
    currencyCode: string;
}

export const enum OpenItemRecord$BookingType {
    PAYABLE = 'PAYABLE',
    RECEIVABLE = 'RECEIVABLE',
    PAYMENT_PAYABLE = 'PAYMENT_PAYABLE',
    PAYMENT_RECEIVABLE = 'PAYMENT_RECEIVABLE',
    PAYMENT_PAYABLE_DISSOLVED = 'PAYMENT_PAYABLE_DISSOLVED',
    PAYMENT_RECEIVABLE_DISSOLVED = 'PAYMENT_RECEIVABLE_DISSOLVED',
    DUNNING_PAYABLE = 'DUNNING_PAYABLE',
    DUNNING_RECEIVABLE = 'DUNNING_RECEIVABLE',
    DUNNING_PAYABLE_DISSOLVED = 'DUNNING_PAYABLE_DISSOLVED',
    DUNNING_RECEIVABLE_DISSOLVED = 'DUNNING_RECEIVABLE_DISSOLVED'
}

export const enum OpenItemRecord$RecordOrigin {
    DOCUMENT = 'DOCUMENT',
    PAYMENT = 'PAYMENT',
    PAYMENT_DISSOLVED = 'PAYMENT_DISSOLVED',
    REIMBURSEMENT = 'REIMBURSEMENT',
    REIMBURSEMENT_DISSOLVED = 'REIMBURSEMENT_DISSOLVED',
    MANUAL_CLOSURE = 'MANUAL_CLOSURE',
    MANUAL_REOPENING = 'MANUAL_REOPENING',
    DUNNING = 'DUNNING',
    DUNNING_DISSOLVED = 'DUNNING_DISSOLVED',
    DUNNING_INTEREST_REVERSAL = 'DUNNING_INTEREST_REVERSAL',
    IMPORT = 'IMPORT',
    PAYMENT_PLAN = 'PAYMENT_PLAN',
    PAYMENT_PLAN_ENTRY = 'PAYMENT_PLAN_ENTRY',
    PAYMENT_IMPORT = 'PAYMENT_IMPORT',
    IMPORT_DUNNING = 'IMPORT_DUNNING',
    CLEARING = 'CLEARING',
    CLEARING_DISSOLVED = 'CLEARING_DISSOLVED',
    DEPOSIT = 'DEPOSIT',
    CREDIT_NOTE = 'CREDIT_NOTE',
    BALANCE_ADJUSTMENT = 'BALANCE_ADJUSTMENT',
    FEE = 'FEE',
    DUNNING_PAYMENT = 'DUNNING_PAYMENT',
    DUNNING_PAYMENT_DISSOLVED = 'DUNNING_PAYMENT_DISSOLVED',
    POS_PAYMENT = 'POS_PAYMENT',
    VOUCHER_PAYMENT = 'VOUCHER_PAYMENT',
    VOUCHER_PAYMENT_DISSOLVED = 'VOUCHER_PAYMENT_DISSOLVED'
}

export const enum OpenItemRecord$RecordQualifier {
    PAYABLE = 'PAYABLE',
    RECEIVABLE = 'RECEIVABLE',
    PAYMENT_RECEIVED = 'PAYMENT_RECEIVED',
    PAYMENT_SENT = 'PAYMENT_SENT',
    PAYMENT_RECEIVED_REVERTED = 'PAYMENT_RECEIVED_REVERTED',
    PAYMENT_SENT_REVERTED = 'PAYMENT_SENT_REVERTED',
    DUNNING_RECEIVABLE = 'DUNNING_RECEIVABLE',
    DUNNING_PAYABLE = 'DUNNING_PAYABLE',
    DUNNING_RECEIVABLE_REVERTED = 'DUNNING_RECEIVABLE_REVERTED',
    DUNNING_PAYABLE_REVERTED = 'DUNNING_PAYABLE_REVERTED'
}

export const enum OrderStackProcessingType {
    NO_PICKING = 'NO_PICKING',
    ACCORDING_TO_CRITERIA = 'ACCORDING_TO_CRITERIA',
    ONLY_FULL_ORDER = 'ONLY_FULL_ORDER',
    ONLY_FULL_ORDER_LINES = 'ONLY_FULL_ORDER_LINES',
    AVAILABLE_QUANTITIES = 'AVAILABLE_QUANTITIES',
    NO_PROCESSING = 'NO_PROCESSING',
    FULL_ORDER_LINES_MAX_TWO_PARTIAL_DELIVERIES = 'FULL_ORDER_LINES_MAX_TWO_PARTIAL_DELIVERIES',
    AVAILABLE_QUANTITIES_MAX_TWO_PARTIAL_DELIVERIES = 'AVAILABLE_QUANTITIES_MAX_TWO_PARTIAL_DELIVERIES',
    FULL_ORDER_LINES_MAX_THREE_PARTIAL_DELIVERIES = 'FULL_ORDER_LINES_MAX_THREE_PARTIAL_DELIVERIES',
    AVAILABLE_QUANTITIES_MAX_THREE_PARTIAL_DELIVERIES = 'AVAILABLE_QUANTITIES_MAX_THREE_PARTIAL_DELIVERIES',
    AVAILABLE_QUANTITIES_FINISH_ORDER = 'AVAILABLE_QUANTITIES_FINISH_ORDER'
}

/**
 * Response used by the script to override the resolved output behaviour
 */
export interface OutputModuleScriptingResponse {

    /**
     * Overrides the output locale as a language tag (e.g. "de" or "de-DE")
     */
    outputLocale: string;

    /**
     * Number of copies to output, overrides output quantity from output rules
     */
    outputQuantity: number;

    /**
     * Overrides the requested output type
     */
    outputType: EOutputType;

    /**
     * Export format, required for outputType = FILE_EXPORT
     */
    exportFormat: OutputTargetFormat;
}

export const enum OutputTargetFormat {
    XLSX = 'XLSX',
    PDF = 'PDF',
    HTML = 'HTML',
    JSON_RAW = 'JSON_RAW',
    REPORT_TEMPLATE = 'REPORT_TEMPLATE',
    INVOICE = 'INVOICE'
}

export const enum PaymentDiscountOrigin {
    FROM_PAYMENT_TERM = 'FROM_PAYMENT_TERM',
    FROM_ACCOUNT = 'FROM_ACCOUNT',
    USER_DEFINED = 'USER_DEFINED'
}

export interface PaymentMethod {

    /**
     * Close the payable open item?
     */
    closePayable: boolean;

    /**
     * Additional days for the first direct debit.
     */
    daysToAddForDirectDebit: number;

    /**
     * printDescription
     */
    printDescription: string;

    /**
     * Is this active?
     */
    active: boolean;

    /**
     * description
     */
    description: string;

    /**
     * Account used for factoring. Only allowed when the payment type is FACTORING.
     */
    factoringAccount: ApiObjectReference;

    /**
     * label for this payment method
     */
    label: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Payment Type
     */
    paymentType: BankPaymentType;

    /**
     * dunnable
     */
    dunnable: boolean;

    /**
     * translations
     */
    translations: Array<DocumentTypeTerm>;

    /**
     * Close the debtor open item?
     */
    closeCustomerAccountType: boolean;

    /**
     * Additional days for the recurring direct debit.
     */
    daysToAddForFollowup: number;

    /**
     * external Payment Id
     */
    externalPaymentId: string;

    /**
     * Business transaction.
     */
    businessTransaction: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Close the creditor open item?
     */
    closeSupplierAccountType: boolean;

    /**
     * Close the receivable open item?
     */
    closeReceivable: boolean;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface PaymentPlanManualRule {

    /**
     * Already processed.
     */
    processed: boolean;

    /**
     * Amount.
     */
    amount: number;

    /**
     * Base currency (ISO-A3).
     */
    baseCurrencyCode: string;

    /**
     * Currency exchange rate against the base currency.
     */
    exchangeRate: number;

    /**
     * Due date.
     */
    dueDate: ScriptingDate;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Currency (ISO-A3).
     */
    currencyCode: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Amount in base currency.
     */
    baseAmount: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface PaymentTerm {

    /**
     * Percent for Discount 2 
     */
    paymentDiscount2: number;

    /**
     * printDescription
     */
    printDescription: string;

    /**
     * Percent for Discount 1 
     */
    paymentDiscount1: number;

    /**
     * Days for Discount 1 
     */
    paymentDays1: number;

    /**
     * for deposit: remaining term
     */
    remainingTermRef: ApiObjectReference;

    /**
     * Days for Discount 2 
     */
    paymentDays2: number;

    /**
     * Is this active?
     */
    active: boolean;

    /**
     * description
     */
    description: string;

    /**
     * label for this payment term
     */
    label: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * payment type
     */
    paymentType: PaymentType;

    /**
     * translations
     */
    translations: Array<DocumentTypeTerm>;

    /**
     * Is this considered for the credit limit?
     */
    considerForCreditLimit: boolean;

    /**
     * external Payment Id
     */
    externalPaymentId: string;

    /**
     * Days for net payment 
     */
    paymentDaysNet: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Dunning block.
     */
    dunningBlock: boolean;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface PaymentTermRef {

    /**
     * Active.
     */
    active: boolean;

    /**
     * a short description
     */
    description: string;

    /**
     * Identifier
     */
    id: number;

    /**
     * a label
     */
    label: string;

    /**
     * payment type
     */
    paymentType: PaymentType;
}

export const enum PaymentType {
    PREPAYMENT = 'PREPAYMENT',
    PAYMENT = 'PAYMENT',
    DEPOSIT = 'DEPOSIT'
}

export const enum PersonGenderType {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    ETC = 'ETC'
}

export interface PickTrolley {

    /**
     * Barcode for selecting the trolley.
     */
    identifier: string;

    /**
     * Boxes belonging to this trolley.
     */
    pickTrolleyBoxes: Array<PickTrolleyBox>;

    /**
     * User processing the picklist.
     */
    processedByUserRef: ApiObjectReference;

    /**
     * Storage bin this pick trolley is assigned to.
     */
    storageBinRef: StorageBinRef;

    /**
     * Trolley description.
     */
    description: string;

    /**
     * The trolley currently belongs to this picklist.
     */
    currentPicklistId: number;

    /**
     * Trolley label.
     */
    label: string;

    /**
     * Trolley type.
     */
    type: PickTrolleyType;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Picklist templates that can be used to create picklists for the trolley on the mobile device.
     */
    picklistTemplateRefs: Array<ApiObjectReference>;

    /**
     * Trolley status.
     */
    state: PickTrolleyState;

    /**
     * The trolley belongs to this pick trolley group.
     */
    pickTrolleyGroupRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface PickTrolleyBox {

    /**
     * The box belongs to this pick trolley.
     */
    pickTrolleyId: number;

    /**
     * Barcode for selecting the box.
     */
    identifier: string;

    /**
     * Document currently being picked.
     */
    currentDocumentId: number;

    /**
     * Box description.
     */
    description: string;

    /**
     * Box status.
     */
    state: PickTrolleyBoxState;

    /**
     * Box label.
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum PickTrolleyBoxState {
    NOT_ACTIVE = 'NOT_ACTIVE',
    AVAILABLE = 'AVAILABLE',
    RESERVED_FOR_ORDER = 'RESERVED_FOR_ORDER',
    IN_PICKING = 'IN_PICKING',
    READY_FOR_PACKING = 'READY_FOR_PACKING',
    READY_FOR_SHIPPING = 'READY_FOR_SHIPPING',
    WAITING_FOR_DELIVERY_DOCUMENT_AND_SHIPPING_LABEL = 'WAITING_FOR_DELIVERY_DOCUMENT_AND_SHIPPING_LABEL',
    WAITING_FOR_DELIVERY_DOCUMENT = 'WAITING_FOR_DELIVERY_DOCUMENT',
    WAITING_FOR_SHIPPING_LABEL = 'WAITING_FOR_SHIPPING_LABEL'
}

export const enum PickTrolleyState {
    NOT_ACTIVE = 'NOT_ACTIVE',
    AVAILABLE = 'AVAILABLE',
    CONTAINS_GOODS = 'CONTAINS_GOODS',
    RESERVED_FOR_PICKLIST = 'RESERVED_FOR_PICKLIST',
    IN_PICKING = 'IN_PICKING',
    PAUSED_IN_PICKING = 'PAUSED_IN_PICKING',
    READY_FOR_PACKING = 'READY_FOR_PACKING',
    IN_PACKING = 'IN_PACKING',
    PAUSED_IN_PACKING = 'PAUSED_IN_PACKING',
    READY_FOR_SHIPPING = 'READY_FOR_SHIPPING',
    WAITING_FOR_SHIPPING_DOCUMENTS = 'WAITING_FOR_SHIPPING_DOCUMENTS'
}

export const enum PickTrolleyType {
    FREE_COLLECTION = 'FREE_COLLECTION',
    FOR_ROLLING_ORDER_PICKING = 'FOR_ROLLING_ORDER_PICKING',
    FOR_CONSOLIDATION = 'FOR_CONSOLIDATION'
}

export const enum PickingArticleProcessing {
    FREE = 'FREE',
    SCAN_ONCE = 'SCAN_ONCE',
    SCAN_ALWAYS = 'SCAN_ALWAYS'
}

export const enum PickingDeviatingQuantity {
    ALLOW_ONLY_ORDERED_QUANTITY = 'ALLOW_ONLY_ORDERED_QUANTITY',
    ALLOW_MINOR_QUANTITY = 'ALLOW_MINOR_QUANTITY',
    ALLOW_OVER_DELIVERY = 'ALLOW_OVER_DELIVERY',
    ALLOW_DEVIATING_QUANTITY = 'ALLOW_DEVIATING_QUANTITY'
}

export const enum PickingType {
    FAST_ORDER_PICKING = 'FAST_ORDER_PICKING',
    SINGLE_ORDER_PICKING = 'SINGLE_ORDER_PICKING',
    COLLECTIVE_ORDER_PICKING = 'COLLECTIVE_ORDER_PICKING',
    ROLLING_ORDER_PICKING = 'ROLLING_ORDER_PICKING',
    CONSOLIDATION = 'CONSOLIDATION',
    REPLENISHMENT = 'REPLENISHMENT',
    FABRICATION = 'FABRICATION',
    MISSING_GOODS_PICKING = 'MISSING_GOODS_PICKING',
    INCORRECTLY_PICKED_GOODS = 'INCORRECTLY_PICKED_GOODS'
}

export interface Picklist {

    /**
     * Template used to create the picklist.
     */
    usedTemplate: PicklistTemplate;

    /**
     * Target storage for the replenishment.
     */
    targetStorageRef: ApiObjectReference;

    /**
     * Picklist number.
     */
    number: string;

    /**
     * Time the picking process was finished.
     */
    pickingFinishedAt: ScriptingDateTime;

    /**
     * User performing the picking process.
     */
    pickingUserRef: ApiObjectReference;

    /**
     * Time the picking process was started.
     */
    pickingStartedAt: ScriptingDateTime;

    /**
     * Picklist status.
     */
    state: PicklistState;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Picklist lines.
     */
    lines: Array<PicklistLine>;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface PicklistLine {

    /**
     * Pick box this line is to be picked with.
     */
    pickTrolleyBoxRef: ApiObjectReference;

    /**
     * Picked line quantity.
     */
    quantityCollected: number;

    /**
     * Line components, if this line is an assembly.
     */
    components: Array<PicklistLineComponent>;

    /**
     * Line quantity.
     */
    quantity: number;

    /**
     * Article.
     */
    articleRef: ProductArticleRef;

    /**
     * Target document identifier.
     */
    targetDocumentId: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Source document line identifier.
     */
    sourceDocumentLineId: number;

    /**
     * Storage.
     */
    storageRef: ApiObjectReference;

    /**
     * Line type.
     */
    lineType: PicklistLineType;

    /**
     * Target document line identifier.
     */
    targetDocumentLineId: number;

    /**
     * Line status.
     */
    state: PicklistLineState;

    /**
     * Packed line quantity.
     */
    quantityPacked: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Bookings for this line.
     */
    bookings: Array<PicklistLineBooking>;

    /**
     * Source document identifier.
     */
    sourceDocumentId: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface PicklistLineBooking {

    /**
     * Quantity to book (picked).
     */
    quantity: number;

    /**
     * Serial number.
     */
    serialNumber: ArticleSerialNumber;

    /**
     * Storage bin display name.
     */
    storageBinDisplayName: string;

    /**
     * Identifier of the storage bin booked to.
     */
    storageBinId: number;

    /**
     * Booking preset?
     */
    preset: boolean;

    /**
     * Quantity to book (packed).
     */
    quantityPacked: number;
}

export interface PicklistLineComponent {

    /**
     * Picked line quantity.
     */
    quantityCollected: number;

    /**
     * Article name.
     */
    articleName: string;

    /**
     * Line quantity.
     */
    quantity: number;

    /**
     * Article description.
     */
    articleDescription: string;

    /**
     * Article identifier.
     */
    articleId: number;

    /**
     * Picklist line identifier.
     */
    picklistLineId: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Component identifier of the source document line.
     */
    sourceDocumentLineComponentId: number;

    /**
     * Article number.
     */
    articleNumber: string;

    /**
     * Component identifier of the target document line.
     */
    targetDocumentLineComponentId: number;

    /**
     * Deviating article name.
     */
    articleAlternativeName: string;

    /**
     * Quantity per assembly (if the picklist line is an assembly).
     */
    quantityPerAssemblyGroup: number;

    /**
     * Component position in the assembly.
     */
    position: number;

    /**
     * Packed line quantity.
     */
    quantityPacked: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Bookings for this component.
     */
    bookings: Array<PicklistLineBooking>;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum PicklistLineState {
    IN_CREATION = 'IN_CREATION',
    CREATED = 'CREATED',
    NEWLY_ADDED = 'NEWLY_ADDED',
    PICKED = 'PICKED',
    NEWLY_ADDED_AND_PICKED = 'NEWLY_ADDED_AND_PICKED',
    WAITING_FOR_SHIPPING_DOCUMENTS = 'WAITING_FOR_SHIPPING_DOCUMENTS',
    CANCELLED = 'CANCELLED',
    FINISHED = 'FINISHED'
}

export const enum PicklistLineType {
    ARTICLE = 'ARTICLE',
    ASSEMBLY_GROUP = 'ASSEMBLY_GROUP'
}

export const enum PicklistScriptType {
    CONNECT_PICK_BOXES_TO_PICKLIST_LINE = 'CONNECT_PICK_BOXES_TO_PICKLIST_LINE'
}

export const enum PicklistState {
    IN_CREATION = 'IN_CREATION',
    CREATED = 'CREATED',
    PAUSED_IN_PICKING = 'PAUSED_IN_PICKING',
    IN_PICKING = 'IN_PICKING',
    PICKED = 'PICKED',
    PAUSED_IN_PACKING = 'PAUSED_IN_PACKING',
    IN_PACKING = 'IN_PACKING',
    CANCELLED = 'CANCELLED',
    FINISHED = 'FINISHED'
}

export interface PicklistTemplate {

    /**
     * Picking type.
     */
    pickingType: PickingType;

    /**
     * Options for selecting orders for the picklist.
     */
    orderSelectionOptions: PicklistTemplate$OrderSelectionOptions;

    /**
     * Scripts for creating and processing picklists.
     */
    picklistScripts: Map<PicklistScriptType,PicklistTemplate$PicklistScript>;

    /**
     * Is this a default template?
     */
    defaultTemplate: boolean;

    /**
     * Is Template active?
     */
    active: boolean;

    /**
     * Template description.
     */
    description: string;

    /**
     * Template name.
     */
    label: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Options for creating the picklist.
     */
    picklistCreationOptions: PicklistTemplate$PicklistCreationOptions;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Options for processing picklists.
     */
    picklistProcessingOptions: PicklistTemplate$PicklistProcessingOptions;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface PicklistTemplate$DateRange {

    /**
     * The date range may be empty.
     */
    allowEmpty: boolean;

    /**
     * Date from (optionally as a relative date).
     */
    from: string;

    /**
     * Date to (optionally as a relative date).
     */
    to: string;
}

export interface PicklistTemplate$OrderSelectionOptions {

    /**
     * Maximum shipping weight per order.
     */
    maxShippingWeightPerOrder: number;

    /**
     * Selection by the confirmed delivery date range.
     */
    confirmedDeliveryDateRange: PicklistTemplate$DateRange;

    /**
     * May only valid delivery methods be used?
     */
    allowOnlyDefinedDeliveryMethods: boolean;

    /**
     * Minimum number of articles per order.
     */
    minArticleCountPerOrder: number;

    /**
     * Document types of the document category "customer order".
     */
    documentTypeRefs: Array<ApiObjectReference>;

    /**
     * Maximum number of articles per order.
     */
    maxArticleCountPerOrder: number;

    /**
     * Alternative selection in VQL.
     */
    alternativeSelectionInVql: string;

    /**
     * Maximum order value.
     */
    maxOrderValue: number;

    /**
     * Only fully deliverable lines.
     */
    onlyFullDeliverableOrderLines: boolean;

    /**
     * Only for single picking and consolidation: maximum number of orders to transfer.
     */
    maxOrderCount: number;

    /**
     * Selection by the delivery date range.
     */
    deliveryDateRange: PicklistTemplate$DateRange;

    /**
     * Selection by the document date range.
     */
    documentDateRange: PicklistTemplate$DateRange;

    /**
     * Valid storage areas.
     */
    storageAreaRefs: Array<ApiObjectReference>;

    /**
     * Identifier of the salesChannel considered in the selection.
     */
    salesChannelId: number;

    /**
     * Only fully deliverable orders.
     */
    onlyFullDeliverableOrders: boolean;

    /**
     * Valid delivery methods.
     */
    deliveryMethodRefs: Array<ApiObjectReference>;

    /**
     * Maximum total volume per order (in cubic centimeters).
     */
    maxTotalVolumePerOrderInCCM: number;

    /**
     * Additional exists statements in VQL.
     */
    additionalExistsStatementsInVql: Array<string>;
}

export interface PicklistTemplate$PicklistCreationOptions {

    /**
     * For serial articles with an expiry or best-before date: predefine the oldest series in the picklist.
     */
    specifySerialWithOldestExpiryDate: boolean;

    /**
     * Cycle for creating picklists (for background jobs, as a Quartz cron expression) (https://www.freeformatter.com/cron-expression-generator-quartz.html).
     */
    cycleToCreatePicklistsCronExpression: string;

    /**
     * Template to use for creating picklists for quick picking.
     */
    fastOrderPickingTemplateToUseRef: ApiObjectReference;

    /**
     * Should the labels be printed automatically after the creation?
     */
    printLabelsOnCreation: boolean;

    /**
     * Maximum order line quantity for quick-picking picklists.
     */
    maxQuantityOfOrderLineForFastOrderPicking: number;

    /**
     * Should the picklist be printed?
     */
    printPicklist: boolean;

    /**
     * Maximum number of picklist lines.
     */
    maxPicklistLineCount: number;

    /**
     * Pick trolley group to use.
     */
    orderPickingTrolleyGroupRef: ApiObjectReference;

    /**
     * Which report group the picklist is printed with.
     */
    picklistOutputReportGroupRef: ApiObjectReference;

    /**
     * Predefine the storage bins.
     */
    specifyStorageBins: boolean;

    /**
     * Pick trolley to use.
     */
    orderPickingTrolleyRef: ApiObjectReference;

    /**
     * Should all available pick trolleys be used?
     */
    useAllAvailOrderPickingTrolleys: boolean;

    /**
     * Sort the picklist lines by route position.
     */
    sortByRoutePosition: boolean;

    /**
     * Should picklists for the quick picking be created first?
     */
    firstCreateFastOrderPickingPicklists: boolean;
}

export interface PicklistTemplate$PicklistProcessingOptions {

    /**
     * Pick assemblies as a whole.
     */
    assemblyGroupAtOnce: boolean;

    /**
     * Should the parcel labels be printed automatically after the picking is completed?
     */
    autoPrintShippingLabel: boolean;

    /**
     * May articles be recorded only by scanning (or also by entering the article number)?
     */
    articleScanRequirement: PickingArticleProcessing;

    /**
     * Is skipping lines allowed?
     */
    allowSkipPosition: boolean;

    /**
     * Automatic completion after the last article of the current order.
     */
    autoPickingFinishAfterLastArticleInOrder: boolean;

    /**
     * Use pick and pack.
     */
    usePickNPack: boolean;

    /**
     * Picking of deviating quantities.
     */
    deviatingQuantity: PickingDeviatingQuantity;

    /**
     * Always show the delivery term in the dialogs.
     */
    alwaysShowDeliveryMethod: boolean;

    /**
     * Block exceeding the maximum parcel weight?
     */
    blockIfMaximumPackageWeightIsExceeded: boolean;

    /**
     * Should the delivery documents be printed automatically after the picking is completed?
     */
    autoPrintDeliveryDocument: boolean;

    /**
     * Show the shipping dialog on completion.
     */
    showShippingFormOnPickingFinish: boolean;

    /**
     * Should the labels be printed automatically during the recording?
     */
    printLabelOnScan: boolean;

    /**
     * Use the digital picklist: only the lines are shown in the frontend and confirmed by tapping or swiping.
     */
    useDigitalPicklist: boolean;

    /**
     * Allow collective confirmation.
     */
    allowFullConfirmation: boolean;

    /**
     * Should services be picked?
     */
    allowPickingOfServiceArticles: boolean;

    /**
     * Use the sales unit as the default quantity.
     */
    useSalesUnit: boolean;

    /**
     * Only for consolidation: scan the delivery document and the shipping label to complete.
     */
    scanDeliveryDocumentAndShippingLabelOnFinish: boolean;

    /**
     * Should the labels be printed automatically when the order is completed?
     */
    printLabelOnCompleteOrder: boolean;

    /**
     * Rolling picking and consolidation: during picking the box has to be confirmed by scanning after an article is scanned.
     */
    scanPickTrolleyBoxToConfirmPickedArticle: boolean;

    /**
     * Should the labels be printed automatically when the picking is completed?
     */
    printLabelAfterPicking: boolean;

    /**
     * Confirm lots automatically when they are predefined or were already recorded during picking.
     */
    autoDeterminationOfLots: boolean;

    /**
     * Should articles without stock management be picked?
     */
    allowPickingOfNonInventoryManagedArticles: boolean;

    /**
     * Hide the target quantities in the dialogs?
     */
    hideTargetQuantityInViews: boolean;

    /**
     * Storage bins must be recorded despite a predefined value.
     */
    alwaysRequireScanOfStorageBin: boolean;
}

export interface PicklistTemplate$PicklistScript {

    /**
     * Is the script active?
     */
    active: boolean;

    /**
     * Script source code.
     */
    source: string;
}

/**
 * Writer für einfache Texte ohne besondere Formatierung
 */
export interface PlainScriptingWriter {

    /**
     * Hängt den Inhalt an den bisher geschriebenen Inhalt an.
     * 
     * @param {string} content - Text, der in die Datei geschrieben wird
     */
    write(content: string): void;

    /**
     * Hängt den Inhalt an den bisher geschriebenen Inhalt an und schreibt anschließend einen Zeilenumbruch.
     * 
     * @param {string} content - Text, der in die Datei geschrieben wird
     */
    writeLine(content: string): void;

    /**
     * Schließt den Writer und die damit verbundene Datenquelle
     * 
     */
    close(): void;
}

export const enum PosLineType {
    CASH_PAYMENT = 'CASH_PAYMENT',
    CASH_CHANGE = 'CASH_CHANGE',
    CARD_PAYMENT = 'CARD_PAYMENT',
    VOUCHER_PAYMENT = 'VOUCHER_PAYMENT',
    CASH_START_BALANCE = 'CASH_START_BALANCE',
    CASH_FINAL_BALANCE = 'CASH_FINAL_BALANCE',
    CASH_DEPOSIT = 'CASH_DEPOSIT',
    CASH_EXPENSE = 'CASH_EXPENSE',
    CASH_WITHDRAWAL = 'CASH_WITHDRAWAL'
}

export const enum PosPaymentOperation {
    PAYMENT = 'PAYMENT',
    CANCEL = 'CANCEL',
    REFUND = 'REFUND'
}

export const enum PosPaymentStatus {
    PENDING = 'PENDING',
    PROCESSING = 'PROCESSING',
    SUCCESSFUL = 'SUCCESSFUL',
    CANCELLED = 'CANCELLED',
    REJECTED = 'REJECTED'
}

export const enum PossibleUsingType {
    ACCOUNT = 'ACCOUNT',
    CRM_DEAL = 'CRM_DEAL',
    CRM_PROJECT = 'CRM_PROJECT',
    CRM_TASK = 'CRM_TASK'
}

export const enum PriceModifierType {
    DISCOUNT = 'DISCOUNT',
    SURCHARGE = 'SURCHARGE'
}

export interface PriceSelectionCriteria {

    /**
     * Date.
     */
    date: ScriptingDate;

    /**
     * Price group.
     */
    priceGroupId: number;

    /**
     * Quantity.
     */
    quantity: number;

    /**
     * Article identifiers.
     */
    articleIds: Array<number>;

    /**
     * Account identifiers.
     */
    accountIds: Array<number>;

    /**
     * Qualifier.
     */
    qualifier: ProductPriceQualifier;

    /**
     * Product group.
     */
    productGroupId: number;

    /**
     * Should only the default price be selected?
     */
    selectOnlyDefaultPrice: boolean;

    /**
     * Consider the special offer price?
     */
    noteSpecialOfferPrice: boolean;
}

export interface Product {

    /**
     * Customs tariff number.
     */
    customsTariffNumber: string;

    /**
     * A lot must be assigned when booking into a sales storage (for serial types LOT and BEST_BEFORE).
     */
    lotOnlyRequiredWhenBookedToSalesStorage: boolean;

    /**
     * Product container schema.
     */
    bundleSchemaRef: ApiObjectReference;

    /**
     * Serial number labeling type.
     */
    serialNumberLabelingType: ArticleSerialNumberLabelingType;

    /**
     * Region of origin.
     */
    regionOfOrigin: ApiObjectReference;

    /**
     * Product type.
     */
    type: ProductType;

    /**
     * Warranty in months.
     */
    warrantyInMonths: number;

    /**
     * Minimum remaining shelf life incoming (days): minimum remaining shelf life in days an article must still have when booked into a sales storage.
     */
    minimumRemainingDaysBeforeExpiryDateOnGoodsReceipt: number;

    /**
     * Options for calculating the availability.
     */
    availabilityDetermination: ArticleAvailabilityDetermination;

    /**
     * All articles belonging to this product.
     */
    articleRefs: Array<ProductArticleRef>;

    /**
     * Should an own number range be used for the serial numbers?
     */
    useSerialSequencerConfiguration: boolean;

    /**
     * Fabrication serial number labeling type.
     */
    fabricationSerialNumberLabelingType: FabricationSerialNumberLabelingType;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Is this a container?
     */
    bundle: boolean;

    /**
     * Serial type.
     */
    serialType: ArticleSerialType;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * Main variant article.
     */
    mainVariantProductRef: ApiObjectReference;

    /**
     * Variant schema.
     */
    variantSchemaRef: ApiObjectReference;

    /**
     * Own number range for serial numbers.
     */
    serialSequencerConfiguration: SequencerConfiguration;

    /**
     * Expiry date type.
     */
    expiryDateType: ArticleSerialExpiryDateType;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Minimum remaining shelf life outgoing (days): minimum remaining shelf life in days an article must still have when sold.
     */
    minimumRemainingDaysBeforeExpiryDateForGoodsIssued: number;

    /**
     * Country code
     */
    countryOfOrigin: CountryReference;

    /**
     * Variant values.
     */
    variantValues: Array<VariantValueReference>;
}

export interface ProductArticleRef {

    /**
     * Article number
     */
    number: string;

    /**
     * named unit of this article (piece, palette, container)
     */
    unit: UnitTypeReference;

    /**
     * Label.
     */
    name: string;

    /**
     * Description.
     */
    description: string;

    /**
     * Article identifier.
     */
    id: number;

    /**
     * Serial type.
     */
    serialType: ArticleSerialType;
}

export interface ProductDiscount {

    /**
     * Customer group.
     */
    customerGroupRef: ApiObjectReference;

    /**
     * Main article this discount is valid for.
     */
    accessoryMainArticleRef: ApiObjectReference;

    /**
     * Supplier group.
     */
    supplierGroupRef: ApiObjectReference;

    /**
     * Determines from which quantity this discount is valid.
     */
    fromQuantity: number;

    /**
     * Manufacturer.
     */
    manufacturerRef: ApiObjectReference;

    /**
     * Product this discount is valid for.
     */
    articleRef: ApiObjectReference;

    /**
     * Valid from.
     */
    validFrom: ScriptingDate;

    /**
     * Determines the discount type.
     */
    modifierType: PriceModifierType;

    /**
     * Product group.
     */
    productGroupRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Sales channel.
     */
    salesChannelRef: ApiObjectReference;

    /**
     * Currency.
     */
    currencyRef: CurrencyReference;

    /**
     * Discount value.
     */
    modifierValue: number;

    /**
     * Price group.
     */
    priceGroupRef: ApiObjectReference;

    /**
     * Determines whether this is a sales or a purchase discount.
     */
    qualifier: ProductPriceQualifier;

    /**
     * Valid until.
     */
    validUntil: ScriptingDate;

    /**
     * Special offer price.
     */
    specialOfferPrice: boolean;

    /**
     * Determines the discount value type (fixed or percentage).
     */
    modifierValueType: ValueType;

    /**
     * Discount name.
     */
    modifierName: string;

    /**
     * Account the discount is valid for.
     */
    accountRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ProductGroup {

    /**
     * needed for data migration from third party applications
     */
    externalReference: string;

    /**
     * Customs tariff number.
     */
    customsTariffNumber: string;

    /**
     * Target trading margin.
     */
    targetTradingMargin: number;

    /**
     * Custom field.
     */
    custom: EavProductgroup;

    /**
     * main product group
     */
    mainGroupRef: ApiObjectReference;

    /**
     * Is the product group active?
     */
    active: boolean;

    /**
     * product group description
     */
    description: string;

    /**
     * product group name
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ProductMainGroup {

    /**
     * Target trading margin.
     */
    targetTradingMargin: number;

    /**
     * Custom field.
     */
    custom: EavProductmaingroup;

    /**
     * Is the main product group active?
     */
    active: boolean;

    /**
     * Main product group description.
     */
    description: string;

    /**
     * Main product group.
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ProductPrice {

    /**
     * Customer group.
     */
    customerGroupRef: ApiObjectReference;

    /**
     * Main article this price is valid for.
     */
    accessoryMainArticleRef: ApiObjectReference;

    /**
     * Purchase price for the calculation.
     */
    purchasePriceSource: PurchasePriceSource;

    /**
     * Determines from which quantity this price is valid.
     */
    fromQuantity: number;

    /**
     * Net price.
     */
    netPrice: number;

    /**
     * Gross price.
     */
    grossPrice: number;

    /**
     * Valid from.
     */
    validFrom: ScriptingDate;

    /**
     * Product group.
     */
    productGroupRef: ApiObjectReference;

    /**
     * Sales channel.
     */
    salesChannelRef: ApiObjectReference;

    /**
     * Price group.
     */
    priceGroupRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * VAT used for converting between net and gross.
     */
    usedTaxRate: TaxRate;

    /**
     * Supplier group.
     */
    supplierGroupRef: ApiObjectReference;

    /**
     * Manufacturer.
     */
    manufacturerRef: ApiObjectReference;

    /**
     * Product this price is valid for.
     */
    articleRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Currency.
     */
    currencyRef: CurrencyReference;

    /**
     * Surcharge value in the purchase price calculation.
     */
    modifierValue: number;

    /**
     * Determines whether this is a sales or a purchase price.
     */
    qualifier: ProductPriceQualifier;

    /**
     * Valid until.
     */
    validUntil: ScriptingDate;

    /**
     * Special offer price.
     */
    specialOfferPrice: boolean;

    /**
     * Price base.
     */
    priceBase: ArticlePriceBase;

    /**
     * Determines the surcharge type (fixed or percentage) in the purchase price calculation.
     */
    modifierValueType: ValueType;

    /**
     * Account the price is valid for.
     */
    accountRef: ApiObjectReference;
}

export const enum ProductPriceOrigin {
    USER_DEFINED = 'USER_DEFINED',
    PRODUCT = 'PRODUCT',
    PREDECESSOR_DOCUMENT = 'PREDECESSOR_DOCUMENT',
    PICKLIST = 'PICKLIST'
}

export const enum ProductPriceQualifier {
    SALES = 'SALES',
    PURCHASE = 'PURCHASE'
}

export const enum ProductType {
    WITH_STOCK = 'WITH_STOCK',
    WITHOUT_STOCK = 'WITHOUT_STOCK',
    SERVICE_ARTICLE = 'SERVICE_ARTICLE',
    SERVICE_CONTINGENT = 'SERVICE_CONTINGENT',
    ASSEMBLY_GROUP = 'ASSEMBLY_GROUP',
    JUMBO = 'JUMBO',
    SHIPPING_COSTS = 'SHIPPING_COSTS',
    VARIANT_MAIN_ARTICLE = 'VARIANT_MAIN_ARTICLE'
}

export const enum PublishingPolicy {
    AUTOMATIC = 'AUTOMATIC',
    MANUAL = 'MANUAL'
}

export const enum PurchasePriceSource {
    NONE = 'NONE',
    AVERAGE = 'AVERAGE',
    MOST_RECENT = 'MOST_RECENT'
}

export interface RecommendedRetailPrice {

    /**
     * Country (ISO Alpha-2).
     */
    countryCode: CountryReference;

    /**
     * Reference to the article.
     */
    articleRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Price.
     */
    value: number;

    /**
     * Currency (ISO Alpha-3).
     */
    currencyCode: CurrencyReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface Referenceable {
}

export const enum RegulationCode {
    FR = 'FR',
    LQ = 'LQ',
    EQ = 'EQ',
    LR = 'LR'
}

export const enum RegulationSet {
    ADR = 'ADR',
    IATA = 'IATA'
}

export interface RequestDocument {

    /**
     * Storage bin identifier for the incoming goods (when incomingGoodsPickTrolleyId is null).
     */
    incomingGoodsStorageBinId: number;

    /**
     * Document date.
     */
    documentDate: ScriptingDate;

    /**
     * Performance date.
     */
    performanceDate: ScriptingDate;

    /**
     * Deposit amount.
     */
    depositPaymentAmount: number;

    /**
     * Cash drawer identifier (for POS).
     */
    cashDrawerId: number;

    /**
     * For internal use: the Document delivery method.
     */
    deliveryMethodId: number;

    /**
     * External document number.
     */
    externalNumber: string;

    /**
     * For internal use: marks the document as externally created (e.g. a marketplace invoice; the original is held in the external system).
     */
    externallyCreated: boolean;

    /**
     * For internal use: the Document performance country.
     */
    performanceCountryId: number;

    /**
     * One or more POS payments.
     */
    posPayments: Array<DocumentPosPayment>;

    /**
     * Receipt details.
     */
    posDetail: DocumentPosDetail;

    /**
     * sales-channel-id to create a new Document
     */
    salesChannelId: number;

    /**
     * billing type
     */
    billingType: BillingType;

    /**
     * For internal use: the Document payment method.
     */
    paymentMethodId: number;

    /**
     * For internal use: the Document delivery term.
     */
    deliveryTermId: number;

    /**
     * For internal use: the Document currency.
     */
    currencyId: number;

    /**
     * Document lines.
     */
    lines: Array<RequestDocumentLine>;

    /**
     * For internal use only: new lines for individually returned assembly components.
     */
    assemblyComponentReturnsToAddOnTransfer: Array<AssemblyComponentReturnLine>;

    /**
     * POS register identifier (for POS).
     */
    posRegisterId: number;

    /**
     * Contract details.
     */
    contractDetail: DocumentContractDetail;

    /**
     * Default supplier when transferring from an order to supplier orders.
     */
    supplierAccountId: number;

    /**
     * For internal use: the Document payment term.
     */
    paymentTermId: number;

    /**
     * For internal use: the drop shipping policy.
     */
    dropShipping: boolean;

    /**
     * Schema custom fields.
     */
    custom: EavDocument;

    /**
     * target document type for document copy
     */
    targetDocumentType: DocumentType;

    /**
     * reference to the corresponding document in an external system
     */
    externalId: string;

    /**
     * Pick trolley identifier for the incoming goods (when incomingGoodsStorageBinId is null).
     */
    incomingGoodsPickTrolleyId: number;

    /**
     * calculation mode
     */
    calculationMode: CalculationMode;

    /**
     * Reason for the cancellation when creating a cash journal cancellation document.
     */
    cancellationReasonRef: ApiCreatableReference;

    /**
     * For internal use: marks the document as an electronic invoice.
     */
    eInvoice: boolean;

    /**
     * account-id to create a new Document
     */
    accountId: number;

    /**
     * Document header and footer texts.
     */
    texts: Array<DocumentText>;

    /**
     * Is this document processed by the picklist processing?
     */
    processedByPicklistProcessing: boolean;

    /**
     * For internal use only: new lines to be created when transferring from a picklist.
     */
    picklistLinesToAddOnTransfer: Array<PicklistLine>;

    /**
     * Document discounts.
     */
    priceModifiers: Array<RequestDocumentPriceModifier>;
}

export interface RequestDocumentLine {

    /**
     * Storage bin identifier for the incoming goods (when `incomingGoodsPickTrolleyId` is null).
     */
    incomingGoodsStorageBinId: number;

    /**
     * Performance date.
     */
    performanceDate: ScriptingDate;

    /**
     * Document line return details.
     */
    returnDetail: DocumentLineReturnDetail;

    /**
     * Should the source line be marked as completed after a successful processing?
     */
    markCompleted: boolean;

    /**
     * Article description.
     */
    description: string;

    /**
     * Price origin.
     */
    priceOrigin: ProductPriceOrigin;

    /**
     * Document line receipt details.
     */
    posDetail: DocumentLinePosDetail;

    createdLineIdConsumer: Consumer<Long>;

    /**
     * Total line price (optional).
     */
    totalLinePrice: number;

    /**
     * Referenced document line identifier (optional).
     */
    refLineId: number;

    /**
     * Commissions for this document line.
     */
    commissions: Array<RequestDocumentLineCommission>;

    /**
     * The affected voucher: for VOUCHER_REDEMPTION the one to redeem, for VOUCHER_SALE on return, credit note or cancellation the returned one
     */
    voucherId: number;

    /**
     * Finance details.
     */
    financeBooking: DocumentFinanceBooking;

    /**
     * Line type.
     */
    lineType: DocumentLineType;

    /**
     * For internal use: the tax rate in percent.
     */
    taxPercent: number;

    /**
     * Is this drop shipping?
     */
    dropShippingPolicy: DropShippingPolicy;

    /**
     * Scanned code of the preprinted voucher card (VOUCHER_SALE of a voucher type with scanned codes only)
     */
    voucherCode: string;

    /**
     * Storage identifier (optional).
     */
    storageId: number;

    /**
     * Article position number.
     */
    positionOfArticleLine: number;

    /**
     * Document line contract details.
     */
    contractDetail: DocumentContractDetail;

    /**
     * Required for converting a customer order into a supplier order.
     */
    supplierAccountId: number;

    /**
     * Quantity to process in this transaction.
     */
    quantity: number;

    mainArticleLinePosition: number;

    /**
     * Shipping costs with conditions.
     */
    shippingCostDetail: RequestDocumentLineShippingCostDetail;

    /**
     * Fabrication document details.
     */
    fabricationDetail: RequestDocumentLineFabricationDetail;

    /**
     * For internal use: the custom fields.
     */
    custom: EavDocumentline;

    /**
     * Note on the open item line - transferred into the open item comment on closing.
     */
    settledOpenItemComment: string;

    /**
     * Article identifier of this line (optional).
     */
    articleId: number;

    /**
     * Document line identifier in the current document.
     */
    lineId: number;

    /**
     * Reference to the corresponding line in an external system.
     */
    externalId: string;

    /**
     * Pick trolley identifier for the incoming goods (when `incomingGoodsStorageBinId` is null).
     */
    incomingGoodsPickTrolleyId: number;

    /**
     * Identifier of the open item to settle (only for OPEN_ITEM_SETTLEMENT).
     */
    settledOpenItemId: number;

    /**
     * Document line commission origin.
     */
    commissionOrigin: DocumentCommissionOrigin;

    /**
     * Texts for this line (optional).
     */
    texts: Array<RequestDocumentText>;

    /**
     * Voucher type of the sales line (VOUCHER_SALE only)
     */
    voucherTypeId: number;

    /**
     * Article name.
     */
    name: string;

    /**
     * Price modifiers for this line (optional).
     */
    priceModifiers: Array<RequestDocumentPriceModifier>;

    /**
     * For internal use: the external article number.
     */
    externalArticleNumber: string;

    /**
     * Source document line identifier.
     */
    sourceLineId: number;

    /**
     * Bookings for this document line.
     */
    bookings: Array<RequestDocumentLineBooking>;

    /**
     * Trigger the label printing for this line.
     */
    doLabelPrint: boolean;

    /**
     * Article price of this line (optional).
     */
    productPrice: number;
}

export interface RequestDocumentLineBooking {

    /**
     * Identifier of a serial number to book, if any.
     */
    serialNumberId: number;

    /**
     * Booked quantity.
     */
    quantity: number;

    /**
     * Identifier of the storage bin booked to.
     */
    storageBinId: number;

    /**
     * Booked source DocumentLineComponent identifier.
     */
    sourceComponentId: number;
}

export interface RequestDocumentLineCommission {

    /**
     * Commission type.
     */
    valueType: ValueType;

    /**
     * Origin.
     */
    origin: DocumentCommissionOrigin;

    /**
     * Description.
     */
    description: string;

    /**
     * Comment.
     */
    comment: string;

    /**
     * Commission percentage or value.
     */
    value: number;

    /**
     * Sales agent.
     */
    salesAgentAccountRef: Account;
}

export interface RequestDocumentLineFabricationDetail {

    /**
     * Fill this only when the serial numbers are to be determined manually before the fabrication starts.
     */
    fabricationSerialNumbers: Array<FabricationSerialNumber>;
}

export interface RequestDocumentLineShippingCostDetail {

    /**
     * Were the shipping costs entered manually?
     */
    manualCosts: boolean;

    /**
     * No shipping costs (free shipping).
     */
    freeShipping: boolean;

    /**
     * Purchase price in base currency.
     */
    purchasePrice: number;
}

export interface RequestDocumentPriceModifier {

    /**
     * Source of price modifier
     */
    sourceType: DocumentPriceModifier$PriceModifierSourceType;

    /**
     * modifierValue of this line
     */
    modifierValue: number;

    /**
     * value-type of modifier of this line
     */
    valueType: ValueType;

    /**
     * modifierName of this line
     */
    modifierName: string;

    /**
     * type of this price modifier (discount/surcharge)
     */
    modifierType: PriceModifierType;
}

export interface RequestDocumentText {

    /**
     * header or footer text
     */
    textPosition: TextPosition;

    /**
     * text content
     */
    content: string;
}

export const enum ReturnCategory {
    MONETARY_COMPENSATION_ITEM_STAYS_WITH_CUSTOMER = 'MONETARY_COMPENSATION_ITEM_STAYS_WITH_CUSTOMER',
    MONETARY_COMPENSATION_ITEM_GETS_SEND_BACK = 'MONETARY_COMPENSATION_ITEM_GETS_SEND_BACK',
    GOODS_EXCHANGE_ITEM_STAYS_WITH_CUSTOMER = 'GOODS_EXCHANGE_ITEM_STAYS_WITH_CUSTOMER',
    GOODS_EXCHANGE_ITEM_GETS_SEND_BACK = 'GOODS_EXCHANGE_ITEM_GETS_SEND_BACK',
    UNDECIDED = 'UNDECIDED'
}

export interface RevenueCalculation {

    /**
     * Contribution margin (absolute).
     */
    revenue: number;

    /**
     * Net revenue.
     */
    salesValue: number;

    /**
     * Purchase price.
     */
    productPurchasePrice: number;

    /**
     * Contribution margin (percent).
     */
    revenueInPercent: number;
}

export interface SalesAgent {

    /**
     * Note.
     */
    note: string;

    /**
     * is sales agent taxable
     */
    taxable: boolean;

    /**
     * reference to the delivery method
     */
    deliveryMethodRef: ApiObjectReference;

    /**
     * Custom fields.
     */
    custom: EavSalesagent;

    /**
     * active true/false
     */
    active: boolean;

    /**
     * reference to the payment term
     */
    paymentTermRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * commission type of sales agent
     */
    commissionType: SalesAgentCommissionType;

    /**
     * reference to the delivery term
     */
    deliveryTermRef: ApiObjectReference;

    /**
     * number of sales agent
     */
    number: string;

    /**
     * reference to the tax rate
     */
    taxRateRef: ApiObjectReference;

    /**
     * reference to the assigned user
     */
    userRef: ApiObjectReference;

    /**
     * country code performance country IsoAlpha3
     */
    performanceCountryCode: string;

    /**
     * billing type
     */
    billingType: AccountBillingType;

    /**
     * reference to the payment method
     */
    paymentMethodRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * currency code  IsoAlpha3
     */
    currencyCode: string;

    /**
     * accounting number
     */
    accountingNumber: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum SalesAgentCommissionType {
    INVOICE = 'INVOICE',
    ORDER = 'ORDER',
    PAYMENT = 'PAYMENT'
}

export interface Scenario {

    /**
     * Scenario identifier.
     */
    identifier: string;

    /**
     * Dimension definition.
     */
    dimDefinitions: Array<ScenarioDimension>;

    /**
     * Fact and data definition.
     */
    factDefinitions: Array<ScenarioFactDef>;

    /**
     * Scenario description.
     */
    description: string;

    /**
     * Scenario description.
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Start date for the calculation (optional).
     */
    startDate: ScriptingDate;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ScenarioActualValue {

    /**
     * Reference to a ScenarioDimDef.
     */
    scenarioDimRef: ApiObjectReference;

    /**
     * Weighting.
     */
    weight: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Reference to the LookupReference.
     */
    referenceId: number;

    /**
     * Reference to a scenario dimension value.
     */
    dimValueRef: ApiObjectReference;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ScenarioDimension {

    /**
     * Distribution key values.
     */
    definedValues: Array<ScenarioDimensionValue>;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Distribution key - key or group.
     */
    key: string;

    /**
     * Can several keys be used in the distribution?
     */
    multiSelect: boolean;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ScenarioDimensionValue {

    /**
     * Sort order.
     */
    sortOrder: number;

    /**
     * Is the value still active and selectable?
     */
    active: boolean;

    /**
     * Value.
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Is this the fallback value?
     */
    fallback: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ScenarioFactDef {

    /**
     * Attribute name.
     */
    factAttribute: string;

    /**
     * Attribute type.
     */
    attributeType: ScenarioFactDef$FactType;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum ScenarioFactDef$FactType {
    DATE_DIM_FACT = 'DATE_DIM_FACT',
    LOOKUP_FACT = 'LOOKUP_FACT',
    DISTRIBUTE_FACT = 'DISTRIBUTE_FACT',
    DATA_FACT = 'DATA_FACT'
}

/**
 * Ausgabe-Anforderung
 */
export interface ScriptOutputRequest {

    /**
     * setzt einen freien Platzhalter-Parameter, im Template als [(${arg$.<key>})] nutzbar
     * 
     * @param {string} key - Name des Platzhalters
     * @param {object} value - Wert des Platzhalters
     * @return {ScriptOutputRequest} 
     */
    arg(key: string, value: object): ScriptOutputRequest;

    /**
     * setzt den Ausgabetyp auf reine DMS-Ablage
     * 
     * @return {ScriptOutputRequest} 
     */
    outputDmsOnly(): ScriptOutputRequest;

    /**
     * fügt emailadresse und alias einer ausgabe hinzu
     * 
     * @param {number} userId - setzt die Userid
     * @param {string} emailAddress - setzt die emailAddress
     * @param {string} alias - setzt den Alias
     * @return {ScriptOutputRequest} 
     */
    userRecipient(userId: number, emailAddress: string, alias: string): ScriptOutputRequest;

    /**
     * fügt ein DMS-Dokument (per ID) als Mail-Anhang hinzu
     * 
     * @param {number} shelfDocumentId - ID des DMS-Dokuments
     * @return {ScriptOutputRequest} 
     */
    attachDocument(shelfDocumentId: number): ScriptOutputRequest;

    /**
     * setzt den Ausgabetyp auf Mail
     * 
     * @return {ScriptOutputRequest} 
     */
    outputMail(): ScriptOutputRequest;

    /**
     * setzt den Ausgabetyp auf Drucken
     * 
     * @return {ScriptOutputRequest} 
     */
    outputPrint(): ScriptOutputRequest;

    /**
     * setzt den Ausgabetyp auf User-Message
     * 
     * @return {ScriptOutputRequest} 
     */
    outputUserMessage(): ScriptOutputRequest;

    /**
     * setzt den Ausgabetyp auf File-Export
     * 
     * @return {ScriptOutputRequest} 
     */
    outputFileExport(): ScriptOutputRequest;

    /**
     * setzt den user-id
     * 
     * @param {number} userId - 
     * @return {ScriptOutputRequest} 
     */
    setUserId(userId: number): ScriptOutputRequest;

    /**
     * setzt den export-filename
     * 
     * @param {string} exportFilename - 
     * @return {ScriptOutputRequest} 
     */
    exportFilename(exportFilename: string): ScriptOutputRequest;

    /**
     * setzt den Ausgabetyp
     * 
     * @param {string} outputType - 
     * @return {ScriptOutputRequest} 
     */
    outputType(outputType: string): ScriptOutputRequest;

    /**
     * setzt den report-group-identifier
     * 
     * @param {string} groupIdentifier - 
     * @return {ScriptOutputRequest} 
     */
    groupIdentifier(groupIdentifier: string): ScriptOutputRequest;

    /**
     * fügt emailadresse und alias einer ausgabe hinzu
     * 
     * @param {string} emailAddress - setzt die EmailAddress
     * @param {string} alias - setzt den Alias
     * @return {ScriptOutputRequest} 
     */
    mailRecipient(emailAddress: string, alias: string): ScriptOutputRequest;
}

/**
 * Datentyp für Datumswerte
 */
export interface ScriptingDate {

    /**
     * Ist dieser Datumswert zeitlich gleich dem anderen Datumswert?
     * 
     * @param {ScriptingDate} other - The other date value
     * @return {boolean} 
     */
    isEqual(other: ScriptingDate): boolean;

    /**
     * Liefert das Jahr aus dem Datumswert
     * 
     * @return {number} 
     */
    getYear(): number;

    /**
     * Liefert den Monat (1-12) aus dem Datumswert
     * 
     * @return {number} 
     */
    getMonthValue(): number;

    /**
     * Liefert den Tag des Monats (1-31) aus dem Datumswert
     * 
     * @return {number} 
     */
    getDayOfMonth(): number;

    /**
     * Neuer Datumswert aus diesem Datumswert und addierte Tage zum Datumswert
     * 
     * @param {number} days - 
     * @return {ScriptingDate} 
     */
    plusDays(days: number): ScriptingDate;

    /**
     * Neuer Datumswert aus diesem Datumswert und subtrahiert Tage vom Datumswert
     * 
     * @param {number} days - 
     * @return {ScriptingDate} 
     */
    minusDays(days: number): ScriptingDate;

    /**
     * Ist dieser Datumswert zeitlich hinter dem anderen Datumswert?
     * 
     * @param {ScriptingDate} other - The other date value
     * @return {boolean} 
     */
    isAfter(other: ScriptingDate): boolean;

    /**
     * Ist dieser Datumswert zeitlich vor dem anderen Datumswert?
     * 
     * @param {ScriptingDate} other - The other date value
     * @return {boolean} 
     */
    isBefore(other: ScriptingDate): boolean;

    /**
     * Liegt das Datum in einem Schaltjahr?
     * 
     * @return {boolean} 
     */
    isLeapYear(): boolean;

    /**
     * Anzahl Tage im Monat des Datumswerts
     * 
     * @return {number} 
     */
    lengthOfMonth(): number;

    /**
     * Anzahl Tage im Jahr des Datumswerts
     * 
     * @return {number} 
     */
    lengthOfYear(): number;

    /**
     * Liefert den Wochentag (1-7 = Mo-So) aus dem Datumswert
     * 
     * @return {number} 
     */
    getDayOfWeek(): number;

    /**
     * Liefert den Tag des Jahres (1-365/366) aus dem Datumswert
     * 
     * @return {number} 
     */
    getDayOfYear(): number;

    /**
     * Neuer Datumswert aus diesem Datumswert und ersetzt den Tag des Monats (1-31)
     * 
     * @param {number} dayOfMonth - 
     * @return {ScriptingDate} 
     */
    withDayOfMonth(dayOfMonth: number): ScriptingDate;

    /**
     * Neuer Datumswert aus diesem Datumswert und ersetzt den Tag des Jahres (1-365/366)
     * 
     * @param {number} dayOfYear - 
     * @return {ScriptingDate} 
     */
    withDayOfYear(dayOfYear: number): ScriptingDate;

    /**
     * Neuer Datumswert aus diesem Datumswert und addierte Wochen zum Datumswert
     * 
     * @param {number} weeks - 
     * @return {ScriptingDate} 
     */
    plusWeeks(weeks: number): ScriptingDate;

    /**
     * Neuer Datumswert aus diesem Datumswert und ersetzt den Monat (1-12)
     * 
     * @param {number} month - 
     * @return {ScriptingDate} 
     */
    withMonth(month: number): ScriptingDate;

    /**
     * Neuer Datumswert aus diesem Datumswert und addierte Monate zum Datumswert
     * 
     * @param {number} months - 
     * @return {ScriptingDate} 
     */
    plusMonths(months: number): ScriptingDate;

    /**
     * Neuer Datumswert aus diesem Datumswert und ersetzt das Jahr
     * 
     * @param {number} year - 
     * @return {ScriptingDate} 
     */
    withYear(year: number): ScriptingDate;

    /**
     * Neuer Datumswert aus diesem Datumswert und addierte Jahre zum Datumswert
     * 
     * @param {number} years - 
     * @return {ScriptingDate} 
     */
    plusYears(years: number): ScriptingDate;

    /**
     * Neuer Datumswert aus diesem Datumswert und subtrahiert Monate vom Datumswert
     * 
     * @param {number} months - 
     * @return {ScriptingDate} 
     */
    minusMonths(months: number): ScriptingDate;

    /**
     * Erstellt einen Datum-Zeit-Wert auf Basis dieses Datumswerts
     * 
     * @param {number} hour - 
     * @param {number} minute - 
     * @param {number} second - 
     * @return {ScriptingDateTime} 
     */
    atTime(hour: number, minute: number, second: number): ScriptingDateTime;

    /**
     * Neuer Datumswert aus diesem Datumswert und subtrahiert Jahre vom Datumswert
     * 
     * @param {number} years - 
     * @return {ScriptingDate} 
     */
    minusYears(years: number): ScriptingDate;

    /**
     * Neuer Datumswert aus diesem Datumswert und subtrahiert Wochen vom Datumswert
     * 
     * @param {number} weeks - 
     * @return {ScriptingDate} 
     */
    minusWeeks(weeks: number): ScriptingDate;

    /**
     * Erstellt einen Datum-Zeit-Wert zu Beginn des Tages auf Basis dieses Datumswerts
     * 
     * @return {ScriptingDateTime} 
     */
    atStartOfDay(): ScriptingDateTime;
}

/**
 * Datentyp für Datum-Zeit-Werte
 */
export interface ScriptingDateTime {

    /**
     * Ist dieser Datum-Zeit-Wert zeitlich gleich dem anderen Datum-Zeit-Wert?
     * 
     * @param {ScriptingDateTime} other - The other date-time value
     * @return {boolean} 
     */
    isEqual(other: ScriptingDateTime): boolean;

    /**
     * Liefert das Jahr aus dem Datumswert
     * 
     * @return {number} 
     */
    getYear(): number;

    /**
     * Liefert den Monat (1-12) aus dem Datumswert
     * 
     * @return {number} 
     */
    getMonthValue(): number;

    /**
     * Liefert den Tag des Monats (1-31) aus dem Datumswert
     * 
     * @return {number} 
     */
    getDayOfMonth(): number;

    /**
     * Liefert die Stunde (0-23) aus diesem Datum-Zeit-Werts
     * 
     * @return {number} 
     */
    getHour(): number;

    /**
     * Liefert die Minute (0-59) aus diesem Datum-Zeit-Werts
     * 
     * @return {number} 
     */
    getMinute(): number;

    /**
     * Liefert die Sekunde (0-59) aus diesem Datum-Zeit-Werts
     * 
     * @return {number} 
     */
    getSecond(): number;

    /**
     * Neuer Datum-Zeit-Wert aus diesem Wert und addiert Sekunden
     * 
     * @param {number} seconds - 
     * @return {ScriptingDateTime} 
     */
    plusSeconds(seconds: number): ScriptingDateTime;

    /**
     * Neuer Datum-Zeit-Wert aus diesem Wert und addiert Stunden
     * 
     * @param {number} hours - 
     * @return {ScriptingDateTime} 
     */
    plusHours(hours: number): ScriptingDateTime;

    /**
     * Neuer Datum-Zeit-Wert aus diesem Wert und addiert Minuten
     * 
     * @param {number} minutes - 
     * @return {ScriptingDateTime} 
     */
    plusMinutes(minutes: number): ScriptingDateTime;

    /**
     * Neuer Datum-Zeit-Wert aus diesem Wert und subtrahiert Stunden
     * 
     * @param {number} hours - 
     * @return {ScriptingDateTime} 
     */
    minusHours(hours: number): ScriptingDateTime;

    /**
     * Neuer Datum-Zeit-Wert aus diesem Wert und subtrahiert Minuten
     * 
     * @param {number} minutes - 
     * @return {ScriptingDateTime} 
     */
    minusMinutes(minutes: number): ScriptingDateTime;

    /**
     * Neuer Datum-Zeit-Wert aus diesem Wert und subtrahiert Sekunden
     * 
     * @param {number} seconds - 
     * @return {ScriptingDateTime} 
     */
    minusSeconds(seconds: number): ScriptingDateTime;

    /**
     * Ist dieser Datum-Zeit-Wert zeitlich hinter dem anderen Datum-Zeit-Wert?
     * 
     * @param {ScriptingDateTime} other - The other date-time value
     * @return {boolean} 
     */
    isAfter(other: ScriptingDateTime): boolean;

    /**
     * Ist dieser Datum-Zeit-Wert zeitlich vor dem anderen Datum-Zeit-Wert?
     * 
     * @param {ScriptingDateTime} other - The other date-time value
     * @return {boolean} 
     */
    isBefore(other: ScriptingDateTime): boolean;

    /**
     * Liefert den Wochentag (1-7 = Mo-So) aus dem Datumswert
     * 
     * @return {number} 
     */
    getDayOfWeek(): number;

    /**
     * Liefert den Tag des Jahres (1-365/366) aus dem Datumswert
     * 
     * @return {number} 
     */
    getDayOfYear(): number;

    /**
     * Neuer Datum-Zeit-Wert aus diesem Wert und ersetzt die Stunde (0-23)
     * 
     * @param {number} hour - 
     * @return {ScriptingDateTime} 
     */
    withHour(hour: number): ScriptingDateTime;

    /**
     * Neuer Datum-Zeit-Wert aus diesem Wert und ersetzt die Minute (0-59)
     * 
     * @param {number} minute - 
     * @return {ScriptingDateTime} 
     */
    withMinute(minute: number): ScriptingDateTime;

    /**
     * Neuer Datum-Zeit-Wert aus diesem Wert und ersetzt die Sekunde (0-59)
     * 
     * @param {number} second - 
     * @return {ScriptingDateTime} 
     */
    withSecond(second: number): ScriptingDateTime;

    /**
     * Liefert nur den Datumswert aus diesem Datum-Zeit-Werts
     * 
     * @return {ScriptingDate} 
     */
    toDate(): ScriptingDate;
}

export interface ScriptingOutputStream {
}

/**
 * Zum einfachen Schreiben von Daten im XML-Format
 */
export interface ScriptingXmlWriter {

    /**
     * Schreibt ein Attribut auf das aktuelle Element.
     * 
     * @param {string} name - Attribut-Name
     * @param {string} value - Attribut-Wert
     */
    writeAttribute(name: string, value: string): void;

    /**
     * Beendet das XML-Dokument (schließt noch offene Elemente).
     * 
     */
    closeAllOpenElements(): void;

    /**
     * Schreibt den XML-Prolog (<?xml ...?>).
     * 
     * @param {string} encoding - Encoding, z.B. UTF-8
     * @param {string} version - XML-Version, z.B. 1.0
     */
    writeProlog(encoding: string, version: string): void;

    /**
     * Öffnet ein Element.
     * 
     * @param {string} name - Element-Name
     */
    openElement(name: string): void;

    /**
     * Schließt das aktuelle Element.
     * 
     */
    closeElement(): void;

    /**
     * Schreibt einen XML-Kommentar.
     * 
     * @param {string} comment - Kommentar-Text
     */
    writeComment(comment: string): void;

    /**
     * Schreibt einen CDATA-Block.
     * 
     * @param {string} data - CDATA-Inhalt
     */
    writeCData(data: string): void;

    /**
     * Schreibt eine Zeichenkette (z.B. innerhalb eines XML-Tags).
     * 
     * @param {string} data - Zeichenkette
     */
    writeCharacters(data: string): void;

    /**
     * Schreibt ein leeres (self-closing) Element.
     * 
     * @param {string} name - Element-Name
     */
    writeEmptyElement(name: string): void;

    /**
     * Schließt den Writer und die damit verbundene Datenquelle
     * 
     */
    close(): void;
}

/**
 * HTTP-Client fürs Scripting
 */
export interface SecureHttpClient {

    /**
     * Erstellt einen GET-Request
     * 
     * @return {SecureHttpRequest} GET-Request
     */
    createGetRequest(): SecureHttpRequest;

    /**
     * Erstellt einen PUT-Request
     * 
     * @return {SecureHttpRequest} PUT-Request
     */
    createPutRequest(): SecureHttpRequest;

    /**
     * Erstellt einen POST-Request
     * 
     * @return {SecureHttpRequest} POST-Request
     */
    createPostRequest(): SecureHttpRequest;
}

/**
 * Request vom SecureHttpClient
 */
export interface SecureHttpRequest {

    /**
     * Führt den Request aus
     * 
     * @return {SecureHttpResponse} Response zum Request
     */
    execute(): SecureHttpResponse;

    /**
     * Setzt die URI für den Request
     * 
     * @param {string} uri - URI
     * @return {SecureHttpRequest} Diese Instanz
     */
    uri(uri: string): SecureHttpRequest;

    /**
     * Setzt den Body für den Request
     * 
     * @param {string} body - Request-Body
     * @return {SecureHttpRequest} Diese Instanz
     */
    body(body: string): SecureHttpRequest;

    /**
     * Fügt einen Header zum Request hinzu
     * 
     * @param {string} name - Name des Headers
     * @param {String[]} value - Werte des Headers (optional)
     * @return {SecureHttpRequest} Diese Instanz
     */
    header(name: string, value: String[]): SecureHttpRequest;

    /**
     * Fügt eine URI-Parameter zum Request hinzu
     * 
     * @param {string} name - Name des Parameters
     * @param {object} value - Wert des Parameters
     * @return {SecureHttpRequest} Diese Instanz
     */
    uriParameter(name: string, value: object): SecureHttpRequest;

    /**
     * Setzt den Timeout in Sekunden für den Request
     * 
     * @param {number} timeoutInSeconds - Timeout in Sekunden
     * @return {SecureHttpRequest} Diese Instanz
     */
    timeoutInSeconds(timeoutInSeconds: number): SecureHttpRequest;

    /**
     * Setzt den Content-Type für den Request
     * 
     * @param {string} contentType - Content-Type
     * @return {SecureHttpRequest} Diese Instanz
     */
    contentType(contentType: string): SecureHttpRequest;
}

/**
 * Response auf einen Request vom SecureHttpClient
 */
export interface SecureHttpResponse {

    /**
     * HTTP-Statuscode der Response
     * 
     * @return {number} HTTP-Statuscode
     */
    getHttpStatus(): number;

    /**
     * Liefert den Body aus der Response als Byte-Array
     * 
     * @return {byte[]} Response-Body als Byte-Array
     */
    getBodyAsBytes(): byte[];

    /**
     * Liefert den Wert eines Header als Liste
     * 
     * @param {string} name - Name eines Header
     * @return {string} Wert eines Header oder null, falls dieser nicht vorhanden ist
     */
    getHeaderValue(name: string): string;

    /**
     * Liefert den Body aus der Response
     * 
     * @return {string} Response-Body
     */
    getBody(): string;

    /**
     * Prüft, ob ein Header vorhanden ist
     * 
     * @param {string} name - Name eines Header
     * @return {boolean} Ist ein Header vorhanden?
     */
    hasHeader(name: string): boolean;

    /**
     * Liefert den Wert eines Header als Liste
     * 
     * @param {string} name - Name eines Header
     * @return {Array<string>} Werte eines Header als Liste
     */
    getHeaderValueAsList(name: string): Array<string>;

    /**
     * Liefert den Content-Type vom Body aus der Response
     * 
     * @return {string} Content-Type vom Response-Body
     */
    getContentType(): string;

    /**
     * Liefert die Header vom Response als Name-Wert-Liste
     * 
     * @return {Array<string>} Response-Header als Name-Wert-Liste
     */
    getHeaders(): Array<string>;
}

export const enum SequenceAssignmentMode {
    MANUAL = 'MANUAL',
    AUTOMATIC = 'AUTOMATIC',
    SEMI_AUTOMATIC = 'SEMI_AUTOMATIC',
    FREE = 'FREE'
}

export const enum SequenceType {
    NON_POOLED_SEQUENCES = 'NON_POOLED_SEQUENCES',
    POOLED_SEQUENCES = 'POOLED_SEQUENCES',
    PREFETCHED_SEQUENCES = 'PREFETCHED_SEQUENCES'
}

export interface SequencerConfiguration {

    /**
     * Group of the sequencer configuration (e.g. Document, Account, ...)
     */
    configurationGroup: string;

    /**
     * Is the sequencer active?
     */
    active: boolean;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Unique key to identify the sequencer configuration
     */
    key: string;

    /**
     * Contains details about the sequencer configuration
     */
    configurationDetail: SequencerConfigurationDetail;

    /**
     * Alternative configuration used to generate sequences instead of this configuration
     */
    alternativeConfiguration: ApiObjectReference;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface SequencerConfigurationDetail {

    /**
     * Uniqueness check.
     */
    numberUnique: boolean;

    /**
     * Prefix expression.
     */
    expression: string;

    /**
     * Assignment procedure.
     */
    assignmentMode: SequenceAssignmentMode;

    /**
     * Length.
     */
    length: number;

    /**
     * Padding character.
     */
    padChar: string;

    /**
     * Postfix expression.
     */
    postExpression: string;

    /**
     * Sequence type.
     */
    type: SequenceType;

    /**
     * Initial value.
     */
    initialValue: number;
}

export interface SerialNumberWithQuantityApi {

    /**
     * Quantity.
     */
    quantity: number;

    /**
     * Serial number.
     */
    serialNumber: ArticleSerialNumber;
}

export interface ShelfCommonMapper {
}

export interface ShelfDocument {

    /**
     * Note.
     */
    note: string;

    /**
     * Date of this Entry/Document
     */
    entryDate: ScriptingDate;

    /**
     * Custom data.
     */
    custom: EavShelfdocument;

    /**
     * External identifier.
     */
    externalId: UUID;

    /**
     * description of this document
     */
    description: string;

    /**
     * Deletion status.
     */
    deletionState: ShelfDocumentDeletionState;

    /**
     * Document type.
     */
    type: ShelfDocumentType;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * List of tags
     */
    tags: Array<TagDto>;

    /**
     * Share information.
     */
    shares: Array<ShelfShare>;

    /**
     * Multilingual labels.
     */
    translatableTexts: Array<ShelfTranslatableText>;

    /**
     * Automatic deletion from.
     */
    plannedRemovalDate: ScriptingDate;

    /**
     * file data
     */
    file: ShelfFile;

    /**
     * Alias
     */
    alias: string;

    /**
     * Status.
     */
    state: ShelfDocumentState;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ShelfDocumentAttribution {

    /**
     * Field managed by the UI.
     */
    uiSort: number;

    /**
     * Relation type or purpose.
     */
    purpose: string;

    /**
     * type of the referenced object
     */
    refType: string;

    /**
     * Field managed by the UI.
     */
    uiComment: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Field managed by the UI.
     */
    uiFavorite: boolean;

    /**
     * Should the document be published?
     */
    publish: boolean;

    /**
     * Linked DMS resource identifier.
     */
    shelfResourceId: number;

    /**
     * Available image transformations.
     */
    transformationKeys: Array<string>;

    /**
     * id of the referenced object
     */
    refId: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Main DMS resource link.
     */
    mainAttribution: boolean;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum ShelfDocumentDeletionState {
    NOT_YET = 'NOT_YET',
    PREPARE_DELETE = 'PREPARE_DELETE',
    FILE_DELETED = 'FILE_DELETED',
    MANUALLY_RETAIN = 'MANUALLY_RETAIN'
}

export const enum ShelfDocumentState {
    DRAFT = 'DRAFT',
    FILE_ATTACHED = 'FILE_ATTACHED',
    MISSING = 'MISSING'
}

export interface ShelfDocumentType {

    /**
     * access level for writing
     */
    accessLevelWrite: number;

    /**
     * system presetting
     */
    systemPresetting: boolean;

    /**
     * Is the document type active?
     */
    active: boolean;

    /**
     * label of type
     */
    label: string;

    /**
     * Access level for reading.
     */
    accessLevelRead: number;

    /**
     * storage rule for revisions
     */
    revisionStorageRule: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * duration of storage (years)
     */
    duration: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * access level for deleting
     */
    accessLevelDelete: number;

    /**
     * unique key of type
     */
    key: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ShelfFile {

    /**
     * subFiles for this file
     */
    subFiles: Array<SubFileInfo>;

    /**
     * fileSize
     */
    fileSize: number;

    /**
     * revision number of this file
     */
    revisionNumber: number;

    /**
     * file-extension of this entry
     */
    publicFileExtension: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * file-name (without extension) of this entry
     */
    publicFileName: string;

    /**
     * detected content type
     */
    contentType: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * meta data
     */
    metaDataEntries: Array<ShelfFileMetaData>;

    /**
     * current reference of this file in our storage 
     */
    storageHandle: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ShelfFileMetaData {

    /**
     * Metadata value.
     */
    metaValue: string;

    /**
     * Metadata key.
     */
    metaKey: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ShelfFileUploadSession {
}

export interface ShelfShare {

    /**
     * Publication status.
     */
    publishState: ShelfSharePublishState;

    /**
     * For how many minutes this resource path stays accessible (null means unlimited).
     */
    publicUrlDurationInMinutes: number;

    /**
     * Custom fields.
     */
    custom: EavShelfshare;

    /**
     * URL path segment that gives public access to this resource.
     */
    publicUrlPath: string;

    /**
     * Availability.
     */
    availability: ShelfShareAvailability;

    /**
     * External reference to this share.
     */
    sharedByExternalRef: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Revision
     */
    revision: number;

    /**
     * Multilingual labels.
     */
    translatableTexts: Array<ShelfTranslatableText>;

    /**
     * App identifier.
     */
    appId: UUID;

    /**
     * Number of uses.
     */
    timesUsed: number;

    /**
     * When the public resource was created.
     */
    publicUrlCreatedAt: ScriptingDate;

    /**
     * Revision hash.
     */
    eTag: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum ShelfShareAvailability {
    UNLIMITED = 'UNLIMITED',
    ONE_TIME_USE = 'ONE_TIME_USE'
}

export const enum ShelfSharePublishState {
    SYNCED = 'SYNCED',
    PENDING = 'PENDING',
    DRAFT = 'DRAFT'
}

export interface ShelfTranslatableText {

    /**
     * Meta title.
     */
    metaTitle: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Language.
     */
    languageCode: string;

    /**
     * Alternative text.
     */
    alternativeText: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface Stock {

    /**
     * Stock.
     */
    amount: number;

    /**
     * Serial number.
     */
    serialNumber: ArticleSerialNumber;

    /**
     * Storage bin display name.
     */
    storageBinDisplayName: string;

    /**
     * Storage bin.
     */
    storageBinId: number;

    /**
     * Article.
     */
    articleId: number;
}

export const enum StockJournalFactor {
    NONE = 'NONE',
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT'
}

export interface StockMovementManualApi {

    /**
     * Price unit the purchase price refers to.
     */
    priceUnit: number;

    /**
     * Note.
     */
    note: string;

    /**
     * Quantity.
     */
    quantity: number;

    /**
     * Serial number 2 to book.
     */
    serialNumber2: string;

    /**
     * Serial number 1 to book.
     */
    serialNumber1: string;

    /**
     * Storage bin.
     */
    storageBinId: number;

    /**
     * Article.
     */
    articleId: number;

    /**
     * Storage location (only relevant for receipts).
     */
    storageLocation: string;

    /**
     * Purchase price per price unit (see priceUnit); only relevant for receipts.
     */
    purchasePrice: number;

    /**
     * Expiry date.
     */
    expiryDate: ScriptingDate;

    /**
     * Ignore expiry date on stock booking
     */
    ignoreExpiryDateOnStockBooking: boolean;

    /**
     * Note on the serial number.
     */
    serialNumberNote: string;

    /**
     * Receipt or issue.
     */
    factor: StockJournalFactor;

    /**
     * Storage.
     */
    storageId: number;
}

export interface StockTransferApi {

    /**
     * Target storage.
     */
    targetStorageId: number;

    /**
     * Serial number.
     */
    serialNumberId: number;

    /**
     * Note.
     */
    note: string;

    /**
     * Booking date.
     */
    bookDate: ScriptingDate;

    /**
     * Source storage bin.
     */
    sourceStorageBinId: number;

    /**
     * Ignore expiry date on stock booking
     */
    ignoreExpiryDateOnStockBooking: boolean;

    /**
     * Quantity.
     */
    quantity: number;

    /**
     * Source storage.
     */
    sourceStorageId: number;

    /**
     * Target storage bin.
     */
    targetStorageBinId: number;

    /**
     * Article.
     */
    articleId: number;

    /**
     * Picklist line component, if the booking takes place for it.
     */
    picklistLineComponentId: number;
}

export interface StockTransferResult {

    /**
     * Previous stock of the source storage bin.
     */
    sourceOldStock: number;

    /**
     * Source storage.
     */
    sourceStorage: ApiObjectReference;

    /**
     * Transferred serial number.
     */
    serialNumber: ApiObjectReference;

    /**
     * Target storage bin.
     */
    targetStorageBin: ApiObjectReference;

    /**
     * New stock of the source storage bin.
     */
    sourceNewStock: number;

    /**
     * Target storage.
     */
    targetStorage: ApiObjectReference;

    /**
     * Previous stock of the target storage bin.
     */
    targetOldStock: number;

    /**
     * New stock of the target storage bin.
     */
    targetNewStock: number;

    /**
     * Transferred article.
     */
    article: ApiObjectReference;

    /**
     * Source storage bin.
     */
    sourceStorageBin: ApiObjectReference;
}

export interface StorageBinRef {

    /**
     * Reference to the storage.
     */
    storageRef: ApiObjectReference;

    /**
     * Display color.
     */
    color: string;

    /**
     * Display name.
     */
    displayName: string;

    /**
     * Unique identifier.
     */
    id: number;

    /**
     * Route position.
     */
    routePosition: number;
}

/**
 * Speichert die geschriebenen Daten als String.
 */
export interface StringCollectorOutputStream {

    /**
     * Gibt den bisher gesammelten Inhalt aus
     * 
     * @return {string} 
     */
    getContent(): string;
}

export interface SubFileInfo {

    /**
     * Full-Path
     */
    fullPath: string;

    /**
     * Associated FileEntity.
     */
    shelfFile: ApiObjectReference;

    /**
     * file last modified
     */
    modifiedAt: ScriptingDateTime;

    /**
     * Parent-Path
     */
    parentPath: string;

    /**
     * fileName
     */
    name: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Content type.
     */
    contentType: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface Supplier {

    /**
     * Creation of an outgoing delivery document for a drop shipping supplier order.
     */
    createCustomerDeliveryWhenDropShipping: boolean;

    /**
     * Minimum order value.
     */
    minimumOrderValue: number;

    /**
     * number of supplier
     */
    number: string;

    /**
     * Eligible for inclusion in order proposals.
     */
    permissibleForOrderProposal: boolean;

    /**
     * Billing type, net or gross.
     */
    billingType: AccountBillingType;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * finance account-number of supplier
     */
    accountingNumber: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * reference to the delivery method
     */
    deliveryMethodRef: ApiObjectReference;

    /**
     * Supplier group.
     */
    supplierGroupRef: ApiObjectReference;

    /**
     * Taxable or tax free.
     */
    taxable: boolean;

    /**
     * Should this be dunned?
     */
    dunning: boolean;

    /**
     * Free of freight costs from.
     */
    freeShippingValue: number;

    /**
     * active true/false
     */
    active: boolean;

    /**
     * reference to responsible user
     */
    responsibleUserRef: ApiObjectReference;

    /**
     * suppliers number for us
     */
    ourNumber: string;

    /**
     * reference to the payment term
     */
    paymentTermRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Indicates whether drop shipping is allowed.
     */
    dropShippingAllowed: boolean;

    /**
     * reference to the delivery term
     */
    deliveryTermRef: ApiObjectReference;

    /**
     * country code performance country IsoAlpha3
     */
    performanceCountryCode: string;

    /**
     * reference to the payment method
     */
    paymentMethodRef: ApiObjectReference;

    /**
     * Delivery time in (working) days.
     */
    defaultDeliveryTime: number;

    /**
     * Order block.
     */
    orderBlocked: boolean;

    /**
     * currency code  IsoAlpha3
     */
    currencyCode: string;
}

export interface TagDto {

    /**
     * Tag group.
     */
    tagGroup: ApiCreatableReference;

    /**
     * Color in the management UI.
     */
    editColor: string;

    /**
     * Color for displaying the tag.
     */
    color: string;

    /**
     * Color in the search UI.
     */
    searchColor: string;

    /**
     * Tag label.
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Tag type.
     */
    type: TagType;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum TagType {
    COMMON = 'COMMON',
    ACCOUNT = 'ACCOUNT',
    PRODUCT = 'PRODUCT',
    ASSET = 'ASSET',
    DOCUMENT = 'DOCUMENT',
    OPEN_ITEM = 'OPEN_ITEM',
    CRM_COMMON = 'CRM_COMMON',
    CRM_TASK = 'CRM_TASK',
    CRM_DEAL = 'CRM_DEAL',
    CRM_PROJECT = 'CRM_PROJECT',
    DMS_SHELF_DOCUMENT = 'DMS_SHELF_DOCUMENT'
}

export interface TaxIdForeignCountry {

    /**
     * Tax ID of the company in the associated country
     */
    taxId: string;

    /**
     * ISO 2 Code of the country this tax ID is used for
     */
    countryCode: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum TaxIdVerificationState {
    NOT_YET_VERIFIED = 'NOT_YET_VERIFIED',
    VALID = 'VALID',
    VALID_WITH_INVALID_ADDRESS = 'VALID_WITH_INVALID_ADDRESS',
    INVALID = 'INVALID',
    NOT_NEEDED = 'NOT_NEEDED'
}

export const enum TaxPerformanceLocationType {
    DOMESTIC = 'DOMESTIC',
    EUROPEAN_COMMUNITY = 'EUROPEAN_COMMUNITY',
    INTERNATIONAL = 'INTERNATIONAL'
}

export interface TaxRate {

    /**
     * the rate of this tax-rate
     */
    rate: number;

    /**
     * the country code for this tax-rate
     */
    countryCode: string;

    /**
     * is this tax-rate active (selectable)
     */
    active: boolean;

    /**
     * the date, this entry is valid from
     */
    validFrom: ScriptingDate;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * a type lable, this tax-rate is associated with. this label is used as a selector in the TaxSchema resource
     */
    typeRef: ApiCreatableReference;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum TaxSituationOrigin {
    UNDEFINED = 'UNDEFINED',
    USER_DEFINED = 'USER_DEFINED',
    FROM_CUSTOMER = 'FROM_CUSTOMER',
    FROM_SUPPLIER = 'FROM_SUPPLIER',
    FROM_SALES_AGENT = 'FROM_SALES_AGENT',
    FROM_DELIVERY_ADDRESS = 'FROM_DELIVERY_ADDRESS',
    FROM_DEFAULT_ADDRESS = 'FROM_DEFAULT_ADDRESS',
    FROM_OWN_ADDRESS = 'FROM_OWN_ADDRESS',
    FROM_TAX_ID = 'FROM_TAX_ID'
}

export const enum TaxStateType {
    TAX_FREE = 'TAX_FREE',
    TAX_ABLE = 'TAX_ABLE'
}

export interface TextEnumCreate {

    /**
     * Visible.
     */
    visible: boolean;

    /**
     * Custom data.
     */
    custom: EavTextenumeration;

    /**
     * active
     */
    active: boolean;

    /**
     * Enumeration value.
     */
    label: string;

    /**
     * Text enumeration group.
     */
    groupKey: string;
}

export interface TextEnumGet {

    /**
     * Visible.
     */
    visible: boolean;

    /**
     * Custom data.
     */
    custom: EavTextenumeration;

    /**
     * System presetting.
     */
    systemPresetting: boolean;

    /**
     * active
     */
    active: boolean;

    /**
     * Unique identifier.
     */
    id: number;

    /**
     * Enumeration value.
     */
    label: string;

    /**
     * Text enumeration group.
     */
    groupKey: string;
}

export const enum TextPosition {
    HEADER_TEXT = 'HEADER_TEXT',
    FOOTER_TEXT = 'FOOTER_TEXT'
}

export interface TextTemplate {

    /**
     * Template purpose.
     */
    templateType: TextTemplate$TextTemplateType;

    /**
     * Should the text template content only be resolved when the document is transferred?
     */
    resolveContentInFollowUpDocument: boolean;

    /**
     * Target document types; together with the predecessor document types they define the transitions this template applies to.
     */
    targetDocumentTypes: Array<ApiObjectReference>;

    /**
     * Texts in the offered languages.
     */
    languageSpecificContents: Array<LocalizedTextTemplateContent>;

    /**
     * Predecessor document types; together with the target document types they define the transitions this template applies to.
     */
    sourceDocumentTypes: Array<ApiObjectReference>;

    /**
     * Is a separate DocumentLine created for the text template?
     */
    separateLine: boolean;

    /**
     * Article these templates apply to.
     */
    articleId: number;

    /**
     * When a UI hint is shown.
     */
    uiHintTypes: Array<TextTemplate$UiHintType>;

    /**
     * Is this text template active?
     */
    active: boolean;

    /**
     * Text template label.
     */
    label: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Transfer the generated DocumentTexts when moving to successor documents?
     */
    transferableIntoSubsequentDocuments: boolean;

    /**
     * Account these templates apply to.
     */
    accountId: number;

    /**
     * Sales channel.
     */
    salesChannelRef: ApiObjectReference;

    /**
     * Generated DocumentText position.
     */
    position: TextPosition;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum TextTemplate$TextTemplateType {
    UI_HINT = 'UI_HINT',
    AUTOMATIC = 'AUTOMATIC',
    MANUAL = 'MANUAL'
}

export const enum TextTemplate$UiHintType {
    UI_HINT_MASTER_DATA = 'UI_HINT_MASTER_DATA',
    UI_HINT_DOCUMENT = 'UI_HINT_DOCUMENT'
}

export interface TssSignature {

    /**
     * External reference.
     */
    externalReference: string;

    /**
     * TSS response data.
     */
    responseData: string;

    /**
     * Revision
     */
    revision: number;

    /**
     * Signing status.
     */
    status: TssSignature$TssSignatureStatus;
}

export const enum TssSignature$TssSignatureStatus {
    FINISHED = 'FINISHED',
    ACTIVE = 'ACTIVE',
    CANCELLED = 'CANCELLED',
    ERROR = 'ERROR'
}

export const enum TunnelRestrictionCode {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    E = 'E'
}

export interface UUID {
}

export interface UnitTypeReference {

    /**
     * descriptive name
     */
    name: string;

    /**
     * unit type id
     */
    id: number;

    /**
     * unique abbreviation
     */
    abbreviation: string;
}

/**
 * Details zur Aktualisierung eines Belegs
 */
export interface UpdateDocumentRequest {

    /**
     * Der Beleg
     */
    document: Document;

    /**
     * Zusätzliche Parameter
     */
    parameters: Array<AdditionalParameter>;
}

export interface User {

    /**
     * Is owner user?
     */
    owner: boolean;

    /**
     * last-name
     */
    lastName: string;

    /**
     * Roles.
     */
    roles: Array<ApiObjectReference>;

    /**
     * Referenced customer user identifier (CustomerUserEntity.id from vab-manager).
     */
    referencedCustomerUserId: number;

    /**
     * Groups.
     */
    groups: Array<ApiObjectReference>;

    /**
     * Is the user active?
     */
    active: boolean;

    /**
     * User type
     */
    type: CommonUserType;

    /**
     * App-Identifier
     */
    appIdentifier: UUID;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * is the email verified
     */
    emailVerified: boolean;

    /**
     * first-name
     */
    firstName: string;

    /**
     * email-address
     */
    emailAddress: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * username
     */
    username: string;

    /**
     * Valid to
     */
    validTo: ScriptingDateTime;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum ValueType {
    PERCENT = 'PERCENT',
    FIX = 'FIX'
}

export interface VariantAttribute {

    /**
     * Unique identifier.
     */
    identifier: string;

    /**
     * Is this active?
     */
    active: boolean;

    /**
     * Description.
     */
    description: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Label (multilingual).
     */
    labels: Array<VariantDescription>;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface VariantAttributeListing {

    /**
     * Sales channel.
     */
    salesChannelRef: ApiObjectReference;

    /**
     * Custom fields.
     */
    custom: EavVariantattributelisting;

    /**
     * Variant attribute.
     */
    variantAttributeRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface VariantDescription {

    /**
     * Label.
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Language.
     */
    languageCode: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface VariantSchema {

    /**
     * Eligible values.
     */
    eligibleValueRefs: Array<ApiObjectReference>;

    /**
     * Assigned attributes.
     */
    attributeRefs: Array<ApiObjectReference>;

    /**
     * Is this active?
     */
    active: boolean;

    /**
     * Description.
     */
    description: string;

    /**
     * Label.
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface VariantValue {

    /**
     * Sort order.
     */
    sortOrder: number;

    /**
     * Reference to a unit type.
     */
    unitTypeRef: UnitTypeReference;

    /**
     * Is this active?
     */
    active: boolean;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Abbreviation.
     */
    abbreviation: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Variant attribute.
     */
    attributeRef: ApiObjectReference;

    /**
     * Multilingual labels.
     */
    labels: Array<VariantDescription>;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface VariantValueListing {

    /**
     * Variant attribute value.
     */
    variantValueRef: ApiObjectReference;

    /**
     * Sales channel.
     */
    salesChannelRef: ApiObjectReference;

    /**
     * Custom fields.
     */
    custom: EavVariantvaluelisting;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface VariantValueReference {

    /**
     * Variant attribute.
     */
    variantAttributeRef: ApiObjectReference;

    /**
     * Description.
     */
    description: string;

    /**
     * Identifier
     */
    id: number;

    /**
     * Label.
     */
    label: string;
}

export interface WithDefaults<List<ArticleIdentifier>> {

    /**
     * Default sales channel value.
     */
    defaultValue: object;

    /**
     * Sales channel value.
     */
    value: object;
}

export interface WithDefaults<String> {

    /**
     * Default sales channel value.
     */
    defaultValue: object;

    /**
     * Sales channel value.
     */
    value: object;
}

export interface WorkflowInstanceDetails {

    id: number;

    state: EWorkflowInstanceState;
}

