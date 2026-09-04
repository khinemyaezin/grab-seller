import { lazy, useMemo, type ComponentType } from "react";
import { PRODUCT_EXTENSION_SLOTS, type SellerPlatform } from "@khinemyaezin/seller-contracts";
import type { HateoasLink } from "@khinemyaezin/seller-api";

const ProductPricingWidget = lazy(() => import("grab_seller_pricing/ProductPricingWidget"));
const InlinePricingWidget = lazy(() => import("grab_seller_pricing/InlinePricingWidget"));
const PricingEditWidget = lazy(() => import("grab_seller_pricing/PricingEditWidget"));
const InlinePricingEditWidget = lazy(() => import("grab_seller_pricing/InlinePricingEditWidget"));
const ProductInventoryWidget = lazy(() => import("grab_seller_inventory/ProductInventoryWidget"));
const InlineInventoryWidget = lazy(() => import("grab_seller_inventory/InlineInventoryWidget"));
const InventoryItemEditWidget = lazy(() => import("grab_seller_inventory/InventoryItemEditWidget"));
const InlineInventoryItemEditWidget = lazy(() => import("grab_seller_inventory/InlineInventoryItemEditWidget"));

export type UseProductExtensionsParams = {
  platform: SellerPlatform;
  pricingLink?: HateoasLink | null;
  inventoryLink?: HateoasLink | null;
};

export function useProductExtensions({
  platform,
  pricingLink,
  inventoryLink,
}: UseProductExtensionsParams): Record<string, ComponentType<any>> {
  return useMemo<Record<string, ComponentType<any>>>(
    () => ({
      [PRODUCT_EXTENSION_SLOTS.CREATE_PRICING]: (props) => (
        <ProductPricingWidget {...props} platform={platform} entryLink={pricingLink!} />
      ),
      [PRODUCT_EXTENSION_SLOTS.CREATE_PRICING_INLINE]: (props) => (
        <InlinePricingWidget {...props} platform={platform} entryLink={pricingLink!} />
      ),
      [PRODUCT_EXTENSION_SLOTS.CREATE_INVENTORY]: (props) => (
        <ProductInventoryWidget {...props} platform={platform} entryLink={inventoryLink!} />
      ),
      [PRODUCT_EXTENSION_SLOTS.CREATE_INVENTORY_INLINE]: (props) => (
        <InlineInventoryWidget {...props} platform={platform} entryLink={inventoryLink!} />
      ),
      [PRODUCT_EXTENSION_SLOTS.EDIT_PRICING]: (props) => (
        <PricingEditWidget {...props} platform={platform} entryLink={pricingLink!} />
      ),
      [PRODUCT_EXTENSION_SLOTS.EDIT_PRICING_INLINE]: (props) => (
        <InlinePricingEditWidget {...props} platform={platform} entryLink={pricingLink!} />
      ),
      [PRODUCT_EXTENSION_SLOTS.EDIT_INVENTORY]: (props) => (
        <InventoryItemEditWidget {...props} platform={platform} entryLink={inventoryLink!} />
      ),
  
    }),
    [platform, pricingLink, inventoryLink],
  );
}
