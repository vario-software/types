import {
    Account, AccountAddress, AccountBankdetail, AccountLoanValue, 
    AccountManufacturer, AccountManufacturerDescription, AccountPerson, 
    AccountRelation, AdditionalParameter, ApiCreatableReference, 
    ApiObjectReference, Article, Article$Metric, 
    ArticleAvailabilityDetermination, ArticleIdentifier, ArticleListing, 
    ArticlePrintLabelSettings, ArticleSerialNumber, ArticleStorage, 
    ArticleSupplier, BulkTransferRequestApi, BulkTransferResult, Contact, 
    CountryReference, CreateNewDocumentRequest, CrmActivity, CrmActivityType, 
    CrmChecklistItem, CrmDeal, CrmDealTopic, CrmObjectRef, CrmParticipant, 
    CrmPriority, CrmProject, CrmReference, CrmReminder, CrmState, CrmSubType, 
    CrmTask, CrmTaskParticipant, CrmTypedDocumentRef, CrmTypedDocumentRefList, 
    Customer, DealNotificationEventConfig, DeliveryMethod, DeliveryTerm, 
    Document, DocumentAdditionalInfo, 
    DocumentAdditionalInfo$IncomingGoodsTarget, 
    DocumentAdditionalInfo$IncomingGoodsTargetOfLine, 
    DocumentAdditionalInfo$OrderIntoPickingConvertResult, 
    DocumentAdditionalInfo$PrintedTranslatedField, DocumentAddress, 
    DocumentContractDetail, DocumentFabricationDetail, DocumentFinanceBooking, 
    DocumentLine, DocumentLineBooking, DocumentLineCommission, 
    DocumentLineComponent, DocumentLineComponentFabricationDetail, 
    DocumentLineFabricationBookedComponent, DocumentLineFabricationDetail, 
    DocumentLineFabricationDetailSerialNumber, DocumentLinePosDetail, 
    DocumentLineRef, DocumentPosDetail, DocumentPosPayment, 
    DocumentPriceModifier, DocumentRef, DocumentShippingCost, DocumentTax, 
    DocumentText, DocumentTransferToStateRequest, 
    DocumentTransferToTypeRequest, DocumentType, DocumentTypeFollowUp, 
    DocumentTypeLabel, DocumentTypeState, ECrmPriorityType, 
    ECrmSpecialDocumentRefType, ECrmType, EScriptingAuthenticationType, 
    EShelfDocumentDeletionState, FabricationComponentForProduction, 
    FabricationDefectiveRequest, FabricationProduceRequest, 
    FabricationRemainingComponent, FabricationRevertRequest, 
    FabricationSerialNumber, Group, PaymentMethod, PaymentTerm, PaymentTermRef, 
    PickTrolley, PickTrolleyBox, Picklist, PicklistLine, PicklistLineBooking, 
    PicklistLineComponent, PicklistTemplate, PicklistTemplate$DateRange, 
    PicklistTemplate$OrderSelectionOptions, 
    PicklistTemplate$PicklistCreationOptions, 
    PicklistTemplate$PicklistProcessingOptions, 
    PicklistTemplate$PicklistScript, PriceSelectionCriteria, Product, 
    ProductDiscount, ProductGroup, ProductMainGroup, ProductPrice, 
    RequestDocument, RequestDocumentLine, RequestDocumentLineBooking, 
    RequestDocumentLineCommission, RequestDocumentLineFabricationDetail, 
    RequestDocumentPriceModifier, RequestDocumentText, RevenueCalculation, 
    SalesAgent, Scenario, ScenarioActualValue, ScenarioDimension, 
    ScenarioDimensionValue, ScriptOutputRequest, ScriptingDate, 
    ScriptingDateTime, SecureHttpClient, SequencerConfiguration, 
    SequencerConfigurationDetail, SerialNumberWithQuantityApi, ShelfDocument, 
    ShelfDocumentAttribution, ShelfDocumentType, ShelfFile, ShelfFileMetaData, 
    ShelfShare, ShelfTranslatableText, Stock, StockMovementManualApi, 
    StockTransferApi, StockTransferResult, StorageBinRef, SubFileInfo, 
    Supplier, TagDto, TaxIdForeignCountry, TextEnumCreate, TextEnumGet, 
    TssSignature, UnitTypeReference, UpdateDocumentRequest, User, 
    VariantAttribute, VariantAttributeListing, VariantDescription, 
    VariantSchema, VariantValue, VariantValueListing
} from "./types"

/**
 * Service zur Verarbeitung von Accounts
 */
export interface AccountScriptingService {

    /**
     * Aktiviert ein DTO
     * 
     * @param {number} idToActivate - ID vom zu aktivierenden DTO
     * @return {Account} Das aktivierte DTO
     */
    activate(idToActivate: number): Account;

    /**
     * Persistiert ein DTO
     * 
     * @param {Account} toCreate - Das zu persistierende DTO
     * @return {Account} Das persistierte DTO
     */
    create(toCreate: Account): Account;

    /**
     * Erstellt eine Adresse
     * 
     * @param {number} accountId - ID eines Accounts
     * @param {AccountAddress} address - Die zu erstellende Adresse
     * @return {AccountAddress} Die erstellte Adresse
     */
    createAddress(accountId: number, address: AccountAddress): AccountAddress;

    /**
     * Erstellt ein Bankdetail
     * 
     * @param {number} accountId - ID des Accounts
     * @param {AccountBankdetail} bankdetail - anzulegendes Bankdetails
     * @return {AccountBankdetail} erstelltes Bankdetail
     */
    createBankdetail(accountId: number, bankdetail: AccountBankdetail): AccountBankdetail;

    /**
     * Erstellt einen Ansprechpartner
     * 
     * @param {number} accountId - ID eines Accounts
     * @param {AccountPerson} person - Der zu erstellende Ansprechpartner
     * @return {AccountPerson} Der erstellte Ansprechpartner
     */
    createPerson(accountId: number, person: AccountPerson): AccountPerson;

    /**
     * Deaktiviert ein DTO
     * 
     * @param {number} idToDeactivate - ID vom zu deaktivierenden DTO
     * @return {Account} Das deaktivierte DTO
     */
    deactivate(idToDeactivate: number): Account;

    /**
     * Löscht eine Adresse
     * 
     * @param {number} accountId - ID eines Accounts
     * @param {number} addressId - ID einer Adresse
     */
    deleteAddress(accountId: number, addressId: number): void;

    /**
     * Löscht ein Bankdetail
     * 
     * @param {number} accountId - ID des Accounts
     * @param {number} bankdetailId - ID des Bankdetails
     */
    deleteBankdetail(accountId: number, bankdetailId: number): void;

    /**
     * Löscht eine Entity
     * 
     * @param {number} id - ID der zu löschenden Entity
     */
    deleteById(id: number): void;

    /**
     * Löscht einen Ansprechpartner
     * 
     * @param {number} accountId - ID eines Accounts
     * @param {number} personId - ID eines Ansprechpartners
     */
    deletePerson(accountId: number, personId: number): void;

    /**
     * Liest eine Adresse
     * 
     * @param {number} accountId - ID eines Accounts
     * @param {number} addressId - ID einer Adresse
     * @return {AccountAddress} Die gelesene Adresse
     */
    getAddress(accountId: number, addressId: number): AccountAddress;

    /**
     * Liefert die Adressen eines Accounts (sortiert)
     * 
     * @param {number} accountId - ID eines Accounts
     * @return {Array<AccountAddress>} Sortierte Liste der Adressen
     */
    getAddresses(accountId: number): Array<AccountAddress>;

    /**
     * Liest ein Bankdetail
     * 
     * @param {number} accountId - ID des Accounts
     * @param {number} bankdetailId - ID eines Bankdetails
     * @return {AccountBankdetail} Das geforderte Bankdetail
     */
    getBankdetail(accountId: number, bankdetailId: number): AccountBankdetail;

    /**
     * Liefert die Bankdetails eines Accounts
     * 
     * @param {number} accountId - ID des Accounts
     * @return {Array<AccountBankdetail>} Liste der Bankdetails
     */
    getBankdetails(accountId: number): Array<AccountBankdetail>;

    /**
     * Erstellt eine neue DTO-Instanz
     * 
     * @return {Account} Die neue DTO-Instanz
     */
    getNewDto(): Account;

    /**
     * Liest einen Ansprechpartner
     * 
     * @param {number} accountId - ID eines Accounts
     * @param {number} personId - ID eines Ansprechpartners
     * @return {AccountPerson} Der gelesene Ansprechpartner
     */
    getPerson(accountId: number, personId: number): AccountPerson;

    /**
     * Liefert die Ansprechpartner eines Accounts (sortiert)
     * 
     * @param {number} accountId - ID eines Accounts
     * @return {Array<AccountPerson>} Sortierte Liste der Ansprechpartner
     */
    getPersons(accountId: number): Array<AccountPerson>;

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<Account>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<Account>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden DTO
     * @return {Account} Das gelesene DTO
     */
    readById(id: number): Account;

    /**
     * Schreibt eine Benachrichtigung auf Basis des Accounts
     * 
     * @param {number} accountId - 
     * @param {ScriptOutputRequest} outputRequest - 
     */
    sendNotification(accountId: number, outputRequest: ScriptOutputRequest): void;

    /**
     * Persistiert eine DTO
     * 
     * @param {Account} toStore - Das zu persistierende DTO
     * @return {Account} Das persistierte DTO
     */
    store(toStore: Account): Account;

    /**
     * Aktualisiert ein persistiertes DTO
     * 
     * @param {Account} toUpdate - Die zu aktualisierende Entity
     * @return {Account} Das aktualisierte DTO
     */
    update(toUpdate: Account): Account;

    /**
     * Aktualisiert eine Adresse
     * 
     * @param {number} accountId - ID eines Accounts
     * @param {AccountAddress} address - Die zu aktualisierende Adresse
     * @return {AccountAddress} Die aktualisierte Adresse
     */
    updateAddress(accountId: number, address: AccountAddress): AccountAddress;

    /**
     * Aktualisiert ein Bankdetail
     * 
     * @param {number} accountId - ID eines Accounts
     * @param {AccountBankdetail} bankdetail - zu aktualisierendes Bankdetail
     * @return {AccountBankdetail} aktualisiertes Bankdetail
     */
    updateBankdetail(accountId: number, bankdetail: AccountBankdetail): AccountBankdetail;

    /**
     * Aktualisiert einen Ansprechpartner
     * 
     * @param {number} accountId - ID eines Accounts
     * @param {AccountPerson} person - Der zu aktualisierende Ansprechpartner
     * @return {AccountPerson} Der aktualisierte Ansprechpartner
     */
    updatePerson(accountId: number, person: AccountPerson): AccountPerson;
}

/**
 * Service zur Verarbeitung von Artikel-Listings im Skripten
 */
export interface ArticleListingScriptingService {

    /**
     * Erstellt ein Listing
     * 
     * @param {number} articleId - ID des Artikels
     * @param {ArticleListing} articleListing - Zu erstellendes Listing
     * @param {string} languageCode - Zu verwendende Sprache
     * @return {ArticleListing} Das erstellte Listing
     */
    create(articleId: number, articleListing: ArticleListing, languageCode: string): ArticleListing;

    /**
     * Löscht eine Entity
     * 
     * @param {number} id - ID der zu löschenden Entity
     */
    deleteById(id: number): void;

    /**
     * Erstellt eine neue ArticleListing-Instanz
     * 
     * @return {ArticleListing} Die neue ArticleListing-Instanz
     */
    getNewDto(): ArticleListing;

    /**
     * Liest alle Listings zu einem Artikel mit Texten zur Sprache languageCode
     * 
     * @param {number} articleId - ID des Artikels
     * @param {string} languageCode - Zu verwendende Sprache
     * @return {Array<ArticleListing>} Liste der Listings
     */
    readAllByArticleId(articleId: number, languageCode: string): Array<ArticleListing>;

    /**
     * Liest alle Listings zu einem Artikel
     * 
     * @param {number} articleId - ID des Artikels
     * @return {Array<ArticleListing>} Liste der Listings
     */
    readAllByArticleId(articleId: number): Array<ArticleListing>;

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<ArticleListing>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<ArticleListing>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden DTO
     * @return {ArticleListing} Das gelesene DTO
     */
    readById(id: number): ArticleListing;

    /**
     * Liest ein Artikel-Listing mit Texten zur Sprache languageCode
     * 
     * @param {number} listingId - ID des zu lesenden Listings
     * @param {string} languageCode - Zu verwendende Sprache
     * @return {ArticleListing} Das gelesene Artikel-Listing
     */
    readById(listingId: number, languageCode: string): ArticleListing;

    /**
     * Akutalisiert ein Listing
     * 
     * @param {number} listingId - ID des Listings
     * @param {ArticleListing} articleListing - Zu aktualisierendes Listing
     * @param {string} languageCode - Zu verwendende Sprache
     * @return {ArticleListing} Das aktualisierte Listing
     */
    update(listingId: number, articleListing: ArticleListing, languageCode: string): ArticleListing;
}

/**
 * Service zur Verarbeitung von Artikeln im Skripten
 */
export interface ArticleScriptingService {

    /**
     * Aktiviert ein DTO
     * 
     * @param {number} idToActivate - ID vom zu aktivierenden DTO
     * @return {Article} Das aktivierte DTO
     */
    activate(idToActivate: number): Article;

    /**
     * Fügt Informationen zum Druck Etiketten zu einem Artikel zu einem Etikettendrucklauf hinzu
     * 
     * @param {string} batchIdentifier - ID des Etikettendrucklaufs
     * @param {number} articleId - ID des zu druckenden Artikels
     * @param {number} articleSerialNumberId - ID der zu druckenden Seriennummer
     * @param {number} labelCount - Anzahl der zu druckenden Etiketten
     */
    addLabelToPrintBatch(batchIdentifier: string, articleId: number, articleSerialNumberId: number, labelCount: number): void;

    /**
     * Fügt Informationen zum Druck Etiketten zu einem Artikel zu einem Etikettendrucklauf hinzu
     * 
     * @param {string} batchIdentifier - ID des Etikettendrucklaufs
     * @param {number} articleId - ID des zu druckenden Artikels
     */
    addLabelToPrintBatch(batchIdentifier: string, articleId: number): void;

    /**
     * Fügt Informationen zum Druck Etiketten zu einem Artikel zu einem Etikettendrucklauf hinzu
     * 
     * @param {string} batchIdentifier - ID des Etikettendrucklaufs
     * @param {number} articleId - ID des zu druckenden Artikels
     * @param {number} labelCount - Anzahl der zu druckenden Etiketten
     */
    addLabelToPrintBatch(batchIdentifier: string, articleId: number, labelCount: number): void;

    /**
     * Persistiert einen Artikel. Die Texte werden zur Sprache {@code languageCode} gespeichert
     * 
     * @param {Article} toCreate - Der zu persistierende Artikel
     * @param {string} languageCode - 
     * @return {Article} Der persistierte Artikel
     */
    create(toCreate: Article, languageCode: string): Article;

    /**
     * Persistiert einen Artikel. Die Texte werden zur Sprache der eigenen Adresse gespeichert
     * 
     * @param {Article} toCreate - Der zu persistierende Artikel
     * @return {Article} Der persistierte Artikel
     */
    create(toCreate: Article): Article;

    /**
     * Deaktiviert ein DTO
     * 
     * @param {number} idToDeactivate - ID vom zu deaktivierenden DTO
     * @return {Article} Das deaktivierte DTO
     */
    deactivate(idToDeactivate: number): Article;

    /**
     * Löscht einen Artikel
     * 
     * @param {number} articleId - ID des zu löschenden Artikels
     */
    deleteById(articleId: number): void;

    /**
     * Löscht ein Listing zu einem Artikel
     * 
     * @param {number} articleId - ID des Artikels, zu dem ein Listing gelöscht werden soll
     * @param {number} listingId - ID des Listings, welches gelöscht werden soll
     */
    deleteListingById(articleId: number, listingId: number): void;

    /**
     * Führt einen Etikettendrucklauf aus
     * 
     * @param {string} batchIdentifier - ID des Etikettendrucklaufs
     */
    executeLabelPrintBatch(batchIdentifier: string): void;

    /**
     * Führt einen Etikettendrucklauf aus
     * 
     * @param {string} batchIdentifier - ID des Etikettendrucklaufs
     * @param {string} reportGroupIdentifier - Name einer Etiketten-Report-Gruppe
     */
    executeLabelPrintBatch(batchIdentifier: string, reportGroupIdentifier: string): void;

    /**
     * Liefert die Einkaufsrabatte zu einem Artikel
     * 
     * @param {number} articleId - ID eines Artikels
     * @return {Array<ProductPrice>} Einkaufsrabatte zu einem Artikel
     */
    getArticlePurchaseDiscounts(articleId: number): Array<ProductPrice>;

