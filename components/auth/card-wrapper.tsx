"use client";

import {BackButton} from "@/components/auth/back-button"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header, } from "@/components/auth/header";
import {Social} from "@/components/auth/social"

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backBUttonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backBUttonHref,
  backButtonLabel,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-lg">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
        <Social />    
        </CardFooter>
      )}
      <CardFooter>
        <BackButton 
        href={backBUttonHref}
        label={backButtonLabel }
        />
      </CardFooter>
    </Card>
  );
};
