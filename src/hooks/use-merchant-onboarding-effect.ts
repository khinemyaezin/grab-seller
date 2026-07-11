import { useEffect } from "react";
import { useNavigate } from "react-router";
import { eventBus } from "@khinemyaezin/seller-api";
import { routes } from "@khinemyaezin/seller-contracts";

export function useMerchantOnboardingEffect() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubRegSuccess = eventBus.subscribe("seller-merchant:registration-success:v1", () => {
      navigate(routes.home, { replace: true })
    });

    return () => {
      unsubRegSuccess();
    };
  }, [navigate]);
}