    /**
     * Liefert die Einkaufspreise zu einem Artikel
     * 
     * @param {number} articleId - ID eines Artikels
     * @return {Array<ProductPrice>} Einkaufspreise zu einem Artikel
     */
    getArticlePurchasePrices(articleId: number): Array<ProductPrice>;

    /**
     * Liefert die Verkaufsrabatte zu einem Artikel
     * 
     * @param {number} articleId - ID eines Artikels
     * @return {Array<ProductPrice>} Verkaufsrabatte zu einem Artikel
     */
    getArticleSalesDiscounts(articleId: number): Array<ProductPrice>;

    /**
     * Liefert die Verkaufspreise zu einem Artikel
     * 
     * @param {number} articleId - ID eines Artikels
     * @return {Array<ProductPrice>} Verkaufspreise zu einem Artikel
     */
    getArticleSalesPrices(articleId: number): Array<ProductPrice>;

    /**
     * Erstellt eine neue Article-Instanz
     * 
     * @return {Article} Die neue Article-Instanz
     */
    getNewDto(): Article;

    /**
     * Generiert die ID für einen neuen Etikettendrucklauf
     * 
     * @return {string} ID eines neuen Etikettendrucklaufs
     */
    newLabelPrintBatchIdentifier(): string;

    /**
     * Liest einen Artikel mit Texten zur Sprache der eigenen Adresse
     * 
     * @param {number} id - ID vom zu lesenden Artikel
     * @return {Article} Der gelesene Artikel
     */
    readById(id: number): Article;

    /**
     * Liest einen Artikel mit Texten zur Sprache languageCode
     * 
     * @param {number} id - ID vom zu lesenden Artikel
     * @param {string} languageCode - Zu verwendende Sprache
     * @return {Article} Der gelesene Artikel
     */
    readById(id: number, languageCode: string): Article;

    /**
     * Liest einen Artikel über die Artikelnummer mit Texten zur Sprache der eigenen Adresse
     * 
     * @param {string} articleNumber - Eine Artikelnummer
     * @return {Article} Der gelesene Artikel
     */
    readByNumber(articleNumber: string): Article;

    /**
     * Liest einen Artikel über die Artikelnummer mit Texten zur Sprache {@code languageCode}
     * 
     * @param {string} articleNumber - Eine Artikelnummer
     * @param {string} languageCode - Zu verwendende Sprache
     * @return {Article} Der gelesene Artikel
     */
    readByNumber(articleNumber: string, languageCode: string): Article;

    /**
     * Persistiert einen Artikel. Die Texte werden zur Sprache {@code languageCode} gespeichert
     * 
     * @param {Article} toStore - Der zu persistierende Artikel
     * @param {string} languageCode - 
     * @return {Article} Der persistierte Artikel
     */
    store(toStore: Article, languageCode: string): Article;

    /**
     * Persistiert einen Artikel. Die Texte werden zur Sprache der eigenen Adresse gespeichert
     * 
     * @param {Article} toStore - Der zu persistierende Artikel
     * @return {Article} Der persistierte Artikel
     */
    store(toStore: Article): Article;

    /**
     * Persistiert einen Artikel. Die Texte werden zur Sprache {@code languageCode} gespeichert
     * 
     * @param {Article} toUpdate - Der zu persistierende Artikel
     * @return {Article} Der aktualisiert Artikel
     */
    update(toUpdate: Article): Article;

    /**
     * Aktualisiert einen Artikel. Die Texte werden zur Sprache {@code languageCode} gespeichert
     * 
     * @param {Article} toUpdate - Der zu persistierende Artikel
     * @param {string} languageCode - 
     * @return {Article} Der aktualisiert Artikel
     */
    update(toUpdate: Article, languageCode: string): Article;
}

/**
 * Service zur Verarbeitung von Artikel-Lager-Beziehungen im Skripten
 */
export interface ArticleStorageScriptingService {

    /**
     * Persistiert ein DTO
     * 
     * @param {ArticleStorage} toCreate - Das zu persistierende DTO
     * @return {ArticleStorage} Das persistierte DTO
     */
    create(toCreate: ArticleStorage): ArticleStorage;

    /**
     * Löscht eine Entity
     * 
     * @param {number} id - ID der zu löschenden Entity
     */
    deleteById(id: number): void;

    /**
     * Erstellt eine neue DTO-Instanz
     * 
     * @return {ArticleStorage} Die neue DTO-Instanz
     */
    getNewDto(): ArticleStorage;

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<ArticleStorage>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<ArticleStorage>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden DTO
     * @return {ArticleStorage} Das gelesene DTO
     */
    readById(id: number): ArticleStorage;

    /**
     * Persistiert eine DTO
     * 
     * @param {ArticleStorage} toStore - Das zu persistierende DTO
     * @return {ArticleStorage} Das persistierte DTO
     */
    store(toStore: ArticleStorage): ArticleStorage;

    /**
     * Aktualisiert ein persistiertes DTO
     * 
     * @param {ArticleStorage} toUpdate - Die zu aktualisierende Entity
     * @return {ArticleStorage} Das aktualisierte DTO
     */
    update(toUpdate: ArticleStorage): ArticleStorage;
}

/**
 * Service zur Verarbeitung von Artikel-Lieferantenbeziehungen im Skripten
 */
export interface ArticleSupplierScriptingService {

    /**
     * Aktiviert ein DTO
     * 
     * @param {number} idToActivate - ID vom zu aktivierenden DTO
     * @return {ArticleSupplier} Das aktivierte DTO
     */
    activate(idToActivate: number): ArticleSupplier;

    /**
     * Persistiert ein DTO
     * 
     * @param {ArticleSupplier} toCreate - Das zu persistierende DTO
     * @return {ArticleSupplier} Das persistierte DTO
     */
    create(toCreate: ArticleSupplier): ArticleSupplier;

    /**
     * Deaktiviert ein DTO
     * 
     * @param {number} idToDeactivate - ID vom zu deaktivierenden DTO
     * @return {ArticleSupplier} Das deaktivierte DTO
     */
    deactivate(idToDeactivate: number): ArticleSupplier;

    /**
     * Löscht eine Entity
     * 
     * @param {number} id - ID der zu löschenden Entity
     */
    deleteById(id: number): void;

    /**
     * Erstellt eine neue DTO-Instanz
     * 
     * @return {ArticleSupplier} Die neue DTO-Instanz
     */
    getNewDto(): ArticleSupplier;

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<ArticleSupplier>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<ArticleSupplier>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden DTO
     * @return {ArticleSupplier} Das gelesene DTO
     */
    readById(id: number): ArticleSupplier;

    /**
     * Persistiert eine DTO
     * 
     * @param {ArticleSupplier} toStore - Das zu persistierende DTO
     * @return {ArticleSupplier} Das persistierte DTO
     */
    store(toStore: ArticleSupplier): ArticleSupplier;

    /**
     * Aktualisiert ein persistiertes DTO
     * 
     * @param {ArticleSupplier} toUpdate - Die zu aktualisierende Entity
     * @return {ArticleSupplier} Das aktualisierte DTO
     */
    update(toUpdate: ArticleSupplier): ArticleSupplier;
}

/**
 * Service zur Verarbeitung von CRM-Aktivitäten
 */
export interface CrmActivityScriptingService {

    /**
     * Persistiert ein DTO
     * 
     * @param {CrmActivity} toCreate - Das zu persistierende DTO
     * @return {CrmActivity} Das persistierte DTO
     */
    create(toCreate: CrmActivity): CrmActivity;

    /**
     * Erstellte eine neue Instanz von CrmObjectRef
     * 
     * @return {CrmObjectRef} Die erstellte Instanz
     */
    createCrmObjectRef(): CrmObjectRef;

    /**
     * Löscht eine Entity
     * 
     * @param {number} id - ID der zu löschenden Entity
     */
    deleteById(id: number): void;

    /**
     * Findet eine Aktivitätsart über ihre ID
     * 
     * @param {number} typeId - ID einer Aktivitätsart
     * @return {CrmActivityType} Die gefundene Aktivitätsart
     */
    findTypeById(typeId: number): CrmActivityType;

    /**
     * Findet eine Aktivitätsart über ihr Label
     * 
     * @param {string} typeLabel - Label einer Aktivitätsart
     * @return {CrmActivityType} Die gefundene Aktivitätsart
     */
    findTypeByLabel(typeLabel: string): CrmActivityType;

    /**
     * Erstellt eine neue DTO-Instanz
     * 
     * @return {CrmActivity} Die neue DTO-Instanz
     */
    getNewDto(): CrmActivity;

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<CrmActivity>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<CrmActivity>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden DTO
     * @return {CrmActivity} Das gelesene DTO
     */
    readById(id: number): CrmActivity;

    /**
     * Persistiert eine DTO
     * 
     * @param {CrmActivity} toStore - Das zu persistierende DTO
     * @return {CrmActivity} Das persistierte DTO
     */
    store(toStore: CrmActivity): CrmActivity;

    /**
     * Aktualisiert ein persistiertes DTO
     * 
     * @param {CrmActivity} toUpdate - Die zu aktualisierende Entity
     * @return {CrmActivity} Das aktualisierte DTO
     */
    update(toUpdate: CrmActivity): CrmActivity;
}

/**
 * Service zur Verarbeitung von Deals
 */
export interface CrmDealScriptingService {

    /**
     * Persistiert ein DTO
     * 
     * @param {CrmDeal} toCreate - Das zu persistierende DTO
     * @return {CrmDeal} Das persistierte DTO
     */
    create(toCreate: CrmDeal): CrmDeal;

    /**
     * Erstellte eine neue Instanz von CrmObjectRef
     * 
     * @return {CrmObjectRef} Die erstellte Instanz
     */
    createCrmObjectRef(): CrmObjectRef;

    /**
     * Erstellt ein DTO über eine Vorlage
     * 
     * @param {string} templateName - Name einer Vorlage
     * @return {CrmDeal} Das erstellte DTO
     */
    createNewDtoByTemplate(templateName: string): CrmDeal;

    /**
     * Erstellt ein DTO über eine Vorlage
     * 
     * @param {number} templateId - ID einer Vorlage
     * @return {CrmDeal} Das erstellte DTO, falls die Vorlage existiert. Sonst NULL
     */
    createNewDtoByTemplateId(templateId: number): CrmDeal;

    /**
     * Gewinnt einen Deal ab. Der Deal wird positiv abgeschlossen
     * 
     * @param {number} dealId - ID eines Deals
     * @param {number} positiveClosingReasonId - ID eines positiven Deal-Abschlussgrunds
     * @return {CrmDeal} Der gewonnene Deal
     */
    dealWon(dealId: number, positiveClosingReasonId: number): CrmDeal;

    /**
     * Löscht eine Entity
     * 
     * @param {number} id - ID der zu löschenden Entity
     */
    deleteById(id: number): void;

    /**
     * Findet den End-Status
     * 
     * @param {number} typeId - ID eines CRM-Typs
     * @return {CrmState} Der End-Status
     */
    findFinalState(typeId: number): CrmState;

    /**
     * Findet eine CRM-Priorität über die ID
     * 
     * @param {number} priorityId - ID der gesuchten Priorität
     * @return {CrmPriority} Die gefundene Priorität
     */
    findPriorityById(priorityId: number): CrmPriority;

    /**
     * Findet eine CRM-Priorität über ihr Label
     * 
     * @param {string} priorityLabel - Label der gesuchten Priorität
     * @return {CrmPriority} Die gefundene Priorität
     */
    findPriorityByLabel(priorityLabel: string): CrmPriority;

    /**
     * Findet eine CRM-Priorität über den Priorität-Typ
     * 
     * @param {ECrmPriorityType} priorityType - Typ der gesuchten Priorität
     * @return {CrmPriority} Die gefundene Priorität
     */
    findPriorityByType(priorityType: ECrmPriorityType): CrmPriority;

    /**
     * Findet den Start-Status
     * 
     * @param {number} typeId - ID eines CRM-Typs
     * @return {CrmState} Der Start-Status
     */
    findStartState(typeId: number): CrmState;

    /**
     * Findet einen CRM-Status über die ID
     * 
     * @param {number} stateId - ID vom gesuchten Status
     * @return {CrmState} Der gefundene Status
     */
    findStateById(stateId: number): CrmState;

    /**
     * Findet einen CRM-Status über sein Label
     * 
     * @param {string} stateLabel - Label vom gesuchten Status
     * @param {number} typeId - ID des CRM-Sub-Typs
     * @return {CrmState} Der gefundene Status
     */
    findStateByLabel(stateLabel: string, typeId: number): CrmState;

    /**
     * Findet ein Deal-Thema über seine ID
     * 
     * @param {number} topicId - ID des gesuchten Deal-Themas
     * @return {CrmDealTopic} Das gefundene Deal-Thema
     */
    findTopicById(topicId: number): CrmDealTopic;

    /**
     * Findet ein Deal-Thema über sein Label
     * 
     * @param {string} label - Label des gesuchten Deal-Themas
     * @return {CrmDealTopic} Das gefundene Deal-Thema
     */
    findTopicByLabel(label: string): CrmDealTopic;

    /**
     * Findet einen CRM-Typ über die ID
     * 
     * @param {number} typeId - ID vom gesuchten Typ
     * @return {CrmSubType} Der gefundene Typ
     */
    findTypeById(typeId: number): CrmSubType;

    /**
     * Findet einen CRM-Typ über sein Label
     * 
     * @param {string} typeLabel - Label vom gesuchten Typ
     * @return {CrmSubType} Der gefundene Typ
     */
    findTypeByLabel(typeLabel: string): CrmSubType;

    /**
     * Erstellt eine neue DTO-Instanz
     * 
     * @return {CrmDeal} Die neue DTO-Instanz
     */
    getNewDto(): CrmDeal;

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<CrmDeal>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<CrmDeal>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden DTO
     * @return {CrmDeal} Das gelesene DTO
     */
    readById(id: number): CrmDeal;

    /**
     * erzeugt eine Ausgabe mit dem Benachrichtgungs-Modul für Deals
     * 
     * @param {number} dealId - ID eines Deals
     * @param {ScriptOutputRequest} outputRequest - der Output Request
     * @param {DealNotificationEventConfig} eventConfig - Reason für die Notification
     */
    sendNotification(dealId: number, outputRequest: ScriptOutputRequest, eventConfig: DealNotificationEventConfig): void;

    /**
     * Persistiert eine DTO
     * 
     * @param {CrmDeal} toStore - Das zu persistierende DTO
     * @return {CrmDeal} Das persistierte DTO
     */
    store(toStore: CrmDeal): CrmDeal;

    /**
     * Aktualisiert ein persistiertes DTO
     * 
     * @param {CrmDeal} toUpdate - Die zu aktualisierende Entity
     * @return {CrmDeal} Das aktualisierte DTO
     */
    update(toUpdate: CrmDeal): CrmDeal;
}

/**
 * Verwaltung von CRM-Belegreferenzen
 */
export interface CrmDocumentRefScriptingService {

    /**
     * Erstellt eine CRM-Belegreferenz mit Referenztyp gleich NONE
     * 
     * @param {number} crmId - ID eines CRM-Objekts
     * @param {ECrmType} crmType - Typ eines CRM-Objekts
     * @param {number} documentId - ID eines Belegs
     */
    addDocumentRef(crmId: number, crmType: ECrmType, documentId: number): void;

    /**
     * Erstellt eine CRM-Belegreferenz
     * 
     * @param {number} crmId - ID eines CRM-Objekts
     * @param {ECrmType} crmType - Typ eines CRM-Objekts
     * @param {number} documentId - ID eines Belegs
     * @param {ECrmSpecialDocumentRefType} specialRefType - Referenztyp
     */
    addDocumentRef(crmId: number, crmType: ECrmType, documentId: number, specialRefType: ECrmSpecialDocumentRefType): void;

    /**
     * Liefert CRM-Belegreferenzen zu einem Beleg
     * 
     * @param {number} documentId - ID eines Belegs
     * @return {CrmTypedDocumentRefList} Liste von CRM-Belegreferenzen
     */
    readAllByDocumentId(documentId: number): CrmTypedDocumentRefList;
}

/**
 * Service zur Verarbeitung von Projekten
 */
export interface CrmProjectScriptingService {

    /**
     * Persistiert ein DTO
     * 
     * @param {CrmProject} toCreate - Das zu persistierende DTO
     * @return {CrmProject} Das persistierte DTO
     */
    create(toCreate: CrmProject): CrmProject;

    /**
     * Erstellte eine neue Instanz von CrmObjectRef
     * 
     * @return {CrmObjectRef} Die erstellte Instanz
     */
    createCrmObjectRef(): CrmObjectRef;

