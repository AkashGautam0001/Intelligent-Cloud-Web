import type { TechBrand } from "@/lib/tech-brands";
import { getTechBrand } from "@/lib/tech-brands";

/**
 * Keyword → brand id.
 * More specific patterns must come before broader ones (e.g. GitHub Actions before GitHub).
 */
const KEYWORD_BRANDS: { re: RegExp; id: string }[] = [
  { re: /\bgithub\s*actions\b/i, id: "github-actions" },
  { re: /\bazure\s*devops\b/i, id: "azure-devops" },
  { re: /\bgreat\s*expectations\b/i, id: "greatexpectations" },
  { re: /\bdatabricks\b/i, id: "databricks" },
  { re: /\bpower\s*bi\b/i, id: "powerbi" },
  { re: /\bquicksight\b/i, id: "aws" },
  { re: /\bredshift\b/i, id: "redshift" },
  { re: /\bsnowflake\b/i, id: "snowflake" },
  { re: /\bspark\b/i, id: "spark" },
  { re: /\bdbt\b/i, id: "dbt" },
  { re: /\bkafka\b/i, id: "kafka" },
  { re: /\bairflow\b/i, id: "airflow" },
  { re: /\bprefect\b/i, id: "prefect" },
  { re: /\blangchain\b/i, id: "langchain" },
  { re: /\bopenai\b/i, id: "openai" },
  { re: /\bfastapi\b/i, id: "fastapi" },
  { re: /\bpython\b/i, id: "python" },
  { re: /\bgolang\b|\bgo\b/i, id: "go" },
  { re: /\bsql\s*server\b/i, id: "sqlserver" },
  { re: /\bflux\b/i, id: "flux" },
  { re: /\bopa\b|\bopen\s*policy\s*agent\b|\bcheckov\b/i, id: "opa" },
  { re: /\bargo\b/i, id: "argo" },
  { re: /\bterraform\b/i, id: "terraform" },
  { re: /\bopentofu\b/i, id: "opentofu" },
  { re: /\bansible\b/i, id: "ansible" },
  { re: /\bkubernetes\b|\baks\b|\beks\b/i, id: "kubernetes" },
  { re: /\bdocker\b/i, id: "docker" },
  { re: /\bhelm\b/i, id: "helm" },
  { re: /\bprometheus\b/i, id: "prometheus" },
  { re: /\bgrafana\b/i, id: "grafana" },
  { re: /\belastic\b|\bopensearch\b/i, id: "elastic" },
  { re: /\bpostgres\b|\bpostgresql\b/i, id: "postgresql" },
  { re: /\bmongodb\b/i, id: "mongodb" },
  { re: /\bmysql\b/i, id: "mysql" },
  { re: /\bredis\b/i, id: "redis" },
  { re: /\bnginx\b/i, id: "nginx" },
  { re: /\bvault\b/i, id: "vault" },
  { re: /\bistio\b/i, id: "istio" },
  { re: /\bcloudflare\b/i, id: "cloudflare" },
  { re: /\bsonar\b/i, id: "sonarqube" },
  { re: /\bgitlab\b/i, id: "gitlab" },
  { re: /\bjenkins\b/i, id: "jenkins" },
  { re: /\bgithub\b/i, id: "github" },
  { re: /\bhashicorp\b/i, id: "hashicorp" },
  { re: /\bcncf\b/i, id: "cncf" },
  // Cloud families last so specific tools win first
  {
    re: /\bazure\b|\bentra\b|\bbicep\b|\bsentinel\b|\bsynapse\b|\bcosmos\b|\badf\b|\bdata\s*factory\b|\bapp\s*insights\b|\bapplication\s*insights\b|\bkey\s*vault\b|\bprivate\s*link\b|\bexpressroute\b|\blogic\s*apps\b/i,
    id: "azure",
  },
  {
    re: /\baws\b|\bamazon\b|\bcloudwatch\b|\broute\s*53\b|\bdynamodb\b|\bbedrock\b|\bglue\b|\bdms\b|\bdirect\s*connect\b|\bs3\b|\brds\b|\baurora\b|\bsns\b|\bsqs\b|\bstep\s*functions\b|\bsecurity\s*hub\b|\bcontrol\s*tower\b/i,
    id: "aws",
  },
  { re: /\blinux\b/i, id: "linux" },
];

/** Resolve 1–3 brand icons from a stack chip label. */
export function brandsForStackChip(label: string): TechBrand[] {
  const found: TechBrand[] = [];
  const seen = new Set<string>();

  for (const { re, id } of KEYWORD_BRANDS) {
    if (!re.test(label)) continue;
    if (seen.has(id)) continue;
    const brand = getTechBrand(id);
    if (!brand) continue;
    found.push(brand);
    seen.add(id);
    if (found.length >= 3) break;
  }

  return found;
}
