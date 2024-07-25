import { Flex } from "@chakra-ui/react";
import { MdOutlineShield, MdOutlineMonetizationOn, MdOutlineLockOpen, MdOutlineAccessTime } from "react-icons/md";
import { InfoCard } from "../info/InfoCard";
import { useEffect, useState } from "react";
import { bigNumberToPrettyString, calculateAPR, getBzeBondedAmount, getBzeCirculatingSupply, getBzeInflation, getBzeTotalSupply } from "../../services";

export const Info = () => {
  const [total, setTotal] = useState<string>("");
  const [circulating, setCirculating] = useState<string>("");
  const [apr, setApr] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadInfo = async () => {
      const [tSupply, cSupply, inflation, bonded] = await Promise.all([getBzeTotalSupply(), getBzeCirculatingSupply(), getBzeInflation(), getBzeBondedAmount()]);
      setTotal(bigNumberToPrettyString(tSupply));
      setCirculating(bigNumberToPrettyString(cSupply));

      setApr(`${calculateAPR(tSupply, bonded, inflation)}% APR`)
      setLoading(false);
    }

    loadInfo();
  }, [])

  return (
    <Flex mt={10} margin={15} flex={1} justifyContent={'center'} alignItems={'center'} gap={5} flexWrap={'wrap'}>
      <InfoCard 
        icon={MdOutlineShield}
        bodyText="Proof of Stake"
        footerText={loading ? " ? APR" : apr}
      />
      <InfoCard 
        icon={MdOutlineAccessTime}
        bodyText="Block time"
        footerText="6 Seconds"
      />
      <InfoCard 
        icon={MdOutlineMonetizationOn}
        bodyText="Total supply"
        footerText={loading ? "" : total}
      />
      <InfoCard 
        icon={MdOutlineLockOpen}
        bodyText="Circulating supply"
        footerText={loading  ? "" : circulating}
      />
    </Flex>
  );
}