    /**
     * Erstellt ein DTO über eine Vorlage
     * 
     * @param {string} templateName - Name einer Vorlage
     * @return {CrmProject} Das erstellte DTO
     */
    createNewDtoByTemplate(templateName: string): CrmProject;

    /**
     * Erstellt ein DTO über eine Vorlage
     * 
     * @param {number} templateId - ID einer Vorlage
     * @return {CrmProject} Das erstellte DTO, falls die Vorlage existiert. Sonst NULL
     */
    createNewDtoByTemplateId(templateId: number): CrmProject;

    /**
     * Löscht eine Entity
     * 
     * @param {number} id - ID der zu löschenden Entity
     */
    deleteById(id: number): void;

    /**
     * Findet den End-Status
     * 
     * @param {number} typeId - ID eines CRM-Typs
     * @return {CrmState} Der End-Status
     */
    findFinalState(typeId: number): CrmState;

    /**
     * Findet eine CRM-Priorität über die ID
     * 
     * @param {number} priorityId - ID der gesuchten Priorität
     * @return {CrmPriority} Die gefundene Priorität
     */
    findPriorityById(priorityId: number): CrmPriority;

    /**
     * Findet eine CRM-Priorität über ihr Label
     * 
     * @param {string} priorityLabel - Label der gesuchten Priorität
     * @return {CrmPriority} Die gefundene Priorität
     */
    findPriorityByLabel(priorityLabel: string): CrmPriority;

    /**
     * Findet eine CRM-Priorität über den Priorität-Typ
     * 
     * @param {ECrmPriorityType} priorityType - Typ der gesuchten Priorität
     * @return {CrmPriority} Die gefundene Priorität
     */
    findPriorityByType(priorityType: ECrmPriorityType): CrmPriority;

    /**
     * Findet den Start-Status
     * 
     * @param {number} typeId - ID eines CRM-Typs
     * @return {CrmState} Der Start-Status
     */
    findStartState(typeId: number): CrmState;

    /**
     * Findet einen CRM-Status über die ID
     * 
     * @param {number} stateId - ID vom gesuchten Status
     * @return {CrmState} Der gefundene Status
     */
    findStateById(stateId: number): CrmState;

    /**
     * Findet einen CRM-Status über sein Label
     * 
     * @param {string} stateLabel - Label vom gesuchten Status
     * @param {number} typeId - ID des CRM-Sub-Typs
     * @return {CrmState} Der gefundene Status
     */
    findStateByLabel(stateLabel: string, typeId: number): CrmState;

    /**
     * Findet einen CRM-Typ über die ID
     * 
     * @param {number} typeId - ID vom gesuchten Typ
     * @return {CrmSubType} Der gefundene Typ
     */
    findTypeById(typeId: number): CrmSubType;

    /**
     * Findet einen CRM-Typ über sein Label
     * 
     * @param {string} typeLabel - Label vom gesuchten Typ
     * @return {CrmSubType} Der gefundene Typ
     */
    findTypeByLabel(typeLabel: string): CrmSubType;

    /**
     * Erstellt eine neue DTO-Instanz
     * 
     * @return {CrmProject} Die neue DTO-Instanz
     */
    getNewDto(): CrmProject;

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<CrmProject>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<CrmProject>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden DTO
     * @return {CrmProject} Das gelesene DTO
     */
    readById(id: number): CrmProject;

    /**
     * Persistiert eine DTO
     * 
     * @param {CrmProject} toStore - Das zu persistierende DTO
     * @return {CrmProject} Das persistierte DTO
     */
    store(toStore: CrmProject): CrmProject;

    /**
     * Aktualisiert ein persistiertes DTO
     * 
     * @param {CrmProject} toUpdate - Die zu aktualisierende Entity
     * @return {CrmProject} Das aktualisierte DTO
     */
    update(toUpdate: CrmProject): CrmProject;
}

/**
 * Service zur Verarbeitung von CRM-Aufgaben
 */
export interface CrmTaskScriptingService {

    /**
     * Berechnet die gesamte Dienstleistungsdauer in Sekunden in den gegebenen Belegen
     * 
     * @param {Array<CrmTypedDocumentRef>} documentRefs - Zu beachtende Referenzen
     * @param {ECrmSpecialDocumentRefType} documentRefType - Der zu beachtende Referenztyp
     * @return {number} Die ermittelte Dienstleistungsdauer in Sekunden
     */
    calculateServiceTime(documentRefs: Array<CrmTypedDocumentRef>, documentRefType: ECrmSpecialDocumentRefType): number;

    /**
     * Persistiert ein DTO
     * 
     * @param {CrmTask} toCreate - Das zu persistierende DTO
     * @return {CrmTask} Das persistierte DTO
     */
    create(toCreate: CrmTask): CrmTask;

    /**
     * Erstellte eine neue Instanz von CrmObjectRef
     * 
     * @return {CrmObjectRef} Die erstellte Instanz
     */
    createCrmObjectRef(): CrmObjectRef;

    /**
     * Erstellt ein DTO über eine Vorlage
     * 
     * @param {string} templateName - Name einer Vorlage
     * @return {CrmTask} Das erstellte DTO
     */
    createNewDtoByTemplate(templateName: string): CrmTask;

    /**
     * Erstellt ein DTO über eine Vorlage
     * 
     * @param {number} templateId - ID einer Vorlage
     * @return {CrmTask} Das erstellte DTO, falls die Vorlage existiert. Sonst NULL
     */
    createNewDtoByTemplateId(templateId: number): CrmTask;

    /**
     * Löscht eine Entity
     * 
     * @param {number} id - ID der zu löschenden Entity
     */
    deleteById(id: number): void;

    /**
     * Findet den End-Status
     * 
     * @param {number} typeId - ID eines CRM-Typs
     * @return {CrmState} Der End-Status
     */
    findFinalState(typeId: number): CrmState;

    /**
     * Findet eine CRM-Priorität über die ID
     * 
     * @param {number} priorityId - ID der gesuchten Priorität
     * @return {CrmPriority} Die gefundene Priorität
     */
    findPriorityById(priorityId: number): CrmPriority;

    /**
     * Findet eine CRM-Priorität über ihr Label
     * 
     * @param {string} priorityLabel - Label der gesuchten Priorität
     * @return {CrmPriority} Die gefundene Priorität
     */
    findPriorityByLabel(priorityLabel: string): CrmPriority;

    /**
     * Findet eine CRM-Priorität über den Priorität-Typ
     * 
     * @param {ECrmPriorityType} priorityType - Typ der gesuchten Priorität
     * @return {CrmPriority} Die gefundene Priorität
     */
    findPriorityByType(priorityType: ECrmPriorityType): CrmPriority;

    /**
     * Sucht den "Bereit zur Abrechnung"-Status
     * 
     * @param {number} typeId - ID eines CRM-Task-Typs
     * @return {CrmState} "Bereit zur Abrechnung"-Status
     */
    findReadyToBillState(typeId: number): CrmState;

    /**
     * Findet den Start-Status
     * 
     * @param {number} typeId - ID eines CRM-Typs
     * @return {CrmState} Der Start-Status
     */
    findStartState(typeId: number): CrmState;

    /**
     * Findet einen CRM-Status über die ID
     * 
     * @param {number} stateId - ID vom gesuchten Status
     * @return {CrmState} Der gefundene Status
     */
    findStateById(stateId: number): CrmState;

    /**
     * Findet einen CRM-Status über sein Label
     * 
     * @param {string} stateLabel - Label vom gesuchten Status
     * @param {number} typeId - ID des CRM-Sub-Typs
     * @return {CrmState} Der gefundene Status
     */
    findStateByLabel(stateLabel: string, typeId: number): CrmState;

    /**
     * Findet einen CRM-Typ über die ID
     * 
     * @param {number} typeId - ID vom gesuchten Typ
     * @return {CrmSubType} Der gefundene Typ
     */
    findTypeById(typeId: number): CrmSubType;

    /**
     * Findet einen CRM-Typ über sein Label
     * 
     * @param {string} typeLabel - Label vom gesuchten Typ
     * @return {CrmSubType} Der gefundene Typ
     */
    findTypeByLabel(typeLabel: string): CrmSubType;

    /**
     * Erstellt eine neue DTO-Instanz
     * 
     * @return {CrmTask} Die neue DTO-Instanz
     */
    getNewDto(): CrmTask;

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<CrmTask>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<CrmTask>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden DTO
     * @return {CrmTask} Das gelesene DTO
     */
    readById(id: number): CrmTask;

    /**
     * Persistiert eine DTO
     * 
     * @param {CrmTask} toStore - Das zu persistierende DTO
     * @return {CrmTask} Das persistierte DTO
     */
    store(toStore: CrmTask): CrmTask;

    /**
     * Aktualisiert ein persistiertes DTO
     * 
     * @param {CrmTask} toUpdate - Die zu aktualisierende Entity
     * @return {CrmTask} Das aktualisierte DTO
     */
    update(toUpdate: CrmTask): CrmTask;
}

/**
 * Verwaltung von Versandarten
 */
export interface DeliveryMethodScriptingService {

    /**
     * Findet eine Versandart über ein Label
     * 
     * @param {string} label - Label einer Versandart
     * @return {DeliveryMethod} Die gefundene Versandart
     */
    findByLabel(label: string): DeliveryMethod;

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<DeliveryMethod>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<DeliveryMethod>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden DTO
     * @return {DeliveryMethod} Das gelesene DTO
     */
    readById(id: number): DeliveryMethod;
}

/**
 * Verwaltung von Lieferbedingungen
 */
export interface DeliveryTermScriptingService {

    /**
     * Findet eine Lieferbedingung über ein Label
     * 
     * @param {string} label - Label einer Lieferbedingung
     * @return {DeliveryTerm} Die gefundene Lieferbedingung
     */
    findByLabel(label: string): DeliveryTerm;

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<DeliveryTerm>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<DeliveryTerm>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden DTO
     * @return {DeliveryTerm} Das gelesene DTO
     */
    readById(id: number): DeliveryTerm;
}

/**
 * Service zur Verarbeitung von Belegen
 */
export interface DocumentScriptingService {

    /**
     * Erstellt einen manuellen Eintrag im Belegprotokoll
     * 
     * @param {number} documentId - ID des Belegs, zu dem der Eintrag angelegt werden soll
     * @param {string} protocolMessage - Text für den Eintrag
     */
    addDocumentProtocol(documentId: number, protocolMessage: string): void;

    /**
     * Bricht die Bearbeitung eines Belegs ab (Transition EDIT -> SAVED)
     * 
     * @param {number} documentId - ID des Belegs
     * @return {Document} Der abgebrochene Beleg. Falls der Beleg erst angelegt und noch nicht gespeichert wurde, wird er gelöscht und es wird {@code null} zurückgeliefert
     */
    cancel(documentId: number): Document;

    /**
     * Bricht die Bearbeitung eines Belegs ab (Transition EDIT -> SAVED)
     * 
     * @param {number} documentId - ID des Belegs
     * @param {Array<AdditionalParameter>} additionalParameters - Zusätzliche Parameter
     * @return {Document} Der abgebrochene Beleg. Falls der Beleg erst angelegt und noch nicht gespeichert wurde, wird er gelöscht und es wird {@code null} zurückgeliefert
     */
    cancel(documentId: number, additionalParameters: Array<AdditionalParameter>): Document;

    /**
     * Kopiert einen Beleg in die vorgegebene Ziel-Belegart
     * 
     * @param {number} documentId - ID des zu kopierenden Belegs
     * @param {string} targetDocumentType - Ziel-Belegart der Kopie
     * @param {Array<AdditionalParameter>} additionalParameters - Zusätzliche Parameter
     * @return {Document} Der kopierte Beleg
     */
    copy(documentId: number, targetDocumentType: string, additionalParameters: Array<AdditionalParameter>): Document;

    /**
     * Kopiert einen Beleg in die vorgegebene Ziel-Belegart
     * 
     * @param {number} documentId - ID des zu kopierenden Belegs
     * @param {string} targetDocumentTypeLabel - Ziel-Belegart der Kopie
     * @return {Document} Der kopierte Beleg
     */
    copy(documentId: number, targetDocumentTypeLabel: string): Document;

    /**
     * Erstellt einen neuen Beleg
     * 
     * @param {CreateNewDocumentRequest} request - Details zum neuen Beleg
     * @return {Document} Der erstellte Beleg
     */
    create(request: CreateNewDocumentRequest): Document;

    /**
     * Löst einen Beleg auf
     * 
     * @param {number} documentId - ID des aufzulösenden Belegs
     * @param {Array<AdditionalParameter>} additionalParameters - Zusätzliche Parameter
     * @return {Document} Der aufgelöste Beleg
     */
    dissolve(documentId: number, additionalParameters: Array<AdditionalParameter>): Document;

    /**
     * Löst einen Beleg auf
     * 
     * @param {number} documentId - ID des aufzulösenden Belegs
     * @return {Document} Der aufgelöste Beleg
     */
    dissolve(documentId: number): Document;

    /**
     * Startet die Bearbeitung eines Belegs (Transition SAVED -> EDIT)
     * 
     * @param {number} documentId - ID des Belegs
     * @return {Document} Der Beleg in Bearbeitung
     */
    edit(documentId: number): Document;

    /**
     * Startet die Bearbeitung eines Belegs (Transition SAVED -> EDIT)
     * 
     * @param {number} documentId - ID des Belegs
     * @param {Array<AdditionalParameter>} additionalParameters - Zusätzliche Parameter
     * @return {Document} Der Beleg in Bearbeitung
     */
    edit(documentId: number, additionalParameters: Array<AdditionalParameter>): Document;

    /**
     * Erstellt ein AdditionalParameter-Objekt
     * 
     * @param {string} key - Schlüssel des Parameters
     * @param {object} value - Wert des Parameters
     * @return {AdditionalParameter} Das erstellte Objekt
     */
    getAdditionalParameter(key: string, value: object): AdditionalParameter;

    /**
     * Erstellt eine Liste zur Sammlung von AdditionalParameter-Objekten
     * 
     * @return {Array<AdditionalParameter>} Die erstellte Liste
     */
    getAdditionalParameterList(): Array<AdditionalParameter>;

    /**
     * Erstellt ein Request-Objekt, um einen Beleg in einen anderen Status zu verschieben
     * 
     * @return {DocumentTransferToStateRequest} Das Request-Objekt
     */
    getDocumentTransferToStateRequest(): DocumentTransferToStateRequest;

    /**
     * Erstellt ein Request-Objekt, um einen Beleg in einen anderen Beleg zu übernehmen (oder zu kopieren)
     * 
     * @return {DocumentTransferToTypeRequest} Das Request-Objekt
     */
    getDocumentTransferToTypeRequest(): DocumentTransferToTypeRequest;

    /**
     * Erstellt ein neues Belegposition-Objekt, um dieses in einen Beleg einzufügen
     * 
     * @return {DocumentLine} Ein neues Belegposition-Objekt
     */
    getNewDocumentLine(): DocumentLine;

    /**
     * Erstellt ein neues Belegbuchung-Objekt, um dieses in einen Beleg einzufügen
     * 
     * @return {DocumentLineBooking} Ein neues Belegbuchung-Objekt
     */
    getNewDocumentLineBooking(): DocumentLineBooking;

    /**
     * Erstellt ein neues Beleg-Rabatt/-Zuschlags-Objekt, um dieses in einen Beleg oder eine Position einzufügen
     * 
     * @return {DocumentPriceModifier} Ein neues Beleg-Rabatt/-Zuschlags-Objekt
     */
    getNewDocumentPriceModifier(): DocumentPriceModifier;

    /**
     * Erstellt ein Request-Objekt, um einen neuen Beleg zu erstellen
     * 
     * @return {CreateNewDocumentRequest} Das Request-Objekt
     */
    getNewDocumentRequest(): CreateNewDocumentRequest;

    /**
     * Erstellt ein Request-Objekt, um einen Beleg zu aktualisieren
     * 
     * @return {UpdateDocumentRequest} Das Request-Objekt
     */
    getUpdateDocumentRequest(): UpdateDocumentRequest;

    /**
     * Druckt einen Beleg
     * 
     * @param {number} documentId - ID des zu druckenden Belegs
     */
    print(documentId: number): void;

    /**
     * Liest einen Beleg über seine ID
     * 
     * @param {number} documentId - ID eines Belegs
     * @return {Document} Der gelesene Beleg
     */
    readById(documentId: number): Document;

    /**
     * Speichert einen Beleg (Transition EDIT -> SAVED)
     * 
     * @param {number} documentId - ID des zu speichernden Belegs
     * @return {Document} Der gespeicherte Beleg
     */
    save(documentId: number): Document;

