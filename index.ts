import * as pulumi from '@pulumi/pulumi';

export const password = pulumi.secret('THIS_IS_TOP_SECRET');
