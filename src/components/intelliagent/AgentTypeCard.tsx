
import { Link } from "react-router-dom";
import Card, { CardHeader, CardContent } from "@/components/common/Card";
import Button from "@/components/common/Button";
import { LucideIcon } from "lucide-react";

type AgentTypeCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  linkTo: string;
};

const AgentTypeCard = ({ icon: Icon, title, description, linkTo }: AgentTypeCardProps) => {
  return (
    <Card className="glass-card hover:shadow-blu transition-all duration-500">
      <CardHeader>
        <div className="h-12 w-12 rounded-full bg-blu-900/50 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-blu-400" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        <Link to={linkTo} target="_blank">
          <Button variant="outline" size="sm" full>Start Building</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default AgentTypeCard;