    /**
     * Speichert einen Beleg (Transition EDIT -> SAVED)
     * 
     * @param {number} documentId - ID des zu speichernden Belegs
     * @param {Array<AdditionalParameter>} additionalParameters - Zusätzliche Parameter
     * @return {Document} Der gespeicherte Beleg
     */
    save(documentId: number, additionalParameters: Array<AdditionalParameter>): Document;

    /**
     * Versendet einen Beleg per Mail
     * 
     * @param {number} documentId - ID des zu versendenden Belegs
     * @param {string} reportGroupIdentifier - 
     */
    sendViaMail(documentId: number, reportGroupIdentifier: string): void;

    /**
     * Versendet einen Beleg per Mail
     * 
     * @param {number} documentId - ID des zu versendenden Belegs
     */
    sendViaMail(documentId: number): void;

    /**
     * Überführt einen Beleg in einen anderen Status
     * 
     * @param {DocumentTransferToStateRequest} request - Request zur Transition zum gewünschten Ziel-Status
     * @return {Document} Der geänderte Beleg
     */
    transferToState(request: DocumentTransferToStateRequest): Document;

    /**
     * Übernimmt (oder kopiert) einen Beleg in einen anderen Beleg
     * 
     * @param {DocumentTransferToTypeRequest} request - Request zur Übernahme eines Belegs
     * @return {Document} Der neue Beleg
     */
    transferToType(request: DocumentTransferToTypeRequest): Document;

    /**
     * Aktualisiert einen Beleg
     * 
     * @param {UpdateDocumentRequest} request - Details zum zu aktualisierenden Beleg
     * @return {Document} Der aktualisierte Beleg
     */
    update(request: UpdateDocumentRequest): Document;
}

/**
 * Service zur Verarbeitung von Mahnungen
 */
export interface DunningScriptingService {

    /**
     * Druckt eine Mahnung
     * 
     * @param {number} dunningId - ID der zu druckenden Mahnung
     */
    print(dunningId: number): void;

    /**
     * Versendet eine Mahnung per Mail
     * 
     * @param {number} dunningId - ID der zu versendenden Mahnung
     */
    sendViaMail(dunningId: number): void;
}

/**
 * Anfragen von neuen Zählerkreis-Nummern
 */
export interface FreeSequencerScriptingService {

    /**
     * Fordert die nächste Nummer des Zählerkreises an und Zählt hoch
     * 
     * @param {string} freeSequencerKey - ID eines Freien Zählerkreises
     * @return {string} Nummer des Zählerkreises die vergeben wurde.
     */
    getNextNumber(freeSequencerKey: string): string;
}

/**
 * HTTP-Client im Scripting
 */
export interface HttpClientScriptingService {

    /**
     * Erstellt eine neue Instanz vom HTTP-Client ohne Authentifizierung
     * 
     * @return {SecureHttpClient} HTTP-Client ohne Authentifizierung
     */
    createHttpClient(): SecureHttpClient;

    /**
     * Erstellt eine neue Instanz vom HTTP-Client mit Basic Auth
     * 
     * @param {string} username - Benutzername
     * @param {string} password - Passwort
     * @return {SecureHttpClient} HTTP-Client mit Basic Auth
     */
    createHttpClientWithBasicAuth(username: string, password: string): SecureHttpClient;

    /**
     * Erstellt eine neue Instanz vom HTTP-Client mit einem Bearer Token
     * 
     * @param {string} bearerToken - Bearer Token
     * @return {SecureHttpClient} HTTP-Client mit Bearer Authentifizierung
     */
    createHttpClientWithBearerAuth(bearerToken: string): SecureHttpClient;
}

/**
 * Logging im Scripting
 */
export interface LoggingScriptingService {

    /**
     * Protokolliert im Level DEBUG
     * 
     * @param {object} toLog - Zu protokollierende Nachricht
     */
    debug(toLog: object): void;

    /**
     * Protokolliert im Level ERROR
     * 
     * @param {object} toLog - Zu protokollierende Nachricht
     */
    error(toLog: object): void;

    /**
     * Protokolliert im Level INFO
     * 
     * @param {object} toLog - Zu protokollierende Nachricht/Daten
     */
    info(toLog: object): void;

    /**
     * Protokolliert im Level TRACE
     * 
     * @param {object} toLog - Zu protokollierende Nachricht/Daten
     */
    trace(toLog: object): void;

    /**
     * Protokolliert im Level WARN
     * 
     * @param {object} toLog - Zu protokollierende Nachricht
     */
    warn(toLog: object): void;
}

/**
 * Verwaltung von Zahlungsarten
 */
export interface PaymentMethodScriptingService {

    /**
     * Findet eine Zahlungsart über ein Label
     * 
     * @param {string} label - Label einer Zahlungsart
     * @return {PaymentMethod} Die gefundene Zahlungsart
     */
    findByLabel(label: string): PaymentMethod;

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<PaymentMethod>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<PaymentMethod>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden DTO
     * @return {PaymentMethod} Das gelesene DTO
     */
    readById(id: number): PaymentMethod;
}

/**
 * Verwaltung von Zahlungsbedingungen
 */
export interface PaymentTermScriptingService {

    /**
     * Lädt ein PaymentTerm über seine ID und liefer ein PaymentTermRef zurück
     * 
     * @param {number} id - ID eines PaymentTerm
     * @return {PaymentTermRef} Ein PaymentTermRef
     */
    createPaymentTermRef(id: number): PaymentTermRef;

    /**
     * Liefert ein PaymentTermRef zu einem PaymentTerm
     * 
     * @param {PaymentTerm} paymentTerm - Ein PaymentTerm
     * @return {PaymentTermRef} Ein PaymentTermRef
     */
    createPaymentTermRef(paymentTerm: PaymentTerm): PaymentTermRef;

    /**
     * Findet eine Zahlungsbedingung über ein Label
     * 
     * @param {string} label - Label einer Zahlungsbedingung
     * @return {PaymentTerm} Die gefundene Zahlungsbedingung
     */
    findByLabel(label: string): PaymentTerm;

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<PaymentTerm>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<PaymentTerm>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden DTO
     * @return {PaymentTerm} Das gelesene DTO
     */
    readById(id: number): PaymentTerm;
}

/**
 * Service zur Verarbeitung von Warengruppen im Skripten
 */
export interface ProductGroupScriptingService {

    /**
     * Aktiviert ein DTO
     * 
     * @param {number} idToActivate - ID vom zu aktivierenden DTO
     * @return {ProductGroup} Das aktivierte DTO
     */
    activate(idToActivate: number): ProductGroup;

    /**
     * Persistiert ein DTO
     * 
     * @param {ProductGroup} toCreate - Das zu persistierende DTO
     * @return {ProductGroup} Das persistierte DTO
     */
    create(toCreate: ProductGroup): ProductGroup;

    /**
     * Deaktiviert ein DTO
     * 
     * @param {number} idToDeactivate - ID vom zu deaktivierenden DTO
     * @return {ProductGroup} Das deaktivierte DTO
     */
    deactivate(idToDeactivate: number): ProductGroup;

    /**
     * Löscht eine Entity
     * 
     * @param {number} id - ID der zu löschenden Entity
     */
    deleteById(id: number): void;

    /**
     * Erstellt eine neue DTO-Instanz
     * 
     * @return {ProductGroup} Die neue DTO-Instanz
     */
    getNewDto(): ProductGroup;

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<ProductGroup>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<ProductGroup>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden DTO
     * @return {ProductGroup} Das gelesene DTO
     */
    readById(id: number): ProductGroup;

    /**
     * Liest eine Warengruppe über ihr Label
     * 
     * @param {string} label - Label einer Warengruppe
     * @return {ProductGroup} Die gelesene Warengruppe
     */
    readByLabel(label: string): ProductGroup;

    /**
     * Persistiert eine DTO
     * 
     * @param {ProductGroup} toStore - Das zu persistierende DTO
     * @return {ProductGroup} Das persistierte DTO
     */
    store(toStore: ProductGroup): ProductGroup;

    /**
     * Aktualisiert ein persistiertes DTO
     * 
     * @param {ProductGroup} toUpdate - Die zu aktualisierende Entity
     * @return {ProductGroup} Das aktualisierte DTO
     */
    update(toUpdate: ProductGroup): ProductGroup;
}

/**
 * Service zur Verarbeitung von Hauptwarengruppen im Skripten
 */
export interface ProductMainGroupScriptingService {

    /**
     * Aktiviert ein DTO
     * 
     * @param {number} idToActivate - ID vom zu aktivierenden DTO
     * @return {ProductMainGroup} Das aktivierte DTO
     */
    activate(idToActivate: number): ProductMainGroup;

    /**
     * Persistiert ein DTO
     * 
     * @param {ProductMainGroup} toCreate - Das zu persistierende DTO
     * @return {ProductMainGroup} Das persistierte DTO
     */
    create(toCreate: ProductMainGroup): ProductMainGroup;

    /**
     * Deaktiviert ein DTO
     * 
     * @param {number} idToDeactivate - ID vom zu deaktivierenden DTO
     * @return {ProductMainGroup} Das deaktivierte DTO
     */
    deactivate(idToDeactivate: number): ProductMainGroup;

    /**
     * Löscht eine Entity
     * 
     * @param {number} id - ID der zu löschenden Entity
     */
    deleteById(id: number): void;

    /**
     * Erstellt eine neue DTO-Instanz
     * 
     * @return {ProductMainGroup} Die neue DTO-Instanz
     */
    getNewDto(): ProductMainGroup;

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<ProductMainGroup>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<ProductMainGroup>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden DTO
     * @return {ProductMainGroup} Das gelesene DTO
     */
    readById(id: number): ProductMainGroup;

    /**
     * Liest eine Hauptwarengruppe über ihr Label
     * 
     * @param {string} label - Label einer Hauptwarengruppe
     * @return {ProductMainGroup} Die gelesene Hauptwarengruppe
     */
    readByLabel(label: string): ProductMainGroup;

    /**
     * Persistiert eine DTO
     * 
     * @param {ProductMainGroup} toStore - Das zu persistierende DTO
     * @return {ProductMainGroup} Das persistierte DTO
     */
    store(toStore: ProductMainGroup): ProductMainGroup;

    /**
     * Aktualisiert ein persistiertes DTO
     * 
     * @param {ProductMainGroup} toUpdate - Die zu aktualisierende Entity
     * @return {ProductMainGroup} Das aktualisierte DTO
     */
    update(toUpdate: ProductMainGroup): ProductMainGroup;
}

/**
 * Service zur Verarbeitung von Produktpreisen in Skripten
 */
export interface ProductPriceScriptingService {

    /**
     * Legt eine neue Einkaufspreisregel an
     * 
     * @param {ProductDiscount} productDiscount - Die anzulegende Einkaufspreisregel
     * @return {ProductDiscount} Die angelegte Preisregel
     */
    createPurchaseDiscount(productDiscount: ProductDiscount): ProductDiscount;

    /**
     * Legt einen neuen Einkaufspreis an
     * 
     * @param {ProductPrice} productPrice - Der anzulegende Einkaufspreis
     * @return {ProductPrice} Der angelegte Einkaufspreis
     */
    createPurchasePrice(productPrice: ProductPrice): ProductPrice;

    /**
     * Legt eine neue Verkaufspreisregel
     * 
     * @param {ProductDiscount} productDiscount - Die anzulegende Verkaufspreisregel
     * @return {ProductDiscount} Die angelegte Preisregel
     */
    createSalesDiscount(productDiscount: ProductDiscount): ProductDiscount;

    /**
     * Legt einen neuen Verkaufspreis an
     * 
     * @param {ProductPrice} productPrice - Der anzulegende Verkaufspreis
     * @return {ProductPrice} Der angelegte Verkaufspreis
     */
    createSalesPrice(productPrice: ProductPrice): ProductPrice;

    /**
     * Löscht eine Entity
     * 
     * @param {number} id - ID der zu löschenden Entity
     */
    deleteById(id: number): void;

    /**
     * Löscht einen Preis oder eine Preisregel
     * 
     * @param {number} priceOrDiscountId - ID eines Preises oder einer Preisregel
     */
    deletePriceOrDiscountById(priceOrDiscountId: number): void;

    /**
     * Erstellt eine neue Preisregel-DTO-Instanz
     * 
     * @return {ProductDiscount} Die neue Preisregel-DTO-Instanz
     */
    getNewDiscountDto(): ProductDiscount;

    /**
     * Erstellt eine neue DTO-Instanz
     * 
     * @return {ProductPrice} Die neue DTO-Instanz
     */
    getNewDto(): ProductPrice;

    /**
     * Erstellt eine neue Preis-DTO-Instanz
     * 
     * @return {ProductPrice} Die neue Preis-DTO-Instanz
     */
    getNewPriceDto(): ProductPrice;

    /**
     * Liefert alle Einkaufspreisregeln zu einem Artikel und Account
     * 
     * @param {number} articleId - ID des Artikels
     * @param {number} accountId - ID des Accounts
     * @return {Array<ProductDiscount>} Liste der Einkaufspreisregeln
     */
    getPurchaseDiscounts(articleId: number, accountId: number): Array<ProductDiscount>;

    /**
     * Liefert alle Einkaufspreisregeln zu einem Artikel und Account und Währung
     * 
     * @param {number} articleId - ID des Artikels
     * @param {number} accountId - ID des Accounts
     * @param {number} currencyId - ID der Währung
     * @return {Array<ProductDiscount>} Liste der Einkaufspreisregeln
     */
    getPurchaseDiscountsForCurrency(articleId: number, accountId: number, currencyId: number): Array<ProductDiscount>;

    /**
     * Liefert alle Einkaufspreisregeln zu einem Account
     * 
     * @param {number} accountId - ID des Accounts
     * @return {Array<ProductDiscount>} Liste der Einkaufspreisregeln
     */
    getPurchaseDiscountsToAccount(accountId: number): Array<ProductDiscount>;

    /**
     * Liefert alle Einkaufspreisregeln zu einem Artikel
     * 
     * @param {number} articleId - ID des Artikels
     * @return {Array<ProductDiscount>} Liste der Einkaufspreisregeln
     */
    getPurchaseDiscountsToArticle(articleId: number): Array<ProductDiscount>;

    /**
     * Liefert alle Einkaufspreise zu einem Artikel und Account
     * 
     * @param {number} articleId - ID des Artikels
     * @param {number} accountId - ID des Accounts
     * @return {Array<ProductPrice>} Liste der Einkaufspreise
     */
    getPurchasePrices(articleId: number, accountId: number): Array<ProductPrice>;

    /**
     * Liefert alle Einkaufspreise zu einem Artikel und Account und Währung
     * 
     * @param {number} articleId - ID des Artikels
     * @param {number} accountId - ID des Accounts
     * @param {number} currencyId - ID der Währung
     * @return {Array<ProductPrice>} Liste der Einkaufspreise
     */
    getPurchasePricesForCurrency(articleId: number, accountId: number, currencyId: number): Array<ProductPrice>;

    /**
     * Liefert alle Einkaufspreise zu einem Account
     * 
     * @param {number} accountId - ID des Accounts
     * @return {Array<ProductPrice>} Liste der Einkaufspreise
     */
    getPurchasePricesToAccount(accountId: number): Array<ProductPrice>;

    /**
     * Liefert alle Einkaufspreise zu einem Artikel
     * 
     * @param {number} articleId - ID des Artikels
     * @return {Array<ProductPrice>} Liste der Einkaufspreise
     */
    getPurchasePricesToArticle(articleId: number): Array<ProductPrice>;

    /**
     * Liefert alle Verkaufspreisregeln zu einem Artikel und Account
     * 
     * @param {number} articleId - ID des Artikels
     * @param {number} accountId - ID des Accounts
     * @return {Array<ProductDiscount>} Liste der Verkaufspreisregeln
     */
    getSalesDiscounts(articleId: number, accountId: number): Array<ProductDiscount>;

    /**
     * Liefert alle Verkaufspreisregeln zu einem Artikel und Account und Währung
     * 
     * @param {number} articleId - ID des Artikels
     * @param {number} accountId - ID des Accounts
     * @param {number} currencyId - ID der Währung
     * @return {Array<ProductDiscount>} Liste der Verkaufspreisregeln
     */
    getSalesDiscountsForCurrency(articleId: number, accountId: number, currencyId: number): Array<ProductDiscount>;

    /**
     * Liefert alle Verkaufspreisregeln zu einem Account
     * 
     * @param {number} accountId - ID des Accounts
     * @return {Array<ProductDiscount>} Liste der Verkaufspreisregeln
     */
    getSalesDiscountsToAccount(accountId: number): Array<ProductDiscount>;

