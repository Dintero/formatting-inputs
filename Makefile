export STORYBOOK_DISABLE_TELEMETRY=1

YARN?=yarn -s
YARN_SCRIPTS:=$(shell jq '.scripts | to_entries[] | .key ' -r < package.json)
node_modules: package.json yarn.lock
	@$(YARN)
	@touch $@

$(YARN_SCRIPTS): node_modules
	@$(YARN) $@