    /**
     * Liefert alle Verkaufspreisregeln zu einem Account und Währung
     * 
     * @param {number} accountId - ID des Accounts
     * @param {number} currencyId - ID der Währung
     * @return {Array<ProductDiscount>} Liste der Verkaufspreisregeln
     */
    getSalesDiscountsToAccountForCurrency(accountId: number, currencyId: number): Array<ProductDiscount>;

    /**
     * Liefert alle Account-unabhängigen Verkaufspreisregeln zu einem Artikel
     * 
     * @param {number} articleId - ID des Artikels
     * @return {Array<ProductDiscount>} Liste der Verkaufspreisregeln
     */
    getSalesDiscountsToArticle(articleId: number): Array<ProductDiscount>;

    /**
     * Liefert alle Account-unabhängigen Verkaufspreisregeln zu einem Artikel und Währung
     * 
     * @param {number} articleId - ID des Artikels
     * @param {number} currencyId - ID der Währung
     * @return {Array<ProductDiscount>} Liste der Verkaufspreisregeln
     */
    getSalesDiscountsToArticleForCurrency(articleId: number, currencyId: number): Array<ProductDiscount>;

    /**
     * Liefert alle Verkaufspreise zu einem Artikel und Account
     * 
     * @param {number} articleId - ID des Artikels
     * @param {number} accountId - ID des Accounts
     * @return {Array<ProductPrice>} Liste der Verkaufspreise
     */
    getSalesPrices(articleId: number, accountId: number): Array<ProductPrice>;

    /**
     * Liefert alle Verkaufspreise zu einem Artikel und Account und Währung
     * 
     * @param {number} articleId - ID des Artikels
     * @param {number} accountId - ID des Accounts
     * @param {number} currencyId - ID der Währung
     * @return {Array<ProductPrice>} Liste der Verkaufspreise
     */
    getSalesPricesForCurrency(articleId: number, accountId: number, currencyId: number): Array<ProductPrice>;

    /**
     * Liefert alle Verkaufspreise zu einem Account
     * 
     * @param {number} accountId - ID des Accounts
     * @return {Array<ProductPrice>} Liste der Verkaufspreise
     */
    getSalesPricesToAccount(accountId: number): Array<ProductPrice>;

    /**
     * Liefert alle Verkaufspreise zu einem Account und Währung
     * 
     * @param {number} accountId - ID des Accounts
     * @param {number} currencyId - ID der Währung
     * @return {Array<ProductPrice>} Liste der Verkaufspreise
     */
    getSalesPricesToAccountForCurrency(accountId: number, currencyId: number): Array<ProductPrice>;

    /**
     * Liefert alle Account-unabhängigen Verkaufspreise zu einem Artikel
     * 
     * @param {number} articleId - ID des Artikels
     * @return {Array<ProductPrice>} Liste der Verkaufspreise
     */
    getSalesPricesToArticle(articleId: number): Array<ProductPrice>;

    /**
     * Liefert alle Account-unabhängigen Verkaufspreise zu einem Artikel und Währung
     * 
     * @param {number} articleId - ID des Artikels
     * @param {number} currencyId - ID der Währung
     * @return {Array<ProductPrice>} Liste der Verkaufspreise
     */
    getSalesPricesToArticleForCurrency(articleId: number, currencyId: number): Array<ProductPrice>;

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<ProductPrice>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<ProductPrice>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden Preis
     * @return {ProductPrice} Das gelesene DTO
     */
    readById(id: number): ProductPrice;

    /**
     * Liest eine Preisregel
     * 
     * @param {number} priceId - ID einer Preisregel
     * @return {ProductDiscount} Die gelesene Preisregel
     */
    readDiscountById(priceId: number): ProductDiscount;

    /**
     * Liest einen Preis
     * 
     * @param {number} priceId - ID eines Preises
     * @return {ProductPrice} Der gelesene Preis
     */
    readPriceById(priceId: number): ProductPrice;

    /**
     * Aktualisiert ein persistiertes DTO
     * 
     * @param {ProductPrice} toUpdate - Die zu aktualisierende Entity
     * @return {ProductPrice} Das aktualisierte DTO
     */
    update(toUpdate: ProductPrice): ProductPrice;

    /**
     * Aktualisiert eine Einkaufspreisregel
     * 
     * @param {ProductDiscount} productDiscount - Die zu aktualisierende Einkaufspreisregel
     * @return {ProductDiscount} Die aktualisierte Einkaufspreisregel
     */
    updatePurchaseDiscount(productDiscount: ProductDiscount): ProductDiscount;

    /**
     * Aktualisiert einen Einkaufspreis
     * 
     * @param {ProductPrice} productPrice - Der zu aktualisierende Einkaufspreis
     * @return {ProductPrice} Der aktualisierte Einkaufspreis
     */
    updatePurchasePrice(productPrice: ProductPrice): ProductPrice;

    /**
     * Aktualisiert eine Verkaufspreisregel
     * 
     * @param {ProductDiscount} productDiscount - Die zu aktualisierende Verkaufspreisregel
     * @return {ProductDiscount} Die aktualisierte Verkaufspreisregel
     */
    updateSalesDiscount(productDiscount: ProductDiscount): ProductDiscount;

    /**
     * Aktualisiert einen Verkaufspreis
     * 
     * @param {ProductPrice} productPrice - Der zu aktualisierende Verkaufspreis
     * @return {ProductPrice} Der aktualisierte Verkaufspreis
     */
    updateSalesPrice(productPrice: ProductPrice): ProductPrice;
}

/**
 * Service zur Verarbeitung von Produkten in Skripten
 */
export interface ProductScriptingService {

    /**
     * Liest ein Produkt anhand einer Artikel-ID
     * 
     * @param {number} articleId - ID eines zum Produkt gehörenden Artikels
     * @return {Product} Das gelesene Produkt
     */
    readByArticleId(articleId: number): Product;

    /**
     * Liest ein Produkt anhand seiner ID
     * 
     * @param {number} id - ID des zu lesenden Produkts
     * @return {Product} Das gelesene Produkt
     */
    readById(id: number): Product;

    /**
     * Aktualisiert ein Produkt
     * 
     * @param {Product} toUpdate - Das zu aktualisierende Produkt
     * @return {Product} Das aktualisierte Produkt
     */
    update(toUpdate: Product): Product;
}

/**
 * Service zur Verarbeitung von ScenarioActualValue
 */
export interface ScenarioScriptingService {

    /**
     * Erstellt ein ScenarioActualValue
     * 
     * @param {ScenarioActualValue} toCreate - Das zu erstellende Actual-Value
     * @return {ScenarioActualValue} Das erstellte Actual-Value
     */
    createScenarioActualValue(toCreate: ScenarioActualValue): ScenarioActualValue;

    /**
     * Findet ein ScenarioActualValue über die ID
     * 
     * @param {number} actualValueId - ID von einem Actual-Value
     * @return {ScenarioActualValue} Das gefundene ScenarioActualValue oder null
     */
    findScenarioActualValueById(actualValueId: number): ScenarioActualValue;

    /**
     * Liest eine Liste von ScenarioActualValue gemäß der Selektion
     * 
     * @param {number} referenceId - Eine Referenz-ID
     * @param {string} scenarioDimKey - Optional: Schlüssel einer Scenario-Dimension
     * @param {string} scenarioIdentifier - Optional: Identifier eines Scenarios
     * @return {Array<ScenarioActualValue>} Die gelesenen ScenarioActualValue
     */
    findScenarioActualValuesBySelection(referenceId: number, scenarioDimKey: string, scenarioIdentifier: string): Array<ScenarioActualValue>;

    /**
     * Findet ein Scenario über die ID
     * 
     * @param {number} scenarioId - ID eines Scenarios
     * @return {Scenario} Das gefundene Scenario oder null
     */
    findScenarioById(scenarioId: number): Scenario;

    /**
     * Findet ein Scenario über den Identifier
     * 
     * @param {string} scenarioIdentifier - Identifier eines Scenarios
     * @return {Scenario} Das gefundene Scenario oder null
     */
    findScenarioByIdentifer(scenarioIdentifier: string): Scenario;

    /**
     * Findet ein Scenario über das Label
     * 
     * @param {string} scenarioLabel - Label eines Scenarios
     * @return {Scenario} Das gefundene Scenario oder null
     */
    findScenarioByLabel(scenarioLabel: string): Scenario;

    /**
     * Findet eine Scenario-Dimension über die ID
     * 
     * @param {Scenario} scenario - Ein Scenario, in dem gesucht werden soll
     * @param {number} scenarioDimensionId - ID einer Scenario-Dimension
     * @return {ScenarioDimension} Die gefundene Scenario-Dimension oder null
     */
    findScenarioDimensionById(scenario: Scenario, scenarioDimensionId: number): ScenarioDimension;

    /**
     * Findet eine Scenario-Dimension über den Key
     * 
     * @param {Scenario} scenario - Ein Scenario, in dem gesucht werden soll
     * @param {string} scenarioDimensionKey - Key einer Scenario-Dimension
     * @return {ScenarioDimension} Die gefundene Scenario-Dimension oder null
     */
    findScenarioDimensionByKey(scenario: Scenario, scenarioDimensionKey: string): ScenarioDimension;

    /**
     * Findet einen Scenario-Dimension-Wert über die ID
     * 
     * @param {ScenarioDimension} scenarioDimension - Eine Scenario-Dimension, in der gesucht werden soll
     * @param {number} scenarioDimensionValueId - ID eines Scenario-Dimension-Werts
     * @return {ScenarioDimensionValue} Der gefundene Scenario-Dimension-Wert oder null
     */
    findScenarioDimensionValueById(scenarioDimension: ScenarioDimension, scenarioDimensionValueId: number): ScenarioDimensionValue;

    /**
     * Findet einen Scenario-Dimension-Wert über das Label
     * 
     * @param {ScenarioDimension} scenarioDimension - Eine Scenario-Dimension, in der gesucht werden soll
     * @param {string} scenarioDimensionValueLabel - Label eines Scenario-Dimension-Werts
     * @return {ScenarioDimensionValue} Der gefundene Scenario-Dimension-Wert oder null
     */
    findScenarioDimensionValueByLabel(scenarioDimension: ScenarioDimension, scenarioDimensionValueLabel: string): ScenarioDimensionValue;

    /**
     * Erstellt ein neues ScenarioActualValue-DTO
     * 
     * @return {ScenarioActualValue} Ein ScenarioActualValue-DTO
     */
    getNewActualValueDTO(): ScenarioActualValue;

    /**
     * Aktualisiert ein ScenarioActualValue
     * 
     * @param {ScenarioActualValue} toUpdate - Das zu aktualisierende Actual-Value
     * @return {ScenarioActualValue} Das aktualisierte Actual-Value
     */
    updateScenarioActualValue(toUpdate: ScenarioActualValue): ScenarioActualValue;
}

/**
 * Ausgabe-Support Methoden
 */
export interface ScriptOutputHelperService {

    /**
     * Erzeugt einen neuen Output-Request
     * 
     * @return {ScriptOutputRequest} den Request
     */
    createOutputRequest(): ScriptOutputRequest;
}

/**
 * Services
 */
export interface ScriptingServiceList {

    /**
     * Service zur Verarbeitung von Text-Enumerationen
     */
    textEnumerationService: TextEnumerationScriptingService;

    /**
     * Service zur Verarbeitung von Variantenattributen in Skripten
     */
    variantAttributeService: VariantAttributeScriptingService;

    /**
     * Service zur Verarbeitung von CRM-Aufgaben
     */
    crmTaskService: CrmTaskScriptingService;

    /**
     * Service zur Verarbeitung von Accounts
     */
    accountService: AccountScriptingService;

    /**
     * Service zur Verarbeitung von Shelf-Documents
     */
    shelfDocumentService: ShelfDocumentScriptingService;

    /**
     * Verwaltung von Versandarten
     */
    deliveryMethodService: DeliveryMethodScriptingService;

    /**
     * Logging im Scripting
     */
    logger: LoggingScriptingService;

    /**
     * Service zur Verarbeitung von Deals
     */
    crmDealService: CrmDealScriptingService;

    /**
     * Service zur Verarbeitung von Produkten in Skripten
     */
    productService: ProductScriptingService;

    /**
     * Service zur Verarbeitung von Warengruppen im Skripten
     */
    productGroupService: ProductGroupScriptingService;

    /**
     * Service zur Verarbeitung von Hauptwarengruppen im Skripten
     */
    productMainGroupService: ProductMainGroupScriptingService;

    /**
     * Ausgabe-Support Methoden
     */
    outputHelper: ScriptOutputHelperService;

    /**
     * Erstellt DTOs zur Verwendung im Skript
     */
    dtoFactory: dtoFactory;

    /**
     * Service zur Verarbeitung von Produktpreisen in Skripten
     */
    priceService: ProductPriceScriptingService;

    /**
     * Hilfsmethoden zur Verwendung im Scripting
     */
    utils: ScriptingUtilities;

    /**
     * Service zur Verarbeitung von Variantenschemas in Skripten
     */
    variantSchemaService: VariantSchemaScriptingService;

    /**
     * Service zur Verarbeitung von Artikeln im Skripten
     */
    articleService: ArticleScriptingService;

    /**
     * Service zur Verarbeitung von Belegen
     */
    documentService: DocumentScriptingService;

    /**
     * Service zur Verarbeitung von Artikel-Listings im Skripten
     */
    articleListingService: ArticleListingScriptingService;

    /**
     * Service zur Verarbeitung von Variantenattributwert-Listings in Skripten
     */
    variantValueListingService: VariantValueListingScriptingService;

    /**
     * Service zur Verarbeitung von Artikel-Lager-Beziehungen im Skripten
     */
    articleStorageService: ArticleStorageScriptingService;

    /**
     * Verwaltung von Zahlungsarten
     */
    paymentMethodService: PaymentMethodScriptingService;

    /**
     * Anfragen von neuen Zählerkreis-Nummern
     */
    freeSequencerService: FreeSequencerScriptingService;

    /**
     * Service zur Bestandsabfrage und Lagerbuchung in Skripten
     */
    stockService: StockScriptingService;

    /**
     * Service zur Verarbeitung von Variantenwerten in Skripten
     */
    variantValueService: VariantValueScriptingService;

    /**
     * Service zur Verarbeitung von ScenarioActualValue
     */
    scenarioService: ScenarioScriptingService;

    /**
     * Service zur Verarbeitung von Accounts
     */
    vqlService: VqlScriptingService;

    /**
     * Lesen von Benutzern und Benutzergruppen
     */
    userAndGroupService: UserAndGroupScriptingService;

    /**
     * Service zur Verarbeitung von CRM-Aktivitäten
     */
    crmActivityService: CrmActivityScriptingService;

    /**
     * Service zur Verarbeitung von Variantenattribut-Listings in Skripten
     */
    variantAttributeListingService: VariantAttributeListingScriptingService;

    /**
     * Service zur Verwendung von Tags
     */
    tagService: TagScriptingService;

    /**
     * Verwaltung von Lieferbedingungen
     */
    deliveryTermService: DeliveryTermScriptingService;

    /**
     * Verwaltung von CRM-Belegreferenzen
     */
    crmDocumentRefService: CrmDocumentRefScriptingService;

    /**
     * Verwaltung von Zahlungsbedingungen
     */
    paymentTermService: PaymentTermScriptingService;

    /**
     * Service zur Verarbeitung von Artikel-Lieferantenbeziehungen im Skripten
     */
    articleSupplierService: ArticleSupplierScriptingService;

    /**
     * HTTP-Client im Scripting
     */
    httpClientService: HttpClientScriptingService;

    /**
     * Service zur Verarbeitung von Projekten
     */
    crmProjectService: CrmProjectScriptingService;

    /**
     * Service zur Verarbeitung von Mahnungen
     */
    dunningService: DunningScriptingService;
}

/**
 * Hilfsmethoden zur Verwendung im Scripting
 */
export interface ScriptingUtilities {

    /**
     * Verkettet zwei Listen
     * 
     * @param {Array<object>} firstList - Erste Liste
     * @param {Array<object>} secondList - Zweite Liste
     * @return {Array<object>} Die verketteten Listen als eine neue Liste
     */
    concatLists(firstList: Array<object>, secondList: Array<object>): Array<object>;

    /**
     * Aktuelles Datum
     * 
     * @return {ScriptingDate} 
     */
    dateNow(): ScriptingDate;

    /**
     * Aktueller Datum-Zeit-Wert
     * 
     * @return {ScriptingDateTime} 
     */
    dateTimeNow(): ScriptingDateTime;

    /**
     * Erstellt eine neue BigDecimal-Instanz
     * 
     * @param {object} value - Der Quell-Wert
     * @return {number} Ein BigDecimal-Wert
     */
    newBigDecimal(value: object): number;

    /**
     * Erstellt eine neue BigDecimal-Instanz
     * 
     * @param {object} value - Der Quell-Wert
     * @param {number} scale - Anzahl Nachkommastellen
     * @return {number} Ein BigDecimal-Wert
     */
    newBigDecimal(value: object, scale: number): number;

    /**
     * Erstellt eine API-Referenz
     * 
     * @param {object} source - Das Quell-Objekt
     * @return {ApiObjectReference} Die erstellte API-Referenz
     */
    toApiReference(source: object): ApiObjectReference;
}

/**
 * Service zur Verarbeitung von Shelf-Documents
 */
export interface ShelfDocumentScriptingService {

    /**
     * Erstellt eine neue Verknüpfung zwischen einem DMS-Dokument und einem Geschäftsobjekt
     * 
     * @param {ShelfDocumentAttribution} attribution - Die zu erstellende Verknüpfung
     * @return {ShelfDocumentAttribution} Die erstellte Verknüpfung
     */
    createAttribution(attribution: ShelfDocumentAttribution): ShelfDocumentAttribution;

    /**
     * Löscht eine DMS-Verknüpfung
     * 
     * @param {number} attributionId - ID der Verknüpfung
     */
    deleteAttribution(attributionId: number): void;

    /**
     * Lädt eine Datei von einer URL herunter und erstellt ein neues DMS-Dokument
     * 
     * @param {string} url - Download-URL
     * @param {string} documentTypeKey - Schlüssel der Dokumentenart
     * @return {ShelfDocument} Das neu erstellte DMS-Dokument
     */
    downloadIntoDMS(url: string, documentTypeKey: string): ShelfDocument;

    /**
     * Lädt eine Datei von einer URL mit Authentifizierung herunter und erstellt ein neues DMS-Dokument
     * 
     * @param {string} url - Download-URL
     * @param {EScriptingAuthenticationType} authenticationType - Art der Authentifizierung (BASIC_AUTH, BEARER_TOKEN)
     * @param {string} authValue - Authentifizierungswert — Platzhalter (z.B. {{secret:myApi:token}}) oder Klartext. Bei BASIC_AUTH im Format 'username:password'
     * @param {string} documentTypeKey - Schlüssel der Dokumentenart
     * @return {ShelfDocument} Das neu erstellte DMS-Dokument
     */
    downloadIntoDMS(url: string, authenticationType: EScriptingAuthenticationType, authValue: string, documentTypeKey: string): ShelfDocument;

    /**
     * Findet ein Dokumentenart über ihren Schlüssel
     * 
     * @param {string} key - Der Schlüssel einer Dokumentenart
     * @return {ShelfDocumentType} Die gefundene Dokumentenart
     */
    findShelfDocumentTypeByKey(key: string): ShelfDocumentType;

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<ShelfDocument>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<ShelfDocument>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden DTO
     * @return {ShelfDocument} Das gelesene DTO
     */
    readById(id: number): ShelfDocument;

    /**
     * Setzt den Lösch-Status eines Dokuments
     * 
     * @param {number} shelfDocumentId - ID des Dokuments
     * @param {EShelfDocumentDeletionState} newState - neuer Löschstatus
     */
    setDeletionState(shelfDocumentId: number, newState: EShelfDocumentDeletionState): void;

    /**
     * Aktualisiert ein persistiertes DTO
     * 
     * @param {ShelfDocument} toUpdate - Die zu aktualisierende Entity
     * @return {ShelfDocument} Das aktualisierte DTO
     */
    update(toUpdate: ShelfDocument): ShelfDocument;

    /**
     * Aktualisiert eine bestehende DMS-Verknüpfung
     * 
     * @param {ShelfDocumentAttribution} attribution - Die zu aktualisierende Verknüpfung
     * @return {ShelfDocumentAttribution} Die aktualisierte Verknüpfung
     */
    updateAttribution(attribution: ShelfDocumentAttribution): ShelfDocumentAttribution;
}

/**
 * Service zur Bestandsabfrage und Lagerbuchung in Skripten
 */
export interface StockScriptingService {

    /**
     * Führt eine Stapel-Lagerumbuchung durch
     * 
     * @param {BulkTransferRequestApi} bulkStockTransfer - Anweisungen für die Lagerumbuchungen
     * @return {BulkTransferResult} Ergebnis der Stapel-Lagerumbuchung
     */
    bookBulkStockTransfer(bulkStockTransfer: BulkTransferRequestApi): BulkTransferResult;

    /**
     * Bucht eine manuelle Lagerbewegung
     * 
     * @param {StockMovementManualApi} stockMovementManual - Infos zur Durchführung der manuellen Lagerbuchung
     * @return {Stock} Neuer Bestand auf dem Lagerplatz zu dem Artikel
     */
    bookManualStockMovement(stockMovementManual: StockMovementManualApi): Stock;

    /**
     * Bucht eine Umlagerung
     * 
     * @param {StockTransferApi} stockTransfer - Details zur Umlagerung
     * @return {StockTransferResult} Neuer Bestand von Quell- und Ziel-Lagerplatz zu dem Artikel
     */
    bookStockTransfer(stockTransfer: StockTransferApi): StockTransferResult;

    /**
     * Liefert alle Bestände zu einem Artikel auf einem Lagerplatz
     * 
     * @param {number} articleId - ID des Artikels
     * @param {number} storageBinId - ID des Lagerplatzes
     * @return {Array<Stock>} Liste der Bestände
     */
    findAllByArticleAndStorageBin(articleId: number, storageBinId: number): Array<Stock>;

    /**
     * Liefert alle Bestände zu einem Artikel in einem Lager
     * 
     * @param {number} articleId - ID des Artikels
     * @param {number} storageId - ID des Lagers
     * @return {Array<Stock>} Liste der Bestände
     */
    findByArticleAndStorage(articleId: number, storageId: number): Array<Stock>;

    /**
     * Liefert alle Bestände zu einer Artikel-Seriennummer in einem Lager
     * 
     * @param {number} articleSerialNumberId - ID der Artikel-Seriennummer
     * @param {number} storageId - ID des Lagers
     * @return {Array<Stock>} Liste der Bestände
     */
    findByArticleSerialNumberAndStorage(articleSerialNumberId: number, storageId: number): Array<Stock>;

    /**
     * Liefert den Bestand zu einer Artikel-Seriennummer auf einem Lagerplatz
     * 
     * @param {number} articleSerialNumberId - ID der Artikel-Seriennummer
     * @param {number} storageBinId - ID des Lagerplatzes
     * @return {Stock} Ggf. der gefundene Bestand
     */
    findByArticleSerialNumberAndStorageBin(articleSerialNumberId: number, storageBinId: number): Stock;
}

/**
 * Service zur Verwendung von Tags
 */
export interface TagScriptingService {

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<TagDto>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<TagDto>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden DTO
     * @return {TagDto} Das gelesene DTO
     */
    readById(id: number): TagDto;
}

/**
 * Service zur Verarbeitung von Text-Enumerationen
 */
export interface TextEnumerationScriptingService {

    /**
     * Aktiviert eine Text-Enumeration
     * 
     * @param {number} id - ID der zu aktivierenden Text-Enumeration
     * @return {TextEnumGet} Die aktivierte Text-Enumeration
     */
    activate(id: number): TextEnumGet;

    /**
     * Erstellt eine Text-Enumeration
     * 
     * @param {TextEnumCreate} toCreate - Die zu erstellende Text-Enumeration
     * @return {TextEnumGet} Die erstellte Text-Enumeration
     */
    create(toCreate: TextEnumCreate): TextEnumGet;

    /**
     * Deaktiviert eine Text-Enumeration
     * 
     * @param {number} id - ID der zu deaktivierenden Text-Enumeration
     * @return {TextEnumGet} Die deaktivierte Text-Enumeration
     */
    deactivate(id: number): TextEnumGet;

    /**
     * Löscht eine Text-Enumeration
     * 
     * @param {number} id - ID der zu löschenden Text-Enumeration
     */
    deleteById(id: number): void;

    /**
     * Erstellt eine neue DTO-Instanz zum Anlegen einer Text-Enumeration
     * 
     * @return {TextEnumCreate} Die neue DTO-Instanz
     */
    getNewCreateDto(): TextEnumCreate;

    /**
     * Liest eine Liste von Text-Enumerationen über ihre IDs
     * 
     * @param {Array<number>} ids - IDs der Text-Enumerationen
     * @return {Array<TextEnumGet>} Die Liste der gelesenen Text-Enumerationen
     */
    readAllById(ids: Array<number>): Array<TextEnumGet>;

    /**
     * Liest eine Text-Enumeration über ihre ID
     * 
     * @param {number} id - ID der Text-Enumeration
     * @return {TextEnumGet} Die gelesene Text-Enumeration
     */
    readById(id: number): TextEnumGet;

    /**
     * Aktualisiert eine Text-Enumeration
     * 
     * @param {TextEnumGet} toUpdate - Die zu aktualisierende Text-Enumeration
     * @return {TextEnumGet} Die aktualisierte Text-Enumeration
     */
    update(toUpdate: TextEnumGet): TextEnumGet;
}

/**
 * Lesen von Benutzern und Benutzergruppen
 */
export interface UserAndGroupScriptingService {

    /**
     * Findet eine Benutzergruppe über ihre ID
     * 
     * @param {number} groupId - ID einer Benutzergruppe
     * @return {Group} Die gefundene Benutzergruppe
     */
    findGroupById(groupId: number): Group;

    /**
     * Findet eine Benutzergruppe über ihr Label
     * 
     * @param {string} groupLabel - Label einer Benutzergruppe
     * @return {Group} Die gefundene Benutzergruppe
     */
    findGroupByLabel(groupLabel: string): Group;

    /**
     * Findet einen Benutzer über seine ID
     * 
     * @param {number} userId - ID eines Benutzers
     * @return {User} Der gefundene Benutzer
     */
    findUserById(userId: number): User;

    /**
     * Findet einen Benutzer über seinen Benutzernamen
     * 
     * @param {string} userName - Benutzername
     * @return {User} Der gefundene Benutzer
     */
    findUserByName(userName: string): User;

    /**
     * Liefert den aktuellen Benutzer
     * 
     * @return {User} Der aktuelle Benutzer
     */
    getCurrentUser(): User;
}

/**
 * Service zur Verarbeitung von Variantenattribut-Listings in Skripten
 */
export interface VariantAttributeListingScriptingService {

    /**
     * Persistiert ein DTO
     * 
     * @param {VariantAttributeListing} toCreate - Das zu persistierende DTO
     * @return {VariantAttributeListing} Das persistierte DTO
     */
    create(toCreate: VariantAttributeListing): VariantAttributeListing;

    /**
     * Löscht eine Entity
     * 
     * @param {number} id - ID der zu löschenden Entity
     */
    deleteById(id: number): void;

    /**
     * Erstellt eine neue DTO-Instanz
     * 
     * @return {VariantAttributeListing} Die neue DTO-Instanz
     */
    getNewDto(): VariantAttributeListing;

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<VariantAttributeListing>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<VariantAttributeListing>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden DTO
     * @return {VariantAttributeListing} Das gelesene DTO
     */
    readById(id: number): VariantAttributeListing;

    /**
     * Persistiert eine DTO
     * 
     * @param {VariantAttributeListing} toStore - Das zu persistierende DTO
     * @return {VariantAttributeListing} Das persistierte DTO
     */
    store(toStore: VariantAttributeListing): VariantAttributeListing;

    /**
     * Aktualisiert ein persistiertes DTO
     * 
     * @param {VariantAttributeListing} toUpdate - Die zu aktualisierende Entity
     * @return {VariantAttributeListing} Das aktualisierte DTO
     */
    update(toUpdate: VariantAttributeListing): VariantAttributeListing;
}

/**
 * Service zur Verarbeitung von Variantenattributen in Skripten
 */
export interface VariantAttributeScriptingService {

    /**
     * Aktiviert ein DTO
     * 
     * @param {number} idToActivate - ID vom zu aktivierenden DTO
     * @return {VariantAttribute} Das aktivierte DTO
     */
    activate(idToActivate: number): VariantAttribute;

    /**
     * Persistiert ein DTO
     * 
     * @param {VariantAttribute} toCreate - Das zu persistierende DTO
     * @return {VariantAttribute} Das persistierte DTO
     */
    create(toCreate: VariantAttribute): VariantAttribute;

    /**
     * Deaktiviert ein DTO
     * 
     * @param {number} idToDeactivate - ID vom zu deaktivierenden DTO
     * @return {VariantAttribute} Das deaktivierte DTO
     */
    deactivate(idToDeactivate: number): VariantAttribute;

    /**
     * Löscht eine Entity
     * 
     * @param {number} id - ID der zu löschenden Entity
     */
    deleteById(id: number): void;

    /**
     * Erstellt eine neue DTO-Instanz
     * 
     * @return {VariantAttribute} Die neue DTO-Instanz
     */
    getNewDto(): VariantAttribute;

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<VariantAttribute>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<VariantAttribute>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden DTO
     * @return {VariantAttribute} Das gelesene DTO
     */
    readById(id: number): VariantAttribute;

    /**
     * Persistiert eine DTO
     * 
     * @param {VariantAttribute} toStore - Das zu persistierende DTO
     * @return {VariantAttribute} Das persistierte DTO
     */
    store(toStore: VariantAttribute): VariantAttribute;

    /**
     * Aktualisiert ein persistiertes DTO
     * 
     * @param {VariantAttribute} toUpdate - Die zu aktualisierende Entity
     * @return {VariantAttribute} Das aktualisierte DTO
     */
    update(toUpdate: VariantAttribute): VariantAttribute;
}

/**
 * Service zur Verarbeitung von Variantenschemas in Skripten
 */
export interface VariantSchemaScriptingService {

    /**
     * Aktiviert ein DTO
     * 
     * @param {number} idToActivate - ID vom zu aktivierenden DTO
     * @return {VariantSchema} Das aktivierte DTO
     */
    activate(idToActivate: number): VariantSchema;

    /**
     * Persistiert ein DTO
     * 
     * @param {VariantSchema} toCreate - Das zu persistierende DTO
     * @return {VariantSchema} Das persistierte DTO
     */
    create(toCreate: VariantSchema): VariantSchema;

    /**
     * Deaktiviert ein DTO
     * 
     * @param {number} idToDeactivate - ID vom zu deaktivierenden DTO
     * @return {VariantSchema} Das deaktivierte DTO
     */
    deactivate(idToDeactivate: number): VariantSchema;

    /**
     * Löscht eine Entity
     * 
     * @param {number} id - ID der zu löschenden Entity
     */
    deleteById(id: number): void;

    /**
     * Erstellt eine neue DTO-Instanz
     * 
     * @return {VariantSchema} Die neue DTO-Instanz
     */
    getNewDto(): VariantSchema;

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<VariantSchema>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<VariantSchema>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden DTO
     * @return {VariantSchema} Das gelesene DTO
     */
    readById(id: number): VariantSchema;

    /**
     * Persistiert eine DTO
     * 
     * @param {VariantSchema} toStore - Das zu persistierende DTO
     * @return {VariantSchema} Das persistierte DTO
     */
    store(toStore: VariantSchema): VariantSchema;

    /**
     * Aktualisiert ein persistiertes DTO
     * 
     * @param {VariantSchema} toUpdate - Die zu aktualisierende Entity
     * @return {VariantSchema} Das aktualisierte DTO
     */
    update(toUpdate: VariantSchema): VariantSchema;
}

/**
 * Service zur Verarbeitung von Variantenattributwert-Listings in Skripten
 */
export interface VariantValueListingScriptingService {

    /**
     * Persistiert ein DTO
     * 
     * @param {VariantValueListing} toCreate - Das zu persistierende DTO
     * @return {VariantValueListing} Das persistierte DTO
     */
    create(toCreate: VariantValueListing): VariantValueListing;

    /**
     * Löscht eine Entity
     * 
     * @param {number} id - ID der zu löschenden Entity
     */
    deleteById(id: number): void;

    /**
     * Erstellt eine neue DTO-Instanz
     * 
     * @return {VariantValueListing} Die neue DTO-Instanz
     */
    getNewDto(): VariantValueListing;

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<VariantValueListing>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<VariantValueListing>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden DTO
     * @return {VariantValueListing} Das gelesene DTO
     */
    readById(id: number): VariantValueListing;

    /**
     * Persistiert eine DTO
     * 
     * @param {VariantValueListing} toStore - Das zu persistierende DTO
     * @return {VariantValueListing} Das persistierte DTO
     */
    store(toStore: VariantValueListing): VariantValueListing;

    /**
     * Aktualisiert ein persistiertes DTO
     * 
     * @param {VariantValueListing} toUpdate - Die zu aktualisierende Entity
     * @return {VariantValueListing} Das aktualisierte DTO
     */
    update(toUpdate: VariantValueListing): VariantValueListing;
}

/**
 * Service zur Verarbeitung von Variantenwerten in Skripten
 */
export interface VariantValueScriptingService {

    /**
     * Aktiviert ein DTO
     * 
     * @param {number} idToActivate - ID vom zu aktivierenden DTO
     * @return {VariantValue} Das aktivierte DTO
     */
    activate(idToActivate: number): VariantValue;

    /**
     * Erstellt einen Variantenwert für ein Attribut
     * 
     * @param {number} attributeId - ID des Attributs
     * @param {VariantValue} value - Der zu erstellende Variantenwert
     * @return {VariantValue} Der erstellte Variantenwert
     */
    createValue(attributeId: number, value: VariantValue): VariantValue;

    /**
     * Erstellt mehrere Variantenwerte für ein Attribut
     * 
     * @param {number} attributeId - ID des Attributs
     * @param {Array<VariantValue>} values - Die zu erstellenden Variantenwerte
     * @return {Array<VariantValue>} Die erstellten Variantenwerte
     */
    createValues(attributeId: number, values: Array<VariantValue>): Array<VariantValue>;

    /**
     * Deaktiviert ein DTO
     * 
     * @param {number} idToDeactivate - ID vom zu deaktivierenden DTO
     * @return {VariantValue} Das deaktivierte DTO
     */
    deactivate(idToDeactivate: number): VariantValue;

    /**
     * Löscht eine Entity
     * 
     * @param {number} id - ID der zu löschenden Entity
     */
    deleteById(id: number): void;

    /**
     * Liefert alle Variantenwerte eines Attributs
     * 
     * @param {number} attributeId - ID des Attributs
     * @return {Array<VariantValue>} Liste der Variantenwerte
     */
    findAllByAttributeId(attributeId: number): Array<VariantValue>;

    /**
     * Liest eine Liste von DTOs
     * 
     * @param {Array<number>} ids - Die Liste der gelesenen DTOs
     * @return {Array<VariantValue>} Die Liste der gelesenen DTOs
     */
    readAllById(ids: Array<number>): Array<VariantValue>;

    /**
     * Liest ein DTO
     * 
     * @param {number} id - ID vom zu lesenden DTO
     * @return {VariantValue} Das gelesene DTO
     */
    readById(id: number): VariantValue;

    /**
     * Aktualisiert ein persistiertes DTO
     * 
     * @param {VariantValue} toUpdate - Die zu aktualisierende Entity
     * @return {VariantValue} Das aktualisierte DTO
     */
    update(toUpdate: VariantValue): VariantValue;
}

/**
 * Service zur Verarbeitung von Accounts
 */
export interface VqlScriptingService {

    /**
     * Führt eine VQL mit Parametern aus
     * 
     * @param {string} vql - Die auszuführende VQL
     * @param {number} limit - Maximale Anzahl der Ergebnisdatensätze
     * @param {Map<string,Array<object>>} variablesWithValues - Variablen mit Werten für die Ausführung der VQL
     * @return {Array<Map<string,object>>} Das Ergebnis der VQL
     */
    query(vql: string, limit: number, variablesWithValues: Map<string,Array<object>>): Array<Map<string,object>>;

    /**
     * Führt eine VQL mit Parametern aus
     * 
     * @param {string} vql - Die auszuführende VQL
     * @param {number} limit - Maximale Anzahl der Ergebnisdatensätze
     * @return {Array<Map<string,object>>} Das Ergebnis der VQL
     */
    query(vql: string, limit: number): Array<Map<string,object>>;

    /**
     * Führt eine VQL mit Parametern aus
     * 
     * @param {string} vql - Die auszuführende VQL
     * @return {Array<Map<string,object>>} Das Ergebnis der VQL
     */
    queryAll(vql: string): Array<Map<string,object>>;

    /**
     * Führt eine VQL mit Parametern aus
     * 
     * @param {string} vql - Die auszuführende VQL
     * @param {Map<string,Array<object>>} variablesWithValues - Variablen mit Werten für die Ausführung der VQL
     * @return {Array<Map<string,object>>} Das Ergebnis der VQL
     */
    queryAll(vql: string, variablesWithValues: Map<string,Array<object>>): Array<Map<string,object>>;
}

/**
 * Erstellt DTOs zur Verwendung im Skript
 */
export interface dtoFactory {

    /**
     * Erstellt einen neue Instanz von Account
     * 
     * @return {Account} Neue Instanz von Account
     */
    createAccount(): Account;

    /**
     * Erstellt einen neue Instanz von AccountAddress
     * 
     * @return {AccountAddress} Neue Instanz von AccountAddress
     */
    createAccountAddress(): AccountAddress;

    /**
     * Erstellt einen neue Instanz von AccountBankdetail
     * 
     * @return {AccountBankdetail} Neue Instanz von AccountBankdetail
     */
    createAccountBankdetail(): AccountBankdetail;

    /**
     * Erstellt einen neue Instanz von AccountLoanValue
     * 
     * @return {AccountLoanValue} Neue Instanz von AccountLoanValue
     */
    createAccountLoanValue(): AccountLoanValue;

    /**
     * Erstellt einen neue Instanz von AccountManufacturer
     * 
     * @return {AccountManufacturer} Neue Instanz von AccountManufacturer
     */
    createAccountManufacturer(): AccountManufacturer;

    /**
     * Erstellt einen neue Instanz von AccountManufacturerDescription
     * 
     * @return {AccountManufacturerDescription} Neue Instanz von AccountManufacturerDescription
     */
    createAccountManufacturerDescription(): AccountManufacturerDescription;

    /**
     * Erstellt einen neue Instanz von AccountPerson
     * 
     * @return {AccountPerson} Neue Instanz von AccountPerson
     */
    createAccountPerson(): AccountPerson;

    /**
     * Erstellt einen neue Instanz von AccountRelation
     * 
     * @return {AccountRelation} Neue Instanz von AccountRelation
     */
    createAccountRelation(): AccountRelation;

    /**
     * Erstellt einen neue Instanz von AdditionalParameter
     * 
     * @return {AdditionalParameter} Neue Instanz von AdditionalParameter
     */
    createAdditionalParameter(): AdditionalParameter;

    /**
     * Erstellt einen neue Instanz von ApiCreatableReference
     * 
     * @return {ApiCreatableReference} Neue Instanz von ApiCreatableReference
     */
    createApiCreatableReference(): ApiCreatableReference;

    /**
     * Erstellt einen neue Instanz von ApiObjectReference
     * 
     * @return {ApiObjectReference} Neue Instanz von ApiObjectReference
     */
    createApiObjectReference(): ApiObjectReference;

    /**
     * Erstellt einen neue Instanz von Article
     * 
     * @return {Article} Neue Instanz von Article
     */
    createArticle(): Article;

    /**
     * Erstellt einen neue Instanz von ArticleAvailabilityDetermination
     * 
     * @return {ArticleAvailabilityDetermination} Neue Instanz von ArticleAvailabilityDetermination
     */
    createArticleAvailabilityDetermination(): ArticleAvailabilityDetermination;

    /**
     * Erstellt einen neue Instanz von ArticleIdentifier
     * 
     * @return {ArticleIdentifier} Neue Instanz von ArticleIdentifier
     */
    createArticleIdentifier(): ArticleIdentifier;

    /**
     * Erstellt einen neue Instanz von ArticlePrintLabelSettings
     * 
     * @return {ArticlePrintLabelSettings} Neue Instanz von ArticlePrintLabelSettings
     */
    createArticlePrintLabelSettings(): ArticlePrintLabelSettings;

    /**
     * Erstellt einen neue Instanz von ArticleSerialNumber
     * 
     * @return {ArticleSerialNumber} Neue Instanz von ArticleSerialNumber
     */
    createArticleSerialNumber(): ArticleSerialNumber;

    /**
     * Erstellt einen neue Instanz von BulkTransferRequestApi
     * 
     * @return {BulkTransferRequestApi} Neue Instanz von BulkTransferRequestApi
     */
    createBulkTransferRequestApi(): BulkTransferRequestApi;

    /**
     * Erstellt einen neue Instanz von BulkTransferResult
     * 
     * @return {BulkTransferResult} Neue Instanz von BulkTransferResult
     */
    createBulkTransferResult(): BulkTransferResult;

    /**
     * Erstellt einen neue Instanz von Contact
     * 
     * @return {Contact} Neue Instanz von Contact
     */
    createContact(): Contact;

    /**
     * Erstellt einen neue Instanz von CountryReference
     * 
     * @return {CountryReference} Neue Instanz von CountryReference
     */
    createCountryReference(): CountryReference;

    /**
     * Erstellt einen neue Instanz von CreateNewDocumentRequest
     * 
     * @return {CreateNewDocumentRequest} Neue Instanz von CreateNewDocumentRequest
     */
    createCreateNewDocumentRequest(): CreateNewDocumentRequest;

    /**
     * Erstellt einen neue Instanz von CrmActivity
     * 
     * @return {CrmActivity} Neue Instanz von CrmActivity
     */
    createCrmActivity(): CrmActivity;

    /**
     * Erstellt einen neue Instanz von CrmActivityType
     * 
     * @return {CrmActivityType} Neue Instanz von CrmActivityType
     */
    createCrmActivityType(): CrmActivityType;

    /**
     * Erstellt einen neue Instanz von CrmChecklistItem
     * 
     * @return {CrmChecklistItem} Neue Instanz von CrmChecklistItem
     */
    createCrmChecklistItem(): CrmChecklistItem;

    /**
     * Erstellt einen neue Instanz von CrmDeal
     * 
     * @return {CrmDeal} Neue Instanz von CrmDeal
     */
    createCrmDeal(): CrmDeal;

    /**
     * Erstellt einen neue Instanz von CrmObjectRef
     * 
     * @return {CrmObjectRef} Neue Instanz von CrmObjectRef
     */
    createCrmObjectRef(): CrmObjectRef;

    /**
     * Erstellt einen neue Instanz von CrmParticipant
     * 
     * @return {CrmParticipant} Neue Instanz von CrmParticipant
     */
    createCrmParticipant(): CrmParticipant;

    /**
     * Erstellt einen neue Instanz von CrmProject
     * 
     * @return {CrmProject} Neue Instanz von CrmProject
     */
    createCrmProject(): CrmProject;

    /**
     * Erstellt einen neue Instanz von CrmReference
     * 
     * @return {CrmReference} Neue Instanz von CrmReference
     */
    createCrmReference(): CrmReference;

    /**
     * Erstellt einen neue Instanz von CrmReminder
     * 
     * @return {CrmReminder} Neue Instanz von CrmReminder
     */
    createCrmReminder(): CrmReminder;

    /**
     * Erstellt einen neue Instanz von CrmState
     * 
     * @return {CrmState} Neue Instanz von CrmState
     */
    createCrmState(): CrmState;

    /**
     * Erstellt einen neue Instanz von CrmSubType
     * 
     * @return {CrmSubType} Neue Instanz von CrmSubType
     */
    createCrmSubType(): CrmSubType;

    /**
     * Erstellt einen neue Instanz von CrmTask
     * 
     * @return {CrmTask} Neue Instanz von CrmTask
     */
    createCrmTask(): CrmTask;

    /**
     * Erstellt einen neue Instanz von CrmTaskParticipant
     * 
     * @return {CrmTaskParticipant} Neue Instanz von CrmTaskParticipant
     */
    createCrmTaskParticipant(): CrmTaskParticipant;

    /**
     * Erstellt einen neue Instanz von Customer
     * 
     * @return {Customer} Neue Instanz von Customer
     */
    createCustomer(): Customer;

    /**
     * Erstellt einen neue Instanz von PicklistTemplate$DateRange
     * 
     * @return {PicklistTemplate$DateRange} Neue Instanz von PicklistTemplate$DateRange
     */
    createDateRange(): PicklistTemplate$DateRange;

    /**
     * Erstellt einen neue Instanz von Document
     * 
     * @return {Document} Neue Instanz von Document
     */
    createDocument(): Document;

    /**
     * Erstellt einen neue Instanz von DocumentAdditionalInfo
     * 
     * @return {DocumentAdditionalInfo} Neue Instanz von DocumentAdditionalInfo
     */
    createDocumentAdditionalInfo(): DocumentAdditionalInfo;

    /**
     * Erstellt einen neue Instanz von DocumentAddress
     * 
     * @return {DocumentAddress} Neue Instanz von DocumentAddress
     */
    createDocumentAddress(): DocumentAddress;

    /**
     * Erstellt einen neue Instanz von DocumentContractDetail
     * 
     * @return {DocumentContractDetail} Neue Instanz von DocumentContractDetail
     */
    createDocumentContractDetail(): DocumentContractDetail;

    /**
     * Erstellt einen neue Instanz von DocumentFabricationDetail
     * 
     * @return {DocumentFabricationDetail} Neue Instanz von DocumentFabricationDetail
     */
    createDocumentFabricationDetail(): DocumentFabricationDetail;

    /**
     * Erstellt einen neue Instanz von DocumentFinanceBooking
     * 
     * @return {DocumentFinanceBooking} Neue Instanz von DocumentFinanceBooking
     */
    createDocumentFinanceBooking(): DocumentFinanceBooking;

    /**
     * Erstellt einen neue Instanz von DocumentLine
     * 
     * @return {DocumentLine} Neue Instanz von DocumentLine
     */
    createDocumentLine(): DocumentLine;

    /**
     * Erstellt einen neue Instanz von DocumentLineBooking
     * 
     * @return {DocumentLineBooking} Neue Instanz von DocumentLineBooking
     */
    createDocumentLineBooking(): DocumentLineBooking;

    /**
     * Erstellt einen neue Instanz von DocumentLineCommission
     * 
     * @return {DocumentLineCommission} Neue Instanz von DocumentLineCommission
     */
    createDocumentLineCommission(): DocumentLineCommission;

    /**
     * Erstellt einen neue Instanz von DocumentLineComponent
     * 
     * @return {DocumentLineComponent} Neue Instanz von DocumentLineComponent
     */
    createDocumentLineComponent(): DocumentLineComponent;

    /**
     * Erstellt einen neue Instanz von DocumentLineComponentFabricationDetail
     * 
     * @return {DocumentLineComponentFabricationDetail} Neue Instanz von DocumentLineComponentFabricationDetail
     */
    createDocumentLineComponentFabricationDetail(): DocumentLineComponentFabricationDetail;

    /**
     * Erstellt einen neue Instanz von DocumentLineFabricationBookedComponent
     * 
     * @return {DocumentLineFabricationBookedComponent} Neue Instanz von DocumentLineFabricationBookedComponent
     */
    createDocumentLineFabricationBookedComponent(): DocumentLineFabricationBookedComponent;

    /**
     * Erstellt einen neue Instanz von DocumentLineFabricationDetail
     * 
     * @return {DocumentLineFabricationDetail} Neue Instanz von DocumentLineFabricationDetail
     */
    createDocumentLineFabricationDetail(): DocumentLineFabricationDetail;

    /**
     * Erstellt einen neue Instanz von DocumentLineFabricationDetailSerialNumber
     * 
     * @return {DocumentLineFabricationDetailSerialNumber} Neue Instanz von DocumentLineFabricationDetailSerialNumber
     */
    createDocumentLineFabricationDetailSerialNumber(): DocumentLineFabricationDetailSerialNumber;

    /**
     * Erstellt einen neue Instanz von DocumentLinePosDetail
     * 
     * @return {DocumentLinePosDetail} Neue Instanz von DocumentLinePosDetail
     */
    createDocumentLinePosDetail(): DocumentLinePosDetail;

    /**
     * Erstellt einen neue Instanz von DocumentLineRef
     * 
     * @return {DocumentLineRef} Neue Instanz von DocumentLineRef
     */
    createDocumentLineRef(): DocumentLineRef;

    /**
     * Erstellt einen neue Instanz von DocumentPosDetail
     * 
     * @return {DocumentPosDetail} Neue Instanz von DocumentPosDetail
     */
    createDocumentPosDetail(): DocumentPosDetail;

    /**
     * Erstellt einen neue Instanz von DocumentPosPayment
     * 
     * @return {DocumentPosPayment} Neue Instanz von DocumentPosPayment
     */
    createDocumentPosPayment(): DocumentPosPayment;

    /**
     * Erstellt einen neue Instanz von DocumentPriceModifier
     * 
     * @return {DocumentPriceModifier} Neue Instanz von DocumentPriceModifier
     */
    createDocumentPriceModifier(): DocumentPriceModifier;

    /**
     * Erstellt einen neue Instanz von DocumentRef
     * 
     * @return {DocumentRef} Neue Instanz von DocumentRef
     */
    createDocumentRef(): DocumentRef;

    /**
     * Erstellt einen neue Instanz von DocumentShippingCost
     * 
     * @return {DocumentShippingCost} Neue Instanz von DocumentShippingCost
     */
    createDocumentShippingCost(): DocumentShippingCost;

    /**
     * Erstellt einen neue Instanz von DocumentTax
     * 
     * @return {DocumentTax} Neue Instanz von DocumentTax
     */
    createDocumentTax(): DocumentTax;

    /**
     * Erstellt einen neue Instanz von DocumentText
     * 
     * @return {DocumentText} Neue Instanz von DocumentText
     */
    createDocumentText(): DocumentText;

    /**
     * Erstellt einen neue Instanz von DocumentTransferToStateRequest
     * 
     * @return {DocumentTransferToStateRequest} Neue Instanz von DocumentTransferToStateRequest
     */
    createDocumentTransferToStateRequest(): DocumentTransferToStateRequest;

    /**
     * Erstellt einen neue Instanz von DocumentTransferToTypeRequest
     * 
     * @return {DocumentTransferToTypeRequest} Neue Instanz von DocumentTransferToTypeRequest
     */
    createDocumentTransferToTypeRequest(): DocumentTransferToTypeRequest;

    /**
     * Erstellt einen neue Instanz von DocumentType
     * 
     * @return {DocumentType} Neue Instanz von DocumentType
     */
    createDocumentType(): DocumentType;

    /**
     * Erstellt einen neue Instanz von DocumentTypeFollowUp
     * 
     * @return {DocumentTypeFollowUp} Neue Instanz von DocumentTypeFollowUp
     */
    createDocumentTypeFollowUp(): DocumentTypeFollowUp;

    /**
     * Erstellt einen neue Instanz von DocumentTypeLabel
     * 
     * @return {DocumentTypeLabel} Neue Instanz von DocumentTypeLabel
     */
    createDocumentTypeLabel(): DocumentTypeLabel;

    /**
     * Erstellt einen neue Instanz von DocumentTypeState
     * 
     * @return {DocumentTypeState} Neue Instanz von DocumentTypeState
     */
    createDocumentTypeState(): DocumentTypeState;

    /**
     * Erstellt einen neue Instanz von FabricationComponentForProduction
     * 
     * @return {FabricationComponentForProduction} Neue Instanz von FabricationComponentForProduction
     */
    createFabricationComponentForProduction(): FabricationComponentForProduction;

    /**
     * Erstellt einen neue Instanz von FabricationDefectiveRequest
     * 
     * @return {FabricationDefectiveRequest} Neue Instanz von FabricationDefectiveRequest
     */
    createFabricationDefectiveRequest(): FabricationDefectiveRequest;

    /**
     * Erstellt einen neue Instanz von FabricationProduceRequest
     * 
     * @return {FabricationProduceRequest} Neue Instanz von FabricationProduceRequest
     */
    createFabricationProduceRequest(): FabricationProduceRequest;

    /**
     * Erstellt einen neue Instanz von FabricationRemainingComponent
     * 
     * @return {FabricationRemainingComponent} Neue Instanz von FabricationRemainingComponent
     */
    createFabricationRemainingComponent(): FabricationRemainingComponent;

    /**
     * Erstellt einen neue Instanz von FabricationRevertRequest
     * 
     * @return {FabricationRevertRequest} Neue Instanz von FabricationRevertRequest
     */
    createFabricationRevertRequest(): FabricationRevertRequest;

    /**
     * Erstellt einen neue Instanz von FabricationSerialNumber
     * 
     * @return {FabricationSerialNumber} Neue Instanz von FabricationSerialNumber
     */
    createFabricationSerialNumber(): FabricationSerialNumber;

    /**
     * Erstellt einen neue Instanz von Group
     * 
     * @return {Group} Neue Instanz von Group
     */
    createGroup(): Group;

    /**
     * Erstellt einen neue Instanz von DocumentAdditionalInfo$IncomingGoodsTarget
     * 
     * @return {DocumentAdditionalInfo$IncomingGoodsTarget} Neue Instanz von DocumentAdditionalInfo$IncomingGoodsTarget
     */
    createIncomingGoodsTarget(): DocumentAdditionalInfo$IncomingGoodsTarget;

    /**
     * Erstellt einen neue Instanz von DocumentAdditionalInfo$IncomingGoodsTargetOfLine
     * 
     * @return {DocumentAdditionalInfo$IncomingGoodsTargetOfLine} Neue Instanz von DocumentAdditionalInfo$IncomingGoodsTargetOfLine
     */
    createIncomingGoodsTargetOfLine(): DocumentAdditionalInfo$IncomingGoodsTargetOfLine;

    /**
     * Erstellt einen neue Instanz von Article$Metric
     * 
     * @return {Article$Metric} Neue Instanz von Article$Metric
     */
    createMetric(): Article$Metric;

    /**
     * Erstellt einen neue Instanz von DocumentAdditionalInfo$OrderIntoPickingConvertResult
     * 
     * @return {DocumentAdditionalInfo$OrderIntoPickingConvertResult} Neue Instanz von DocumentAdditionalInfo$OrderIntoPickingConvertResult
     */
    createOrderIntoPickingConvertResult(): DocumentAdditionalInfo$OrderIntoPickingConvertResult;

    /**
     * Erstellt einen neue Instanz von PicklistTemplate$OrderSelectionOptions
     * 
     * @return {PicklistTemplate$OrderSelectionOptions} Neue Instanz von PicklistTemplate$OrderSelectionOptions
     */
    createOrderSelectionOptions(): PicklistTemplate$OrderSelectionOptions;

    /**
     * Erstellt einen neue Instanz von PaymentTermRef
     * 
     * @return {PaymentTermRef} Neue Instanz von PaymentTermRef
     */
    createPaymentTermRef(): PaymentTermRef;

    /**
     * Erstellt einen neue Instanz von PickTrolley
     * 
     * @return {PickTrolley} Neue Instanz von PickTrolley
     */
    createPickTrolley(): PickTrolley;

    /**
     * Erstellt einen neue Instanz von PickTrolleyBox
     * 
     * @return {PickTrolleyBox} Neue Instanz von PickTrolleyBox
     */
    createPickTrolleyBox(): PickTrolleyBox;

    /**
     * Erstellt einen neue Instanz von Picklist
     * 
     * @return {Picklist} Neue Instanz von Picklist
     */
    createPicklist(): Picklist;

    /**
     * Erstellt einen neue Instanz von PicklistTemplate$PicklistCreationOptions
     * 
     * @return {PicklistTemplate$PicklistCreationOptions} Neue Instanz von PicklistTemplate$PicklistCreationOptions
     */
    createPicklistCreationOptions(): PicklistTemplate$PicklistCreationOptions;

    /**
     * Erstellt einen neue Instanz von PicklistLine
     * 
     * @return {PicklistLine} Neue Instanz von PicklistLine
     */
    createPicklistLine(): PicklistLine;

    /**
     * Erstellt einen neue Instanz von PicklistLineBooking
     * 
     * @return {PicklistLineBooking} Neue Instanz von PicklistLineBooking
     */
    createPicklistLineBooking(): PicklistLineBooking;

    /**
     * Erstellt einen neue Instanz von PicklistLineComponent
     * 
     * @return {PicklistLineComponent} Neue Instanz von PicklistLineComponent
     */
    createPicklistLineComponent(): PicklistLineComponent;

    /**
     * Erstellt einen neue Instanz von PicklistTemplate$PicklistProcessingOptions
     * 
     * @return {PicklistTemplate$PicklistProcessingOptions} Neue Instanz von PicklistTemplate$PicklistProcessingOptions
     */
    createPicklistProcessingOptions(): PicklistTemplate$PicklistProcessingOptions;

    /**
     * Erstellt einen neue Instanz von PicklistTemplate$PicklistScript
     * 
     * @return {PicklistTemplate$PicklistScript} Neue Instanz von PicklistTemplate$PicklistScript
     */
    createPicklistScript(): PicklistTemplate$PicklistScript;

    /**
     * Erstellt einen neue Instanz von PicklistTemplate
     * 
     * @return {PicklistTemplate} Neue Instanz von PicklistTemplate
     */
    createPicklistTemplate(): PicklistTemplate;

    /**
     * Erstellt einen neue Instanz von PriceSelectionCriteria
     * 
     * @return {PriceSelectionCriteria} Neue Instanz von PriceSelectionCriteria
     */
    createPriceSelectionCriteria(): PriceSelectionCriteria;

    /**
     * Erstellt einen neue Instanz von DocumentAdditionalInfo$PrintedTranslatedField
     * 
     * @return {DocumentAdditionalInfo$PrintedTranslatedField} Neue Instanz von DocumentAdditionalInfo$PrintedTranslatedField
     */
    createPrintedTranslatedField(): DocumentAdditionalInfo$PrintedTranslatedField;

    /**
     * Erstellt einen neue Instanz von RequestDocument
     * 
     * @return {RequestDocument} Neue Instanz von RequestDocument
     */
    createRequestDocument(): RequestDocument;

    /**
     * Erstellt einen neue Instanz von RequestDocumentLine
     * 
     * @return {RequestDocumentLine} Neue Instanz von RequestDocumentLine
     */
    createRequestDocumentLine(): RequestDocumentLine;

    /**
     * Erstellt einen neue Instanz von RequestDocumentLineBooking
     * 
     * @return {RequestDocumentLineBooking} Neue Instanz von RequestDocumentLineBooking
     */
    createRequestDocumentLineBooking(): RequestDocumentLineBooking;

    /**
     * Erstellt einen neue Instanz von RequestDocumentLineCommission
     * 
     * @return {RequestDocumentLineCommission} Neue Instanz von RequestDocumentLineCommission
     */
    createRequestDocumentLineCommission(): RequestDocumentLineCommission;

    /**
     * Erstellt einen neue Instanz von RequestDocumentLineFabricationDetail
     * 
     * @return {RequestDocumentLineFabricationDetail} Neue Instanz von RequestDocumentLineFabricationDetail
     */
    createRequestDocumentLineFabricationDetail(): RequestDocumentLineFabricationDetail;

    /**
     * Erstellt einen neue Instanz von RequestDocumentPriceModifier
     * 
     * @return {RequestDocumentPriceModifier} Neue Instanz von RequestDocumentPriceModifier
     */
    createRequestDocumentPriceModifier(): RequestDocumentPriceModifier;

    /**
     * Erstellt einen neue Instanz von RequestDocumentText
     * 
     * @return {RequestDocumentText} Neue Instanz von RequestDocumentText
     */
    createRequestDocumentText(): RequestDocumentText;

    /**
     * Erstellt einen neue Instanz von RevenueCalculation
     * 
     * @return {RevenueCalculation} Neue Instanz von RevenueCalculation
     */
    createRevenueCalculation(): RevenueCalculation;

    /**
     * Erstellt einen neue Instanz von SalesAgent
     * 
     * @return {SalesAgent} Neue Instanz von SalesAgent
     */
    createSalesAgent(): SalesAgent;

    /**
     * Erstellt einen neue Instanz von ScenarioActualValue
     * 
     * @return {ScenarioActualValue} Neue Instanz von ScenarioActualValue
     */
    createScenarioActualValue(): ScenarioActualValue;

    /**
     * Erstellt einen neue Instanz von ScenarioDimension
     * 
     * @return {ScenarioDimension} Neue Instanz von ScenarioDimension
     */
    createScenarioDimension(): ScenarioDimension;

    /**
     * Erstellt einen neue Instanz von ScenarioDimensionValue
     * 
     * @return {ScenarioDimensionValue} Neue Instanz von ScenarioDimensionValue
     */
    createScenarioDimensionValue(): ScenarioDimensionValue;

    /**
     * Erstellt einen neue Instanz von SequencerConfiguration
     * 
     * @return {SequencerConfiguration} Neue Instanz von SequencerConfiguration
     */
    createSequencerConfiguration(): SequencerConfiguration;

    /**
     * Erstellt einen neue Instanz von SequencerConfigurationDetail
     * 
     * @return {SequencerConfigurationDetail} Neue Instanz von SequencerConfigurationDetail
     */
    createSequencerConfigurationDetail(): SequencerConfigurationDetail;

    /**
     * Erstellt einen neue Instanz von SerialNumberWithQuantityApi
     * 
     * @return {SerialNumberWithQuantityApi} Neue Instanz von SerialNumberWithQuantityApi
     */
    createSerialNumberWithQuantityApi(): SerialNumberWithQuantityApi;

    /**
     * Erstellt einen neue Instanz von ShelfDocument
     * 
     * @return {ShelfDocument} Neue Instanz von ShelfDocument
     */
    createShelfDocument(): ShelfDocument;

    /**
     * Erstellt einen neue Instanz von ShelfDocumentAttribution
     * 
     * @return {ShelfDocumentAttribution} Neue Instanz von ShelfDocumentAttribution
     */
    createShelfDocumentAttribution(): ShelfDocumentAttribution;

    /**
     * Erstellt einen neue Instanz von ShelfDocumentType
     * 
     * @return {ShelfDocumentType} Neue Instanz von ShelfDocumentType
     */
    createShelfDocumentType(): ShelfDocumentType;

    /**
     * Erstellt einen neue Instanz von ShelfFile
     * 
     * @return {ShelfFile} Neue Instanz von ShelfFile
     */
    createShelfFile(): ShelfFile;

    /**
     * Erstellt einen neue Instanz von ShelfFileMetaData
     * 
     * @return {ShelfFileMetaData} Neue Instanz von ShelfFileMetaData
     */
    createShelfFileMetaData(): ShelfFileMetaData;

    /**
     * Erstellt einen neue Instanz von ShelfShare
     * 
     * @return {ShelfShare} Neue Instanz von ShelfShare
     */
    createShelfShare(): ShelfShare;

    /**
     * Erstellt einen neue Instanz von ShelfTranslatableText
     * 
     * @return {ShelfTranslatableText} Neue Instanz von ShelfTranslatableText
     */
    createShelfTranslatableText(): ShelfTranslatableText;

    /**
     * Erstellt einen neue Instanz von Stock
     * 
     * @return {Stock} Neue Instanz von Stock
     */
    createStock(): Stock;

    /**
     * Erstellt einen neue Instanz von StockMovementManualApi
     * 
     * @return {StockMovementManualApi} Neue Instanz von StockMovementManualApi
     */
    createStockMovementManualApi(): StockMovementManualApi;

    /**
     * Erstellt einen neue Instanz von StockTransferApi
     * 
     * @return {StockTransferApi} Neue Instanz von StockTransferApi
     */
    createStockTransferApi(): StockTransferApi;

    /**
     * Erstellt einen neue Instanz von StockTransferResult
     * 
     * @return {StockTransferResult} Neue Instanz von StockTransferResult
     */
    createStockTransferResult(): StockTransferResult;

    /**
     * Erstellt einen neue Instanz von StorageBinRef
     * 
     * @return {StorageBinRef} Neue Instanz von StorageBinRef
     */
    createStorageBinRef(): StorageBinRef;

    /**
     * Erstellt einen neue Instanz von SubFileInfo
     * 
     * @return {SubFileInfo} Neue Instanz von SubFileInfo
     */
    createSubFileInfo(): SubFileInfo;

    /**
     * Erstellt einen neue Instanz von Supplier
     * 
     * @return {Supplier} Neue Instanz von Supplier
     */
    createSupplier(): Supplier;

    /**
     * Erstellt einen neue Instanz von TagDto
     * 
     * @return {TagDto} Neue Instanz von TagDto
     */
    createTagDto(): TagDto;

    /**
     * Erstellt einen neue Instanz von TaxIdForeignCountry
     * 
     * @return {TaxIdForeignCountry} Neue Instanz von TaxIdForeignCountry
     */
    createTaxIdForeignCountry(): TaxIdForeignCountry;

    /**
     * Erstellt einen neue Instanz von TssSignature
     * 
     * @return {TssSignature} Neue Instanz von TssSignature
     */
    createTssSignature(): TssSignature;

    /**
     * Erstellt einen neue Instanz von UnitTypeReference
     * 
     * @return {UnitTypeReference} Neue Instanz von UnitTypeReference
     */
    createUnitTypeReference(): UnitTypeReference;

    /**
     * Erstellt einen neue Instanz von UpdateDocumentRequest
     * 
     * @return {UpdateDocumentRequest} Neue Instanz von UpdateDocumentRequest
     */
    createUpdateDocumentRequest(): UpdateDocumentRequest;

    /**
     * Erstellt einen neue Instanz von User
     * 
     * @return {User} Neue Instanz von User
     */
    createUser(): User;

    /**
     * Erstellt einen neue Instanz von VariantDescription
     * 
     * @return {VariantDescription} Neue Instanz von VariantDescription
     */
    createVariantDescription(): VariantDescription;
}

